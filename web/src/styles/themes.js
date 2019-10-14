const unit = 16

const defaults = {
    color_black: '#202123',
    color_dark_gray: '#32373e',
    color_gray: '#697a90',
    color_light_gray: '#b4bcc7',
    color_very_light_gray: '#e7ebed',
    color_accent: 'rgb(233, 44, 70)',
    color_base: 'rgb(110,110,110)',
    blue_algolia: '#5468ff',
    h1: 
        { 
            color: 'rgb(250,100,100)',
            fontSize: 'calc(5rem + 5vw)'
        },
}
export const dark = { 
    absolute: '#000',
    mainBg: 'rgb(23, 22, 22)',
    homeBg: 'rgb(9,9,11)',
    contrastBg: 'rgba(12, 12, 12, 0.66)', 
    contrastPlus: 'rgba(36, 36, 36, 1)',
    primaryText: 'rgb(252,250,251)',
    opacityText3: 'rgba(252,250,251,.3)', 
    link: 'rgb(123,172,221)',
    navBg: 'rgba(13, 14, 14, 0.98)',
    navText: 'rgb(230, 240, 240)',
    myLogoBlend: { mixBlendMode: 'multiply' },
    defaults
}


export const light = { 
    absolute: '#fff',
    mainBg: 'rgb(245, 245, 251)', 
    homeBg: 'rgb(249,249,251)',
    contrastBg: 'rgba(252,252,252,.9)',
    contrastPlus: 'rgba(36, 36, 36, 0.1)',
    primaryText: 'rgb(38,35,35)', 
    opacityText3: 'rgba(38,35,35,.3)', 
    link: 'rgb(52,85,219)',
    navBg: 'rgba(252,252,252,.92)',
    navText:'rgb(23,23,23)',
    myLogoBlend: { mixBlendMode: 'screen' },
    defaults
}