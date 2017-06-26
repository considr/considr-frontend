angular.module('consider-me')
       .factory('campaignDetailsData', function (xhr, $q) {
            return {
                getCampaignDetails: function (countryId) {          
                    return xhr.call({
                        url: 'api/Constituencies/listOfParliamentariansFromCampaignIdOrConstituencyCode?campaign_id='+'592199677fd05606dc6d4350'+'&constituency_code='+'003'
                    });
                },
            };
        });

