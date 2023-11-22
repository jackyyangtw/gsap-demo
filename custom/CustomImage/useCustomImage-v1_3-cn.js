// v1_3
// update judge animation svg and support aos
import { RWDValue } from '../store/store-v1_5-cn.js';

// if you want to use lazy load, you need to add @vue:mounted="mounted" in your elemnt wrapper
// if you want to use animation svg, you need to add isSvgAnimation: true in props
// if you want to use effect, you need to add "effect: true" in props
// if you want to change effect class, you need to add "effectClass: 'your-class'" in props, default is `@blurIn|${this.transitionTime}s`
// if you want to use blurIn effect, you need to add @keyframes blurIn in your css
// if you want to change transition time, you need to add "transitionTime: 'your-time'" in props, default is 0.5
// if your element is positioned absolute, you need to add 'inset' or 'width' to your element
export const CustomImage = (props) => {
    return {
        $template: `
            <div v-if="!isLoaded && lazyLoad" ref="placeholder" class="w:100%" style:"height:10px"></div>
            <div ref="imgWrapper" v-else-if="isLoaded" :class="effectClassString" :data-aos="aosEffect" :data-aos-delay="aosDelay">            
                <object v-if="fileExtension === 'svg' && isSvgAnimation" :data="img_path" :title="img_alt" :type="fileType"></object>
                <picture v-else>
                    <source :srcset="img_path" :type="fileType" :data-src="img_path">
                    <source v-if="fallback_img_path" :srcset="fallback_img_path" :type="fallbackImgFileType" :data-src="fallback_img_path">
                    <img :src="img_path" :alt="img_alt" :class="[img_classes]">
                </picture>
            </div>
            <p v-if="content_text"
            v-html="content_text"
            :class="content_classes"
            :data-aos="aosEffect" 
            :data-aos-delay="aosDelay"
            ></p>
        `,
        aosEffect: props.aosEffect || null,
        aosDelay: props.aosDelay || null,
        isSvgAnimation: props.isSvgAnimation || false,
        img_classes: props.img_classes || null,
        fallback_img_path: props.fallback_img_path,
        img_path: props.img_path,
        img_alt: props.img_alt,
        content_text: props.content_text || null,
        content_classes: props.content_classes || null,
        lazyLoad: props.lazyLoad !== undefined ? props.lazyLoad : true,
        effect: props.effect !== undefined ? props.effect : false,
        oberserverOption: {
            rootMargin: props.rootMargin || null,
            threshold: props.threshold || 0.5,
        },
        transitionTime: props.transitionTime || 0.5,
        setPlaceholderHeight: props.setPlaceholderHeight !== undefined ? props.setPlaceholderHeight : false,
        isMobileLazy: props.isMobileLazy !== undefined ? props.isMobileLazy : false,
        loadedDelay: 0,
        isLoaded: false,
        effectClassString: '',
        fileTypes: {
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            png: 'image/png',
            gif: 'image/gif',
            svg: 'image/svg+xml',
            avif: 'image/avif',
            webp: 'image/webp',
        },
        get fileExtension() {
            return this.img_path?.split('.').pop()
        },
        get fileType() {
            return this.fileTypes[this.fileExtension] || null
        },
        get fallbackImgFileExtension() {
            return this.fallback_img_path?.split('.').pop()
        },
        get fallbackImgFileType() {
            return this.fallbackImgFileExtension ? this.fileTypes[this.fallbackImgFileExtension] : null
        },
        get effectClass(){
            if(!this.effect) return ''
            return this.isLoaded && props.effectClass ? props.effectClass : `@blurIn|${this.transitionTime}s`
        },
        mounted() {
            this.effectClassString = this.effectClass;
            if((!this.lazyLoad && !this.isMobile) || (!this.isMobileLazy && (RWDValue.isMobile || this.isMobile))) {
                this.isLoaded = true;
                return;
            }
            if(!this.getRWDValue) {
                RWDValue.getValue();
            }
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = new Image();
                        const vm = this;
                        img.src = vm.img_path;
                        img.onload = function () {
                            const {target} = entry;
                            if(vm.setPlaceholderHeight) {
                                const {width, height} = this;
                                const ratio = width / height;
                                const targetMaxWidth = target.offsetWidth;
                                const targetMaxHeight = target.offsetHeight;
                                let scaleHeight;
                                if(ratio === 1) {
                                    scaleHeight = height;
                                } else if(width > targetMaxWidth &&  height > targetMaxHeight && ratio > 1) {
                                    scaleHeight = targetMaxWidth / ratio;
                                } else if (width > targetMaxWidth){
                                    scaleHeight = targetMaxWidth / ratio;
                                } else if(targetMaxWidth === 0 && targetMaxHeight === 0) {
                                    scaleHeight = width / ratio;
                                } else {
                                    scaleHeight = height;
                                }
                                setTimeout(() => {
                                    target.style.height = `${parseInt(scaleHeight)}px`;
                                }, 0);
                            }
                            setTimeout(() => {
                                vm.isLoaded = true;
                            }, vm.loadedDelay);
                            setTimeout(() => {
                                vm.effectClassString = '';
                            }, vm.loadedDelay + vm.transitionTime * 1000);
                            if(window.AOS && !props.aosEffect) {
                                AOS.refresh();
                            }
                            observer.unobserve(target);
                        }
                    }
                })
            })
            observer.observe(this.$refs.placeholder, {
                rootMargin: this.oberserverOption.rootMargin,
                threshold: this.oberserverOption.threshold,
                root: null
            })
        }
    }
}