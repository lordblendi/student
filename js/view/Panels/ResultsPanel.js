'use strict';

var ResultsPanel = ResultsPanel || {};


ResultsPanel.view = function () {
    return <div class="panel panel-default" id="settings">
        <div class="panel-heading">
            <h1 class="panel-title">Eredmenyek</h1>
        </div>
        <div class="panel-body">
            <Results/>
        </div>
    </div>
};