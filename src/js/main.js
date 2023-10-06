//scss
import '../scss/style.scss'
//js
import SplitType from 'split-type'
import { gsap } from "gsap";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

const fvText = new SplitType(".c-fv__text");
const headerText = new SplitType(".c-header__text");
const logo = new SplitType(".c-header__logo");

const headerAnimation = () => {
  /* ヘッダーリンクのアニメーション */
  gsap.to(".c-header__text.--home .char", {
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: Power2.easeInOut,
  });
  gsap.to(".c-header__text.--aboutus .char", {
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: Power2.easeInOut,
  });
  gsap.to(".c-header__text.--service .char", {
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: Power2.easeInOut,
  });
  gsap.to(".c-header__text.--company .char", {
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: Power2.easeInOut,
  });
  gsap.to(".c-header__text.--contact .char", {
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: Power2.easeInOut,
  });
};

const tl = gsap.timeline();
/*1.キャッチコピーのテキストアニメーション*/
tl.to(fvText.chars, {
  y: 0,
  stagger: 0.05,
  duration: 1,
  ease: Power2.easeInOut,
})
  /*2.ロゴのテキストアニメーション*/
  .fromTo(
    logo.chars,
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      stagger: 0.05,
      duration: 1,
      ease: Power2.easeInOut,
    }
  )
  /*3.ヘッダーのテキストリンクのテキストアニメーション*/
  .call(headerAnimation)
  /*4.テキストの表示*/
  .to(".js-line-text", {
    delay: 0.5,
    autoAlpha: 1,
    duration: 2,
    ease: Power2.easeOut,
  })
  /*5.ラインアニメーションの表示*/
  .to(".js-line", {
    autoAlpha: 1,
  })
  /*6.背景画像の表示*/
  .fromTo(
    ".c-fv__bg",
    {
      autoAlpha: 1,
    },
    {
      duration: 1,
      autoAlpha: 0.2,
      ease: Power2.easeOut,
    },
    ">-1" /*前のアニメーションが終わる1秒前にアニメーションの開始*/
  );