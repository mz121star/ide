define([], function () {
    var helper = {
        addEditor: function (dom) {

            var editor = ace.edit(dom);
            //editor.setTheme("ace/theme/twilight");

            editor.session.setMode("ace/mode/perl");
            require("ace/commands/default_commands").commands.push(
                {
                    name: "save code",
                    bindKey: "Ctrl-S",
                    exec: function (editor) {
                        console.log("press Ctrl-S key .Saving.... "+Date.now());
                        console.log(editor);
                    }
                },{
                    name: "save code",
                    bindKey: "F5",
                    exec: function (editor) {
                        console.log("press F5 key .running.... "+Date.now());
                        console.log(editor);
                    }
                }
            );

        }
    }
    return helper;
})