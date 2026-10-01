(function () {
  "use strict";

  const SUPPORTED = ["es", "en"];
  const LANG_KEY = "portfolio-lang";
  const PROFILE_KEY = "portfolio-profile";
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ELEMENTS = {
    water: { glyph: "水", color: "var(--water)" },
    earth: { glyph: "土", color: "var(--earth)" },
    fire: { glyph: "火", color: "var(--fire)" },
    air: { glyph: "氣", color: "var(--air)" },
  };

  let currentLang = "es";
  let currentProfile = DEFAULT_PROFILE;
  let t = null;

  /* ---------- helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  // Deep-merge plain objects; arrays and primitives in `over` replace those in `base`.
  function merge(base, over) {
    if (!over) return base;
    const out = Object.assign({}, base);
    Object.keys(over).forEach((k) => {
      const a = base[k];
      const b = over[k];
      const bothObjects = a && b && typeof a === "object" && typeof b === "object" && !Array.isArray(a) && !Array.isArray(b);
      out[k] = bothObjects ? merge(a, b) : b;
    });
    return out;
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  const ICONS = {
    download:
      '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M12 16l-5-5h3V4h4v7h3l-5 5Zm-7 2h14v2H5v-2Z"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
  };

  /* ---------- render ---------- */
  function setResumeLink(link, lang) {
    const resume = RESUMES[currentProfile][lang];
    link.href = resume.file;
    link.setAttribute("download", resume.downloadName);
    link.type = "application/pdf";
  }

  function renderStats() {
    const wrap = $("#about-stats");
    wrap.innerHTML = "";
    t.about.stats.forEach((s) => {
      const item = el("div", "stat");
      item.appendChild(el("dt", null, s.value));
      item.appendChild(el("dd", null, s.label));
      wrap.appendChild(item);
    });
  }

  function renderResumes() {
    const wrap = $("#cv-links");
    wrap.innerHTML = "";
    [
      ["es", t.resume.downloadEs],
      ["en", t.resume.downloadEn],
    ].forEach(([code, label]) => {
      const a = el("a", "btn btn--small" + (code === currentLang ? "" : " btn--ghost"), ICONS.download + "<span>" + label + "</span>");
      setResumeLink(a, code);
      wrap.appendChild(a);
    });
    setResumeLink($("#hero-cv"), currentLang);
  }

  function renderLanguages() {
    const list = $("#languages-list");
    list.innerHTML = "";
    t.languages.items.forEach((l) => {
      list.appendChild(el("li", null, `<span>${l.name}</span><span>${l.level}</span>`));
    });
  }

  function renderElements() {
    const list = $("#elements-list");
    list.innerHTML = "";
    t.elements.items.forEach((d) => {
      const li = el("li", "element reveal");
      li.style.setProperty("--c", ELEMENTS[d.key].color);
      li.innerHTML =
        `<span class="element__glyph" aria-hidden="true">${ELEMENTS[d.key].glyph}</span>` +
        `<div class="element__head">` +
        `<p class="element__nation">${d.nation}</p>` +
        `<h3 class="element__name">${d.name}</h3>` +
        `<p class="element__verb">${d.verb}</p>` +
        `</div>` +
        `<div class="element__text">` +
        `<p class="element__body">${d.body}</p>` +
        `<p class="element__proof">${d.proof}</p>` +
        `<p class="element__tags">${d.tags.map((x) => `<span>${x}</span>`).join("")}</p>` +
        `</div>`;
      list.appendChild(li);
    });
  }

  function renderSkills() {
    const grid = $("#skills-grid");
    grid.innerHTML = "";
    t.skills.groups.forEach((g) => {
      const group = el("div", "toolkit__group reveal");
      group.appendChild(el("h4", null, g.name));
      const ul = el("ul");
      g.items.forEach((i) => ul.appendChild(el("li", null, i)));
      group.appendChild(ul);
      grid.appendChild(group);
    });
  }

  function renderProjects() {
    const list = $("#projects-list");
    list.innerHTML = "";
    t.projects.items.forEach((p) => {
      const li = el("li", "project reveal");
      const body = el("div", "project__body");
      body.appendChild(el("h3", "project__name", p.name));
      body.appendChild(el("p", "project__stack", p.stack.join(" · ")));
      const ul = el("ul", "project__points");
      p.points.forEach((pt) => ul.appendChild(el("li", null, pt)));
      body.appendChild(ul);
      li.appendChild(body);

      if (p.github) {
        const a = el("a", "project__link", "<span>GitHub</span>" + ICONS.arrow);
        a.href = p.github;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.setAttribute("aria-label", t.projects.viewGithub + ": " + p.name);
        li.appendChild(a);
      }
      list.appendChild(li);
    });
  }

  function renderStep(mark, top, points) {
    const li = el("li", "step reveal");
    li.style.setProperty("--c", ELEMENTS[mark] ? ELEMENTS[mark].color : "");
    li.appendChild(el("span", "step__mark", ELEMENTS[mark] ? ELEMENTS[mark].glyph : "·"));
    const body = el("div", "step__body");
    body.appendChild(el("div", "step__top", top));
    if (points && points.length) {
      const ul = el("ul", "step__points");
      points.forEach((pt) => ul.appendChild(el("li", null, pt)));
      body.appendChild(ul);
    }
    li.appendChild(body);
    return li;
  }

  function renderPath() {
    const exp = $("#experience-list");
    exp.innerHTML = "";
    t.experience.items.forEach((x, i) => {
      const top =
        `<span class="step__role">${x.role}</span>` +
        `<span class="step__place">${x.company}</span>` +
        (x.period ? `<span class="step__when">${x.period}</span>` : "");
      exp.appendChild(renderStep(PATH_MARKS.experience[i], top, x.points));
    });

    const edu = $("#education-list");
    edu.innerHTML = "";
    t.education.items.forEach((x, i) => {
      const top =
        `<span class="step__role">${x.name}</span>` +
        `<span class="step__place">${x.place}</span>` +
        `<span class="step__when">${x.period}</span>`;
      edu.appendChild(renderStep(PATH_MARKS.education[i], top));
    });
  }

  function renderContact() {
    const list = $("#contact-list");
    list.innerHTML = "";
    [
      { label: t.contact.emailLabel, value: CONTACT.email, href: "mailto:" + CONTACT.email },
      { label: t.contact.linkedinLabel, value: "in/jg-chez", href: CONTACT.linkedin },
      { label: t.contact.githubLabel, value: "GnChez", href: CONTACT.github },
      { label: t.contact.locationLabel, value: t.hero.location },
    ].forEach((c) => {
      const li = el("li", "contact__item");
      li.appendChild(el("span", "contact__label", c.label));
      const v = el(c.href ? "a" : "span", "contact__value", c.value);
      if (c.href) {
        v.href = c.href;
        if (c.href.startsWith("http")) {
          v.target = "_blank";
          v.rel = "noopener noreferrer";
        }
      }
      li.appendChild(v);
      list.appendChild(li);
    });
  }

  let lastQuote = -1;
  function nextQuote(animate) {
    const q = $("#tea-quote");
    const quotes = t.tea.quotes;
    let i;
    do i = Math.floor(Math.random() * quotes.length);
    while (i === lastQuote && quotes.length > 1);
    lastQuote = i;
    const text = "“" + quotes[i] + "”";
    if (!animate || REDUCED) {
      q.textContent = text;
      return;
    }
    q.classList.add("is-fading");
    setTimeout(() => {
      q.textContent = text;
      q.classList.remove("is-fading");
    }, 350);
  }

  function updateHeroAccent() {
    const active = PROFILE_ELEMENT[currentProfile];
    $$(".hero__glyphs span").forEach((s) => s.classList.toggle("is-active", s.dataset.el === active));
  }

  function redrawBrush() {
    if (REDUCED) return;
    const brush = $(".brush");
    brush.classList.add("is-redrawing");
    void brush.offsetWidth; // restart the stroke animation
    brush.classList.remove("is-redrawing");
  }

  /* ---------- apply language + profile ---------- */
  function render(lang, profile) {
    const base = TRANSLATIONS[lang];
    if (!base || !PROFILES.includes(profile)) return;
    currentLang = lang;
    currentProfile = profile;
    t = merge(base, base.profiles[profile]);

    document.documentElement.lang = t.meta.lang;
    document.body.dataset.profile = profile;
    $("#page-title").textContent = t.meta.title;
    $("#meta-description").setAttribute("content", t.meta.description);

    $$("[data-i18n]").forEach((node) => {
      const val = getNested(t, node.dataset.i18n);
      if (typeof val === "string") node.textContent = val;
    });

    renderStats();
    renderResumes();
    renderLanguages();
    renderElements();
    renderSkills();
    renderProjects();
    renderPath();
    renderContact();
    nextQuote(false);
    updateHeroAccent();

    $$(".lang-switch__btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    $$(".profile-switch__btn").forEach((b) => {
      const on = b.dataset.profile === profile;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });

    store(LANG_KEY, lang);
    store(PROFILE_KEY, profile);
    initReveal();
  }

  function applyProfile(profile) {
    if (!PROFILES.includes(profile) || profile === currentProfile) return;
    render(currentLang, profile);
    redrawBrush();
    // keep the URL shareable: ?profile=backend|ai
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("profile", profile);
      history.replaceState(null, "", url);
    } catch (e) {
      /* unsupported environment — ignore */
    }
  }

  /* ---------- reveal on scroll ---------- */
  let revealObserver;
  function initReveal() {
    if (revealObserver) revealObserver.disconnect();
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((n) => n.classList.add("visible"));
      return;
    }
    revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealObserver.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    $$(".reveal").forEach((n) => revealObserver.observe(n));
  }

  /* ---------- nav ---------- */
  function initNav() {
    const bar = $("#topbar");
    const toggle = $("#nav-toggle");
    const links = $("#nav-links");

    const onScroll = () => bar.classList.toggle("is-scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const close = () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$("#nav-links a").forEach((a) => a.addEventListener("click", close));

    if (!("IntersectionObserver" in window)) return;
    const navMap = new Map($$("#nav-links a").map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navMap.forEach((a) => a.classList.remove("active"));
          const active = navMap.get(entry.target.id);
          if (active) active.classList.add("active");
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    $$("main section[id]").forEach((s) => spy.observe(s));
  }

  /* ---------- init ---------- */
  function init() {
    $("#footer-year").textContent = new Date().getFullYear();

    const savedLang = store(LANG_KEY);
    const browser = (navigator.language || "es").slice(0, 2);
    const lang = SUPPORTED.includes(savedLang) ? savedLang : SUPPORTED.includes(browser) ? browser : "es";

    const fromUrl = new URLSearchParams(window.location.search).get("profile");
    const savedProfile = store(PROFILE_KEY);
    const profile = PROFILES.includes(fromUrl) ? fromUrl : PROFILES.includes(savedProfile) ? savedProfile : DEFAULT_PROFILE;

    $$(".lang-switch__btn").forEach((b) => b.addEventListener("click", () => render(b.dataset.lang, currentProfile)));
    $$(".profile-switch__btn").forEach((b) => b.addEventListener("click", () => applyProfile(b.dataset.profile)));
    $("#tea-btn").addEventListener("click", () => nextQuote(true));

    initNav();
    render(lang, profile);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
