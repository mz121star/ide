require.config({
    baseUrl: 'scripts/lib',
    paths: {
        jquery: 'jquery-1.10.2',
        jqLayout: 'jquery.layout-latest',
        jqueryui: 'jquery-ui-latest',
        underscore: 'underscore',
        mTemp: 'mTemp',
        idecore: '../idecore',
        ace:'ace/ace',
        editorhelper:'../editorhelper'
    },
    shim: {
        'jqueryui': {deps: ['jquery']},
        'jqLayout': {deps: ['jquery','jqueryui']},
        'underscore': {exports: '_'},
        'mTemp': {deps: ['jquery', 'underscore','ace']},
        'editorhelper':{deps: ['ace']}
    }
    //,
    //urlArgs: 'v=1.0.0.1'
});
require([
    'jquery',
    'jqueryui',
    'jqLayout',
    'mTemp',
    'ace'
],
    function ($, jqueryui, jqlayout, mtemp) {
        if (!window.console) console = {log: function () { }};
        mtemp.config({
            pageUrl: 'views'
        }).Start();
        $('body').layout({ applyDefaultStyles: true });
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
