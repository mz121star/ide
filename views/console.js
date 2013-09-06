define(['editorhelper'], function (editorhelper) {
    var ConsoleController=function(){
         this.init=function(){
            var tabs= $( "#console-tabs" ).tabs();
             tabs.find( ".ui-tabs-nav" ).sortable({
                 axis: "x",
                 stop: function() {
                     tabs.tabs( "refresh" );
                 }
             });
             var helper=new editorhelper();
             helper.addEditor("SourceCode",{type:"html"}) ;
//             window.console={
//                 log:function(a){
//                      $("#Output").append("<div><span style='color: red'>>  </span>"+a+"</div>");
//                 }
//             }
         }
    };
    return ConsoleController;
})