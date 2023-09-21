var splide = new Splide( '.splide', {
  type   : 'loop',
pagination: false,
  perMove: 1,
  padding: { left: 60, right: 60},
  lazyLoad: true,
  breakpoints: {
    9000: {
          perPage: 5,
           gap: 65,
    },
    1000: {
          perPage: 4,
           gap: 65,
    },
    800: {
          perPage: 3,
           gap: 65,
    },
    640: {
        perPage: 2,
         gap: 60,
    },
    440: {
        perPage: 1,
         gap: 65,
    },
  },
} );

splide.mount();