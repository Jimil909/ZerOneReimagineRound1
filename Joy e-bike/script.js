function locoscroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  
  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

gsap.to(".hero video", {
  width: "70%",
  scrollTrigger: {
    trigger: ".hero",
    scroller: "body",
    // markers: true,
    start: "bottom 90%",
    scrub: 1,
  },
});

gsap.to(".marquee .marq-text", {
  transform: "translateX(-50%)",
  scrollTrigger: {
    trigger: ".marquee",
    scroller: "body",
    scrub: 1,
    // markers: true,
  },
});

function testimonialScroll() {
  let tl = gsap.timeline({ delay: 0 });

  tl.to(".col", {
    top: 0,
    duration: 3,
    ease: "power4.inOut",
  });

  tl.to(".c-1 .item",{
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut",
  },"-=2");

  tl.to(".c-2 .item",{
    top: 0,
    stagger: -0.25,
    duration: 3,
    ease: "power4.inOut",
  },"-=4");

  tl.to(".c-3 .item",{
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut",
  },"-=4");

  tl.to(".c-4 .item",{
    top: 0,
    stagger: -0.25,
    duration: 3,
    ease: "power4.inOut",
  },"-=4");
}

gsap.to(".review-section", {
  scrollTrigger: {
    trigger: ".review-section",
    scroller: "body",
    markers: true,
    start: "10% center",
    onEnter: testimonialScroll,
  },
});

locoscroll();