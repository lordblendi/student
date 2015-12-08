module.exports = function () {
    this.World = require('../support/world').World;

    this.Given(/^I am on the home page$/, function (callback) {
        this.world.visit('http://localhost/laboradmin/dist/#/', callback);
    });

    this.Given(/^I am on the during laboratory page/, function (callback) {
        this.world.browser.assert.success();
        this.world.pressButton('labormenubutton');
        this.world.browser.assert.success();
        callback();
    });

    this.When(/^I press the Labor alatt button$/, function (callback) {
        this.world.browser.assert.success();
        this.world.clickLink('#duringtab');
        this.world.browser.assert.success();
        callback();
    });

    this.Then(/^I should see the remaining time till the deadline$/, function (callback) {
        var deadlinetext = this.world.browser.text('#duringdeadline');
        var hours = parseInt(deadlinetext.split(" ")[0]);
        if (isNaN(hours)) {
            callback(new Error("Remaining hours are NaN"));
        }
        if (hours >= 0 && hours <= 96) {
            callback();
        }
        else {
            callback(new Error("Remaining hours are in wrong interval."));
        }
    });

    this.Then(/^I should see the repository URL: "([^"]*)"$/, function (url, callback) {
        this.world.text('#duringrepository', url, callback);
    });

    this.Then(/^I should see the entry test grade and the demonstrator's name: (\d+) \("([^"]*)"\)$/, function (grade, demonstrator, callback) {
        var entry = grade + " (" + demonstrator + ")"
        this.world.text('#duringentrytest', entry, callback);
    });

};
