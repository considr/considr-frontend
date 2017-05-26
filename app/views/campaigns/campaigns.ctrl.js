angular
    .module('consider-me')

    .controller('campaignsCtrl', function ($scope, campaignsData) {
        var pageSize = 10;
        $scope.currentCountry = 'Berlin';
        $scope.campaigns;
        var req = campaignsData.getCampaigns().then(function (data){
            $scope.campaigns = data;
        });
    });
