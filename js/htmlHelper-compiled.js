'use strict';

var html = function html(literalSections) {
    var raw = literalSections.raw;
    var result = '';

    for (var _len = arguments.length, literalArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        literalArguments[_key - 1] = arguments[_key];
    }

    literalArguments.forEach(function (argument, i) {
        result += raw[i];

        if (!argument) return;

        argument = argument.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/`/g, "&#96;");

        result += argument;
    });
    result += raw[raw.length - 1];

    return result;
};
