
import { reactive } from '../../module.js'
export const RWDValue = reactive({
    mobileIeiHeaderHeight: 0,
    pcIEIHeaderHeight: 0,
    subNavHeight: 0,
    totalNavHeight: 0,
    screenWidth: 0,
    screenHeight: 0,
    loaded: false,
    getScreenSize() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    },
    get isMobile() {
        return window.innerWidth < 992 ? true : false;
    },
    getValue() {
        this.subNavHeight = parseInt(document.querySelector('.prod-nav-wrapper').getBoundingClientRect().height);
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        if (this.screenWidth < 992) {
            this.mobileIeiHeaderHeight = document.querySelector('.m-hdr-header-row').getBoundingClientRect().height;
            this.totalNavHeight = this.subNavHeight + this.mobileIeiHeaderHeight;
        } else if (this.screenWidth >= 1200) {
            this.pcIEIHeaderHeight = document.querySelector('.iei-header-pc').getBoundingClientRect().height;
            this.totalNavHeight = this.subNavHeight + this.pcIEIHeaderHeight;
        }
    },
})


