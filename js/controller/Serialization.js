/*
 functions to serialize from JSON to JSON
 */

function parseJson(json) {
    return JSON.parse(JSON.stringify(json));
}

function serializeJson(json) {
    return JSON.stringify(json);
}