import { gsap } from 'gsap';

const about = document.getElementById('menu-about') as HTMLElement,
  works = document.getElementById('menu-works') as HTMLElement,
  contact = document.getElementById('menu-contact') as HTMLElement;

let menuItems = [about, works, contact];

menuItems.forEach((item: HTMLElement, index: number) => {
  item.addEventListener('mousemove', (e: Event) => {
    // console.log((e.target as HTMLElement).getBoundingClientRect());
  });
});
