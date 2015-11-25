'use strict';

var LaboratoryPage = LaboratoryPage || {};
var SettingsPage = SettingsPage || {};

//set routing to hash mode
m.route.mode = 'hash';

//set routing lists with components
m.route(document.getElementById("mainpage"), '/', {
    '/': LaboratoryPage,
    '/settings': SettingsPage,
    //'/settings': LaboratoryPage,
    //'/': SettingsPage,
});

m.route("/");
