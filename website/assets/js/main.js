const navToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const counters = document.querySelectorAll("[data-count]");

/* Reset counter text immediately so visitors never see final value flash */
counters.forEach((el) => {
  const suffix = el.dataset.suffix || "";
  el.textContent = `0${suffix}`;
});

if ("IntersectionObserver" in window && counters.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.dataset.count || "0");
      const suffix = element.dataset.suffix || "";
      const duration = 900;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        element.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      counterObserver.unobserve(element);
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => counterObserver.observe(counter));
}

document.querySelectorAll("[data-slider]").forEach((slider) => {
  const track = slider.querySelector("[data-slider-track]");
  const prev = slider.querySelector("[data-slider-prev]");
  const next = slider.querySelector("[data-slider-next]");

  if (!track || !prev || !next) return;

  let isAnimating = false;

  const getDistance = () => {
    const item = track.querySelector(":scope > *");
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
    return item ? item.getBoundingClientRect().width + gap : track.clientWidth;
  };

  const resetTrack = () => {
    track.scrollLeft = 0;
    track.style.transition = "none";
    track.style.transform = "translateX(0)";
    track.offsetHeight;
    track.style.transition = "";
  };

  const finishAfterTransition = (finish) => {
    let timer;
    const done = (event) => {
      if (event && event.target !== track) return;
      window.clearTimeout(timer);
      track.removeEventListener("transitionend", done);
      finish();
      isAnimating = false;
    };

    track.addEventListener("transitionend", done);
    timer = window.setTimeout(done, 380);
  };

  const moveNext = () => {
    if (isAnimating || !track.firstElementChild) return;

    const first = track.firstElementChild;
    const distance = getDistance();
    isAnimating = true;
    track.scrollLeft = 0;
    track.style.transition = "transform 280ms ease";
    track.style.transform = `translateX(-${distance}px)`;

    finishAfterTransition(() => {
      track.appendChild(first);
      resetTrack();
    });
  };

  const movePrev = () => {
    if (isAnimating || !track.lastElementChild) return;

    const last = track.lastElementChild;
    const distance = getDistance();
    isAnimating = true;
    track.insertBefore(last, track.firstElementChild);
    track.scrollLeft = 0;
    track.style.transition = "none";
    track.style.transform = `translateX(-${distance}px)`;
    track.offsetHeight;
    track.style.transition = "transform 280ms ease";
    track.style.transform = "translateX(0)";

    finishAfterTransition(resetTrack);
  };

  prev.addEventListener("click", movePrev);
  next.addEventListener("click", moveNext);
});

