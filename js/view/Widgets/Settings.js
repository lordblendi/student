'use strict';

var Settings = Settings || {};


Settings.view = function () {
    return <table>
        <tr>
            <td class="td-right td-bold">e-mail</td>
            <td class="td-left">
                <input type="text" class="form-control basic-input" placeholder="e-mail"/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">régi jelszó</td>
            <td class="td-left">
                <input type="text" class="form-control basic-input" placeholder="régi jelszó"/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">új jelszó</td>
            <td class="td-left">
                <input type="text" class="form-control basic-input" placeholder="új jelszó"/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">új jelszó újra</td>
            <td class="td-left">
                <input type="text" class="form-control basic-input" placeholder="új jelszó újra"/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">levlista</td>
            <td class="td-left">
                <div class="input-group">
                    <span class="input-group-addon checkbox-border">
                        <input type="checkbox"/>
                    </span>
                    <span class="input-group-addon checkbox-border settings-label-size">Levlistára való feliratkozás</span>
                </div>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">értesítések</td>
            <td class="td-left">
                <div class="input-group">
                    <span class="input-group-addon checkbox-border">
                        <input type="checkbox"/>
                    </span>
                    <span class="input-group-addon checkbox-border settings-label-size">E-mail értesítéskre való feliratkozás</span>
                </div>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">ssh publikus kulcs</td>
            <td class="td-left">
                <textarea class="form-control ssh" rows="6" placeholder="ssh publikus kulcs"/>
            </td>
        </tr>
        <tr>
            <td class="td-middle" colspan="2">
                <button type="button" class="btn btn-default"> Mentés</button>
            </td>
        </tr>
    </table>
};
