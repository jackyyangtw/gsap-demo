window.MasterCSSManual = true;
let Style = window.MasterStyle;
Style.extend('classes', {
    customContainer: 'margin:0|auto px:1em {px:0em;max-w:540px}@bsSm max-w:690px@width768 max-w:960px@width992 max-w:1140px@width1200 max-w:1280px@width1440',
    customRow: 'flex flex:wrap'
})
Style.extend('breakpoints', {
    bsSm: '576px',
    width768: '768px',
    width992: '992px',
    width1024: '1024px',
    width1200: '1200px',
    width1280: '1280px',
    width1440: '1440px',
    width1920: '1920px',
    width2560: '2560px',
});

window.initMasterCSS();