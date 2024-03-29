sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'elearningapp/test/integration/FirstJourney',
		'elearningapp/test/integration/pages/CategoriesList',
		'elearningapp/test/integration/pages/CategoriesObjectPage',
		'elearningapp/test/integration/pages/CoursesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CategoriesList, CategoriesObjectPage, CoursesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('elearningapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCategoriesList: CategoriesList,
					onTheCategoriesObjectPage: CategoriesObjectPage,
					onTheCoursesObjectPage: CoursesObjectPage
                }
            },
            opaJourney.run
        );
    }
);