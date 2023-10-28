//scss
import './../scss/style.scss'
//js
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
/*register*/
gsap.registerPlugin(ScrollTrigger);

//stickyHeader
const stickyHeader = () =>  {
  const headerElm = document.querySelector("#js-sticky-header");
  const headerHeight = document.querySelector(".header").clientHeight;
  if(headerElm.style.position = "sticky"){
    let lp = 0;
    window.addEventListener("scroll",function(){
      headerElm.style.transition = "0.5s";
      let cp = this.scrollY;
      if(lp < cp){
        headerElm.style.top = "-"+headerHeight+"px";
      }
      else if(lp > cp){
        headerElm.style.top = 0;
      }
      lp = cp;
    })
  }
}

//notScroll
function disableScroll() {
  document.body.classList.add('no-scroll');
}
function enableScroll() {
  document.body.classList.remove('no-scroll');
}

//loader
const loaderAnimation = () => {
  const loaderBg = document.querySelector('.js-loader-bg');
  const loaderName = document.querySelector('.js-loader-name');
  const header = document.querySelector(".header");
  const aboutMainTxt = document.querySelector(".about__ttl");
  const aboutSubTxt = document.querySelector(".about__feature");
  const aboutImg = document.querySelector(".about__img");

  disableScroll();

  gsap.set(header,{
    opacity:0,
    y: -30,
  })
  gsap.set(aboutMainTxt,{
    opacity:0,
    y: 50,
  })
  gsap.set(aboutSubTxt,{
    opacity:0,
    y: 50,
  })
  gsap.set(aboutImg,{
    opacity:0,
    y: 50,
  })
  gsap.set(loaderName,{
    opacity:0,
    y:0
  })

  //AnimationStart
  const tl = gsap.timeline();
  tl.to(
    loaderName,
    {
      opacity: 1,
      y:0,
      duration: 2,
    }
  )
  .to(loaderName,{
    opacity:0,
    duration: 2,
  })
  .to(loaderBg,{
    y:"-100%",
    duration:1,
    ease: "Power4.easeOut"
  })
  .to(header,{
    opacity:1,
    y:0,
  })
  .to(aboutMainTxt,{
    opacity:1,
    y:0,
    onComplete:() => {
      enableScroll();
    }
  })
  .to(aboutSubTxt,{
    opacity:1,
    y:0,
  })
  .to(aboutImg,{
    opacity:1,
    y:0
  })
}

//drawer
const drawer = () => {
  const drawerbtn = document.querySelector("#js-buttonHamburger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector('body');
  
  gsap.set(menu,{
    y:'-108%',
    opacity:1,
  })

  const tl = gsap.timeline();

  //drawer発火ボタンの属性切り替え
  drawerbtn.addEventListener("click",function(){
    body.classList.toggle('is-drawerActive');
    this.classList.toggle('is-drawerActive');
    tl.to(
      menu,{
      autoAlpha: 1,
      duration: 1,
      opacity:1,
      y:"-5%",
      ease: "Power4.easeOut"
    })
    if(this.getAttribute("aria-expanded") === "false"){
      this.setAttribute("aria-expanded","true");
      tl.play();
      disableScroll();
    }
    else{
      this.setAttribute("aria-expanded","false");
      tl.reverse();
      enableScroll();
    }
  })
}

stickyHeader();
drawer();
loaderAnimation();