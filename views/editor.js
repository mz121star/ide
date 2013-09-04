define(['editorhelper'], function (helper) {
     console.log(helper);
    var EditorController = function () {
        this.init = function () {

            var tabTitle = $("#tab_title"),
                tabContent = $("#tab_content"),
                tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
                tabCounter = 2;

             var tabs = $("#tabs").tabs();

            // modal dialog init: custom buttons and a "close" callback reseting the form inside
            var dialog = $("#dialog").dialog({
                autoOpen: false,
                modal: true,
                buttons: {
                    Add: function () {
                        addTab();
                        $(this).dialog("close");
                    },
                    Cancel: function () {
                        $(this).dialog("close");
                    }
                },
                close: function () {
                    form[ 0 ].reset();
                }
            });

            // addTab form: calls addTab function on submit and closes the dialog
            var form = dialog.find("form").submit(function (event) {
                addTab();
                dialog.dialog("close");
                event.preventDefault();
            });

            // actual addTab function: adds new tab using the input from the form above
            function addTab() {
                var label = tabTitle.val() || "Tab " + tabCounter,
                    id = "tabs-" + tabCounter,
                    li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)),
                    tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";
                tabContentHtml="<pre id='"+id+"'>"+tabContentHtml+"</pre>"
                tabs.find(".ui-tabs-nav").append(li);
                tabs.append("<div id='" + id + "'><p>" + tabContentHtml + "</p></div>");
                tabs.tabs("refresh");
                tabCounter++;
                helper.addEditor(id) ;
            }

            // addTab button: just opens the dialog
            $("#add_tab")
                .button()
                .click(function () {
                    dialog.dialog("open");
                });

            // close icon: removing the tab on click
            tabs.delegate("span.ui-icon-close", "click", function () {
                var panelId = $(this).closest("li").remove().attr("aria-controls");
                $("#" + panelId).remove();
                tabs.tabs("refresh");
            });

            tabs.bind("keyup", function (event) {
                if (event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE) {
                    var panelId = tabs.find(".ui-tabs-active").remove().attr("aria-controls");
                    $("#" + panelId).remove();
                    tabs.tabs("refresh");
                }
            });

        /*    //add command to all new editor instaces
            require("ace/commands/default_commands").commands.push({
                name: "Toggle Fullscreen",
                bindKey: "ctrl+s",
                exec: function(editor) {
                    alert("saving..")
                }
            });
            var editor = ace.edit("editor");
            editor.setTheme("ace/theme/twilight");
            editor.session.setMode("ace/mode/javascript");
*/
            helper.addEditor("editor");
            $.ajax({
                type: "get",
                url: "test/data.js" ,
                dataType:"json"
            }).done(function (data) {
                    codes=data.code;
                    $.each(codes,function(i,item){
                        var title=item.title;
                        var content=item.content;
                        var label = title,
                            id = "tabs-" + tabCounter,
                            li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label)),
                            tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";
                        tabContentHtml="<pre id='"+id+"'>"+tabContentHtml+"</pre>"
                        tabs.find(".ui-tabs-nav").append(li);
                        tabs.append("<div id='" + id + "'><p>" + content + "</p></div>");
                        tabs.tabs("refresh");
                        tabCounter++;
                        helper.addEditor(id) ;
                    })


                });

        }
    };
    return EditorController;
})