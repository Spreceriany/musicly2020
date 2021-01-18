

const timeline = gsap.timeline({defaults: {duration:1}})
gsap.registerPlugin(ScrollTrigger);

gsap.to('.grid-item',{
    scrollTrigger:'.grid-item',
    opacity:1,
    stagger:0.3
    
})
timeline
    .to('#intro-bg',{scale:1,opacity:1,duration:1.5})
    .to('#title',{opacity:1})
    .to('#title-desc',{opacity:1});



    



