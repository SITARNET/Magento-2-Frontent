define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    $.widget('sitarnet.test', {
        option: {
            wrapper_class: null,
                event: 'click'
        },

        _create: function () {
            this.bind();
            this.createSlider();
        },

        bind: function () {
            $('body').on(this.options.event, function () {
                alert(123);
            });
            $(this.options.wrapper_class).on('click', function() {
            })
        },

        createSlider: function () {
            $(this.element).slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }

    });

    return $.sitarnet.test;
});
