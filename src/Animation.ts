import gsap from 'gsap';
import { Root } from './Root';

export class Animation extends Root {
  constructor() {
    super();

    //Actions
    this.headerAction();
    this.bigNameAction();
    this.hamburgerAction();
    this.aboutAction();
    this.skillsAction();
    this.contactAction();
  }

  public hamburgerAction() {
    ScrollTrigger.create({
      trigger: '#about__line',
      start: 'top bottom',
      end: 'bottom top',
      onLeaveBack: () => {
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
      },
      onToggle: () => {
        gsap.to('#hamburger', {
          opacity: 1,
          width: 'clamp(4em, 4vw, 8em)',
          height: 'clamp(4em, 4vw, 8em)'
        });

        gsap.to('#hamburger-symbol', {
          opacity: 1,
          visibility: 'visible',
          fontSize: 'clamp(2.5em, 3.5vw, 8em)'
        });
      }
    });
  }

  public navbarMenuAction(e: Event) {
    const element = e.target as HTMLElement;

    if (element) {
      switch (element.textContent?.trim()) {
        case 'About': {
          this.changeScrollPosition('#about');
          break;
        }
        case 'Works': {
          this.changeScrollPosition('#works');
          break;
        }
        case 'Contact': {
          this.changeScrollPosition('#contact');
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  public sidebarAction(e: Event) {
    const element = e.target as HTMLElement;

    if (element.tagName === 'DIV') {
      switch (element.textContent) {
        case 'To the TOP ↑':
          this.changeScrollPosition('#header');
          break;
        case 'About': {
          this.changeScrollPosition('#about');
          break;
        }
        case 'Works': {
          this.changeScrollPosition('#works');
          break;
        }
        case 'Contact': {
          this.changeScrollPosition('#contact');
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  public changeScrollPosition(id: string = '') {
    gsap.to(window, { duration: 1.5, scrollTo: id });
    this.$sidebar.classList.add('sidebar-hide');
  }

  public bigNameAction() {
    ScrollTrigger.create({
      trigger: '.about__title',
      start: 'top bottom',
      onToggle: () => {
        gsap.fromTo(
          '.about__title',
          {
            y: 60,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.4
          }
        );
      }
    });
  }

  public headerAction() {
    const tl = gsap.timeline();

    gsap.fromTo(
      '.personal__expl',
      {
        opacity: 0.2
      },
      {
        opacity: 1,
        duration: 1
      }
    );

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
          delay: 0.35,
          duration: 1
        },
        0.5
      );

    gsap.fromTo(
      '.information__text',
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.35,
        duration: 1
      }
    );

    gsap.fromTo(
      '.big-name',
      {
        opacity: 0,
        delay: 0.35
      },
      {
        delay: 0.35,
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
        delay: 0.35,
        duration: 1
      }
    );
  }

  public aboutAction() {
    ScrollTrigger.create({
      trigger: '.about__title-mark',
      start: 'top bottom',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          '.about__line-animation',
          {
            x: -1000,
            filter: 'brightness(100%)'
          },
          {
            x: 0,
            filter: 'brightness(200%)',
            duration: 2
          }
        );
      }
    });

    ScrollTrigger.create({
      trigger: '.about-skills-title',
      start: 'bottom',
      once: true,
      onToggle: () => {
        gsap.fromTo(
          '.about-skills-title',
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 1.4
          }
        );
      }
    });
  }

  public skillsAction() {
    let tl = gsap.timeline();

    ScrollTrigger.create({
      trigger: '.about-skills-title',
      start: 'bottom bottom',
      once: true,
      onEnter: () => {
        tl.fromTo(
          '#skills__item-1',
          {
            y: 70,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3
          }
        );

        tl.fromTo(
          '#skills__item-2',
          {
            y: 70,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3
          }
        );

        tl.fromTo(
          '#skills__item-3',
          {
            x: -70,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.3
          }
        );

        tl.fromTo(
          '#skills__item-4',
          {
            x: -70,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.3
          }
        );

        tl.fromTo(
          '#skills__item-5',
          {
            x: -70,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.3
          }
        );

        tl.fromTo(
          '#skills__item-8',
          {
            y: 70,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3
          }
        );

        tl.fromTo(
          '#skills__item-9',
          {
            y: 70,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3
          }
        );

        tl.fromTo(
          '.skills__inside',
          {
            border: '2px white dashed'
          },
          {
            border: '2px white solid',
            duration: 1.4
          }
        );

        gsap.fromTo(
          '#skills__item-6',
          {
            x: 70,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.7
          }
        );

        gsap.fromTo(
          '#skills__item-7',
          {
            x: 70,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.7
          }
        );

        gsap.fromTo(
          '#skills__item-10',
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 3
          }
        );
      }
    });

    ScrollTrigger.create({
      trigger: '.skills',
      start: 'top bottom',
      onToggle: () => {
        gsap.fromTo(
          '.skills__title',
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 1
          }
        );
      }
    });
  }

  public worksAction() {
    ScrollTrigger.create({
      trigger: '.works',
      once: true,
      start: 'top bottom',
      onToggle: () => {
        gsap.fromTo(
          '.works__title',
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 2
          }
        );

        gsap.fromTo(
          '.works__recent-item',
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 2
          }
        );
      }
    });
  }

  public contactAction() {
    ScrollTrigger.create({
      trigger: '.contact',
      start: 'top bottom',
      onToggle: () => {
        gsap.fromTo(
          '.social-link-text',
          {
            opacity: 0,
            textDecoration: 'solid'
          },
          {
            opacity: 1,
            color: 'orange',
            textDecoration: 'underline',
            duration: 2
          }
        );
      }
    });
  }
}
