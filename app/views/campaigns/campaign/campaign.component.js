angular
    .module('consider-me')
    .component('campaign', {
        templateUrl: 'views/campaigns/campaign/campaign.component.html',
        controller: 'campaignCtrl',
        bindings: {
            campaign: '='
        }
    })

    .controller('campaignCtrl', function ($scope) {
        $scope.isMored = false;

        $scope.toggleReadMore = function () {
            $scope.isMored = !$scope.isMored;
        }
    });

