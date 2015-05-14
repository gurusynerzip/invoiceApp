/**
 * Created by gurushantu on 5/3/2015.
 */
angular.module('customer')
    .controller('customerCtrl', ['$scope', 'customerFactory', function($scope, customerFactory){
        $scope.success = false;
        $scope.warning = false;
        $scope.createCustomer = function(){
            /*if($scope.newCust.name == undefined){
                warningErr();
            }*/
            var customerName = $scope.newCust.name;
            var customerCity = $scope.newCust.city;

            if(($scope.newCust.name) && ($scope.newCust.name)){
            $scope.calulatedId = customerFactory.customers.length + 100;
            customerFactory.addCustomer({'id': $scope.calulatedId, 'name': $scope.newCust.name, 'city': $scope.newCust.city });
            resetCustForm();
            $scope.success = true;
            $scope.warning = false;
            } else {
                warningErr();
            }
        }
        $scope.custs = customerFactory.customers;

        function resetCustForm() {
            $scope.newCust = {
                id: '',
                name: '',
                city: ''
            }
        }

        function warningErr(){
            $scope.success = false;
            $scope.warning = true;
        }
    }]);