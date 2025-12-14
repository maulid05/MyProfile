import { event } from "./view/event.js";
import { main } from "./view/main.js";
import { protofolio } from "./view/protofolio.js";


window.onresize = ukHandler;
const now = new Date();
let Hours = now.getHours();
let Minutes = now.getMinutes();
let Seconds = now.getSeconds();
let scwidth = window.screen.width;
let isMobile = scwidth <= 700, isDark = Hours > 18;
main(isMobile, isDark);
event(isMobile,isDark);
protofolio(isMobile, isDark);


function ukHandler() {
    scwidth = window.innerWidth;
    let scheight = window.innerHeight;
    if (scwidth <= 700) {
        sender(true, null);
    }else{
        sender(false, null)
    }
}

document.getElementById("dnlbtn").onclick = dnlHandler;

function dnlHandler() {
    const body = document.getElementById("body");
    if (isDark) {
        sender(null, false);
        isDark = false;
        document.body.style.background = "black";
    }else{
        sender(null, true);
        isDark = true;
        document.body.style.background = "white";
    }
}

function sender(mobin, darin) {
    isMobile = (mobin !== null) ? mobin : isMobile;
    isDark = (darin !== null) ? darin : isDark;
    main(isMobile, isDark);
    event(isMobile,isDark);
    protofolio(isMobile, isDark);
}



