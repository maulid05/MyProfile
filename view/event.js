import CSSPlugin from "../gsap-public/gsap-public/esm/CSSPlugin.js";
import gsap from "../gsap-public/gsap-public/esm/gsap-core.js";
import MorphSVGPlugin from "../gsap-public/gsap-public/esm/MorphSVGPlugin.js";

gsap.registerPlugin(MorphSVGPlugin,CSSPlugin);
const maindiv = document.createElement("div");
maindiv.style.height = "500px";
maindiv.style.width = "100%";
const tittle = document.createElement("h1");
tittle.innerHTML = "EVENT ( Coming soon ! )";
tittle.style.margin = 0;
tittle.style.position = "relative";
tittle.style.justifySelf = "center";
maindiv.style.justifyContent = "center";
maindiv.style.alignContent = "center";
export function event(isMobile, isDark) {
    
    gsap.to(maindiv,{
        background: isDark ? "#2c2c2cff" :"#018790",
        color: isDark ? "white" :"#0C2B4E",
    })
    maindiv.appendChild(tittle);
    document.body.appendChild(maindiv);
}