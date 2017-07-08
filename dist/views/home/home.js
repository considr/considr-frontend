/*======================================
=            Initialization            =
======================================*/


angular
    .module('consider-me')
    .controller('homeCtrl', function ($rootScope,$scope,$state, $stateParams,$http,getRegions) {

$scope.countries=[];

$scope.variables={
    //Current Constituency
    selectedConstituency:'',

    //Only set to true after a valid choice from constituency list
    canSubmit:false
}

//Get Constituency List
getConstituencyList();
/*=====  End of Initialization  ======*/


/*=================================
=            Functions            =
=================================*/

function getConstituencyList(){
    getRegions.then(function (data) {
        console.log(data)
        $scope.countries = data;
    })
}

function validateMatchLength(match)
{
    if(match.length!=0){
        $scope.variables.canSubmit=true;
        $scope.variables.selectedConstituency=match[0];
    }

   else{
        $scope.variables.canSubmit=false;
        $scope.variables.selectedConstituency='';           
    }
    console.log("selectedConstituency",$scope.variables.selectedConstituency)
}



$scope.validateInput=function(input){
    //Case selection made via click on list item
    if(typeof input=="object")
    {
        console.log(typeof input)
        if(input.title)
        {
            var match=$scope.countries.filter(function(element){
                return element.constituency_name===input.title;
            });
            console.log(match)
            validateMatchLength(match);
        }
       

       else{
        console.log("Invalid Selection Type");
        return false;
       }
    }

    //Case user manually type in a string
    else if(typeof input=="string")
    {
        console.log(typeof input)
        var match=$scope.countries.filter(function(element){
            return element.constituency_name===input;
        });
        console.log(match)
        validateMatchLength(match);
    }
    

    
}

$scope.submitLocation=function()
{
    $state.go('campaigns', 
        {
            location:$scope.variables.selectedConstituency['constituency_code'],
            name:$scope.variables.selectedConstituency['constituency_name'],
         }
         );
}

/*=====  End of Functions  ======*/

/*==============================
=            Events            =
==============================*/



/*=====  End of Events  ======*/


});

