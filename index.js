import t from 'tachyons-js';

// apply :: String -> { k: v }
const apply = className =>
    className.split(' ').map(obj => t[obj]);

export default apply;