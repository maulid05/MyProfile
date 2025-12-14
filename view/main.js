import { gsap } from "../gsap-public/gsap-public/esm/all.js";
import { CSSPlugin } from "../gsap-public/gsap-public/esm/CSSPlugin.js";
import { MorphSVGPlugin } from "../gsap-public/gsap-public/esm/MorphSVGPlugin.js";
import { dnlbtnicon, btn } from "../src/dnlbuttonicon.js";
import { index } from "../controller/mainController.js";
import { protofolio } from "./protofolio.js";

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(MorphSVGPlugin);

const Mydata = index();

const p = document.createElement("p");
p.innerHTML = "Hi, i'm";
p.style.margin = "0px";
p.style.padding = "0px";
const wrapmydata = document.createElement("div");
wrapmydata.style.display = "flex";
wrapmydata.style.gap = "10px";
wrapmydata.style.margin = "0px";
wrapmydata.style.padding = "0px";
wrapmydata.style.border = "0px";
const list = document.createElement("div");
list.style.display = "block";
list.style.paddingTop = "5px";
list.style.width = window.innerWidth/20;
list.style.fontSize = "20px";
const div = document.createElement("div");
    div.className = "panel";
    div.style.position = "relative" ;
const card = document.createElement("div");
    card.style.display = "grid";
    //card.style.background = "cyan";
    card.style.width = "100%";
    card.style.height = "100%";
    card.style.bottom = "0";
    card.style.position = "absolute";
const head = document.createElement("div");
    //head.style.background = "black";
    head.style.width = "fit-content";
    head.style.height = "fit-content";
    head.style.justifySelf = "center";
    head.style.alignSelf = "center";
    head.style.position = "relative";
const menu = document.createElement("div");
    menu.className = "menu";
    menu.style.padding = "10px";
    menu.style.position = "absolute";
    menu.style.top = "0";
    menu.style.right = "0";
const name = document.createElement("h1");
    name.innerHTML = "MAULIDANSYAH";
    name.style.fontStyle = "bold";
    name.style.padding = "0px";
    name.style.margin = "0px";
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 32 32")
    svg.setAttribute("width", "40")
    svg.setAttribute("height", "40")
    svg.style.alignSelf = "center";
const icon = document.createElementNS("http://www.w3.org/2000/svg", "path");
    icon.setAttribute("id", "icon");
    icon.setAttribute("d", Mydata[0].logo);
const mainimg = new Image();
    mainimg.src = "../src/img.png";

    
    let i = 0;
    
    function listshow() {
        let items = Mydata[i];
        list.textContent = items.role;

        const tl = gsap.timeline();

        gsap.to(icon,{morphSVG:items.logo, duration:1, ease: "power2.out"});
        
        tl.fromTo(list, 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
            )
            .to(list, { opacity: 1, duration: 1 })
            .to(list, 
                { opacity: 0, y: -10, duration: 0.7, ease: "power2.in" }
            );
        
        i = (i+1) % Mydata.length;  
    }

listshow();
setInterval(listshow, 2500);

export function main(isMobile, isDark) {
    new dnlbtnicon(isDark);
    let w = window.innerWidth;
    let h = window.innerHeight;
    if (isDark) {
        icon.setAttribute("fill", "white" );
        gsap.to(div,{
            color: "white",
            background: "radial-gradient(circle at top, #304388ff, #252852ff, #2c2c2cff, #2c2c2cff)",
            duration: 1,
            ease: "power2.out",
        }
    )
}else{
    icon.setAttribute("fill", "#0C2B4E");
    gsap.to(div,{
        color: "#0C2B4E",
        background: "radial-gradient(circle at top, #F4F4F4, #00B7B5, #018790, #018790)",
        duration: 1.5,
        ease: "power2.out"
    }
)
}
    if (isMobile) {
        gsap.to(mainimg,{
            background : isDark?"white":"#0C2B4E",
            width : 270,
            height : 270,
            bottom : h/3,
            marginLeft:0,   
            justifySelf: "center" ,   
            position : "absolute",
            objectFit : "cover",
            objectPosition : "top",
            borderRadius : "200px",
            duration: 1.5,
            ease: "power2.out"
        })
        gsap.to(div,{
            height: h,
            duration: 1.5,
            ease: "power2.out"
        }
        )
        gsap.to(btn,{
            marginLeft: "10px",
            marginTop: "10px",
            duration: 1,
            ease: "power2.out"
        })
        gsap.to(head,{
            fontSize: 30,
            marginTop: "290px",
            marginRight: "0px",
            duration: 1,
            ease: "power2.out"
        })
    }else{
        gsap.to(div,{
            height: h,
            duration: 1,
            ease: "power2.out"
        }
        )
        gsap.to(btn,{
            marginLeft: "10px",
            marginTop: "5px",
            duration: 1,
            ease: "power2.out"
        })
        gsap.to(head,{
            fontSize: w/25,
            marginTop: "0px",
            marginRight: "100px",
            duration: 1,
            ease: "power2.out"
        })
        gsap.to(mainimg,{
            background: "none",
            width : 280,
            height : 650,
            bottom : "0",
            marginLeft:w-300,   
            justifySelf: "center" ,   
            position : "absolute",
            objectFit : "cover",
            objectPosition : "top",
            borderRadius : "0 0 0 0 ",
            duration: 1.5,
            ease: "power2.out"
        })
    }
    protofolio(isMobile, isDark);
}

    svg.appendChild(icon);  
    wrapmydata.appendChild(svg);
    wrapmydata.appendChild(list);
    head.appendChild(p);
    head.appendChild(name);
    head.appendChild(wrapmydata);
    card.appendChild(mainimg);
    card.appendChild(head);
    menu.appendChild(btn);
    div.appendChild(card);
    div.appendChild(menu);
    document.body.style.margin = "0px";
    document.body.style.fontFamily = "sans-serif";
    document.body.appendChild(div);