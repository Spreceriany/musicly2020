

const timeline = gsap.timeline({defaults: {duration:1}})

timeline
    .to('#intro-bg',{scale:1,opacity:1,duration:1.5})
    .to('#title',{opacity:1})
    .to('#title-desc',{opacity:1});


let observer = new IntersectionObserver(function(entries,self){
    let targets = entries.map(entry =>{
        if(entry.isIntersecting){
            self.observe(entry.target);
            return entry.target
        }
    })
    gsap.to(targets,{
    opacity:1,
    stagger:0.4
});
})

