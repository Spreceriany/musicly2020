

const timeline = gsap.timeline({defaults: {duration:1}})
gsap.registerPlugin(ScrollTrigger);


// gsap.utils.toArray('.grid-item').forEach(item =>{

//     var t1  = gsap.timeline({
//         scrollTrigger:{
//             trigger:item,
//             toggleActions: "restart none none none",

//         }
//     });
//     t1.to(item,{
//         opacity:1,
//         duration:2 
//     })
// });

ScrollTrigger.batch('.image-container',{
    onEnter:batch => gsap.to(batch,{autoAlpha:1,stagger:0.2})
});


timeline
    .to('#intro-bg',{scale:1,opacity:1,duration:1.5})
    .to('#title',{opacity:1})
    .to('#title-desc',{opacity:1});



    



