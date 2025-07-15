sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zrap.project1',
            componentId: 'ZC_ITEMSObjectPage',
            contextPath: '/ZC_ITEMS'
        },
        CustomPageDefinitions
    );
});