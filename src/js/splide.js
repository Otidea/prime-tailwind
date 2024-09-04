const splide = new Splide( '.splide', {
    perPage    : 2,
    perMove    : 1,
    focus      : 'center',
    trimSpace  : false,
    breakpoints: {
        1280: {
            perPage: 1,
        },
    },
} );

splide.mount();