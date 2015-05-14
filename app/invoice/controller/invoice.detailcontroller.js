/**
 * Created by gurushantu on 5/4/2015.
 */
angular.module("invoice")
    .controller('invoiceDetailCtrl', ["$scope", "$stateParams","invoiceFactory", "invoiceDetailFactory", function($scope, $stateParams, invoiceFactory, invoiceDetailFactory){
            $scope.id = $stateParams.invoiceId;
            invoiceDetailFactory.invoicedetailList = [];
            $scope.success = false;
            $scope.warning = false;

            for (var i=0; i< invoiceFactory.invoices.length; i++){
                if(invoiceFactory.invoices[i].invoiceCustomer.id == $scope.id){
                    invoiceDetailFactory.addInvoiceDetail(invoiceFactory.invoices[i]);
                }
            }
                $scope.grandTotal = 0;
                if(invoiceDetailFactory.invoicedetailList.length != 0){
                    $scope.lists = invoiceDetailFactory.invoicedetailList;
                    $scope.cname = $scope.lists[0].invoiceCustomer.name;
                    $scope.ccity = $scope.lists[0].invoiceCustomer.city;

                    for(var j=0; j<$scope.lists.length;j++){
                        if( $scope.lists[j].paid != true){
                            $scope.grandTotal = $scope.grandTotal + $scope.lists[j].totalCost;
                        }
                    }
                    $scope.success = true;
                    $scope.warning = false;

                }else {
                    $scope.cname = "";
                    $scope.ccity = "";
                    $scope.warning = true;
                    $scope.success = false;
                }
    }]);