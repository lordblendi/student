'use strict';

var MainPage = MainPage || {};

//set routing to hash mode
m.route.mode = 'hash';

//set routing lists with components
m.route(document.body, '/', {
    '/': MainPage,
});

m.route("/");
