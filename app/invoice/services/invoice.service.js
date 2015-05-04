/**
 * Created by gurushantu on 5/3/2015.
 */
angular.module('invoice')
    .factory('invoiceFactory', function(){
       return({
         invoices: [
             {id: 1000,
              invoiceCustomer: { id: 100, name: "ABCD", city: "Pune"},
              item : { name: "tablet", cost: "8000"},
                 quantity: "1",
                 totalCost: 8000
             },
             {id: 1001,
              invoiceCustomer: {id: 101, name:"XYZ", city: "Bombay"},
                 item: {name: "mobile", cost:"12000"},
                 quantity: "2",
                 totalCost: 24000
             }],
           addInvoice : function(invoice){
               this.invoices.push(invoice);
           }
       })
    });