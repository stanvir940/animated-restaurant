const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function videoconAnimation() {
  const videoCon = document.querySelector("#video-container");
  const playCon = document.querySelector("#play");

  videoCon.addEventListener("mouseenter", function () {
    gsap.to(playCon, {
      opacity: 1,
      scale: 1,
    });
  });

  videoCon.addEventListener("mouseleave", function () {
    gsap.to(playCon, {
      opacity: 0,
      scale: 0,
    });
  });

  videoCon.addEventListener("mousemove", function (dets) {
    gsap.to(playCon, {
      left: dets.x - 20,
      top: dets.y - 20,
    });
  });
}

videoconAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.8,
    opacity: 0,
    delay: 1.3,
    duration: 0.8,
  });
}

loadingAnimation();

function hoverPill() {
  const de = document.querySelector("#dets1");
  const hov = document.querySelector("#hover-pill");

  de.addEventListener("mouseenter", function () {
    gsap.to(hov, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
    });
  });
  de.addEventListener("mouseleave", function () {
    gsap.to(hov, {
      opacity: 0,
      scale: 0,
    });
  });
  const de1 = document.querySelector("#dets2");
  const hov1 = document.querySelector("#hover-pill1");

  de1.addEventListener("mouseenter", function () {
    gsap.to(hov1, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
    });
  });
  de1.addEventListener("mouseleave", function () {
    gsap.to(hov1, {
      opacity: 0,
      scale: 0,
    });
  });
  const de2 = document.querySelector("#dets3");
  const hov2 = document.querySelector("#hover-pill2");

  de2.addEventListener("mouseenter", function () {
    gsap.to(hov2, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
    });
  });
  de2.addEventListener("mouseleave", function () {
    gsap.to(hov2, {
      opacity: 0,
      scale: 0,
    });
  });
}

hoverPill();
