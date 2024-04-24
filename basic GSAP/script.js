// gsap.from('.header', {
//     duration: 1,
//     y: '-100%',
//     ease: 'bounce'
// })

// gsap.from('.link', {
//     duration: 1,
//     opacity: 0,
//     delay: 1, stagger: 0.5
// })

// gsap.from('.left',{
//     duration: 1,
//     delay: .5,
//     x: '-100%'
// })
// gsap.from('.right',{
//     duration: 1,
//     delay: .5,
//     x: '100%'
// })

// gsap.to('.footer', {
//     duration: 1,
//     delay: 2,
//     y: 0,
//     ease: 'elastic'
// })

// gsap.fromTo('.btn',{
//     opacity: 0, scale: 0, rotation: 1000
// }, {duration: 4, scale: 1, opacity: 1, rotation: 0})


const timeline = gsap.timeline({
    defaults: {
        duration: 1
    }
});

timeline
    .from( '.header',{ y: '-100%', ease: 'bounce'})
    .from( '.link', { opacity: 0, stagger: 0.5})
    .from('.right',{ x: '100%' }, 1)
    .from('.left',{ x: '-100%' }, '<')
    .to('.footer', { y: 0, ease: 'elastic' })
    .fromTo('.btn',{ opacity: 0, scale: 0, rotation: 1000 }, { scale: 1, opacity: 1, rotation: 0})
    
const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    timeline.timeScale(4)
    timeline.reverse()
})