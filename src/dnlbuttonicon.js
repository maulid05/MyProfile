import { gsap } from "../gsap-public/gsap-public/esm/gsap-core.js";
import { CSSPlugin } from "../gsap-public/gsap-public/esm/CSSPlugin.js";
import { MorphSVGPlugin } from "../gsap-public/gsap-public/esm/MorphSVGPlugin.js";


gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(MorphSVGPlugin);
export const btn = document.createElement("button");
btn.style.border = "none";
btn.style.background = "none";


const sun = "M8.031 16.5c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5-3.357-7.5-7.5-7.5c-4.142 0-7.5 3.357-7.5 7.5zM15.531 3.75l-2.109 4.219h4.219l-2.11-4.219zM24.543 7.457l-4.475 1.491 2.982 2.983 1.493-4.474zM10.994 8.948l-4.474-1.491 1.491 4.475 2.983-2.984zM6.969 14.359l-4.219 2.11 4.219 2.109v-4.219zM24.031 18.641l4.219-2.109-4.219-2.109v4.218zM15.531 29.25l2.109-4.219h-4.219l2.11 4.219zM20.068 24.052l4.475 1.491-1.492-4.475-2.983 2.984zM6.52 25.543l4.475-1.491-2.983-2.983-1.492 4.474z";
const moon = "M10.895 7.574c0 7.55 5.179 13.67 11.567 13.67 1.588 0 3.101-0.38 4.479-1.063-1.695 4.46-5.996 7.636-11.051 7.636-6.533 0-11.83-5.297-11.83-11.83 0-4.82 2.888-8.959 7.023-10.803-0.116 0.778-0.188 1.573-0.188 2.39z";

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("viewBox", "0 0 32 32")
svg.setAttribute("width", "40")
svg.setAttribute("height", "40")
const icon = document.createElementNS("http://www.w3.org/2000/svg", "path");
icon.setAttribute("id", "icon");
icon.setAttribute("d", sun);

svg.appendChild(icon);
btn.appendChild(svg);

export function dnlbtnicon(isDark){
    btn.id = "dnlbtn";  
    btn.addEventListener("pointerenter", () =>{
        console.log("halo");
    });
    if (isDark) {
        icon.setAttribute("fill", "#FFDB00" );
        gsap.to(icon,{
            morphSVG:moon,
            duration: 1,
            ease: "power2.out"
        })
    }else{
        icon.setAttribute("fill", "#FFDB00" );
        gsap.to(icon,{
            morphSVG:sun,
            duration: 1,
            ease: "power2.out"
        })
    }
}




