'use strict';

var SettingsPanel = SettingsPanel || {};

/*
 settings panel view
 */
SettingsPanel.view = function () {
    return <div class="panel panel-default" id="settings">
        <div class="panel-heading">
            <h1 class="panel-title">{resources.getResource("settings-label-panel")}</h1>
        </div>
        <div class="panel-body">
            <Settings/>
        </div>
    </div>
};