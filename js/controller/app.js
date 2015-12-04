'use strict';

var LaboratoryPage = LaboratoryPage || {};
var SettingsPage = SettingsPage || {};
var ResultsPage = ResultsPage || {};
var student = new Student();
var resources = new Resources();


//set routing to hash mode
m.route.mode = 'hash';

//set routing lists with components
m.route(document.getElementById("mainpage"), '/', {
    '/': LaboratoryPage,
    '/settings': SettingsPage,
    '/results': ResultsPage,
});

student.refreshGenerals();
resources.getResources(student.refreshLaboratory(m.route(resources.urls.laboratory)));
//
//////bootstrap
//$(function () {
//    //$('#mainpage').popover({
//    //    selector: '[data-toggle=popover]',
//    //    container: 'body',
//    //    animation: true
//    //});
//
//    $('html').on('click', function (e) {
//
//        $('[data-toggle="popover"]').each(function () {
//            //the 'is' for buttons that trigger popups
//            //the 'has' for icons within a button that triggers a popup
//
//            if (!$(this).is(e.target)
//                && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
//                $(this).popover('hide');
//            }
//            else {
//                $(this).popover('toggle');
//            }
//        });
//
//        $('.popover').css('display', 'none');
//        //bring popover back if trigger element is clicked
//        $('[data-toggle="popover"]').each(function () {
//            if ($(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
//                $('.popover').css('display', 'block');
//            }
//        });
//    });
//});

