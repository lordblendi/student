'use strict';

var Menu = Menu || {};

Menu.settingsOnClick = function(){
    m.route("/settings");
};

Menu.laborOnClick = function(){
    m.route("/");
};

Menu.resultsOnClick = function(){
    m.route("/results");
};
