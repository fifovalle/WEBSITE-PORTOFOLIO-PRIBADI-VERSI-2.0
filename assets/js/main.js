AOS.init();
AOS.init({
  offset: 120,
  delay: 0,
  duration: 700,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

let typed = new Typed(".teks_merek", {
  strings: ["SEDANG MEMPELAJARI SASS", "WEB DEVELOPER PEMULA"],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});
