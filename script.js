var d = new Date();
var y = d.getFullYear();
document.getElementById("year").innerHTML = y;


var html = document.getElementById('html-code');
var css = document.getElementById('css-code');
var js = document.getElementById('js-code');

function run() {
    var output = document.getElementById('output');
    output.contentWindow.document.body.innerHTML = `${html.value} <style> ${css.value} </style> `;
    // output.contentWindow.document.body.innerHTML += '<style>'+css+'</style>';
    output.contentWindow.eval(js.value);
};


function download() {
    var zip = new JSZip();
    zip.file("index.html", html.value);
    zip.file("style.css", css.value);
    zip.file("script.js", js.value);
    zip.generateAsync({ type: "blob" })
        .then(function (content) {
            // see FileSaver.js
            saveAs(content, "projects.zip");
        });
        
};

// Syntax Highlighters
// ace.edit('html-code', {
//     mode: 'ace/mode/html',
//     theme: 'ace/theme/monokai',
// });