import { gsap } from 'gsap';

export const tl = gsap.timeline();
const navbar = document.getElementById('navbar__left-menu') as HTMLElement;

navbar.addEventListener('mouseenter', (e) => {
  const element = e.target as HTMLElement;
  gsap.fromTo(
    `#${element.id}`,
    {
      x: 0,
      y: 0
    },
    {
      x: 10,
      y: 20
    }
  );
  if (element.tagName === 'LI') {
  }
});

navbar.addEventListener('mouseleave', (e) => {
  const element = e.target as HTMLElement;
  gsap.fromTo(
    `#${element.id}`,
    {
      x: 10,
      y: 20
    },
    {
      x: 0,
      y: 0
    }
  );
});

tl.fromTo(
  '#menu-about',
  {
    y: -30,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.2
  },
  0.2
)
  .fromTo(
    '#menu-works',
    {
      y: -30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.4
    },
    0.2
  )
  .fromTo(
    '#menu-contact',
    {
      y: -30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6
    },
    0.2
  )
  .fromTo(
    '.navbar__right',
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 1
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
