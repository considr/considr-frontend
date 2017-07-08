angular
    .module('consider-me')
    .component('campaign', {
        templateUrl: 'views/campaigns/campaign/campaign.component.html',
        controller: 'campaignCtrl',
        bindings: {
            campaign: '='
        }
    })

    .controller('campaignCtrl', function ($scope,$stateParams) {
        $scope.isMored = false;
        $scope.campaignData=$stateParams

        $scope.toggleReadMore = function () {
            $scope.isMored = !$scope.isMored;
        }

        
        console.log($stateParams);
    });

