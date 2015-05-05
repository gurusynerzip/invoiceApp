/**
 * Created by gurushantu on 5/5/2015.
 */
angular.module('invoice')
    .factory('invoiceDetailFactory', function(){
        return ({
            invoicedetailList: [],
            addInvoiceDetail : function(invoicedetail){
                this.invoicedetailList.push(invoicedetail);
            }
        })
    })