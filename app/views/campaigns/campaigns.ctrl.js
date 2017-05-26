angular
    .module('consider-me')

    .controller('campaignsCtrl', function ($scope, $stateParams, campaignsData) {
        var pageSize = 10;
        var pageNumber = 1;
        var locationId = $stateParams.location;
        $scope.noMore = false;
        $scope.initReady = false;
        $scope.currentCountry = 'Berlin';
        $scope.campaigns = [];

        $scope.getCampaigns = function () {
            $scope.req = campaignsData.getCampaigns(locationId, pageNumber, pageSize)
                .then(function (data) {
                    $scope.campaigns = $scope.campaigns.concat(data);

                    if (data.length < (pageSize - 1)) {
                        $scope.noMore = true;
                    }
                    if (pageNumber === 1) {
                        $scope.initReady = true;
                    }
                    pageNumber++;
                });
        };
        $scope.getCampaigns();

    });
