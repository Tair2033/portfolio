import './style.css';
import './Sections/Header/header';
import './Sections/About/about';
import './Sections/Works/works';
import './Sections/Footer/footer';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Animation } from './Animation.ts';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

new LocomotiveScroll({
  el: document.querySelector('body') as HTMLElement,
  smooth: true
});

const animation = new Animation();

animation.$hamburger?.addEventListener('click', () => {
  animation.$sidebar.classList.toggle('sidebar-hide');
});

document.addEventListener('DOMContentLoaded', () => {
  animation.$sidebar.style.display = 'block';
});

animation.$navbar.addEventListener('click', (e) => {
  animation.navbarMenuAction(e);
});

animation.$sidebar.addEventListener('click', (e) => {
  animation.sidebarAction(e);
});

animation.$footerText.textContent = `@ ${new Date().getFullYear()} Enikeev Tair`;

setTimeout(function () {
  document.body.classList.add('body_visible');
}, 350);
