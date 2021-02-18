import style from './style';
import currency from './currency';
import timezone from './timezone';
var ajax = require('./ajax');
import ws from './ws';
var routes = require('./routes');

export default {
    ...style,
    ...currency,
    ...timezone,
    ...ajax,
    ...ws,
    ...routes
}