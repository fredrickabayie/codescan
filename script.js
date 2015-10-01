/*jslint browser: true*/
/*global $, jQuery, alert, cordova*/

function alertCallback() {
    "use strict";
    alert ("Notification done");
}

$(function () {
    "use strict";
    $("#scan_btn").click(function () {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                $("#code").val(result.text);
//                    "Format: " + result.format + "\n" +
            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    });
});


document.addEventListener('deviceready', function () {
    // window.plugin.notification.local is now available
    "use strict";
    window.plugin.notification.local.add({
        id:         "2",  // A unique id of the notifiction
        date:       Date,    // This expects a date object
        message:    "First",  // The message that is displayed
        title:      "Testing"  // The title of the message
    }, alertCallback, scope);
}, false);
