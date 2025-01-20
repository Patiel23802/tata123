
var app = angular.module('loginApp', []);

app.controller('LoginController', function ($scope) {
    $scope.employeeId = '';
    $scope.password = '';

    $scope.login = function () {
        if ($scope.employeeId && $scope.password) {
            alert('Welcome to Tata Power, Employee ID: ' + $scope.employeeId + '!');
        } else {
            alert('Please fill in both fields to proceed.');
        }
    };
});
