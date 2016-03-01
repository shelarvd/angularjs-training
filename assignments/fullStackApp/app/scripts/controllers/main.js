'use strict';

/**
 * @ngdoc function
 * @name iemApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iemApp
 */



angular.module('myApp').controller('MainCtrl',function($scope,updateService) {
  $scope.user = {};
  $scope.master = {};

    $scope.updateIncome = function(user) {
        console.log("update income"+$scope.userForm.$valid);
        var isUpdateIncome = true;
        if($scope.userForm.$valid) {
            updateService.update(isUpdateIncome,user);
            console.log("reset");
            $scope.reset();
        }
    }

    $scope.updateExpense = function(user) {
        if($scope.userForm.$valid) {
            updateService.update(false,user);
            $scope.reset();
        }
    }


    $scope.submitForm = function() {
       /* var a = updateService.update();*/
        console.log("form submit called");
    }

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
 /*Created expenses array*/
  $scope.expenses = updateService.getExpenseRecords();
  
  /*Created income array*/
  $scope.incomes = updateService.getIncomeRecords();
});


