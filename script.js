(function () {
  "use strict";

  const SUPPORTED = ["es", "en"];
  const STORAGE_KEY = "portfolio-lang";

  /* ---------- helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  /* ---------- icons ---------- */
  const ICONS = {
    project:
      '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.5 8.5h3v12h-3v-12Zm5 0h2.87v1.64h.04a3.15 3.15 0 0 1 2.84-1.56c3.04 0 3.6 2 3.6 4.59v7.33h-3v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43v6.61h-3v-12Z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"/></svg>',
    location:
      '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>',
    download:
      '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 16l-5-5h3V4h4v7h3l-5 5Zm-7 2h14v2H5v-2Z"/></svg>',
  };

  /* ---------- render dynamic sections ---------- */
  function renderStats(t) {
    const wrap = $("#about-stats");
    wrap.innerHTML = "";
    t.about.stats.forEach((s) => {
      const item = el("div", "stat reveal");
      item.appendChild(el("span", "stat__value", s.value));
      item.appendChild(el("span", "stat__label", s.label));
      wrap.appendChild(item);
    });
  }

  function renderSkills(t) {
    const grid = $("#skills-grid");
    grid.innerHTML = "";
    t.skills.groups.forEach((g) => {
      const card = el("div", "skill-card reveal");
      card.appendChild(el("h3", "skill-card__name", g.name));
      const tags = el("div", "tags");
      g.items.forEach((i) => tags.appendChild(el("span", "tag", i)));
      card.appendChild(tags);
      grid.appendChild(card);
    });
  }

  function renderProjects(t) {
    const grid = $("#projects-grid");
    grid.innerHTML = "";
    t.projects.items.forEach((p) => {
      const card = el("article", "project-card reveal");

      const head = el("div", "project-card__head");
      head.appendChild(el("h3", "project-card__name", p.name));
      head.appendChild(el("div", "project-card__icon", ICONS.project));
      card.appendChild(head);

      const ul = el("ul", "project-card__points");
      p.points.forEach((pt) => ul.appendChild(el("li", null, pt)));
      card.appendChild(ul);

      const stack = el("div", "project-card__stack");
      p.stack.forEach((s) => stack.appendChild(el("span", "chip", s)));
      card.appendChild(stack);

      if (p.github) {
        const gh = el("a", "project-card__github");
        gh.href = p.github;
        gh.target = "_blank";
        gh.rel = "noopener noreferrer";
        gh.innerHTML = ICONS.github + "<span>" + t.projects.viewGithub + "</span>";
        card.appendChild(gh);
      }

      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
      });

      grid.appendChild(card);
    });
  }

  function renderExperience(t) {
    const wrap = $("#experience-timeline");
    wrap.innerHTML = "";
    t.experience.items.forEach((x) => {
      const item = el("div", "tl-item reveal");
      const top = el("div", "tl-item__top");
      top.appendChild(el("span", "tl-item__role", x.role));
      top.appendChild(el("span", "tl-item__company", "· " + x.company));
      if (x.period) top.appendChild(el("span", "tl-item__period", x.period));
      item.appendChild(top);

      const ul = el("ul", "tl-item__points");
      x.points.forEach((pt) => ul.appendChild(el("li", null, pt)));
      item.appendChild(ul);
      wrap.appendChild(item);
    });
  }

  function renderEducation(t) {
    const wrap = $("#education-timeline");
    wrap.innerHTML = "";
    t.education.items.forEach((e2) => {
      const item = el("div", "tl-item reveal");
      const top = el("div", "tl-item__top");
      top.appendChild(el("span", "tl-item__role", e2.name));
      if (e2.period) top.appendChild(el("span", "tl-item__period", e2.period));
      item.appendChild(top);
      item.appendChild(el("p", "tl-item__place", e2.place));
      wrap.appendChild(item);
    });
  }

  function renderLanguages(t) {
    const wrap = $("#languages-list");
    wrap.innerHTML = "";
    t.languages.items.forEach((l) => {
      const item = el("div", "lang-item reveal");
      const top = el("div", "lang-item__top");
      top.appendChild(el("span", "lang-item__name", l.name));
      top.appendChild(el("span", "lang-item__level", l.level));
      item.appendChild(top);

      const bar = el("div", "lang-item__bar");
      const fill = el("div", "lang-item__fill");
      fill.dataset.pct = l.pct;
      bar.appendChild(fill);
      item.appendChild(bar);
      wrap.appendChild(item);
    });
  }

  function createResumeLink(langCode, label, active) {
    const resume = RESUMES[langCode];
    const link = el("a", "btn btn--outline resume-downloads__btn" + (active ? " resume-downloads__btn--active" : ""));
    link.href = resume.file;
    link.download = resume.downloadName;
    link.type = "application/pdf";
    link.innerHTML = ICONS.download + "<span>" + label + "</span>";
    return link;
  }

  function renderResumeDownloads(t, lang) {
    const wrap = $("#resume-downloads-actions");
    wrap.innerHTML = "";
    wrap.appendChild(createResumeLink("es", t.resume.downloadEs, lang === "es"));
    wrap.appendChild(createResumeLink("en", t.resume.downloadEn, lang === "en"));
  }

  function updateHeroResumeDownload(lang) {
    const link = $("#resume-download-hero");
    const resume = RESUMES[lang];
    if (!link || !resume) return;
    link.href = resume.file;
    link.download = resume.downloadName;
  }

  function initProfilePhoto(lang) {
    const img = $("#profile-photo-img");
    const fallback = $("#profile-photo-fallback");
    const initials = $("#profile-photo-initials");
    const t = TRANSLATIONS[lang];
    if (!img || !fallback) return;

    initials.textContent = PROFILE.initials || "JG";

    const showFallback = () => {
      img.classList.add("is-hidden");
      fallback.classList.remove("is-hidden");
    };

    const showPhoto = () => {
      img.classList.remove("is-hidden");
      fallback.classList.add("is-hidden");
    };

    img.onload = showPhoto;
    img.onerror = showFallback;
    img.alt = t.hero.photoAlt;

    if (!PROFILE.photo) {
      img.removeAttribute("src");
      showFallback();
      return;
    }

    if (img.getAttribute("src") !== PROFILE.photo) {
      img.classList.add("is-hidden");
      fallback.classList.remove("is-hidden");
      img.src = PROFILE.photo;
    }
  }

  function renderContact(t) {
    const grid = $("#contact-grid");
    grid.innerHTML = "";
    const cards = [
      { icon: ICONS.email, label: t.contact.emailLabel, value: CONTACT.email, href: "mailto:" + CONTACT.email },
      { icon: ICONS.linkedin, label: t.contact.linkedinLabel, value: "in/jg-chez", href: CONTACT.linkedin },
      { icon: ICONS.github, label: t.contact.githubLabel, value: "GnChez", href: CONTACT.github },
      { icon: ICONS.location, label: t.contact.locationLabel, value: t.hero.location, href: null },
    ];
    cards.forEach((c) => {
      const tag = c.href ? "a" : "div";
      const card = el(tag, "contact-card reveal");
      if (c.href) {
        card.href = c.href;
        if (c.href.startsWith("http")) {
          card.target = "_blank";
          card.rel = "noopener";
        }
      }
      card.appendChild(el("div", "contact-card__icon", c.icon));
      const body = el("div");
      body.appendChild(el("div", "contact-card__label", c.label));
      body.appendChild(el("div", "contact-card__value", c.value));
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* ---------- apply language ---------- */
  function applyLanguage(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    document.documentElement.lang = t.meta.lang;
    $("#page-title").textContent = t.meta.title;
    $("#meta-description").setAttribute("content", t.meta.description);

    $$("[data-i18n]").forEach((node) => {
      const val = getNested(t, node.dataset.i18n);
      if (typeof val === "string") node.textContent = val;
    });

    renderStats(t);
    renderSkills(t);
    renderProjects(t);
    renderExperience(t);
    renderEducation(t);
    renderLanguages(t);
    renderResumeDownloads(t, lang);
    updateHeroResumeDownload(lang);
    initProfilePhoto(lang);
    renderContact(t);

    $$(".lang-switch__btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

    localStorage.setItem(STORAGE_KEY, lang);
    initReveal();
    animateLanguageBars();
  }

  /* ---------- reveal on scroll ---------- */
  let revealObserver;
  function initReveal() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    $$(".reveal").forEach((n) => revealObserver.observe(n));
  }

  function animateLanguageBars() {
    const bars = $$(".lang-item__fill");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.pct + "%";
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((b) => obs.observe(b));
  }

  /* ---------- nav behavior ---------- */
  function initNav() {
    const header = $("#header");
    const toggle = $("#nav-toggle");
    const links = $("#nav-links");

    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.classList.toggle("open");
    });

    $$("#nav-links a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
      })
    );

    const sections = $$("main section[id]");
    const navMap = new Map($$("#nav-links a").map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navMap.forEach((a) => a.classList.remove("active"));
            const active = navMap.get(entry.target.id);
            if (active) active.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- init ---------- */
  function init() {
    $("#footer-year").textContent = new Date().getFullYear();

    const saved = localStorage.getItem(STORAGE_KEY);
    const browser = (navigator.language || "es").slice(0, 2);
    const initial = SUPPORTED.includes(saved) ? saved : SUPPORTED.includes(browser) ? browser : "es";

    $$(".lang-switch__btn").forEach((b) =>
      b.addEventListener("click", () => applyLanguage(b.dataset.lang))
    );

    initNav();
    applyLanguage(initial);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
