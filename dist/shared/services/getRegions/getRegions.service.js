angular.module('consider-me')
    .factory('getRegions', function ($q, $http) {
        var fetchReigons = $q.defer();
        var availableReigons = [];

        function getConstituencyList() {
            $http.get('constituency_list.json').then(function (data) {

                //Log Constituency List
                console.log("constituency_list", data);

                availableReigons = data.data;
                fetchReigons.resolve(availableReigons);

            });
        }
        getConstituencyList();
        return fetchReigons.promise;
    });

