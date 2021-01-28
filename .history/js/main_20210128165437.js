
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
        { opacity: 1,
          stagger: 0.2,
          y:0
        }),
//    onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, stagger: 0.2,y:-20 }),
});

timeline
  .to("#intro-bg", { scale: 1, opacity: 1, duration: 1.5 })
  .from("#title span", { y:300,
    ease: "power4.out",
    delay:1,
    duration:2,
    skewY:10,
    stagger:{
        amount:0.4
    } })
  .from("#title-desc span", { y:200,
    ease: "power4.out",
    delay:1,
    duration:2,
    skewY:10,
    stagger:{
        amount:0.4
    }  });



