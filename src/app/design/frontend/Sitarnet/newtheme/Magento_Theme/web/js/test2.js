define([
    'jquery',
    'Magento_Ui/js/modal/modal'
], function ($, modal) {
    'use strict';

    $.widget('mage.reviewPopupList', {
        options: {
            content: '.content',
            config: {
                type: "popup",
                responsive: true,
                modalClass: 'review_modal_list',
                title: 'All reviews',
                buttons: []
            }
        },

        _create: function () {
            let self = this;
            $('body').on('click', this.element, function () {
                self.showBlock();
            });
        },

        showBlock: function () {
            let content = $(this.options.content)
            modal(this.options.config, content);
            content.modal('openModal');
        }
    });
    return $.mage.reviewPopupList;
});
