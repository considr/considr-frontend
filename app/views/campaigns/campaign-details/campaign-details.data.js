angular.module('consider-me')
       .factory('campaignDetailsData', function (xhr, $q) {

            return {
                getCampaigns: function (countryId) {
          
                    // return $q.when(data);
                    return xhr.call({
                        url: 'api/Constituencies/listOfCampaignsFromConstituencyCode?constituency_code=Germany'
                    });
                },
            };
        });

