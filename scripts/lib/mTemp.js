define(['underscore', 'jquery'], function (_, $) {
    var RegexPage = /{{page&gt;(\w+)}}/gmi;
    var localMethod = {
        LoadController: function (ctrl) {
            require(["../../views/" + ctrl], function (r) {
                var c = new r();
                c.init();
            });
        }
    }
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
            this._defaultParams.pageUrl = "http://"+document.location.host + "/" + this._defaultParams.pageUrl + "/";
            return this;
        },
        Start: function () {

            var params = this._defaultParams;
            var doc = document.body;
            var CTRL;
            doc.innerHTML = doc.innerHTML.replace(RegexPage, function (s$, s) {
                CTRL = s;
                localMethod.LoadController(CTRL);
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



