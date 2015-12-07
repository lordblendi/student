'use strict';

var BeforeLaboratoryTab = BeforeLaboratoryTab || {};

/*
 before laboratory tab view
 */
BeforeLaboratoryTab.view = function (ctrl) {
    return <div role="tabpanel" class="tab-pane active" id="before">
        <table>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-location")}</td>
                <td class="td-left">{ctrl.location}</td>
            </tr>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-time")}</td>
                <td class="td-left">{ctrl.time}</td>
            </tr>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-demonstrator")}</td>
                <td class="td-left">{ctrl.demonstrator}</td>
            </tr>
        </table>
    </div>

};