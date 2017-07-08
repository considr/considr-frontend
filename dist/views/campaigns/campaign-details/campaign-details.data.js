angular.module('consider-me')
       .factory('campaignDetailsData', function (xhr, $q) {
            return {
                getCampaignParliamentarians: function (campaignId,locationId) {          
                    return xhr.call({
                        url: 'api/Constituencies/listOfParliamentariansFromCampaignIdOrConstituencyCode?campaign_id='+campaignId+'&constituency_code='+locationId
                    });
                },

                getCampaignDetails: function (campaignId) {          
                    return xhr.call({
                        url: 'api/Campaigns/'+campaignId
                    });
                },

                submitFeedBack: function (params) {
                    return xhr.call({
                        url: 'api/Calls/addCallToCampaignWithResult',
                        method:'post',
                        data:params
                    });
                }
            };
        });

