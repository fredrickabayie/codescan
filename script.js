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
                cordova.plugins.notification.local.schedule({
    id: 1,
    title: "Production Jour fixe",
    text: "Duration 1h",
    firstAt: monday_9_am,
    every: "week",
    sound: "file://sounds/reminder.mp3",
    icon: "http://icons.com/?cal_id=1",
    data: { meetingId:"123#fg8" }
});

cordova.plugins.notification.local.on("click", function (notification) {
    joinMeeting(notification.data.meetingId);
});
            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    });
});
