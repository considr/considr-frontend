angular
    .module('consider-me')
    .component('campaign', {
        templateUrl: 'views/campaigns/campaign/campaign.html',
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

// function campaignCtrl() {
//     this;
//     debugger
//     this.isMored = false;

//     this.toggleReadMore = function () {
//         this.isMored = !this.isMored;
//     }
// }
