'use strict';

var MainPage = MainPage || {};

MainPage.controller = function () {

    MainPage.setWelcomeMessage("Hello World!");
};

MainPage.setWelcomeMessage = function(string){
    MainPage.WelcomeMessage = string;
};
