
var tl = gsap.timeline()
tl.to("#loader .lob ",{
    
    display:"block",
    stagger:0.3,
    
})
.to("#loader",{
    y:"-100%",
    // delay:1,
    durataion:2
})



gsap.to("#nav",{
    y:-100,
    position:"sticky",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        scrub:1,
        start:"top 0%",
        end:"top -20%"
    }
})
gsap.from("#page1 h1",{
    y:100,
    rotate:5,
    duration:2,
    stagger:1,
    opacity:0
})
gsap.from("#page3 h1",{
    y:100,
    duration:4,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        scrub:2,
        start:"top 60%",
        end:"top 10%"
    }
})
gsap.to("#page2 video",{
    width:"100%",
    height:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top -5%",
        scrub:1

    }
})
gsap.from("#page10, .p10text1 h1, .p10text2 h1, .p10text3 h1",{
    y:100,
    duration:4,
    scrollTrigger:{
        trigger:"#page10, .p10text1 h1, .p10text2 h1, .p10text3 h1",
        scroller:"body",
        scrub:5,
        start:"top 80%",
        end:"top 50%",
    }
})
// gsap.to("#page7 h1",{
//     x:"-100%",
//     scrollTrigger:{
//         trigger:"#page7",
//         scroller:"body",
//         markers:true,
//         scrub:2,
//         start:"top 0%",
//         end:"top -600%",
//         pin:true
//     }
// })
var curser = document.querySelector("#curser")
var nv1 = document.querySelector("#nav-part1")
var errow = document.querySelector("#errow")
var body = document.querySelector("body")
body.addEventListener("mousemove",function(dets){
  curser.style.top = `${dets.y}px`
  curser.style.left = `${dets.x}px`
})

nv1.addEventListener("mouseenter",function(){
    errow.style.display= "block"
})
nv1.addEventListener("mouseleave",function(){
    errow.style.display= "none"
})

