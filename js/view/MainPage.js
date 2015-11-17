'use strict';

var MainPage = MainPage || {};


MainPage.view = function () {
   //return m("div[class=page-header]", [
   //     m("h1", MainPage.WelcomeMessage)
   // ]);

    return    <div class="page-header">
        <h1>{MainPage.WelcomeMessage}</h1>
    </div>
};