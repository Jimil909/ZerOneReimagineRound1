// Smooth Scroll----------------
function LenisScroll() {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}
LenisScroll();

// Smooth Scroll with scrollTrigger
function smoothScrollTrigger(){
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
smoothScrollTrigger();

// Menu Bar---------------------
gsap.to(".hamburger", {
  top: "4%",
  scrollTrigger: {
    trigger: ".hero",
    scroller: "body",
    // markers: true,
    start: "top 10%",
    scrub: 1,
  }
})

// Full Screen Menu-------------
function toggleMenu() {
  const menu = document.querySelector(".menu")
  const mobMenu = document.querySelector(".mob-menu")
  const icon = document.querySelector(".hamburger")
  menu.classList.toggle("open")
  mobMenu.classList.toggle("open")
  icon.classList.toggle("open")
}

// Hero Section-----------------
gsap.to(".hero video", {
  width: "80%",
  scrollTrigger: {
    trigger: ".hero",
    scroller: "body",
    // markers: true,
    start: "bottom 90%",
    scrub: 1,
  },
});

gsap.to(".hero .cta-btn", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".hero",
    scroller: "body",
    // markers: true,
    start: "top top",
    scrub: 2,
  },
})

// Marquee Section--------------
gsap.to(".marquee .marq-text", {
  transform: "translateX(-50%)",
  scrollTrigger: {
    trigger: ".marquee",
    scroller: "body",
    scrub: true,
    // markers: true,
  },
});

// Features Section-------------
Shery.makeMagnet(".tubeless-tyre img, .electric img, .phone-app img, .battery img, .suspension img, .eco-friendly img, .waterproof img" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// Products Section-------------  
gsap.to(".products-section .models", {
  transform: "translateX(-63%)",
  scrollTrigger:{
      trigger: ".products-section",
      scroller: "body",
      // markers: true,
      start: "top 0",
      end: "top -300%",
      scrub: true,
      pin: true
  }
});

// Numbers Counting-------------
const wrap = gsap.utils.wrap([8,100,156,63,750]);

gsap.to('.numbers .count', {
  textContent: wrap,
  snap: { textContent: 1 },
  duration: 2,
  scrollTrigger: {
    trigger: ".numbers",
    scroller: "body",
    // markers: true,
    start: "top 85%",
  }
});

// Testimonials Section---------
function testimonialScroll() {
  let tl = gsap.timeline({
    delay: 0,
    scrollTrigger: {
      trigger: ".review-section",
      scroller: "body",
      start: "9% bottom",
      // markers: true,
    },
  });

  tl.to(".col-1, .col-2, .col-3, .col-4", {
    y: 0,
    duration: 3,
    ease: "power4.inOut",
  });

  tl.to(".col-1 .review", {
    y: 0,
    stagger: -0.9,
    duration: 3,
    ease: "power4.inOut",
  }, "-=4");

  tl.to(".col-2 .review", {
    y: 0,
    stagger: 0.5,
    duration: 3,
    ease: "power4.inOut",
  }, "-=4");

  tl.to(".col-3 .review", {
    y: 0,
    stagger: -0.5,
    duration: 3,
    ease: "power4.inOut",
  }, "-=4");

  tl.to(".col-4 .review", {
    y: 0,
    stagger: 0.5,
    duration: 3,
    ease: "power4.inOut",
  }, "-=4");
};
testimonialScroll();