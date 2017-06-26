angular
    .module('consider-me')

    .controller('campaignsCtrl', function ($rootScope,$scope, $stateParams,$state, campaignsData,getRegions) {
        var pageSize = 10;
        var pageNumber = 1;
       
        $scope.noMore = false;
        $scope.initReady = false;
         $scope.isSelectionShown=false;
         $scope.data={
             model:null,
         }
  
        $scope.currentCountry = {
            name:$stateParams.name,
            id:$stateParams.location
        }
        $scope.campaigns = [];
        


       
        $scope.getCampaigns = function () {
                    $scope.req = campaignsData.getCampaigns($scope.currentCountry.id)
                        .then(function (data) {
                            console.log(data);
                            $scope.campaigns=data.result;
                         
                        });
                };
        $scope.getCampaigns();


        function getConstituencyList() {
            getRegions.then(function (data) {
                console.log(data)
                $scope.countries = data;
            })
        }
        getConstituencyList();

        $scope.showSelection=function()
        {
            $scope.isSelectionShown=true;
        }

        $scope.updateReigon=function(selection)
        {
            console.log(selection)
            $state.go('campaigns',
                {
                    location: selection['constituency_code'],
                    name: selection['constituency_name'],
                }
            );
           
        }


    });
