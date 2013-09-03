define([],function(){
    var ConsoleController=function(){
         this.init=function(){
            var tabs= $( "#console-tabs" ).tabs();
             tabs.find( ".ui-tabs-nav" ).sortable({
                 axis: "x",
                 stop: function() {
                     tabs.tabs( "refresh" );
                 }
             });
         }
    };
    return ConsoleController;
})