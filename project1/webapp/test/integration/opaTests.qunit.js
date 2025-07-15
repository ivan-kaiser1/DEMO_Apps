sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zrap/project1/test/integration/FirstJourney',
		'zrap/project1/test/integration/pages/ZC_ITEMSList',
		'zrap/project1/test/integration/pages/ZC_ITEMSObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_ITEMSList, ZC_ITEMSObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zrap/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_ITEMSList: ZC_ITEMSList,
					onTheZC_ITEMSObjectPage: ZC_ITEMSObjectPage
                }
            },
            opaJourney.run
        );
    }
);