'use strict';

var DuringLaboratoryTab = DuringLaboratoryTab || {};


DuringLaboratoryTab.view = function (ctrl) {
    return <div role="tabpanel" class="tab-pane" id="during">
        <table>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-deadline")}</td>
                <td class="td-left">{ctrl.deadline}</td>
            </tr>
            <tr>
                <td class="td-middle td-bold" colspan="2">{resources.getResource("laboratory-label-repository")}</td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">{ctrl.repository}</td>
            </tr>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-entrytest")}</td>
                <td class="td-left">{ctrl.entrytest}</td>
            </tr>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-finalcommit")}</td>
                <td class="td-left">
                    <CommitDropdown/>
                </td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">
                    <button type="button" id="example"
                            class="btn btn-default"> {resources.getResource("laboratory-label-save")}</button>
                </td>
            </tr>
        </table>
    </div>

};

