'use strict';

var DuringLaboratoryTab = DuringLaboratoryTab || {};


DuringLaboratoryTab.view = function () {
    return <div role="tabpanel" class="tab-pane" id="during">
        <table>
            <tr>
                <td class="td-right td-bold">hátralévő idő</td>
                <td class="td-left">16 óra (2015.11.21. 16.15)</td>
            </tr>
            <tr>
                <td class="td-middle td-bold" colspan="2">Repository URL</td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">git@gitlab.db.bme.hu:pelda/pelda.git</td>
            </tr>
            <tr>
                <td class="td-right td-bold">beugró</td>
                <td class="td-left">5</td>
            </tr>
            <tr>
                <td class="td-right td-bold">végleges commit</td>
                <td class="td-left">
                    <CommitDropdown/>
                </td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">
                    <button type="button" class="btn btn-default"> Mentés</button>
                </td>
            </tr>
        </table>
    </div>

};