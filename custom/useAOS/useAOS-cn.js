export const useAOS = ({
        offset = -500,
        delay = 0,
        duration = 800,
        disable = 'mobile',
        easing = 'ease',
        once = false,
        mirror = true,
        anchorPlacement = 'center-center',
    }) => 
    {
    AOS.init({
        disable,
        offset,
        delay,
        duration,
        easing,
        once,
        mirror,
        anchorPlacement,
    })
}