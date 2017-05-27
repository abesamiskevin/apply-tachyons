import t from 'tachyons-js';

function apply(className) {
    let css = {};

    className.split(' ').map(obj => {
        Object.assign(css, t[obj]);
    });

    return css;
};

module.exports = apply;