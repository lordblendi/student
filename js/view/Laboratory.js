'use strict';

var Laboratory = Laboratory || {};


Laboratory.view = function () {
    return <div class="panel panel-default" id="laboratory">
        <LaboratoryTabs/>

        <div class="panel-heading">
            <h1 class="panel-title">1. Labor</h1></div>
        <div class="panel-body">
            <div class="tab-content">
                <BeforeLaboratoryTab/>
                <DuringLaboratoryTab/>
                <AfterLaboratoryTab/>
            </div>
        </div>
    </div>
};
