require("./exchange.less");
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import stores from '@webExchangeMobx/index';
import App from './index';
render(React.createElement(Provider, Object.assign({}, stores),
    React.createElement(App, null)), document.getElementById("app"));
if (module['hot']) {
    module['hot'].accept();
}
//# sourceMappingURL=exchange.js.map