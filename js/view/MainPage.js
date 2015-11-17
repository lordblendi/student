'use strict';

var MainPage = MainPage || {};


MainPage.view = function () {
   //return m("div[class=page-header]", [
   //     m("h1", MainPage.WelcomeMessage)
   // ]);

    return    <div>
        <h1>{MainPage.WelcomeMessage}</h1>
    </div>
};