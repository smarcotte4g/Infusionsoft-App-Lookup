// pop.js for popup.html

// This function is to open a new tab
function OpenInNewTab(url) {
  var ap = document.getElementsByName('app')[0].value;
  var url = 'http://' + ap + '.infusionsoft.com';
  var win = window.open(url, '_blank');
  win.focus();
}

// This function checks for a "ENTER" key click
function runScript(e) {
    if (e.keyCode == 13) {
        var tb = document.getElementById("scriptBox");
        eval(tb.value);
        return false;
    }
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', OpenInNewTab);
  main();
});