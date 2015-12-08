module.exports = function () {
    this.World = require('../support/world').World;

    this.Given(/^I am on the main page$/, function (callback) {
        this.world.visit('http://localhost/laboradmin/dist/#/', callback);
    });

    this.When(/^I press the Labor button$/, function (callback) {
        this.world.browser.assert.success();
        this.world.pressButton('labormenubutton');
        this.world.browser.assert.success();
        callback();
    });

    this.Then(/^I should see the date: "([^"]*)"$/, function (date, callback) {
        this.world.text('#laboratorydate', date, callback);
    });

    this.Then(/^I should see the demonstrator's name: "([^"]*)"$/, function (name, callback) {
        this.world.text('#laboratorydemonstrator', name, callback);
    });

    this.Then(/^I should see the location: "([^"]*)"$/, function (location, callback) {
        this.world.text('#laboratorylocation', location, callback);
    });

};
