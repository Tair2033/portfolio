import './style.css';
import './Sections/Header/header';
import './Sections/About/about';
import './Sections/Works/works';
import './Sections/Footer/footer';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
ScrollTrigger.normalizeScroll(true);

const footerText = document.getElementById('footer__text') as HTMLElement;
const sidebar = document.getElementById('sidebar') as HTMLElement;
export const navbar = document.getElementById(
  'navbar__left-menu'
) as HTMLElement;
const hamburger = document.getElementById('btn-hamburger');
const sidebarMenu = document.getElementById('sidebar__menu');

hamburger?.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-hide');
});

document.addEventListener('DOMContentLoaded', () => {
  sidebar.style.display = 'block';
});

sidebarMenu?.addEventListener('click', (e) => {
  const element = e.target as HTMLElement;

  if (element.tagName === 'DIV') {
    switch (element.textContent) {
      case 'To the TOP ↑':
        goTo('#header');
        break;
      case 'About': {
        goTo('#about');
        break;
      }
      case 'Works': {
        goTo('#works');
        break;
      }
      case 'Contact': {
        goTo('#contact');
        break;
      }
      default: {
        console.log(element.textContent);
        break;
      }
    }
  }
});

navbar?.addEventListener('click', (e) => {
  const element = e.target as HTMLElement;

  if (element) {
    switch (element.textContent?.trim()) {
      case 'About': {
        goTo('#about');
        break;
      }
      case 'Works': {
        goTo('#works');
        break;
      }
      case 'Contact': {
        goTo('#contact');
        break;
      }
      default: {
        break;
      }
    }
  }
});

function goTo(id: string = '') {
  gsap.to(window, { duration: 1.5, scrollTo: id });
  sidebar.classList.add('sidebar-hide');
}

new LocomotiveScroll({
  smooth: true
});

setTimeout(function () {
  document.body.classList.add('body_visible');
}, 350);

footerText.textContent = `@ ${new Date().getFullYear()} Enikeev Tair`;

window.addEventListener('DOMContentLoaded', checkWindowSize);
window.addEventListener('resize', checkWindowSize);

function checkWindowSize() {
  if (window.innerWidth <= 650) {
    gsap.to('#hamburger', {
      opacity: 1,
      width: 'clamp(4em, 5.5vw, 5em)',
      height: 'clamp(4em, 5.5vw, 5em)'
    });

    gsap.to('#hamburger-symbol', {
      opacity: 1,
      visibility: 'visible',
      fontSize: '41px'
    });
  } else {
    gsap.to('#hamburger', {
      opacity: 0,
      width: '0',
      height: '0'
    });

    gsap.to('#hamburger-symbol', {
      opacity: 0,
      visibility: 'hidden',
      fontSize: '0'
    });
  }
}
