sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        Test: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        },

	Test: function(oEvent) {
        MessageToast.show("Custom handler invoked.");
        }
    };
});
