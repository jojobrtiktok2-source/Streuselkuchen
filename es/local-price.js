// Mostra, abaixo do preço em dólar, o valor aproximado na moeda do país do visitante.
// Para testar outro país: /es/?pais=CO
(function () {
  var COUNTRIES = {
    MX: { currency: "MXN", locale: "es-MX", name: "pesos mexicanos" },
    CO: { currency: "COP", locale: "es-CO", name: "pesos colombianos" },
    AR: { currency: "ARS", locale: "es-AR", name: "pesos argentinos" },
    CL: { currency: "CLP", locale: "es-CL", name: "pesos chilenos" },
    PE: { currency: "PEN", locale: "es-PE", name: "soles" },
    UY: { currency: "UYU", locale: "es-UY", name: "pesos uruguayos" },
    PY: { currency: "PYG", locale: "es-PY", name: "guaraníes" },
    BO: { currency: "BOB", locale: "es-BO", name: "bolivianos" },
    VE: { currency: "VES", locale: "es-VE", name: "bolívares" },
    CR: { currency: "CRC", locale: "es-CR", name: "colones" },
    GT: { currency: "GTQ", locale: "es-GT", name: "quetzales" },
    HN: { currency: "HNL", locale: "es-HN", name: "lempiras" },
    NI: { currency: "NIO", locale: "es-NI", name: "córdobas" },
    DO: { currency: "DOP", locale: "es-DO", name: "pesos dominicanos" },
    ES: { currency: "EUR", locale: "es-ES", name: "euros" },
    BR: { currency: "BRL", locale: "pt-BR", name: "reales" }
    // Países dolarizados (EC, PA, SV, PR, US) e demais: só o preço em dólar
  };
  var CACHE_HOURS = 12;

  function cacheGet(key) {
    try {
      var item = JSON.parse(localStorage.getItem(key));
      if (item && Date.now() - item.time < CACHE_HOURS * 3600e3) return item.value;
    } catch (e) {}
    return null;
  }
  function cacheSet(key, value) {
    try { localStorage.setItem(key, JSON.stringify({ time: Date.now(), value: value })); } catch (e) {}
  }

  function getJSON(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(url + " " + r.status);
      return r.json();
    });
  }

  function getCountry() {
    var forced = new URLSearchParams(location.search).get("pais");
    if (forced) return Promise.resolve(forced.toUpperCase());
    var cached = cacheGet("geo-country");
    if (cached) return Promise.resolve(cached);
    return getJSON("/api/geo")
      .then(function (d) { if (!d.country) throw new Error("sem país"); return d.country; })
      .catch(function () { return getJSON("https://get.geojs.io/v1/ip/country.json").then(function (d) { return d.country; }); })
      .then(function (country) { cacheSet("geo-country", country); return country; });
  }

  function getRate(currency) {
    var key = "usd-rate-" + currency;
    var cached = cacheGet(key);
    if (cached) return Promise.resolve(cached);
    return getJSON("https://open.er-api.com/v6/latest/USD")
      .then(function (d) { return d.rates[currency]; })
      .catch(function () {
        return getJSON("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json")
          .then(function (d) { return d.usd[currency.toLowerCase()]; });
      })
      .then(function (rate) {
        if (!rate) throw new Error("sem cotação " + currency);
        cacheSet(key, rate);
        return rate;
      });
  }

  function formatNumber(value, locale) {
    var digits = value >= 1000 ? 0 : 2;
    return new Intl.NumberFormat(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
  }

  getCountry()
    .then(function (code) {
      var country = COUNTRIES[code];
      if (!country) return;

      // Preços em dólar no formato numérico do país (6.00 ou 6,00)
      document.querySelectorAll("[data-usd]").forEach(function (node) {
        var usd = Number(node.getAttribute("data-usd"));
        node.textContent = "US$ " + new Intl.NumberFormat(country.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(usd);
      });

      return getRate(country.currency).then(function (rate) {
        document.querySelectorAll("[data-local]").forEach(function (node) {
          var local = Number(node.getAttribute("data-local")) * rate;
          node.textContent = "≈ ";
          var amount = document.createElement("b");
          amount.textContent = country.currency + " " + formatNumber(local, country.locale);
          node.appendChild(amount);
          node.appendChild(document.createTextNode(" " + country.name));
          node.hidden = false;
        });
      });
    })
    .catch(function () { /* sem país ou cotação: fica só o preço em dólar */ });
})();
