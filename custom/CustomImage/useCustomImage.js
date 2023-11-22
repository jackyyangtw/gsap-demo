export const CustomImage = (props) => {
    return {
        $template:`
            <object v-if="fileExtension === 'svg'" :data="img_path" :title="img_alt" :type="fileType"></object>
            <picture v-else>
                <source :srcset="img_path" :type="fileType">
                <source v-if="fallback_img_path" :srcset="fallback_img_path" :type="fallbackImgFileType">
                <img :src="img_path" :alt="img_alt" :class="img_classes">
            </picture>
            <p v-if="content_text"
            :class="content_classes"
            >{{ content_text }}</p>
        `,
        img_classes: props.img_classes || null,
        fallback_img_path: props.fallback_img_path,
        img_path: props.img_path,
        img_alt: props.img_alt,
        content_text: props.content_text || null,
        content_classes: props.content_classes || null,
        fileTypes: {
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            png: 'image/png',
            gif: 'image/gif',
            svg: 'image/svg+xml',
            avif: 'image/avif',
            webp: 'image/webp',
        },
        get fileExtension(){
            return this.img_path?.split('.').pop()
        },
        get fileType(){
            return this.fileTypes[this.fileExtension] || null
        },
        get fallbackImgFileExtension(){
            return this.fallback_img_path?.split('.').pop()
        },
        get fallbackImgFileType(){
            return this.fallbackImgFileExtension ? this.fileTypes[this.fallbackImgFileExtension] : null
        },
    }
}
