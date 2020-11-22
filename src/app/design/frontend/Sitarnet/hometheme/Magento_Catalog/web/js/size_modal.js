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

    require(["jquery","mage/backend/tabs"], function($){
        $(function() {
            $('#tab_element').tabs({
                active: 'in_active',  // active tab elemtn id
                destination: '#tab_element_content', // tab content destination element id
                shadowTabs: []
            });
        });
    });

    return $.sitarnet.size_modal;

});
