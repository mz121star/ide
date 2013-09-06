require.config({
    baseUrl: 'scripts/lib',
    paths: {
        jquery: 'jquery-1.10.2',
        jqLayout: 'jquery.layout-latest',
        jqueryui: 'jquery-ui-latest',
        underscore: 'underscore',
        mTemp: 'mTemp',
        idecore: '../idecore',
        ace: 'ace/ace',
        editorhelper: '../editorhelper' ,
        hotkeys:'../hotkeys',
        jqueryurl:'jquery.url'
    },
    shim: {
        'jqueryui': {deps: ['jquery']},
        'jqLayout': {deps: ['jquery', 'jqueryui']},
        'underscore': {exports: '_'},
        'mTemp': {deps: ['jquery', 'underscore', 'ace']},
        'editorhelper': {deps: ['ace']},
         'jqueryurl': {deps: ['jquery']}
    }
    //,
    //urlArgs: 'v=1.0.0.1'
});
require([
    'jquery',
    'jqueryui',
    'jqLayout',
    'mTemp',
    'ace',
    'hotkeys',
    'jqueryurl'
],
    function ($, jqueryui, jqlayout, mtemp) {
        $(function(){
            if (!window.console) console = {log: function () {
            }};
            $.ajax({
                type: "get",
                url: "test/data.js" ,
                dataType:"json"
            }).done(function (data) {
                    mtemp.config({
                        pageUrl: 'views'
                    }).Start();
                    $('body').layout({ applyDefaultStyles: true });
                    window.GlobalData=data;

                });


//            $.hotkeys.add('f5', function(){ alert("f5")});


        })


    });
/*
 require([
 'jquery',
 'jqueryui',
 'jqLayout'],
 function (jq) {
 jq.noConflict( true );
 jq('body').layout({ applyDemoStyles: true });
 });*/
