'use strict';

var MainPage = MainPage || {};

MainPage.controller = function () {

    MainPage.setWelcomeMessage("Hello World!");
};

MainPage.setWelcomeMessage = function(msg){
    MainPage.WelcomeMessage = msg;
};

MainPage.setLaboratoryDuring = function(){

};

