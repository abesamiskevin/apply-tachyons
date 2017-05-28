import t from 'tachyons-js';

const apply = className =>
    className.split(' ').map(obj => Object.assign(t[obj]));

export default apply;