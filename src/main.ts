import './style.css';
import './Sections/Header/header';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

new LocomotiveScroll({
  smooth: true
});

// ScrollTrigger.create({
//   trigger: '.box-c',
//   pin: true,
//   start: 'center center',
//   end: '+=900',
//   markers: true
// });

function initLoader() {
  var tl = gsap.timeline();
  tl.set('.', {});
}

// initLoader();
