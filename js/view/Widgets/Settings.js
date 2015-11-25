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
            <td class="td-right td-bold">regi jelszo</td>
            <td class="td-left">
                <input type="text" class="form-control basic-input" placeholder="regi jelszo"/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">uj jelszo</td>
            <td class="td-left">
                <input type="text" class="form-control basic-input" placeholder="uj jelszo"/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">uj jelszo ujra</td>
            <td class="td-left">
                <input type="text" class="form-control basic-input" placeholder="uj jelszo ujra"/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">levlista</td>
            <td class="td-left">
                <div class="input-group">
                    <span class="input-group-addon checkbox-border">
                        <input type="checkbox"/>
                    </span>
                    <span class="input-group-addon checkbox-border settings-label-size">Levlistara valo feliratkozas</span>
                </div>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">ertesitesek</td>
            <td class="td-left">
                <div class="input-group">
                    <span class="input-group-addon checkbox-border">
                        <input type="checkbox"/>
                    </span>
                    <span class="input-group-addon checkbox-border settings-label-size">E-mail ertesiteskre valo feliratkozas</span>
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
                <button type="button" class="btn btn-default"> Mentes</button>
            </td>
        </tr>
    </table>
};
