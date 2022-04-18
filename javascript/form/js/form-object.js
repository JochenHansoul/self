"use strict";

const formObject = function (form) {
    const inputs = form.getElementsByTagName("input")
    return Array.prototype.slice.call(inputs)
        .reduce(function (obj, tag) {
            obj[tag.name] = tag.value;
            return obj;
        },
        {}
    );
};
