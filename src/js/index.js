import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { preloader } from './preloader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// preload the images
preloader();

// All path elements in the page
const paths = [...document.querySelectorAll('path.path-anim')];

// Smooth scrolling initialization (using Lenis https://github.com/studio-freight/lenis)
const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
});
const scrollFn = () => {
    lenis.raf();
    requestAnimationFrame(scrollFn);
};
requestAnimationFrame(scrollFn);

// Animate the d attribute (path initial ) to the value in data-path-to;
// start when the top of its SVG reaches the bottom of the viewport and
// end when the bottom of its SVG reaches the top of the viewport
paths.forEach(el => {
    const svgEl = el.closest('svg');
    const pathTo = el.dataset.pathTo;

    gsap.timeline({
        scrollTrigger: {
            trigger: svgEl,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    })
    .to(el, {
        ease: 'none',
        attr: { d: pathTo }
    });
});


import { preloadImages } from './utils';

// preload images then remove loader (loading class)
preloadImages('.tiles__line-img').then(() => document.body.classList.remove('loading'));

// frame element
const frame = document.querySelector('.frame');

// overlay (SVG path element)
const overlayPath = document.querySelector('.overlay__path');

// menu (wrap) element
const menuWrap = document.querySelector('.menu-wrap');

// menu items
const menuItems = menuWrap.querySelectorAll('.menu__item');

// open menu button
const openMenuCtrl = document.querySelector('button.button-menu');

// close menu button
const closeMenuCtrl = menuWrap.querySelector('.button-close');

// big title elements
const title = {
    main: document.querySelector('.content__title-main'),
    sub: document.querySelector('.content__title-sub')
};

let isAnimating = false;

// opens the menu
const openMenu = ()  => {

    if ( isAnimating ) return;
    isAnimating = true;
    gsap.timeline({
            onComplete: () => isAnimating = false
        })
        .set(overlayPath, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
        }, 0)
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
            onComplete: () => {
                frame.classList.add('frame--menu-open');
                menuWrap.classList.add('menu-wrap--open');
            }
        })
        // title elements
        .to([title.main, title.sub], {
            duration: 0.8,
            ease: 'power3.in',
            y: -200,
            stagger: 0.05
        }, 0.2)

        // now reveal
        .set(menuItems, {
            opacity: 0
        })
        .set(overlayPath, {
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
        })
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
        // menu items translate animation
        .to(menuItems, {
            duration: 1.1,
            ease: 'power4',
            startAt: {y: 150},
            y: 0,
            opacity: 1,
            stagger: 0.05
        }, '>-=1.1');

}

// closes the menu
const closeMenu = ()  => {

    if ( isAnimating ) return;
    isAnimating = true;
    gsap.timeline({
            onComplete: () => isAnimating = false
        })
        .set(overlayPath, {
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
        }, 0)
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
            onComplete: () => {
                frame.classList.remove('frame--menu-open');
                menuWrap.classList.remove('menu-wrap--open');
            }
        })
        // now reveal
        .set(overlayPath, {
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
        })
        .to(overlayPath, {
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        // title elements
        .to([title.main, title.sub], {
            duration: 1.1,
            ease: 'power4',
            y: 0,
            stagger: -0.05
        }, '>-=1.1')
        // menu items translate animation
        .to(menuItems, {
            duration: 0.8,
            ease: 'power2.in',
            y: 100,
            opacity: 0,
            stagger: -0.05
        }, 0)

}


// click on menu button
openMenuCtrl.addEventListener('click', openMenu);
// click on close menu button
closeMenuCtrl.addEventListener('click', closeMenu);

