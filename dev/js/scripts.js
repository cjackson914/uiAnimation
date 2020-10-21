import {gsap} from "gsap";

import {toggleAnimation} from "./animation.js";
// import {backgroundAnimation} from "./background.js";
// toggleAnimation();
// backgroundNight();
// backgroundAnimation();


const mainTL = gsap.timeline({paused:true});

mainTL.add(toggleAnimation())
