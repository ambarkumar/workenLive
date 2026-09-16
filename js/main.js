document.addEventListener("DOMContentLoaded", function () {
  const $ = (selector) => document.querySelector(selector);

  // Mobile navigation
  const menuBtn = $("#menuBtn");
  const mobileMenu = $("#mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  // Feature pills
  document.querySelectorAll(".feature").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".feature").forEach((item) => {
        item.classList.remove(
          "active",
          "bg-gradient-to-r",
          "from-cyan-400",
          "to-sky-400",
          "text-white",
        );
        item.classList.add("pill", "text-slate-600");
      });

      button.classList.remove("pill", "text-slate-600");
      button.classList.add(
        "active",
        "bg-gradient-to-r",
        "from-cyan-400",
        "to-sky-400",
        "text-white",
      );
    });
  });

  // USP Benefits — Owl Carousel
  const benefitsCarousel = $("#benefitsCarousel");

  if (benefitsCarousel && window.jQuery && jQuery.fn.owlCarousel) {
    const $benefits = jQuery(benefitsCarousel);

    $benefits.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,

      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,

      autoplay: true,
      autoplayTimeout: 4500,
      autoplayHoverPause: true,

      smartSpeed: 700,
      fluidSpeed: true,
      slideBy: 1,

      responsiveClass: true,
      responsiveRefreshRate: 200,

      responsive: {
        0: { items: 1 },
        640: { items: 1 },
        1024: { items: 1 },
      },
    });

    const prev = $("#benefitPrev");
    const next = $("#benefitNext");

    if (prev)
      prev.addEventListener("click", () =>
        $benefits.trigger("prev.owl.carousel"),
      );
    if (next)
      next.addEventListener("click", () =>
        $benefits.trigger("next.owl.carousel"),
      );
  }

  // Testimonials — Owl Carousel
  const testimonialCarousel = $("#testimonialCarousel");

  if (testimonialCarousel && window.jQuery && jQuery.fn.owlCarousel) {
    const $testimonials = jQuery(testimonialCarousel);

    $testimonials.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 650,
      fluidSpeed: true,
      slideBy: 1,
      responsiveClass: true,
      responsiveRefreshRate: 200,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 },
      },
    });

    const prevBtn = $("#prevBtn");
    const nextBtn = $("#nextBtn");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        $testimonials.trigger("prev.owl.carousel");
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        $testimonials.trigger("next.owl.carousel");
      });
    }
  }

  // Industry Veterans — Owl Carousel
  const veteransCarousel = $("#veteransCarousel");

  if (veteransCarousel && window.jQuery && jQuery.fn.owlCarousel) {
    const $veterans = jQuery(veteransCarousel);

    $veterans.owlCarousel({
      loop: true,
      margin: 34,
      nav: false,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 750,
      slideBy: 1,
      responsiveClass: true,
      responsiveRefreshRate: 200,
      responsive: {
        0: { items: 1 },
        640: { items: 1.08 },
        1024: { items: 1.55 },
        1280: { items: 1.62 },
      },
    });

    const prev = $("#veteranPrev");
    const next = $("#veteranNext");

    if (prev) {
      prev.addEventListener("click", () => {
        $veterans.trigger("prev.owl.carousel");
      });
    }

    if (next) {
      next.addEventListener("click", () => {
        $veterans.trigger("next.owl.carousel");
      });
    }
  }

  /* =========================================================
   MODULE ACCORDION
========================================================= */
  // Module accordion
  document.querySelectorAll(".feature-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const currentItem = button.closest(".feature-item");
      const isOpen = currentItem.classList.contains("is-open");

      document.querySelectorAll(".feature-item").forEach((item) => {
        item.classList.remove("is-open");
        const itemButton = item.querySelector(".feature-toggle");
        const itemIcon = item.querySelector(".feature-icon");
        itemButton.setAttribute("aria-expanded", "false");
        itemIcon.textContent = "+";
      });

      if (!isOpen) {
        currentItem.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        currentItem.querySelector(".feature-icon").textContent = "−";
      }
    });
  });
});

const blogModal = document.getElementById("blogModal");
const blogModalClose = document.getElementById("blogModalClose");

const modalBlogImage = document.getElementById("modalBlogImage");
const modalBlogDate = document.getElementById("modalBlogDate");
const modalBlogTitle = document.getElementById("modalBlogTitle");
const modalBlogDescription = document.getElementById("modalBlogDescription");

document.querySelectorAll(".blog-arrow").forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    event.preventDefault();

    modalBlogImage.src = arrow.dataset.blogImage;
    modalBlogImage.alt = arrow.dataset.blogTitle;
    modalBlogDate.textContent = arrow.dataset.blogDate;
    modalBlogTitle.textContent = arrow.dataset.blogTitle;
    modalBlogDescription.textContent = arrow.dataset.blogDescription;

    blogModal.classList.add("active");
  });
});

function closeBlogModal() {
  blogModal.classList.remove("active");
}

if (blogModalClose) {
  blogModalClose.addEventListener("click", closeBlogModal);
}

if (blogModal) {
  blogModal.addEventListener("click", (event) => {
    if (event.target === blogModal) {
      closeBlogModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeBlogModal();
  }
});

document.querySelectorAll(".stat-number").forEach((el) => {
  let i = 1;
  const target = +el.dataset.target;

  const counter = setInterval(() => {
    el.textContent = i++;

    if (i > target) {
      clearInterval(counter);
      el.textContent = target < 10 ? target : target + "+";
    }
  }, 20);
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const successMessage = document.getElementById("contactSuccess");

    successMessage.classList.remove("hidden");

    this.reset();

    // Fade out after 5 seconds
    setTimeout(() => {
      successMessage.style.opacity = "0";

      setTimeout(() => {
        successMessage.classList.add("hidden");
        successMessage.style.opacity = "";
      }, 500);
    }, 5000);
  });
