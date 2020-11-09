define([
    "jquery",
    "Magento_Ui/js/modal/modal",
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
        },

        _create: function () {
            let self = this;
            $('.size-modal').on('click', this.element, function () {
                self.modalWindow();
            });
        },

        modalWindow: function () {
            let content = $(this.option.content);
            modal(this.option.config, content);
            content.modal('openModal');
        },
    });


    return $.sitarnet.size_modal;
});
