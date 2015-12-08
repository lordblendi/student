'use strict';

var LaboratoryTabs = LaboratoryTabs || {};

/*
 laboratory tab navbar view
 */
LaboratoryTabs.view = function () {
    return <ul class="nav nav-tabs lab-tabs" role="tablist">
        <li role="presentation" class="active"><a id="beforetab" href="#before" aria-controls="before" role="tab"
                                                  data-toggle="tab">{resources.getResource("laboratory-label-tab-before")}</a>
        </li>
        <li role="presentation"><a id="duringtab" href="#during" aria-controls="during" role="tab"
                                   data-toggle="tab">{resources.getResource("laboratory-label-tab-during")}</a></li>
        <li role="presentation"><a id="aftertab" href="#after" aria-controls="after" role="tab"
                                   data-toggle="tab">{resources.getResource("laboratory-label-tab-after")}</a></li>
    </ul>
};
