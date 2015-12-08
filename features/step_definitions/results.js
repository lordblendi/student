module.exports = function () {
    this.World = require('../support/world').World;

    this.Given(/^I am using the laboradmin portal$/, function (callback) {
        this.world.visit('http://localhost/laboradmin/dist/#/', callback);
    });

    this.Given(/^I am on the laboratory page$/, function (callback) {
        this.world.browser.assert.success();
        this.world.pressButton('labormenubutton');
        this.world.browser.assert.success();
        callback();
    });

    this.When(/^I press the Labor után button$/, function (callback) {
        this.world.browser.assert.success();
        this.world.clickLink('#aftertab');
        this.world.browser.assert.success();
        callback();
    });

    this.Then(/^I see the demonstrator's name and the entry test grade: (\d+) \("([^"]*)"\)$/, function (grade, name, callback) {
        var text = grade + " (" + name + ")";
        this.world.text('#afterentrytest', text, callback);
    });

    this.Then(/^I see the report grade and the evaluator's name: (\d+) \("([^"]*)"\)$/, function (grade, name, callback) {
        var text = grade + " (" + name + ")";
        this.world.text('#afterreportgrade', text, callback);
    });

    this.Then(/^I see the laboratory grade and the demonstrator's name: (\d+) \("([^"]*)"\)$/, function (grade, name, callback) {
        var text = grade + " (" + name + ")";
        this.world.text('#afterlaboratorygrade', text, callback);
    });

    this.Then(/^I see my laboratory review$/, function (callback) {
        if (this.world.browser.text('#afterlaboratoryreview')) {
            callback();
        }
        callback(new Error("Laboratory review textarea is empty"));
    });

    this.Then(/^I see my report review$/, function (callback) {

        if (this.world.browser.text('#afterreportreview')) {
            callback();
        }
        callback(new Error("Report review textarea is empty"));
    });

};