jQuery(document).ready(function() {
    $(function () {
        $('#defaultCountdown').countdown({until: new Date(2024, 9, 5, 20)}); // year, month (0-indexed), date, hour
    });
});