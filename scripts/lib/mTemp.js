define(['underscore', 'jquery'], function (_, $) {
    var RegexPage = /{{page&gt;(\w+)}}/gmi;

    var mTemp = {
        /***
         * opts {pageUrl:'views'}
         * @param opts
         */
        _defaultParams: {
            pageUrl: 'b',
            dom: 'mtemp'
        },
        config: function (opts) {
            _.extend(this._defaultParams, opts);
            this._defaultParams.pageUrl = document.location.href + this._defaultParams.pageUrl + "/";
            return this;
        },
        Start: function () {

            var params = this._defaultParams;
            var doc = document.body;

            doc.innerHTML = doc.innerHTML.replace(RegexPage, function (s$, s) {
                var d;
                $.ajax({
                    url: params.pageUrl + s + '.html',
                    async: false,
                    type: 'get'
                }).done(function (data) {
                        d = data;
                    });
                return d;
            });
        }
    };
    return mTemp;
})



