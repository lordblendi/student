module.exports = function () {
    this.World = require('../support/world').World;

    this.Given(/^I am using laboradmin website$/, function (callback) {
        this.world.visit('http://localhost/laboradmin/dist/#/', callback);
    });

    this.Given(/^I am on the settings page$/, function (callback) {
        this.world.browser.assert.success();
        this.world.browser.pressButton('settingsmenubutton', callback);
    });

    this.Given(/^I fill the email field$/, function (callback) {
        this.world.browser.fill('input_email', 'mytest@test.mail.hu');
        callback();
    });

    this.Given(/^I fill the ssh-key field$/, function (callback) {
        this.world.browser.fill('input_ssh', 'my new ssh key');
        callback();
    });

    this.When(/^I press the "([^"]*)" button$/, function (arg1, callback) {
        this.world.browser.pressButton('settingssave', callback);
    });

    this.Then(/^I saved the new settings$/, function (callback) {
        if (this.world.isInRequests("http://localhost:3000/student/1/setsettings")) {
            callback();
        }
        callback(new Error("The application did not send the POST request."));
    });


    this.Given(/^I fill the password fields correctly$/, function (callback) {
        this.world.browser.fill('oldpwd', 'test-password')
            .fill('inputpwd', 'eat-the-living')
            .fill('inputpwdagain', 'eat-the-living');
        callback();
    });

    this.Then(/^I saved a new password$/, function (callback) {
        if (this.world.isInRequests("http://localhost:3000/student/1/setsettings")) {
            callback();
        }
        callback(new Error("The application did not send the POST request."));
    });


    this.Given(/^I fill the password fields incorrectly$/, function (callback) {
        this.world.browser.fill('oldpwd', 'test-password')
            .fill('inputpwd', 'eat-the-living')
            .fill('inputpwdagain', 'the-living-eat-me');
        callback();
    });

    this.Then(/^I could not save a new password$/, function (callback) {
        if (this.world.isInRequests("http://localhost:3000/student/1/setsettings")) {
            callback(new Error("The application should not send the POST request."));

        }
        callback();

    });

    this.Given(/^I fill the old password field$/, function (callback) {
        this.world.browser.fill('oldpwd', 'test-password');
        callback();
    });

    this.Given(/^I fill the new password again field$/, function (callback) {
        this.world.browser.fill('inputpwdagain', 'eat-the-living');
        callback();
    });

    this.Given(/^I fill the new password field$/, function (callback) {
        this.world.browser.fill('inputpwd', 'the-living-eat-me');
        callback();
    });


};
