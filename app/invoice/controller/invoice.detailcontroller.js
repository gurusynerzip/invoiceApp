/**
 * Created by gurushantu on 5/4/2015.
 */
angular.module("invoice")
    .controller('invoiceDetailCtrl', ["$scope", "$stateParams","invoiceFactory", "invoiceDetailFactory", function($scope, $stateParams, invoiceFactory, invoiceDetailFactory){
            $scope.id = $stateParams.invoiceId;
            invoiceDetailFactory.invoicedetailList = [];
            for (var i=0; i< invoiceFactory.invoices.length; i++){
                if(invoiceFactory.invoices[i].invoiceCustomer.id == $scope.id){
                    invoiceDetailFactory.addInvoiceDetail(invoiceFactory.invoices[i]);
                   // $scope.foundstate.push(invoiceFactory.invoices[i]);
                }
            }

            $scope.lists = invoiceDetailFactory.invoicedetailList;
            $scope.cname = $scope.lists[0].invoiceCustomer.name;
            $scope.ccity = $scope.lists[0].invoiceCustomer.city;
            $scope.grandTotal = 0;
            for(var j=0; j<$scope.lists.length;j++){
                $scope.grandTotal = $scope.grandTotal + $scope.lists[j].totalCost;
            }

            //console.log('from CTRl', invoiceFactory.invoices);
            //console.log(invoiceDetailFactory.invoicedetailList);
            //console.log( $scope.foundstate);
            //console.log($scope.id);
    }]);