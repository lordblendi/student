'use strict';

var CommitDropdown = CommitDropdown || {};


CommitDropdown.view = function () {
    return <div class="dropdown commits">
        <select class="form-control" aria-labelledby="dropdownMenu1">
            <option>Branch1/Commit1</option>
            <option>Master/Commit2</option>
            <option>Branch2/Commit3</option>
            <option>Branch2/Commit4</option>
        </select>
    </div>

};
