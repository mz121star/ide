define([
    'jquery',
    'jqueryui',
    'jqLayout',
    'mTemp'
],
    function ($,jqueryui,jqlayout,mtemp) {
        if (!window.console) console = {log: function() {}};
        mtemp.config({
            pageUrl:'views'

        }).Start();
        $('body').layout({ applyDefaultStyles: true });
    });