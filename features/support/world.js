// features/support/world.js
'use strict';

var zombie = require('zombie');
function WorldFactory(callback) {
    var self = this;
    this.browser = new zombie();
    this.requests = [];
    this.browser.pipeline.addHandler(function (browser, request, response) {
        self.requests.push({url: request.url, method: request.method});
        //console.log(request.url, request.method);
        return response;
    });

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
        },
        isInRequests: function (url) {
            for (var i = 0; i < self.requests.length; i++) {
                if (self.requests[i].url === url) {
                    return true;
                }
            }
            return false;
        }
    };

}
exports.World = WorldFactory;
