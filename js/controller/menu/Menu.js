'use strict';

var Menu = Menu || {};
/*
 menu controller
 getting the necessary data from the model, so the view can get it via the controller
 setting onclicks for each button. they ask the model to refresh data and sends a routing request
 */
Menu.controller = function () {
    this.displayname = student.getDisplayName();

    this.settingsOnClick = function () {
        student.refreshSettings(m.route(resources.urls.settings));
    };

    this.laborOnClick = function () {
        student.refreshLaboratory(m.route(resources.urls.laboratory));
    };

    this.resultsOnClick = function () {
        student.refreshResults(m.route(resources.urls.results));

    };
};




