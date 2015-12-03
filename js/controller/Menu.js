'use strict';

var Menu = Menu || {};

Menu.settingsOnClick = function(){
    student.refreshSettings(m.route("/settings"));
};

Menu.laborOnClick = function(){
    m.route("/");
};

Menu.resultsOnClick = function(){
    m.route("/results");
};

Menu.redirectTo = function(route){
    m.route(route);
};

