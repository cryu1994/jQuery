$(document).ready(function () {
    $('img').click(function () {
        $(this).toggle('slow');
    });
    $('.restore').click(function () {
        $('img').show('fast');
    });
});