/**
 * Created by gurushantu on 5/3/2015.
 */
angular.module('customer')
    .controller('customerCtrl', ['$scope', 'customerFactory', function($scope, customerFactory){

        $scope.createCustomer = function(){
            $scope.calulatedId = customerFactory.customers.length + 100;
            customerFactory.addCustomer({'id': $scope.calulatedId, 'name': $scope.newCust.name, 'city': $scope.newCust.city });
            resetCustForm();
            alert("Customer Created Successfully");
        }

        $scope.custs = customerFactory.customers;

        function resetCustForm() {
            $scope.newCust = {
                id: '',
                name: '',
                city: ''
            }
        }
    }]);