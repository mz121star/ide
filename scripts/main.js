require.config({
    baseUrl: 'scripts/lib',
    paths: {
        jquery: 'jquery-1.10.2',
        jqLayout: 'jquery.layout-latest',
        jqueryui: 'jquery-ui-latest',
        underscore: 'underscore',
        mTemp: 'mTemp',
        idecore: '../idecore'

    },
    shim: {
        'jqueryui': {deps: ['jquery']},
        'jqLayout': {deps: ['jquery','jqueryui']},
        'underscore': {exports: '_'},
        'mTemp': {deps: ['jquery', 'underscore']}

    }
    //,
    //urlArgs: 'v=1.0.0.1'
});
require([
    'jquery',
    'jqueryui',
    'jqLayout',
    'mTemp'
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
