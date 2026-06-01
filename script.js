const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
const magneticItems = document.querySelectorAll(".magnetic, .button, .service-card, .project-card");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
let activeLightboxTrigger = null;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

window.addEventListener("pointermove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  if (cursorDot) {
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  }
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.16;
  ringY += (mouseY - ringY) * 0.16;

  if (cursorRing) {
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
  }

  requestAnimationFrame(animateCursor);
}

animateCursor();

magneticItems.forEach((item) => {
  item.addEventListener("pointerenter", () => cursorRing?.classList.add("is-hovering"));
  item.addEventListener("pointerleave", () => {
    cursorRing?.classList.remove("is-hovering");
    item.style.transform = "";
  });

  item.addEventListener("pointermove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    if (item.matches(".magnetic, .button")) {
      item.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
    }
  });
});

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const baseRotation = card.classList.contains("avatar-card") ? -4 : 0;
    const anchor = card.classList.contains("avatar-card") ? "translate(-50%, -50%) " : "";

    card.style.transform = `${anchor}perspective(900px) rotateX(${y * -8}deg) rotateY(${x * 10}deg) rotate(${baseRotation}deg) translateY(-4px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = card.classList.contains("avatar-card")
      ? "translate(-50%, -50%) rotate(-4deg)"
      : "";
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(184, 255, 24, 0.28), rgba(255,255,255,0.58) 38%)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.background = "";
  });
});

function openLightbox(trigger) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;

  const fullImage = trigger.dataset.full || trigger.querySelector("img")?.getAttribute("src");
  const title = trigger.dataset.title || "Portfolio project";
  const image = trigger.querySelector("img");
  if (!fullImage) return;

  activeLightboxTrigger = trigger;
  lightbox.classList.add("is-loading");
  lightboxImage.src = fullImage;
  lightboxImage.alt = image?.alt || title;
  lightboxCaption.textContent = title;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  lightbox.setAttribute("aria-modal", "true");
  document.body.classList.add("modal-open");
  lightboxClose?.focus({ preventScroll: true });
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("is-open");
  lightbox.classList.remove("is-loading");
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.removeAttribute("aria-modal");
  document.body.classList.remove("modal-open");
  activeLightboxTrigger?.focus({ preventScroll: true });
  activeLightboxTrigger = null;

  window.setTimeout(() => {
    if (!lightbox.classList.contains("is-open")) {
      lightboxImage.src = "";
      lightboxImage.alt = "";
    }
  }, 260);
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".lightbox-trigger");
  if (!trigger) return;

  event.preventDefault();
  openLightbox(trigger);
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

lightboxImage?.addEventListener("load", () => {
  lightbox?.classList.remove("is-loading");
});

lightboxImage?.addEventListener("error", () => {
  lightbox?.classList.remove("is-loading");
  if (lightboxCaption) {
    lightboxCaption.textContent = "Image could not be loaded";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("is-open")) {
    closeLightbox();
  }
});

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY * 0.12;
  document.documentElement.style.setProperty("--scroll-shift", `${scrolled}px`);
});
