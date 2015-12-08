module.exports = function () {
    this.World = require('../support/world').World;


    this.Given(/^I am on the laboradmin website$/, function (callback) {
        this.world.visit('http://localhost/laboradmin/dist/#/', callback);
    });

    this.Given(/^I am on the during laboratory tab$/, function (callback) {
        this.world.browser.assert.success();
        this.world.pressButton('labormenubutton');
        this.world.browser.assert.success();
        this.world.clickLink('#duringtab');
        this.world.browser.assert.success();
        callback();
    });

    this.When(/^I press the Mentés button$/, function (callback) {
        this.world.browser.pressButton('duringsave', callback);
    });

    this.Then(/^I saved a new final commit$/, function (callback) {
        if (this.world.isInRequests("http://localhost:3000/student/1/setfinalcommit")) {
            callback();
        }
        callback(new Error("The application did not send the POST request."));
    });
};