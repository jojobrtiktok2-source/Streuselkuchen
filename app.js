(function () {
  // Pasta dos assets: "streuselkuchen/" na raiz, "../streuselkuchen/" no /es
  var assetBase = document.body.getAttribute("data-assets") || "streuselkuchen/";
  var asset = function (name) { return assetBase + name; };

  var TEXTS = {
    pt: {
      timeZone: "America/Sao_Paulo",
      dateLocale: "pt-BR",
      recipes: [
        ["chocolate-avela", "Streuselkuchen de Chocolate com Avelã"],
        ["classico-manteiga", "Streuselkuchen Alemão Clássico de Manteiga"],
        ["chocolate-coco", "Streuselkuchen de Chocolate com Coco"],
        ["chocolate-laranja", "Streuselkuchen de Chocolate com Laranja"],
        ["chocolate-banana", "Streuselkuchen de Chocolate com Banana"],
        ["chocolate-branco-morango", "Streuselkuchen de Chocolate Branco com Morango"]
      ],
      testimonials: [
        { name: "Carla Souza", image: "depoimento-carla.webp", flavor: "Streuselkuchen de maçã", quote: "Ficou simplesmente maravilhosa, parece bolo de confeitaria mesmo!" },
        { name: "Clarice Queiroz", image: "depoimento-clarice.webp", flavor: "Streuselkuchen de frutas vermelhas", quote: "A farofinha ficou perfeita, crocante na medida certa, e a massa ficou macia." },
        { name: "Eduarda Santos", image: "depoimento-eduarda.webp", flavor: "Streuselkuchen com creme e canela", quote: "O passo a passo do ebook deixou tudo muito mais fácil." },
        { name: "Vitória B32", image: "depoimento-vitoria.webp", flavor: "Streuselkuchen de ameixa", quote: "A massa ficou super fofinha e a farofa crocante por cima é simplesmente incrível!" },
        { name: "Stephanie Silva", image: "depoimento-stephanie.webp", flavor: "Streuselkuchen de banana com canela", quote: "Ficou super gostoso, diferente de tudo que eu já tinha feito." }
      ],
      bonuses: [
        { image: "bonus-farofa.webp", title: "A Farofa Perfeita", description: "Técnicas para chegar à textura dourada e crocante que faz o Streuselkuchen ser tão especial.", referencePrice: "R$ 14,90" },
        { image: "bonus-cremes.webp", title: "Cremes e Recheios Alemães", description: "Ideias de cremes e recheios para variar sabores e criar novas combinações.", referencePrice: "R$ 19,90" },
        { image: "bonus-coberturas.webp", title: "Coberturas e Finalizações", description: "Formas bonitas e apetitosas de finalizar cada receita.", referencePrice: "R$ 9,90" },
        { image: "bonus-medidas.webp", title: "Medidas e Substituições", description: "Um guia prático para adaptar ingredientes e acertar as proporções.", referencePrice: "R$ 12,90" },
        { image: "bonus-conservacao.webp", title: "Conservação e Congelamento", description: "Orientações para armazenar, porcionar e manter textura e sabor.", referencePrice: "R$ 14,90" }
      ],
      faq: [
        ["O que é Streuselkuchen?", "É um bolo de tradição alemã conhecido pela massa fofinha e pela cobertura crocante de farofa, com muitas possibilidades de recheios e sabores."],
        ["Preciso ter prática na cozinha?", "Não. O material foi organizado para você acompanhar ingredientes e modo de preparo em etapas."],
        ["Qual é a diferença entre as ofertas?", "A oferta básica reúne 90 receitas de Streuselkuchen. A super oferta reúne essas mesmas 90 receitas, mais 165 receitas alemãs e os cinco bônus apresentados na página."],
        ["Quantas receitas há na super oferta?", "São 255 receitas ao todo: 90 de Streuselkuchen e mais 165 receitas alemãs."],
        ["O material é digital?", "Sim. É um livro digital para consultar pelo celular, tablet ou computador."],
        ["Posso ver as páginas por dentro?", "Sim. A galeria desta página mostra seis receitas enviadas para esta edição. Toque em qualquer página para ampliar."],
        ["E se eu comprar e não gostar?", "Você terá 15 dias de garantia para solicitar o reembolso, conforme as condições informadas no checkout."],
        ["Como faço para comprar?", "Escolha a oferta desejada e toque em “Comprar agora”. Você será direcionada ao checkout seguro correspondente ao plano escolhido."]
      ],
      ui: {
        zoom: "⌕   Toque para ampliar",
        enlarge: "Ampliar ",
        recipePage: "Página da receita ",
        recipe: "Receita ",
        fullRecipePage: "Página completa da receita ",
        chatAlt: "Print da conversa com ",
        seeTestimonial: "Ver depoimento ",
        bonusTag: "BÔNUS ",
        bonusAlt: "Mockup do bônus ",
        freeToday: "✓ GRÁTIS HOJE",
        planBonus: "Bônus ",
        reviewAlt: "Depoimento completo de "
      }
    },
    es: {
      timeZone: undefined, // horario local del visitante
      dateLocale: "es-419",
      recipes: [
        ["chocolate-avela", "Streuselkuchen de Chocolate con Avellana"],
        ["classico-manteiga", "Streuselkuchen Alemán Clásico de Mantequilla"],
        ["chocolate-coco", "Streuselkuchen de Chocolate con Coco"],
        ["chocolate-laranja", "Streuselkuchen de Chocolate con Naranja"],
        ["chocolate-banana", "Streuselkuchen de Chocolate con Plátano"],
        ["chocolate-branco-morango", "Streuselkuchen de Chocolate Blanco con Fresa"]
      ],
      testimonials: [
        { name: "Carla Souza", image: "depoimento-carla.webp", flavor: "Streuselkuchen de manzana", quote: "¡Quedó simplemente maravilloso, parece pastel de pastelería!" },
        { name: "Clarice Queiroz", image: "depoimento-clarice.webp", flavor: "Streuselkuchen de frutos rojos", quote: "El crumble quedó perfecto, crujiente en su punto, y la masa quedó suave." },
        { name: "Eduarda Santos", image: "depoimento-eduarda.webp", flavor: "Streuselkuchen con crema y canela", quote: "El paso a paso del ebook hizo todo mucho más fácil." },
        { name: "Vitória B32", image: "depoimento-vitoria.webp", flavor: "Streuselkuchen de ciruela", quote: "¡La masa quedó súper esponjosa y el crumble crujiente de arriba es simplemente increíble!" },
        { name: "Stephanie Silva", image: "depoimento-stephanie.webp", flavor: "Streuselkuchen de plátano con canela", quote: "Quedó súper rico, diferente a todo lo que había hecho antes." }
      ],
      bonuses: [
        { image: "bonus-farofa.webp", title: "El Crumble Perfecto", description: "Técnicas para lograr la textura dorada y crujiente que hace al Streuselkuchen tan especial.", referencePrice: "US$ 8.90" },
        { image: "bonus-cremes.webp", title: "Cremas y Rellenos Alemanes", description: "Ideas de cremas y rellenos para variar sabores y crear nuevas combinaciones.", referencePrice: "US$ 11.90" },
        { image: "bonus-coberturas.webp", title: "Coberturas y Acabados", description: "Formas bonitas y apetitosas de terminar cada receta.", referencePrice: "US$ 5.90" },
        { image: "bonus-medidas.webp", title: "Medidas y Sustituciones", description: "Una guía práctica para adaptar ingredientes y acertar las proporciones.", referencePrice: "US$ 7.90" },
        { image: "bonus-conservacao.webp", title: "Conservación y Congelación", description: "Consejos para almacenar, porcionar y mantener la textura y el sabor.", referencePrice: "US$ 8.90" }
      ],
      faq: [
        ["¿Qué es el Streuselkuchen?", "Es un pastel de tradición alemana conocido por su masa esponjosa y su cobertura crujiente de crumble, con muchas posibilidades de rellenos y sabores."],
        ["¿Necesito tener experiencia en la cocina?", "No. El material está organizado para que sigas los ingredientes y la preparación paso a paso."],
        ["¿Cuál es la diferencia entre las ofertas?", "La oferta básica reúne 90 recetas de Streuselkuchen. La súper oferta reúne esas mismas 90 recetas, más 165 recetas alemanas y los cinco bonos presentados en la página."],
        ["¿Cuántas recetas hay en la súper oferta?", "Son 255 recetas en total: 90 de Streuselkuchen y 165 recetas alemanas más."],
        ["¿El material es digital?", "Sí. Es un libro digital para consultar desde el celular, la tablet o la computadora."],
        ["¿Puedo ver las páginas por dentro?", "Sí. La galería de esta página muestra seis recetas de esta edición. Toca cualquier página para ampliarla."],
        ["¿Y si compro y no me gusta?", "Tendrás 15 días de garantía para solicitar el reembolso, según las condiciones indicadas en el checkout."],
        ["¿Cómo hago para comprar?", "Elige la oferta que prefieras y toca “Comprar ahora”. Serás dirigida al checkout seguro del plan elegido."]
      ],
      ui: {
        zoom: "⌕   Toca para ampliar",
        enlarge: "Ampliar ",
        recipePage: "Página de la receta ",
        recipe: "Receta ",
        fullRecipePage: "Página completa de la receta ",
        chatAlt: "Captura de la conversación con ",
        seeTestimonial: "Ver testimonio ",
        bonusTag: "BONO ",
        bonusAlt: "Mockup del bono ",
        freeToday: "✓ GRATIS HOY",
        planBonus: "Bono ",
        reviewAlt: "Testimonio completo de "
      }
    }
  };

  var t = TEXTS[document.documentElement.lang.slice(0, 2)] || TEXTS.pt;
  var ui = t.ui;
  var recipes = t.recipes;
  var testimonials = t.testimonials;
  var bonuses = t.bonuses;
  var faq = t.faq;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    for (var key in attrs || {}) {
      if (key === "text") node.textContent = attrs[key];
      else if (key === "onClick") node.addEventListener("click", attrs[key]);
      else node.setAttribute(key, attrs[key]);
    }
    (children || []).forEach(function (child) {
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  // Data da promo, atualiza a cada minuto
  var promoDate = document.getElementById("promo-date");
  function updateDate() {
    var today = new Intl.DateTimeFormat(t.dateLocale, { timeZone: t.timeZone, day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date());
    promoDate.textContent = "";
    promoDate.appendChild(document.createTextNode(" — "));
    promoDate.appendChild(el("time", { datetime: today.split("/").reverse().join("-"), text: today }));
  }
  updateDate();
  setInterval(updateDate, 60000);

  // Modal da receita
  var modal = document.getElementById("recipe-modal");
  var modalDialog = modal.querySelector("dialog");
  var modalImg = document.getElementById("recipe-modal-img");
  function openRecipe(recipe) {
    modalDialog.setAttribute("aria-label", ui.recipe + recipe[1]);
    // Se a página completa não existir, mostra a miniatura
    modalImg.onerror = function () {
      modalImg.onerror = null;
      modalImg.src = asset("recipe-pages/" + recipe[0] + "-thumb.webp");
    };
    modalImg.src = asset("recipe-pages/" + recipe[0] + ".webp");
    modalImg.alt = ui.fullRecipePage + recipe[1];
    modal.hidden = false;
  }
  function closeRecipe() { modal.hidden = true; }
  document.getElementById("recipe-modal-close").addEventListener("click", closeRecipe);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeRecipe(); });

  function recipeButton(recipe) {
    return el("button", { class: "bolos-recipe-image", "aria-label": ui.enlarge + recipe[1], onClick: function () { openRecipe(recipe); } }, [
      el("img", { src: asset("recipe-pages/" + recipe[0] + "-thumb.webp"), alt: ui.recipePage + recipe[1], loading: "lazy" }),
      el("span", { class: "lc-gallery-zoom", text: ui.zoom })
    ]);
  }

  // Galeria: carrossel no mobile, grade de 3 no desktop
  var galleryScroll = document.getElementById("gallery-scroll");
  recipes.forEach(function (r) { galleryScroll.appendChild(recipeButton(r)); });

  var galleryGrid = document.getElementById("gallery-grid");
  var galleryPrev = document.getElementById("gallery-prev");
  var galleryNext = document.getElementById("gallery-next");
  var galleryStart = 0;
  function renderGrid() {
    galleryGrid.innerHTML = "";
    recipes.slice(galleryStart, galleryStart + 3).forEach(function (r) { galleryGrid.appendChild(recipeButton(r)); });
    galleryPrev.disabled = galleryStart === 0;
    galleryNext.disabled = galleryStart === recipes.length - 3;
  }
  galleryPrev.addEventListener("click", function () { galleryStart = Math.max(0, galleryStart - 1); renderGrid(); });
  galleryNext.addEventListener("click", function () { galleryStart = Math.min(recipes.length - 3, galleryStart + 1); renderGrid(); });
  renderGrid();

  // Depoimentos em carrossel
  var chatScroll = document.getElementById("chat-scroll");
  var chatDots = document.getElementById("chat-dots");
  var chatIndex = 0;
  testimonials.forEach(function (item, i) {
    chatScroll.appendChild(el("figure", { class: "lc-chat-card" }, [
      el("img", { class: "lc-chat-screenshot", src: asset(item.image), alt: ui.chatAlt + item.name, width: 943, height: 1677, loading: "lazy" })
    ]));
    chatDots.appendChild(el("button", { "aria-label": ui.seeTestimonial + (i + 1), "aria-current": "false", onClick: function () { goToChat(i); } }));
  });
  function setChatIndex(i) {
    chatIndex = i;
    Array.prototype.forEach.call(chatDots.children, function (dot, d) { dot.setAttribute("aria-current", String(d === i)); });
  }
  function goToChat(i) {
    var card = chatScroll.children[i];
    if (!card) return;
    chatScroll.scrollTo({ left: card.offsetLeft - chatScroll.children[0].offsetLeft, behavior: "smooth" });
    setChatIndex(i);
  }
  chatScroll.addEventListener("scroll", function () {
    var first = chatScroll.children[0];
    if (first) setChatIndex(Math.min(4, Math.round(chatScroll.scrollLeft / (first.offsetWidth + 12))));
  });
  document.getElementById("chat-prev").addEventListener("click", function () { goToChat((chatIndex + 4) % 5); });
  document.getElementById("chat-next").addEventListener("click", function () { goToChat((chatIndex + 1) % 5); });
  setChatIndex(0);

  // Bônus
  var bonusList = document.getElementById("bonus-list");
  var planList = document.getElementById("plan-complete-list");
  bonuses.forEach(function (b, i) {
    bonusList.appendChild(el("article", {}, [
      el("span", { class: "lc-bonus-tag", text: ui.bonusTag + (i + 1) }),
      el("img", { src: asset(b.image), alt: ui.bonusAlt + b.title, width: 300, height: 375, loading: "lazy" }),
      el("div", {}, [
        el("h3", { text: b.title }),
        el("p", { text: b.description }),
        el("div", { class: "lc-bonus-value" }, [el("del", { text: b.referencePrice }), el("strong", { text: ui.freeToday })])
      ])
    ]));
    planList.appendChild(el("li", { class: "lc-plan-bonus" }, [
      el("span", { "aria-hidden": "true", text: "🎁" }), ui.planBonus + (i + 1) + " - " + b.title
    ]));
  });

  // Avaliações
  var reviewGrid = document.getElementById("review-grid");
  testimonials.forEach(function (item) {
    reviewGrid.appendChild(el("article", { class: "lc-review-card" }, [
      el("div", { class: "lc-review-person" }, [el("div", {}, [el("h3", { text: item.name }), el("span", { text: item.flavor })])]),
      el("p", { text: "“" + item.quote + "”" }),
      el("img", { class: "streusel-review-proof", src: asset(item.image), alt: ui.reviewAlt + item.name, loading: "lazy" })
    ]));
  });

  // FAQ (um aberto por vez)
  var faqList = document.getElementById("faq-list");
  var faqItems = faq.map(function (item) {
    var answer = el("p", { text: item[1] });
    var button = el("button", { "aria-expanded": "false" }, [
      el("span", { text: "❓ " + item[0] }),
      el("span", { "aria-hidden": "true", text: "⌄" })
    ]);
    var wrap = el("div", { class: "lc-faq-item" }, [button]);
    faqList.appendChild(wrap);
    return { wrap: wrap, button: button, answer: answer };
  });
  var openFaq = null;
  faqItems.forEach(function (item, i) {
    item.button.addEventListener("click", function () {
      openFaq = openFaq === i ? null : i;
      faqItems.forEach(function (it, j) {
        var isOpen = openFaq === j;
        it.button.setAttribute("aria-expanded", String(isOpen));
        if (isOpen && !it.answer.parentNode) it.wrap.appendChild(it.answer);
        if (!isOpen && it.answer.parentNode) it.wrap.removeChild(it.answer);
      });
    });
  });
})();
