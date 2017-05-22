////////////////////////////////////////////
///////    Initilization    ////////////////
////////////////////////////////////////////

    /*** Definition of the main app module and its dependencies ***/
    angular
      .module('consider-me')
      .config(config)


function config($stateProvider, $urlRouterProvider,$httpProvider) {

    //By default route to dashboard state
    $urlRouterProvider.otherwise("/");


    $stateProvider
    /*===========================================
    =            Abstract Main State            =
    ===========================================*/
    
    .state('index', {

        data: {  },
        url: "",
        abstract:true,
        
       // controller: "mainCtrl",
       
     
       
    })
    
    /*=====  End of Abstract Main State  ======*/
    
   /*==================================
   =            Home State            =
   ==================================*/
   
   .state('home', {
       data: { },
       url: "/",        
       templateUrl:"views/home/home.html",   
          
   })
   
   /*=====  End of Home State  ======*/
   
    /*======================================
    =            Campaigns State            =
    ======================================*/
    
    .state('campaigns', {
        data: { },
        url: "/campaigns",        
        templateUrl:"views/campaigns/campaigns.html",      
    })
    
    /*=====  End of Campigns State  ======*/
    /*============================================
    =            Representative State            =
    ============================================*/
    
    .state('representatives', {
        data: { },
        url: "/representatives",        
        templateUrl:"views/representatives/representatives.html",    
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
           loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             // you can lazy load files for an existing module
                    return $ocLazyLoad.load({
                                                name: 'representatives',
                                                files: ['views/representatives/representatives.js']
                                            });
                   
           }]
         }  
    })
    
    /*=====  End of Representative State  ======*/
    
    
    
   
     

}


