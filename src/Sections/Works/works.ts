import LocomotiveScroll from 'locomotive-scroll';

new LocomotiveScroll({
  el: document.querySelector('.subjects__row') as HTMLElement,
  direction: 'horizontal',
  smooth: true
});
