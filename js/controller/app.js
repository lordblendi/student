'use strict';

var LaboratoryPage = LaboratoryPage || {};
var SettingsPage = SettingsPage || {};
var ResultsPage = ResultsPage || {};
var student = new Student();
//set routing to hash mode
m.route.mode = 'hash';

//set routing lists with components
m.route(document.getElementById("mainpage"), '/', {
    '/': LaboratoryPage,
    '/settings': SettingsPage,
    '/results': ResultsPage,
});

m.route("/");
