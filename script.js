/*jslint browser: true*/
/*global $, jQuery, alert, cordova*/

$(function () {
    "use strict";
    $("#scan_btn").click(function () {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                $("#code").val(result.text);
//                alert("We got a barcode\n" +
//                    "Result: " + result.text + "\n" +
//                    "Format: " + result.format + "\n" +
//                    "Cancelled: " + result.cancelled);
            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    });
});