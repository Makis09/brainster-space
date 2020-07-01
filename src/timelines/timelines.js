import { TimelineMax as Timeline, Power1, Power4, gsap, CSSPlugin  } from 'gsap';
gsap.registerPlugin(CSSPlugin)

const getHomeTimeline = (node, delay) => {
  let timeline = new Timeline({ paused: true });
    const bgImage = node.querySelectorAll('.Homepage .MainImageAndHeader, .Homepage .MainImageAndHeader .darken ');
    const header = node.querySelector('.Homepage h1');
    header.innerHTML = '<span>' +
    header.innerHTML.split('').join('</span><span>') + '</span>';
    const headerspan = node.querySelectorAll('.Homepage h1 span');

      timeline
    .from(node, 0, { display: 'none',  autoAlpha: 0, delay })
    .from(bgImage, 1, { autoAlpha: 0, ease: Power1.easeOut })
    .staggerFrom(headerspan, 0.300, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.075);

  return timeline;
};

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const header = node.querySelector('.HorizontalBigCard').querySelectorAll('div h1, div p, div a, div img');

  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .staggerFrom(header, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline;
}

const getBlogTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const filters = node.querySelectorAll('.SpaceBlogFilters ul li');
  const carouselImg = node.querySelector('.carousel-inner div img');
  const carousel = node.querySelector('.carousel-caption').querySelectorAll('div span, div h1, div p, div a');
  const carousel1 = node.querySelectorAll('.custom-indicator, .carousel-control-prev, .carousel-control-next');
  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    .from(carouselImg, 0.01, { autoAlpha: 0, y: -50, ease: Power4.easeOut })
    .staggerFrom(filters, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125)
    .staggerFrom(carousel, 0.375, { autoAlpha: 0, y: 50, ease: Power4.easeOut }, 0.125)
    .staggerFrom(carousel1, 0.375, { autoAlpha: 0, y: 50, ease: Power4.easeOut }, 0.125);

  return timeline;
}

const getCalendarTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll('.rbc-month-view > div');
  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline;
}
const NoMatch = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const warning = node.querySelector('.NoMatch h1');
  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    .from(warning, 0.01, { autoAlpha: 0, ease: Power4.easeOut })

  return timeline;
}


export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay);
  else if (pathname === '/space-blog')
    timeline = getBlogTimeline(node, delay);
  else if (pathname === '/events')
    timeline = getCalendarTimeline(node, delay);
  else if (pathname === '/academies' || pathname === '/events-space')
    timeline = getDefaultTimeline(node, delay);
  else
  timeline = NoMatch(node, delay);

  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });
  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}