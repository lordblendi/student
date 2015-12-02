'use strict';

var SettingsPanel = SettingsPanel || {};


SettingsPanel.view = function () {
    return <div class="panel panel-default" id="settings">
        <div class="panel-heading">
            <h1 class="panel-title">Beállítások</h1>
        </div>
        <div class="panel-body">
            <Settings/>
        </div>
    </div>
};