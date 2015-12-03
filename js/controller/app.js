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

////bootstrap
$(function () {
    $('#mainpage').tooltip({
        selector: '[data-toggle=tooltip]'
    });
    $('#mainpage').popover({
        selector: '[data-toggle=popover]'
    });
});

