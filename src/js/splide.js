const splide = new Splide( '.splide', {
    perPage    : 2,
    perMove    : 1,
    height     : '9rem',
    focus      : 'center',
    trimSpace  : false,
    breakpoints: {
        600: {
            perPage: 2,
            height : '6rem',
        },
    },
} );

splide.mount();