
var myHome = angular.module("MyHome", [])
    .controller("MyHomeController", function ($scope) {       
        $scope.employees = employees;
        $scope.sortColumn = "FirstName";
        $scope.reverseSort = false;
        $scope.ShowGender = true;
        $scope.SortColumn = function(sortCol) {
            $scope.reverseSort = ($scope.sortColumn == sortCol) ? !$scope.reverseSort : false;
            $scope.sortColumn = sortCol;
        };
        $scope.FetchClass = function (sortCol)
        {
            return ($scope.sortColumn == sortCol) ? (!$scope.reverseSort ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down') : '';
        }
    });