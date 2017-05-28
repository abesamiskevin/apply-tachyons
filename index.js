import t from 'tachyons-js';

const apply = className =>
    className.split(' ').map(obj => t[obj]);

export default apply;