module.exports = function () {
    this.World = require('../support/world').World;

    this.When(/^I visit the laboradmin homepage$/, function (callback) {
        // Express the regexp above with the code you wish you had.
        // `this` is set to a World instance.
        // i.e. you may use this.browser to execute the step:
        this.world.visit('http://localhost/laboradmin/dist/#/', callback);
        // The callback is passed to visit() so that when the job's finished,
        // the next step can be executed by Cucumber.
    });

    this.Then('I should see "$title" as the page title', function (title, callback) {
        // the above string is converted to the following Regexp by Cucumber:
        // /^I should see "([^"]*)" as the page title$/

        this.world.text('title', title, callback);

    });
};