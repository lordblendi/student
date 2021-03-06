'use strict';

var Results = Results || {};

/*
 results panel content view
 */
Results.view = function (ctrl) {

    return <table class="table-results">
        <tr>
            {ctrl.ordinals}
        </tr>
        <tr>
            {ctrl.entries}
        </tr>
        <tr>
            {ctrl.reports}
        </tr>
        <tr>
            {ctrl.laboratories}
        </tr>
    </table>
};
