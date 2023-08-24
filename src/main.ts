import './style.css';
import './Sections/Header/header';
import './Sections/About/about';
import './Sections/Works/works';
import './Sections/Footer/footer';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

const footerText = document.getElementById('footer__text') as HTMLElement;

footerText.textContent = `@ ${new Date().getFullYear()} Enikeev Tair`;

new LocomotiveScroll({
  smooth: true
});
