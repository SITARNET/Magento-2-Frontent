// define([
//     'uiComponent',
//     'jquery',
//     'ko'
// ], function (Component, $, ko) {
//     'use strict';
//
//     return Component.extend({
//         default: {
//             inputVal: '',
//             text: '123',
//             isVisible: ko.observable(true)
//         },
//
//         initialize: function () {
//             this._super();
//         },
//
//         initObservable: function () {
//             this._super().observe(['inputVal', 'text']);
//             this.isVisible.subscribe(function (val) {
//                 console.log(val);
//             });
//             return this;
//         },
//
//         clickButton: function () {
//             this.isVisible(!this.isVisible());
//         }
//
//     });
// });


define([
    "uiComponent",
    "jquery",
    "ko"
], function (Component, $, ko) {
    "use strict"

    return Component.extend({
        defaults: {
            from: ko.observable('123'),
            isSelected: ko.observable(true)
        },

        initialize: function () {
            this._super()

            this.from.subscribe(function (Val) {
                console.log(Val)
            })
            this.isSelected.subscribe(function (Val) {
                if(Val == false) {
                    alert('Magento 2')
                }
            })
        },
    })
});
