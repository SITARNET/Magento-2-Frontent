define([
    "jquery",
    "Magento_Ui/js/modal/modal",
    "tabs"
], function ($, modal) {
    'use strict';

    $.widget('sitarnet.size_modal', {
        option: {
            content: ".size_modal",
            config: {
                type: 'popup',
                responsive: true,
                innerScroll: true,
                buttons: [{
                    text: $.mage.__('CLOSE'),
                    class: '',
                    click: function () {
                        this.closeModal()
                    }
                }]
            },
            option: {
                openedState: "active",
                animate: {"duration": 100},
                active: 1, "disabled": [2],
                disabledState: "disabled"
            }
        },

        _create: function () {
            let self = this;
            $('.size-modal').on('click', this.element, function () {
                self.modalWindow();
            });

            $(this.element).tabs({"mage/tabs": this.option.option});
        },

        modalWindow: function () {
            let content = $(this.option.content);
            modal(this.option.config, content);
            content.modal('openModal');
        },
    });


    return $.sitarnet.size_modal;
});
