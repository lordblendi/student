'use strict';

var MainPage = MainPage || {};


MainPage.view = function () {
    return m("div[class=page-header]", [
        m("h1","Hello World!")
    ]);
};