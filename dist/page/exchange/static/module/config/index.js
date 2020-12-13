import style from './style';
import currency from './currency';
import timezone from './timezone';
var ajax = require('./ajax');
import ws from './ws';
var routes = require('./routes');
export default Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, style), currency), timezone), ajax), ws), routes);
//# sourceMappingURL=index.js.map