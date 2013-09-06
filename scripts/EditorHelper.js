define([], function () {
    var helper=function(){
        this.editorCollections=[];

    };
    /***
     *
     * @param dom
     * @param opts  {}
     */
    helper.prototype.addEditor= function (dom,opts) {

        var editor = ace.edit(dom);
        //editor.setTheme("ace/theme/twilight");
        opts=opts||{};
        var type=opts.type||"perl",title=opts.title||Date.now();
        editor.session.setMode("ace/mode/"+type);
        /*        require("ace/commands/default_commands").commands.push(
         {
         name: "save code",
         bindKey: "Ctrl-S",
         exec: function (editor) {
         console.log("press Ctrl-S key .Saving.... "+Date.now());
         console.log(editor);
         }
         }
         );*/

        ///on document change
        editor.getSession().on('change', function(e) {
            console.log(e)
        });
        // window.ee=editor
         editor.title=title;
        this.editorCollections.push(editor);
    };
    helper.prototype.removeEditor=function(){

    }
    helper.prototype.SaveAllDocuments=function(){
        console.log("save all documents");
    };
    helper.prototype.InsertText=function(){

    };
//    var helper = {
//        editorCollections:[],
//        addEditor: function (dom) {
//
//            var editor = ace.edit(dom);
//            //editor.setTheme("ace/theme/twilight");
//
//            editor.session.setMode("ace/mode/perl");
//    /*        require("ace/commands/default_commands").commands.push(
//                {
//                    name: "save code",
//                    bindKey: "Ctrl-S",
//                    exec: function (editor) {
//                        console.log("press Ctrl-S key .Saving.... "+Date.now());
//                        console.log(editor);
//                    }
//                }
//            );*/
//
//            ///on document change
//            editor.getSession().on('change', function(e) {
//                console.log(e)
//            });
//          // window.ee=editor
//           this.editorCollections.push(editor);
//        },
//        SaveAllDocuments:function(){
//                console.log("save all documents");
//        }
//    }
    return helper;
})