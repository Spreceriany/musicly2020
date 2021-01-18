const timeline = gsap.timeline({ defaults: { duration: 1 } });
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.batch(".grid-item", {
  start: "top 50%",
  end:"top 0%",
  markers:true,
 
  onEnter: (batch) =>
    gsap.to(batch, 
        { opacity: 1,
          stagger: 0.2,
        }),
//   onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, stagger: 0.3 }),
});

timeline
  .to("#intro-bg", { scale: 1, opacity: 1, duration: 1.5 })
  .to("#title", { opacity: 1 })
  .to("#title-desc", { opacity: 1 });
