angular
    .module('consider-me')
    .directive('loadingIndicator', function () {
        return {
            templateUrl: 'shared/directives/loading-indicator/loading-indicator.directive.html',
            controller: 'loadingIndicatorCtrl',
            scope: {
                loader: '='
            }
        }
    })

    .controller('loadingIndicatorCtrl', function ($scope) {
        // var isPromise = $scope.loader.then;
        if (isPromise($scope.loader)) {
            $scope.$watch('loader.$$state.status', function (newVal, oldVal) {
                if (newVal !== 1)
                    $scope.loading = true;
                else
                    $scope.loading = false;
            })
        }

        function isPromise(val) {
            // not one hundred percent accurate, but it works for now
            if (val && (typeof val.then === 'function')) {
                return true;
            }
            else {
                return false;
            }
        }
    });
