(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  var header = document.querySelector(".site-header");

  function setNavOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
    if (!open) {
      document.querySelectorAll(".site-nav > li.open").forEach(function (el) {
        el.classList.remove("open");
      });
    }
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });
  }

  document.querySelectorAll(".site-nav > li > button").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 820px)").matches) {
        e.preventDefault();
        var li = btn.parentElement;
        var wasOpen = li.classList.contains("open");
        document.querySelectorAll(".site-nav > li.open").forEach(function (el) {
          el.classList.remove("open");
        });
        if (!wasOpen) li.classList.add("open");
      }
    });
  });

  // Close mobile nav on link click
  if (nav) {
    nav.addEventListener("click", function (e) {
      var link = e.target.closest("a");
      if (link && window.matchMedia("(max-width: 820px)").matches) {
        setNavOpen(false);
      }
    });
  }

  // Close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setNavOpen(false);
  });

  // Close when clicking outside header/nav
  document.addEventListener("click", function (e) {
    if (!nav || !nav.classList.contains("is-open")) return;
    if (header && header.contains(e.target)) return;
    setNavOpen(false);
  });

  // Reset open state when resizing to desktop
  window.addEventListener("resize", function () {
    if (!window.matchMedia("(max-width: 820px)").matches) {
      setNavOpen(false);
    }
  });

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-success");
      if (note) {
        note.hidden = false;
        form.reset();
      }
    });
  }
})();
