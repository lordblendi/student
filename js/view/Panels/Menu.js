'use strict';

var Menu = Menu || {};


Menu.view = function () {
    return    <nav id="menu" class="navbar navbar-default navbar-static-top">
        <div class="navbar-header">
            <div class="navbar-brand">Laboradmin Logo</div>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <button type="button" class="btn btn-default navbar-btn" onclick={Menu.laborOnClick} >Labor</button>
                <button type="button" class="btn btn-default navbar-btn" onclick={Menu.resultsOnClick}>Eredmenyek</button>
                <button type="button" class="btn btn-default navbar-btn" onclick={Menu.settingsOnClick}>Beallitasok</button>
            </ul>
        </div>
    </nav>
};
