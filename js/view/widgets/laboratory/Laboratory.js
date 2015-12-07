'use strict';

var Laboratory = Laboratory || {};


Laboratory.view = function (ctrl) {
    return <div>
        <LaboratoryTabs/>

        <div class="panel-heading">
            <h1 class="panel-title">{ctrl.description}</h1>
        </div>
        <div class="panel-body">
            <div class="tab-content">
                <BeforeLaboratoryTab/>
                <DuringLaboratoryTab/>
                <AfterLaboratoryTab/>
            </div>
        </div>
    </div>
};
