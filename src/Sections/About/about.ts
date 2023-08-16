import { gsap } from 'gsap';

ScrollTrigger.create({
  trigger: '#about__line',
  start: '',
  end: 'top center',
  onToggle: () => {
    gsap.to('#hamburger', {
      width: 'clamp(4em, 5.5vw, 5em)',
      height: 'clamp(4em, 5.5vw, 5em)'
    });

    gsap.to('#hamburger-symbol', {
      visibility: 'visible',
      fontSize: '40px'
    });
  }
});
