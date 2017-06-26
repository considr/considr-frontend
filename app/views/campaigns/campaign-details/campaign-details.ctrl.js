    /*======================================
    =            Initialization            =
    ======================================*/
    angular
        .module('consider-me')
        .controller('campaignDetailsCtrl', function ($scope,$stateParams,campaignDetailsData) {

            var locationId=$stateParams.location;
            $scope.availableParliamentarians=[];

            
$scope.variables={
	currentParliamentariansIndex:0,
}


    /*=====  End of Initialization  ======*/


    /*=================================
    =            Functions            =
    =================================*/
$scope.getCampaignDetails=function()
{
    $scope.req = campaignDetailsData.getCampaignDetails(locationId)
        .then(function (data) {
            console.log(data);
            $scope.availableParliamentarians=data.result;
          
        });
}
$scope.getCampaignDetails();

$scope.nextParliamentarian=function(){
	if($scope.variables.currentParliamentariansIndex<($scope.availableParliamentarians.length-1))
	    $scope.variables.currentParliamentariansIndex++;
	else
		alert("We are sorry. No more Parliamentarians are available.")
}

    /*=====  End of Functions  ======*/

    /*==============================
    =            Events            =
    ==============================*/



    /*=====  End of Events  ======*/


    });


    