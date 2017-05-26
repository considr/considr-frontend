angular
    .module('consider-me')
    /*----------  Header  ----------*/

    .directive('header', function () {
        return {
            restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
            replace: true,
            templateUrl: "directives/header/header.html",
            // controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }
    })

    /*----------  Footer  ----------*/

    .directive('footer', function () {
        return {
            restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
            replace: true,
            templateUrl: "directives/footer/footer.html",
            // controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }
    });
    