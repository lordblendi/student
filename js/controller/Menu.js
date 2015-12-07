'use strict';

var Menu = Menu || {};

Menu.controller = function () {
    var self = this;
    this.displayname = student.getDisplayName();


    this.settingsOnClick = function(){
        student.refreshSettings(m.route(resources.urls.settings));
    };

    this.laborOnClick = function(){
        student.refreshLaboratory(m.route(resources.urls.laboratory));
    };

    this.resultsOnClick = function(){
        student.refreshResults(m.route(resources.urls.results));

    };

    this.redirectTo = function(route){
        m.route(route);
    };
};




