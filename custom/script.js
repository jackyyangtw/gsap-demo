import { createApp,reactive } from "../module.js";
import { Header, TopSec, SpecSec, MKTSec, Footer } from "./layout.js";
import { CustomImage } from "./CustomImage/useCustomImage-v1_3.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const spreadRightEl = gsap.utils.toArray('.spread-right');
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

const CustomTab = (props) => ({
    $template: `
    <div class="btn-pic">
        <figure v-if="selected === ''">
            <img src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg" alt="">
        </figure>
        <figure v-for="data in datas">        
            <img v-show="selected === data.colorText" :src="data.fallback_img_path" alt="">
        </figure>
        <div class="flex flex:wrap jc:center ai:center mt-5">
            <div
                class="w:70 {w:160;min-h:150}@width1280 cursor:pointer" 
                v-for="data in datas" @click="selected = data.colorText"
            >   
                <div class="transition:0.3s scale(1.5):hover" :class="{ 'scale(1.5)': selected === data.colorText  }">
                    <div 
                        class="w:40 h:40 r:50% mx:auto"
                        :style="{
                            background: selected === data.colorText ? data.activeBg : data.bg
                        }"
                    >
                    </div>            
                    <p 
                        class="mb-3 t:center"
                        :class="{ 'opacity:0': selected !== data.colorText  }" 
                        :style="{
                            color: data.activeBg
                        }"
                    >{{ data.colorText }}</p>
                </div>
                <small class="f:12 hide block@width1280"
                :class="{ 'opacity:0': selected !== data.colorText  }" 
                >{{ data.colorTextDesc }}</small>
            </div>
        </div>
    </div>
    <div class="contents">
        <div v-for="data in datas">    
            <ul class="flex flex:wrap" v-if="selected === data.colorText">
                <li class="w:100% w:50%@width768 rel px-4" v-for="content in data.contents">
                    <div>                
                        <div class="abs left:0 top:0 w:5 h:100%" :style="{
                            background: data.bg
                        }"></div>
                        <h4>{{ content.title }}</h4>
                        <div v-for="list in content.lists">
                            <h5>{{ list.title }}</h5>
                            <p>{{ list.content }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    `,
    selected: '',
    datas: [
        {
            fallback_img_path: 'https://static.vecteezy.com/system/resources/previews/004/447/761/non_2x/abstract-red-fluid-wave-background-free-vector.jpg',
            img_path: 'https://static.vecteezy.com/system/resources/previews/004/447/761/non_2x/abstract-red-fluid-wave-background-free-vector.jpg',
            colorText: 'RED',
            activeBg: `#CE0E2D`,
            bg: `linear-gradient(120deg,#CE0E2D, rgba(206,14,45,0))`,
            contents: [
                {
                    title: 'IEC60601-1-8',
                    lists: [
                        {
                            title: 'Flashing',
                            content: 'High priority alarm condition: Immediate action to prevent injury.'
                        },
                        {
                            title: 'Not flashing',
                            content: `Warning: Avoidance of a HAZARDOUS SITUATION which
                            could cause death or serious injury.`
                        },
                    ]
                },
                {
                    title: 'ANSI Z535.1-2017',
                    lists: [
                        {
                            title: '',
                            content: `Fire protection equipment and apparatus, danger signs, containers
                            of flammable liquids, lights at barricades, stop button / switches.
                            (PMS 186)`
                        }
                    ]
                }  
            ]
        },
        {
            fallback_img_path: 'https://everydaypower.com/wp-content/uploads/2020/06/50-Yellow-Quotes-for-a-Happy-Aesthetic-1000x600.jpg',
            img_path: 'https://everydaypower.com/wp-content/uploads/2020/06/50-Yellow-Quotes-for-a-Happy-Aesthetic-1000x600.jpg',
            colorText: 'Yellow',
            activeBg: `#FFD100`,
            bg: `linear-gradient(120deg,#FFD100, rgba(255,209,0,0))`,
            contents: [
                {
                    title: 'IEC60601-1-8',
                    lists: [
                        {
                            title: 'Flashing',
                            content: `Medium priority alarm condition:Prompt action to prevent injury.`
                        },
                        {
                            title: 'Not flashing',
                            content: `Caution: Avoidance of a HAZARDOUS SITUATION which could
                            cause minor or moderate injury or equipment damage.`
                        },
                    ]
                },
                {
                    title: 'ANSI Z535.1-2017',
                    lists: [
                        {
                            title: '',
                            content: `Specific physical hazards (including falling, tripping and striking)
                            and designating caution (including cabinets, cans and containers
                            for explosives, corrosives or unstable materials).
                            (PMS 109)`
                        }
                    ]
                }  
            ]
        },
        {
            fallback_img_path: '',
            img_path: '',
            colorText: 'Green',
            activeBg: `#007960`,
            bg: `linear-gradient(120deg,#007960, rgba(0,121,96,0))`,
            contents: [
                {
                    title: 'IEC60601-1-8',
                    lists: [
                        {
                            title: '',
                            content: `Ready for use`
                        }
                    ]
                },
                {
                    title: 'ANSI Z535.1-2017',
                    lists: [
                        {
                            title: '',
                            content: `Safety information and first aid or safety equipment.
                            (PMS 335)`
                        }
                    ]
                }  
            ]
        },
        {
            fallback_img_path: '',
            img_path: '',
            colorText: 'Orange',
            activeBg: `#FF8300`,
            bg: `linear-gradient(120deg,#FF8300, rgba(255,131,0,0))`,
            contents: [
                {
                    title: 'IEC60601-1-8',
                    lists: [
                        {
                            title: '',
                            content: `The significance of these colors may be defined by the end-user.`
                        }
                    ]
                },
                {
                    title: 'ANSI Z535.1-2017',
                    lists: [
                        {
                            title: '',
                            content: `Signs and equipment designating dangerous or energized
                            machines / equipment.
                            (PMS 151)`
                        }
                    ]
                }  
            ]
        },
        {
            fallback_img_path: '',
            img_path: '',
            colorText: 'Blue',
            activeBg: `#0071BC`,
            bg: `linear-gradient(120deg,#0071BC, rgba(0,113,206,0))`,
            contents: [
                {
                    title: 'IEC60601-1-8',
                    lists: [
                        {
                            title: '',
                            content: `The significance of these colors may be defined by the end-user.`
                        }
                    ]
                },
                {
                    title: 'ANSI Z535.1-2017',
                    lists: [
                        {
                            title: '',
                            content: `Information not immediately safety-related (i.e. property policies
                                including safety gear requirements).
                                (PMS 285)`
                        }
                    ]
                }  
            ]
        },
        {
            fallback_img_path: '',
            img_path: '',
            colorText: 'Purple',
            activeBg: `#6F2277`,
            bg: `linear-gradient(120deg,#6F2277, rgba(111,34,119,0))`,
            contents: [
                {
                    title: 'IEC60601-1-8',
                    lists: [
                        {
                            title: '',
                            content: `The significance of these colors may be defined by the end-user.`
                        }
                    ]
                },
                {
                    title: 'ANSI Z535.1-2017',
                    lists: [
                        {
                            title: '',
                            content: `The significance of purple may be defined by the end-user, but
                            purple (or the combination of purple and yellow) has become
                            the de facto standard for radiation hazards.
                            (PMS 259)`
                        }
                    ]
                }  
            ]
        },
        {
            fallback_img_path: '',
            img_path: '',
            colorText: 'Gray',
            colorTextDesc: `Black White or any combo
            of these and / or Yellow`,
            activeBg: `#A5A5A5`,
            bg: `linear-gradient(120deg,#A5A5A5, rgba(165,165,165,0))`,
            contents: [
                {
                    title: 'IEC60601-1-8',
                    lists: [
                        {
                            title: '',
                            content: `The significance of these colors may be defined by the end-user.`
                        }
                    ]
                },
                {
                    title: 'ANSI Z535.1-2017',
                    lists: [
                        {
                            title: '',
                            content: `The significance of these colors may be defined by the end-user.`
                        }
                    ]
                }  
            ]
        },
    ]
})

createApp({
	Header,
	TopSec,
	SpecSec,
	MKTSec,
	Footer,
	CustomImage,CustomTab
}).mount('body');
