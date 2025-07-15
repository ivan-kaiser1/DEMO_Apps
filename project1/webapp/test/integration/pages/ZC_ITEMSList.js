sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zrap.project1',
            componentId: 'ZC_ITEMSList',
            contextPath: '/ZC_ITEMS'
        },
        CustomPageDefinitions
    );
});