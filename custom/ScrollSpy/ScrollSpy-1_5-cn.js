import { RWDValue } from '../store/store-v1_5-cn.js';

// usage(html)
// target section 加上 class .scroll-spy 以及 title attr (target section 如果是很多section，.scroll-spy 以及 title attr 請用parent包起來)
// 預設樣式為dot。number: true的時候換成number
// freeze: true 的時候有freeze的效果
// 如果導覽有問題可以調整 threshold
// default color 隨 root 的 $scroll-spy-main 變化
// 其他樣式寫在 styles物件裡面 styles: { container:[],number:[],dot:[],title:[] }
// 更改active、hover樣式範例:
// styles: {
//     container:['{color:red!}.default.active_.title',
//     '{bg:red!}.default.active_.dot',
//     '{color:red!}.default:hover_.title',
//     '{bg:red!}.default:hover_.dot',
//     ]
// }

export const ScrollSpy = (props) => {
    return {
        $template: `
        <ul 
            v-if="screenWidth >= 1200"
            :class="[
                '{fixed;left:0;top:50%;translateY(-50%);z:100;transition:0.3s}',
                {'hide-element': !isfeatureSecInView},
                '{visibility:hidden;opacity:0}.hide-element',
                '{translateX(0%)}:hover>li>.title',
                '{f:20px}:hover>li.active>.title',
            ]"
            ref="parent" 
        >

            <li v-for="(target,index) in scrollSpyTargets" ref="child"
                @click="scrollToTarget(index)" @mouseover="clearTimeout(timeout)" @mouseleave="freeze ? targetFreeze() : null"
                :class="[
                    '{color:white;my:10;text-center;transition:0.2s;cursor:pointer;rel;flex}.default',

                    '{f:22px;italic}.default.active>.number',

                    '{f:20;font-weight:700;}.default.active>.title',
                    '{f:20;translateX(0%);font-weight:700}.default:hover>.title',
                    '{translateX(-200%);z:-1;f:20px}.default.freeze>.title',

                    '{h:40px;r:30px;w:5}.default.active>div>.dot',
                    '{h:10px}.default.freeze>div>.dot',
                    '{h:40px;r:30;w:5}.default:hover_.dot',

                    [...styles.container],

                    {
                        'active': target.getAttribute('title') === entrySection,
                    }
                ]" 
            >
                <div v-if="number"
                    :class="[
                        'number',
                        '{w:10%;flex;jc:center;ai:center;color:black;bg:var(--scroll-spy-main)}.default',
                        [...styles.number]
                    ]"
                >
                    {{ index + 1 }}
                </div>

                <div v-if="dot"
                    :class="[
                        '{w:10%;flex;jc:center;ai:center;mx:1em}',
                    ]"
                >
                    <span :class="[
                        'w:10 h:10 r:50% bg:var(--scroll-spy-main) dot',
                        [...styles.dot]
                    ]">
                    </span>
                </div>

                <div
                    :class="[
                        '{font:16px;w:70%;transition:0.3s;r:0|50px|50px|0;flex;ai:center}.default',
                        {'{color:var(--scroll-spy-main)}': mode === 'dot'},
                        {'{pl:0.5em;color:black;p:1em}': mode === 'number'},
                        'title','m-0',
                        [...styles.title]
                    ]"
                    :style="[mode === 'number' ? { backgroundColor: numberModeTitleBg } : false]"
                >
                    {{ target.getAttribute('title') }}
                </div>
                
            </li>
        </ul>
        
        `,
        scrollSpyTargets: [...document.querySelectorAll('.scroll-spy')],
        featureSec: null,
        isfeatureSecInView: false,
        entrySection: '',
        options: {
            root: null,
            threshold: props.threshold === undefined ? 0.15 : props.threshold,
        },
        targetPosY: 0,
        styles: props.styles ? {
            container: (props.styles.container) ? [props.styles.container, 'default'] : ['default'],
            title: (props.styles.title) ? [props.styles.title, 'default'] : ['default'],
            number: (props.styles.number) ? [props.styles.number, 'default'] : ['default'],
            dot: (props.styles.dot) ? [props.styles.dot, 'default'] : ['default']
        } : { container: ['default'], title: ['default'], number: ['default'], dot: ['default'] },

        timeout: null,
        freeze: props.freeze === undefined ? true : props.freeze,
        number: props.number === undefined ? false : props.number,
        dot: props.number ? false : true,
        mode: props.number ? 'number' : 'dot',
        get screenWidth() {
            return RWDValue.screenWidth
        },
        get mainColorNumber() {
            const classList = Array.from(document.querySelector('.feature-sec .wrapper').classList);
            let mainColor;
            if(classList.find(el => el.includes('$scroll-spy-main'))) {
                const mainColorRGBAStr = classList.find(el => el.includes('$scroll-spy-main')).split(':')[1];
                mainColor = mainColorRGBAStr.split('(')[1].slice(0, -1);
            }
            return mainColor;
        },
        get numberModeTitleBg(){
            return `rgba(${this.mainColorNumber},0.5)`
        },
        scrollToTarget(index) {
            const vm = this;
            let tabSectionOffsetTop = vm.scrollSpyTargets[index].offsetTop;
            if (window.pageYOffset < tabSectionOffsetTop) {
                // scroll down
                vm.targetPosY = tabSectionOffsetTop;
            } else {
                // scroll up
                vm.targetPosY = tabSectionOffsetTop - RWDValue.pcIEIHeaderHeight;
            }
            $("html, body").animate({
                scrollTop: vm.targetPosY - RWDValue.subNavHeight
            }, 1300)
        },
        callBack(entries) {
            let [entry] = entries;
            if (entry.isIntersecting) {
                this.entrySection = entry.target.getAttribute('title')
            }
        },
        getRwdValue() {
            RWDValue.getValue();
        },
        targetFreeze() {
            let allLiElArr;
            if (this.$refs.parent) allLiElArr = this.$refs.parent.querySelectorAll('li');
            if (allLiElArr) {
                if (this.timeout) {
                    allLiElArr.forEach(el => {
                        el.classList.remove("freeze")
                    })
                    clearTimeout(this.timeout);
                }

                this.timeout = setTimeout(() => {
                    allLiElArr.forEach(el => el.classList.add("freeze"))
                }, 2000);
            }
        },
        toggleScrollSpyState() {
            const featureObserver = new IntersectionObserver((entries)=>{
                const [entry] = entries
                if(entry.isIntersecting) {
                    this.isfeatureSecInView = true
                } else {
                    this.isfeatureSecInView = false
                }
            },this.option)
            featureObserver.observe(this.featureSec)
        },
        mounted() {
            window.addEventListener('load', () => {
                this.getRwdValue();
                this.featureSec = document.querySelector('.feature-sec');
                this.toggleScrollSpyState();
                console.log(this.screenWidth)
            })
            window.addEventListener('resize', () => this.getRwdValue())
            const observer = new IntersectionObserver(this.callBack, this.options);
            this.scrollSpyTargets.forEach(section => observer.observe(section));
            if (this.freeze) {
                window.addEventListener('scroll', () => {
                    this.targetFreeze()
                })
                this.targetFreeze();
            }
        }
    }
}