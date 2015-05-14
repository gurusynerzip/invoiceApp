/**
 * Created by gurushantu on 5/4/2015.
 */
angular.module("invoice")
    .controller("invoiceController", ["$scope", "invoiceFactory", "customerFactory", function($scope, invoiceFactory, customerFactory){
        $scope.customers = customerFactory.customers;
        $scope.success = false;
        $scope.createInvoice = function(){
            $scope.calinvoiceId = invoiceFactory.invoices.length + 1000;
            $scope.item = {'name': $scope.newInvoice.item.name, 'cost': $scope.newInvoice.item.cost };
            invoiceFactory.addInvoice({'id': $scope.calinvoiceId, 'invoiceCustomer': {'id': $scope.invoiceCustomer.id, 'name': $scope.invoiceCustomer.name, 'city': $scope.invoiceCustomer.city},
             'item': $scope.item, 'quantity': $scope.newInvoice.quantity, 'paid': $scope.newInvoice.paid, 'totalCost': $scope.newInvoice.totalCost
            });
            $scope.success = true;
        };
        $scope.allinvoices = invoiceFactory.invoices;
        $scope.AddItem = function(){
            $scope.newInvoice.totalCost = $scope.newInvoice.item.cost * $scope.newInvoice.quantity;
        };
    }]);