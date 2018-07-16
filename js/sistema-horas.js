$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

$(function () {
    $('[data-toggle="popover"]').popover()
  })

$('.popover-dismiss').popover({
    trigger: 'focus'
})