    /*======================================
    =            Initialization            =
    ======================================*/
    angular
        .module('consider-me')
        .controller('campaignDetailsCtrl', function ($scope,$state,$sce,$stateParams,campaignDetailsData) {

            var locationId=$stateParams.location;
            var campaignId=$stateParams.id;
            var campaignName=$stateParams.name;
            $scope.availableParliamentarians=[];
            console.log($stateParams);

            
$scope.variables={
	currentParliamentariansIndex:0,
    isFeedbackShown:false,
    descriptionHtml:"",
    feedbackBody:""
}


    /*=====  End of Initialization  ======*/


    /*=================================
    =            Functions            =
    =================================*/
$scope.getCampaignParliamentarians=function()
{
    campaignDetailsData.getCampaignParliamentarians(campaignId,locationId)
        .then(function (data) {
            console.log(data);
            $scope.availableParliamentarians=data.result;
         
          
        });
}
$scope.getCampaignParliamentarians();


$scope.getCampaignDetails=function()
{
   campaignDetailsData.getCampaignDetails(campaignId)
        .then(function (data) {
            console.log(data);
            $scope.currentCampaign=data;
            $scope.variables.descriptionHtml=$scope.toTrustedHTML($scope.currentCampaign.script);
          
        });
}
$scope.getCampaignDetails();

$scope.submitFeedback=function(){
    if(!$scope.variables.feedbackBody)
    {
        alert("Please don't leave feedback empty.")
        return false;
    }
    campaignDetailsData.submitFeedBack({
        "campaign_id": campaignId,
        "constituency_code": locationId,
        "parliamentarian_id":  $scope.availableParliamentarians[$scope.variables.currentParliamentariansIndex].id,
        "call_completed": true,
        "call_result": $scope.variables.feedbackBody,
        "call_starts": new Date
    }).then(
        function(data){

            if(data.result=="Success")
            {
                alert("Thank You! We got your feedback.");
                $scope.variables.feedbackBody="";
                $scope.variables.isFeedbackShown=false;
            }
        })
}

$scope.nextParliamentarian=function(){
	if($scope.variables.currentParliamentariansIndex<($scope.availableParliamentarians.length-1))
	    $scope.variables.currentParliamentariansIndex++;
	else
		alert("We are sorry. No more Parliamentarians are available.")
}

$scope.gotoCampaigns=function()
{
     $state.go('campaigns', 
        {
            location:locationId,
            name:campaignName,
         }
         );
}

$scope.showFeedback=function()
{
    $scope.variables.isFeedbackShown=true;
}



$scope.toTrustedHTML = function( html ){
    return $sce.trustAsHtml( html );
}

    /*=====  End of Functions  ======*/

    /*==============================
    =            Events            =
    ==============================*/



    /*=====  End of Events  ======*/


    });


    