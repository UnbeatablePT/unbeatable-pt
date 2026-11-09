/* Unbeatable Personal Training — interactie & animaties */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Header + leesvoortgang
  const header = document.querySelector(".header");
  const progress = document.querySelector(".progress");
  const onScroll = () => {
    const y = window.scrollY;
    header && header.classList.toggle("is-scrolled", y > 40);
    if (progress) {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobiel menu
  const toggle = document.querySelector(".menu-toggle");
  toggle && toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav a").forEach(a =>
    a.addEventListener("click", () => document.body.classList.remove("menu-open"))
  );

  // Elementen laten verschijnen bij scrollen
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // Tellers (bv. 10+ jaar, 5.0, 37 reviews)
  const countIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1] || "").length;
      const suffix = el.dataset.suffix || "", start = performance.now(), dur = 1600;
      const tick = t => {
        const p = Math.min((t - start) / dur, 1), v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = v.toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      reduce ? (el.textContent = end.toFixed(dec) + suffix) : requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(el => countIO.observe(el));

  if (reduce) return;

  // Parallax op foto's en hero
  const par = [...document.querySelectorAll("[data-parallax]")];
  const heroBg = document.querySelector(".hero__bg");
  const parallax = () => {
    par.forEach(img => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      img.style.transform = `translateY(${p * -60 - 20}px)`;
    });
    if (heroBg && scrollY < innerHeight) heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
  };
  addEventListener("scroll", () => requestAnimationFrame(parallax), { passive: true });
  parallax();

  // 3D-kanteling op aanbod-kaarten (alleen met muis)
  if (matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
      });
      card.addEventListener("mouseleave", () => (card.style.transform = ""));
    });
  }
})();

// Reviews: met de pijltjes door de rij scrollen
document.querySelectorAll(".rslider").forEach(slider => {
  const track = slider.querySelector(".rslider__track");
  const [prev, next] = slider.querySelectorAll(".rslider__btn");
  const step = () => (track.querySelector(".rcard")?.offsetWidth || 300) + 20;
  const update = () => {
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  slider.querySelectorAll(".rslider__btn").forEach(b =>
    b.addEventListener("click", () => track.scrollBy({ left: step() * Number(b.dataset.dir), behavior: "smooth" }))
  );
  track.addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();
});

document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
