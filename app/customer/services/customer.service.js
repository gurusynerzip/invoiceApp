/**
 * Created by gurushantu on 5/3/2015.
 */

angular.module('customer')
    .factory('customerFactory',function(){
        return({
            customers:[
                { id: 100, name: "ABCD", city: "Pune" },
                { id: 101, name: "XYZ", city: "Bombay" }
            ],
            addCustomer: function(customer){
                this.customers.push(customer);
            }
        });

    });
