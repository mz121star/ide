define([], function () {
    var BrowserController = function () {
        this.init = function () {
            $(".preview_iframe").attr("src", GlobalData.siteinfo.url);
            $("#browsertext").val(GlobalData.siteinfo.url)    ;
            $("#browsergo").on("click", function () {
                var url = $("#browsertext").val();
                $(".preview_iframe").attr("src", url);
                $("#browsertext").val(url)    ;
                return false;
            })
        }
    };
    return BrowserController;
})