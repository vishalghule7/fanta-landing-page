let tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"3% 95%",
    end: "60% 50%",
    scrub : true,
    // markers : true,
}})

tl.to("#fanta",{
    delay:0.1,
    top: "120%",
    left: "3%",
    duration:0.77
}, 'orange')

tl.to("#orange2", {
    delay:0.1,
    top: "154%",
    left: "25%",
    scaleX: -1, // This will flip the #orange2 image horizontally
    duration: 0.77
}, 'orange');

tl.to("#oranges", {
    delay:0.12,
    width: "16%",
    top: "169%",
    right: "6%", 
    duration: 0.87,
}, 'orange');

tl.to("#leaf", {
    delay:0.15,
    top: "110%",
    left: "80%", 
    duration: 0.7,
    rotate : "450deg",
}, 'orange');


tl.to("#leaf3", {
    delay:0.2,
    width: "14%",
    top: "113%",
    left: "1.2%", 
    duration: 0.80,
    rotate : "138deg",
}, 'orange');


let tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"35% 95%",
    end: "50% 50%",
    scrub : true,
    // markers : true,
}})

tl2.from(".slice1",{
    rotate: "-90deg",
    top: "35%",
    left:"-45%",
    duration:0.7
} , 'orange');

tl2.from("#sprite-card",{
    delay:0.4,
    rotate: "-90deg",
    top: "45%",
    left:"-55%",
    duration:0.7
} , 'orange');

tl2.from(".slice2",{
    rotate:"-90deg",
    top:"35%",
    right:"-45%",
    duration:0.7
} , 'orange');

tl2.from("#pepsi-card",{
    delay:0.4,
    rotate:"90deg",
    top:"45%",
    right:"-45%",
    duration:0.7
} , 'orange');

tl2.to("#fanta",{
    rotate:"360deg",
    width:"30%",
    top:"216%",
    left:"35%",
    duration:0.77
} , 'orange');

tl2.to("#orange2",{
    width:"15.5%",
    delay:0.35,
    top:"206%",
    left:"42.9%",
    duration:0.7
} , 'orange');