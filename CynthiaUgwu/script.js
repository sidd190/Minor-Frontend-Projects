function cursor(){
    var crsr = document.querySelector(".cursor")
    var main = document.querySelector(".main")
    document.addEventListener("mousemove",function(dets){
        crsr.style.left = dets.x-5+"px"
        crsr.style.top = dets.y-5+"px"
    })
}
cursor()
gsap.to(".header",{
    backgroundColor:"#000",
    duration:1,
    y:-75,
    scrollTrigger:{
        trigger:".header",
        scroller:"body",
        start:"top -30%",
        end: "top -80%",
        scrub:1
    }
})

document.querySelectorAll(".page2-in").forEach(function (elem){
    var rot=0;
    var diff=0;
    elem.addEventListener("mousemove",function(details){
        diff=details.x -rot;
        rot=details.x;
        var imaag=elem.querySelector("img");
        imaag.style.cursor ="pointer";
        gsap.to(imaag,{
            top:details.y-imaag.height,
            left:details.x-imaag.width,
            opacity:1,
            ease:Power1,
            rotate: gsap.utils.clamp(-10,10,diff)
        })
    });
});
document.querySelectorAll(".page2-in").forEach(function (elem){
    elem.addEventListener("mouseleave",function(details){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power1
        })
    });
});