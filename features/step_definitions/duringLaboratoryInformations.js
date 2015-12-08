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
        var date = deadlinetext.split("(")[1].split(")")[0];

        if (date.match(/^(\d{4})\.(\d{2})\.(\d{2})\. (\d{2}):(\d{2})$/)) {
            callback();
        }
        callback(new Error("Date not included in text field."));

    });

    this.Then(/^I should see the repository URL: "([^"]*)"$/, function (url, callback) {
        this.world.text('#duringrepository', url, callback);
    });

    this.Then(/^I should see the entry test grade and the demonstrator's name: (\d+) \("([^"]*)"\)$/, function (grade, demonstrator, callback) {
        var entry = grade + " (" + demonstrator + ")"
        this.world.text('#duringentrytest', entry, callback);
    });

};
