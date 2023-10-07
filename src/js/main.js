//scss
import '../scss/style.scss'
//js
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);//scrollTriggerをプラグインとして登録

const container = document.querySelector('#scroll-container');//要素取得
const height = container.clientHeight;//containerの表示域の高さを計算する
document.body.style.height = `${height}px`;//bodyに表示域の高さを格納

gsap.to(container, {
  y: -(height - document.documentElement.clientHeight),
  ease: 'none',
  scrollTrigger: {
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
  },
});