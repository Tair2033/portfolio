import { gsap } from 'gsap';

export const tl = gsap.timeline();

tl.fromTo(
  '.menu__item',
  {
    y: -20,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.4
  },
  0.5
).fromTo(
  '.navbar__right',
  {
    x: 20,
    opacity: 0
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.4
  },
  0.5
);

gsap.fromTo(
  '.information__text',
  {
    y: 20,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7
  }
);

gsap.fromTo(
  '.big-name',
  {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 1
  }
);

gsap.fromTo(
  '.personal__picture-image',
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.9
  }
);
