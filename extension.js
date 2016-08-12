var vscode = require('vscode');
var editor = vscode.window.activeTextEditor;
var configure = vscode.workspace.getConfiguration('EndOfLineFormatting');


function activate(context) {

    console.log('Formatting activate');

    var disposable = vscode.commands.registerCommand('extension.formatting', function () {
        if(editor.selection.isEmpty)
        {   
            vscode.window.showInformationMessage('Part string did not selected for formatting!');
            return;
        }

        var regexpPatternDef = "\\\\r\\\\n";
        var regexpPattern = new RegExp(regexpPatternDef, "g");
        var replaceChar = "\n";

        if(configure.has('regexpPattern')){
            regexpPattern =  new RegExp(configure.get("regexpPattern", regexpPatternDef));          
        }
        if(configure.has("replaceChar")){
            replaceChar = configure.get("replaceChar", replaceChar);
        }

        var selectStr = editor.document.getText(editor.selection);
        var replaceStr = selectStr.replace(regexpPattern, replaceChar);

            editor.edit(function(e){
            e.replace(editor.selection, replaceStr);
        });

        // TODO Check char in string
        //vscode.window.showInformationMessage('Not found \\r\\n in string!');
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;