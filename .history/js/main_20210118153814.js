const timeline = gsap.timeline({ defaults: { duration: 1 } });
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.batch(".grid-item", {
  onEnter: (batch) =>
    gsap.to(batch, 
        { scrollTrigger:{
              start: "top 75%",
              end:"bottom 25%",
              markers:true,
              opacity: 1,
                 stagger: 0.3,
          }
          
          
        }),
  onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, stagger: 0.3 }),
});

timeline
  .to("#intro-bg", { scale: 1, opacity: 1, duration: 1.5 })
  .to("#title", { opacity: 1 })
  .to("#title-desc", { opacity: 1 });
