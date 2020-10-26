import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const campingTL = gsap.timeline();

export function toggleAnimation(){

  campingTL.to("#sky",{duration:1, fill:"#3a6f84"},"play")
  .to("#sun",{morphSVG:{shape:"#moon"}, duration: 1, x:193, fill:"#D1D3D4"},"play")
  .from("#mooncraters",{duration: .3, alpha:0})

  .to("#ground",{duration: 1, fill:"#29353a"},"play")
  .to("#lake",{duration: 1, alpha:0},"play")
  .to("#canoe",{duration: 1, alpha:0, x:15},"play")
  .to("#table",{duration: 1, alpha:0, scale:.8},"play")
  .to("#path1, #path2",{duration: 1, alpha:0, drawSVG:"100%"},"play")
  .to("#tree1, #tree2, #tree3",{duration: 1, alpha:0, y:5},"play")

  .from("#tent",{duration: 1, alpha:0, scale:1.2},"play")
  .from("#logs-2",{duration: 1, alpha:0, scale:.8},"play")
  .from("#fire",{duration: 1, alpha:0, scale:.5, y:5})
  .from("#main-star",{duration: 1, alpha:0, x:-30, y:15, rotate:15, drawSVG: "100%"},"shooting-star")
  .from("#shoot1, #shoot2",{duration: 1, alpha:0, x:-30, y:15, rotate:-15, drawSVG: "100%"},"shooting-star")
  .from("#star-1, #star-2, #star-3, #star-4, #star-5, #star-6",{duration: .5, ease: "none", yoyo:true, scale:.5, alpha:0, stagger:.2},"play")
  .from("#tree4, #tree5, #tree6",{duration: 1, alpha:0, y:5},"play");


  return campingTL;
}