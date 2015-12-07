'use strict';

var SettingsPage = SettingsPage || {};

/*
 settings page view
 */
SettingsPage.view = function () {
    return <div>
        <Menu/>
        <SettingsPanel/>
    </div>
};