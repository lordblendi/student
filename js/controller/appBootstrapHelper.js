'use strict';

/*
 bootstrap helper functions
 setting the popover to disappear on next click
 */

$(function () {
    $('html').on('click', function (e) {

        $('[data-toggle="popover"]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target)
                && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
            else {
                $(this).popover('toggle');
            }
        });

        $('.popover').css('display', 'none');
        //bring popover back if trigger element is clicked
        $('[data-toggle="popover"]').each(function () {
            if ($(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $('.popover').css('display', 'block');
            }
        });
    });
});

