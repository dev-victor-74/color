import {AiOutlineBgColors,AiOutlineRadiusSetting} from "react-icons/ai"
import {HiColorSwatch} from "react-icons/hi"
import {BiSolidColor} from "react-icons/bi"
import {MdOutlineInvertColors,MdPhotoSizeSelectActual} from "react-icons/md"
import {RxMixerHorizontal} from "react-icons/rx"
import {IoColorPalette} from "react-icons/io5"


 export const toolsLink =[
    {
        title: "Random Palette",
        icon:  AiOutlineBgColors,
        url: "/tools/pallete",
        color:"blue",
        variant: "#fff",
    },
    {
        title: "Color Shades Generator",
        icon:  AiOutlineBgColors,
        url: "/tools/color-shade-generator",
        color:"blue",
        variant: "#fff",
    }
    , {
        title: "Explore Gradient",
        icon:  BiSolidColor,
        url: "/tools/gradient",
        color: "#f8c30e",
        variant: "#fff",

    }
    ,
     {
        title: "Create Gradient",
        icon:  HiColorSwatch,
        url: "/tools/create-gradient",
        color: "#fa2c28",
        variant: "#fff",

    },
    {
        title: "Image Picker",
        icon:  MdPhotoSizeSelectActual,
        url: "/tools/image-picker",
        color: "purple",
        variant: "#fff",

    },

  
    {
        title: "Mesh Gradient Generator",
        icon:  IoColorPalette,
        url: "/tools/mesh-gradient",
        color:"#300b55",
        variant: "#fff",

    },
    {
        title: "Color Mixer",
        icon:  RxMixerHorizontal,
        url: "/tools/color-mixer",
        color:"#300b55",
        variant: "#fff",

    },
   
]


export const ColorTypes = [
    {   id: 1,
        name: "Red",
        sampleColor:"#ca4069",
        colors: ["#800000","#c8102e","#a82749","#63051e","#d90429","#ef233c","#640d14"]
    },
    {   id: 2,
        name:"Green",
        sampleColor:"#09f505",
        colors: ["#007f5f","#283618","#386641","#55a630","#008000","#9ef01a","#143601"]
    },
    {   id: 3,
        name: "Orange",
        sampleColor:"#f5cd05",
        colors: ["#f77f00","#fb8500","#e85d04","#f8961e","#ff7f51","#780116","#941b0c"]
    }
    ,
    {   id: 4,
        name: "Blue",
        sampleColor:"#034078",
        colors: ["#3a0ca3","#03045e","#0096c7","#00a8e8","#9381ff","#00a6fb","#0a1128"]
    },
    {   id: 5,
        name: "Brown",
        sampleColor:"#8c5a03",
        colors: ["#6f1d1b","#99582a","#49111c","#593d3b","#6d4c3d","#805b10","#260701"]
    },
    {   id: 6,
        name: "Pink",
        sampleColor:"#e859ad",
        colors: ["#f20089","#ff5d8f","#ff4d6d","#d81159","#ff499e","#973aa8","#ff69eb"]
    },
    {   id: 7,
        name: "Yellow",
        sampleColor:"#f5f90b",
        colors: ["#ffd60a","#fcf300","#ffd100","#dbb42c","#ffea00","#ffee32","#v"]
    },
    {   id: 8,
        name: "Violet",
        sampleColor:"#3a0ca3",
        colors: ["#3c096c","#7209b7","#a663cc","#973aa8","#2c0735","#140152","#510087"]
    },
    {   id: 9,
        name: "Black",
        sampleColor:"#02010a",

        colors: ["#011627","#212529","#000814","#000000","#081c15","#00171f","#220901"]
    },
    {   id: 10,
        name: "Purple",
        sampleColor:"#a6007e",
        colors: ["#8e4362","#5e0d45","#5b2636","#913173","#380227","#9c39a1","#410e6b"]
    }
    ,
    {   id: 11,
        name: "Turquoise",
        sampleColor:"#02c39a",
        colors: ["#006d77","#0077b6","#80ffdb","#086375","#036666","#0c7489","#004346"]
    }
    ,
    {   id: 12,
        name: "Gray",
        sampleColor:"#6d7b8d",
        colors: ["#6b705c","#ccd5ae","#edf6f9","#a5a58d","#f4f1de","#4a4e69","#3a5a40"]
    }
]


