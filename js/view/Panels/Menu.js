'use strict';

var Menu = Menu || {};


Menu.view = function () {
    return    <nav id="menu" class="navbar navbar-default navbar-static-top">
        <div class="navbar-header">
            <div class="navbar-brand logo">laboradmin</div>
        </div>

        <div class="collapse navbar-collapse  navbar-right">
            <p class="navbar-text">Teszt Hallgató (NEPTUN)</p>
            <ul class="nav navbar-nav">

                <button type="button" class="btn btn-default navbar-btn" onclick={Menu.laborOnClick} >Labor</button>
                <button type="button" class="btn btn-default navbar-btn" onclick={Menu.resultsOnClick}>Eredmények</button>
                <button type="button" class="btn btn-default navbar-btn" onclick={Menu.settingsOnClick}>Beállítások</button>
            </ul>
        </div>
    </nav>
};
