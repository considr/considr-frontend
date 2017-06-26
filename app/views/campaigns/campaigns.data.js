angular.module('consider-me')
    .factory('campaignsData', function (xhr, $q) {
        return {
            getCampaigns: function (countryId) {
                return xhr.call({
                    url: 'api/Constituencies/listOfCampaignsFromConstituencyCode?constituency_code='+countryId
                });
            },
        };
    });
