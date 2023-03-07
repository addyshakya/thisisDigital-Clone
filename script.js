gsap.from("#img1",{
    opacity:0,
    duration:2,
    Delay:0.4,
    y:70
})

gsap.from("#img2",{
    opacity:0,
    duration:2,
    Delay:0.4,
    x:70
})

gsap.from("#img3",{
    opacity:0,
    duration:2,
    Delay:0.4,
    y:70
})

gsap.from("#main h1",{
    opacity:0,
    duration:2,
    Delay:0.4,
})


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });