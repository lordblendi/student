// features/support/world.js
'use strict';

var zombie = require('zombie');
function WorldFactory(callback) {

    this.browser = new zombie();
    var self = this;
    this.world = {
        browser: self.browser,
        visit: function (url, callback) {
            this.browser.visit(url, function () {
                callback();
            });
        },
        text: function (query, text, callback) {
            this.browser.assert.text(query, text);
            callback();
        },
        pressButton: function (buttontext) {
            this.browser.pressButton(buttontext);
        },
        clickLink: function (link) {
            var clickable = this.browser.link(link);
            this.browser.clickLink(clickable);
        }
    };

}
exports.World = WorldFactory;
