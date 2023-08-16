import './style.css';
import './Sections/Header/header';
import './Sections/About/about';
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
