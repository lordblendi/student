'use strict';

var ResultsPanel = ResultsPanel || {};

/*
 results panel view
 */
ResultsPanel.view = function () {
    return <div class="panel panel-default" id="settings">
        <div class="panel-heading">
            <h1 class="panel-title">{resources.getResource("results-label-panel")}</h1>
        </div>
        <div class="panel-body">
            <Results/>
        </div>
    </div>
};