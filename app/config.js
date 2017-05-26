////////////////////////////////////////////
///////    Initilization    ////////////////
////////////////////////////////////////////

/*** Definition of the main app module and its dependencies ***/
angular
    .module('consider-me')
    .config(config)

function config($stateProvider, $urlRouterProvider, $sceDelegateProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    //By default route to dashboard state
    $urlRouterProvider.otherwise("/");

    $stateProvider
        /*===========================================
        =            Abstract Main State            =
        ===========================================*/

        .state('index', {

            data: {},
            url: "",
            abstract: true,
        })

        /*=====  End of Abstract Main State  ======*/

        /*==================================
        =            Home State            =
        ==================================*/

        .state('home', {
            data: {},
            url: "/",
            templateUrl: "views/home/home.html",
            // resolve: {
            //     loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            //         return $ocLazyLoad.load({
            //             files: [
            //                 'core.config.js',
            //                 'shared/services/utils/xhr/xhr.service.js'
            //             ]
            //         });
            //     }]
            // }
        })

        /*=====  End of Home State  ======*/

        /*======================================
        =            Campaigns State            =
        ======================================*/

        .state('campaigns', {
            data: {},
            url: '/campaigns?location',
            templateUrl: "views/campaigns/campaigns.html",
            controller: 'campaignsCtrl',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'views/campaigns/campaigns.ctrl.js',
                            'views/campaigns/campaign/campaign.component.js',
                            'views/campaigns/campaigns.data.js',
                            'core/config.js',
                            'shared/services/utils/xhr/xhr.service.js',
                            'shared/directives/loading-indicator/loading-indicator.directive.js'
                        ]
                    });
                }]
            }
        })

        .state('campaign-details', {
            data: {},
            url: "/campaigns/:id?location",
            templateUrl: "views/campaigns/campaign-details/campaign-details.html",
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load({
                        name: 'campaign-details',
                        files: ['views/campaigns/campaign-details/campaign-details.ctrl.js']
                    });

                }]
            }
        })

    /*=====  End of Representative State  ======*/
}
