////////////////////////////////////////////
///////    Initilization    ////////////////
////////////////////////////////////////////

/*** Definition of the main app module and its dependencies ***/
angular
    .module('consider-me')
    .config(config)
    .constant('config', {
        DATE_FORMAT: 'MMMM D, YYYY',
        DATE_TIME_FORMAT: 'MMMM D, YYYY hh:mm a',
        LONG_DATE_FORMAT: 'dddd, MMMM D, YYYY',
        LONG_DATE_TIME_FORMAT: 'dddd, MMMM D, YYYY hh:mm a',
        APP_VERSION: '1.0.0',
        ENVIRONMENTS: {
            'dev': { name: 'Development', backendUrl: 'http://www.considr.me/' },
            'testing': { name: 'Staging & QA', backendUrl: '' },
            'live': { name: 'Live', backendUrl: 'http://www.considr.me/' }
        },
        ACTIVE_ENVIRONMENT: 'dev',
        TIMEOUT: 20000,
        GET_BACKEND_URL: function () {
            return this.ENVIRONMENTS[this.ACTIVE_ENVIRONMENT].backendUrl;
        },
        IS_DEV: function(){
            return this.ACTIVE_ENVIRONMENT === 'dev';
        }
    });

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
            abstract:true ,    
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'index',
                        files: [
                            'views/index/index.js',                                                    
                        ]
                    });
                }]
            }        
           
        })

        /*=====  End of Abstract Main State  ======*/

        /*==================================
        =            Home State            =
        ==================================*/

        .state('home', {
            data: {},
            url: "/",
            templateUrl: "views/home/home.html",
            controller:"homeCtrl",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'home',
                        files: [
               
                            'views/home/home.js',
                                                    
                        ]
                    });
                }]
            }
        })

        /*=====  End of Home State  ======*/

        /*======================================
        =            Campaigns State            =
        ======================================*/

        .state('campaigns', {
            data: {},
            url: '/campaigns?location&name',
            templateUrl: "views/campaigns/campaigns.html",
            controller: 'campaignsCtrl',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'views/campaigns/campaigns.ctrl.js',
                            'views/campaigns/campaign/campaign.component.js',
                            'views/campaigns/campaigns.data.js',                           
                            
                        ]
                    });
                }]
            }
        })

        .state('campaign-details', {
            data: {},
            url: "/campaigns/:id?location&name",
            templateUrl: "views/campaigns/campaign-details/campaign-details.html",
            controller:"campaignDetailsCtrl",
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load({
                        name: 'campaign-details',
                        files: [
                                  'views/campaigns/campaign-details/campaign-details.ctrl.js',
                                  'views/campaigns/campaign-details/campaign-details.data.js',
                            ]
                    });

                }]
            },
          
        })

    /*=====  End of Representative State  ======*/
}
