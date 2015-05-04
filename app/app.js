angular.module('invoiceApp', ['customer','invoice'])
    .config([function(){
        // Configuration is where you configure provider  ( Not instances )
        console.log("configuration hook");
    }])
    .run([function(){
        // Run is when app gets kicked off
        console.log("Run hook");
    }]);