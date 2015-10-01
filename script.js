/*jslint browser: true*/
/*global $, jQuery, alert, cordova*/

function alertCallback() {
    "use strict";

}

$(function () {
    "use strict";
    $("#scan_btn").click(function () {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                $("#code").val(result.text);
//                    "Format: " + result.format + "\n" +
                navigator.notification.alert(result.text, alertCallback, ['Product Scanned'], ['Done']);
            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    });
});
