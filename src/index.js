import '@master/css';
import { init, Style } from '@master/css';
import { gsap, ScrollTrigger } from "gsap/all";

Style.extend('breakpoints', {
    width400: '400px',
    width500: '500px',
    bsSm: '576px',
    width600: '600px',
    width670: '670px',
    width768: '768px',
    width800: '800px',
    width900: '900px',
    width992: '992px',
    width1024: '1024px',
    width1200: '1200px',
    width1280: '1280px',
    width1440: '1440px',
    width1600: '1600px',
    width1800: '1800px',
    width1920: '1920px',
    width2560: '2560px',
});

init();
const spreadRightEl = document.querySelectorAll('.spread-right');
const textFadeUpEl = document.querySelectorAll('.text-fade-up');
const textFadeDownEl = document.querySelectorAll('.text-fade-down');

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

// .sec-5
mm.add("(min-width: 992px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-1 .container",
      pin: ".feature-sec .wrapper",
      pinnedContainer: ".feature-sec .wrapper",
      scrub: 1,
      start: "center center",
      end: "+=220%",
    },
  });

    tl.to(spreadRightEl, {
        x: (i) => `${(i + 1) * 180}px`,
    })
    .to('.spread-left', {
        x: '-180px',
    }, '<')
    .to(textFadeUpEl, {
        yPercent: -300,
        opacity: 1,
    })
    .to(textFadeDownEl, {
        yPercent: 500,
        opacity: 1,
    }, '<')
    .to(textFadeDownEl, {
        yPercent: 0,
        opacity: 0,
        delay: 5,
    })
    .to(textFadeUpEl, {
        yPercent: 0,
        opacity: 0,
    }, '<')
    .to(spreadRightEl, {
        x: 0,
    })
    .to('.spread-left', {
        x: 0,
    }, '<')
    .fromTo('.dust',{
        xPercent: -50,
        opacity: 0,
        
    },{
        xPercent: -40,
        opacity: 1,
        delay: 3
    })
    .to('.animate-1',{
        opacity: 0,
        delay: 5
    })
    .fromTo('.animate-2',{
        opacity: 0,
    },{
        opacity: 1,
    })
});

