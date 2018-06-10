
var myHome = angular.module("MyHome", [])
    .controller("MyHomeController", function ($scope) {
        $scope.employees = employees;
        $scope.sortColumn = "FirstName";
        $scope.reverseSort = false;
        $scope.ShowGender = true;
        $scope.TableData = "TableView.html";
        $scope.SortColumn = function (sortCol) {
            $scope.reverseSort = ($scope.sortColumn == sortCol) ? !$scope.reverseSort : false;
            $scope.sortColumn = sortCol;
        };
        $scope.FetchClass = function (sortCol) {
            return ($scope.sortColumn == sortCol) ? (!$scope.reverseSort ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down') : '';
        }
    });
myHome.controller("myController", function ($scope, $http) {
    $http.get("http://localhost/WebAPIDemo/ConsumerData.asmx/GetData")
        .then(function (response) {
            $scope.employees = response.data;
        });
  
});