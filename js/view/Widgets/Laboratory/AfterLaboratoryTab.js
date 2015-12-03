'use strict';

var AfterLaboratoryTab = AfterLaboratoryTab || {};


AfterLaboratoryTab.view = function (ctrl) {
    return <div role="tabpanel" class="tab-pane" id="after">
        <table>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-entrytest")}</td>
                <td class="td-left">{ctrl.entrytest}</td>
            </tr>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-report")}</td>
                <td class="td-left">{ctrl.reportgrade}</td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">
                    <div tabindex="0" class="td-review" role="button" data-container="body" data-toggle="popover"
                       data-trigger="focus click" data-placement="bottom" data-content={ctrl.reportreview}>
                        {ctrl.reportreview}
                    </div>

                </td>
            </tr>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-laboratory")}</td>
                <td class="td-left">{ctrl.laboratorygrade}</td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">
                    <div class="td-review">
                        {ctrl.laboratoryreview}
                    </div>
                </td>
            </tr>
        </table>
    </div>

};