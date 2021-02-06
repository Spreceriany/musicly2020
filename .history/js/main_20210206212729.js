
if (window.innerWidth > 996) {
  VanillaTilt.init(document.querySelectorAll(".image-container"), {
  max: 10,
  speed: 700,
  glare:true,
  gyroscope:false,
  
 
  "max-glare":.7, 
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".image-container"));
}

const timeline = gsap.timeline({ defaults: { duration: 1 } });
gsap.registerPlugin(ScrollTrigger);



ScrollTrigger.batch(".grid-item", {
  start: "top 50%",
  end:"top 0%",
  
  onEnter: (batch) =>
    gsap.to(batch, 
        { autoAlpha: 1,
          stagger: 0.2,
          y:0,
          skewY:5
        }),
//    onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, stagger: 0.2,y:-20 }),
});

timeline
  .to("#intro-bg", { scale: 1, autoAlpha: 1, duration: 1.7 },"+=1")
  .from("#title span", { autoAlpha: 0 })
  .from(".year", { y:"30vh", stagger:.8,duration:2,ease: "power2.out", skewY:20},"-=.7")
  .to("#title-desc", { autoAlpha: 1 });



