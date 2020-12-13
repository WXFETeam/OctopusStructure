import { UDFCompatibleDatafeedBase } from './udf-compatible-datafeed-base';
import { QuotesProvider } from './quotes-provider';
import { Requester } from './requester';

class UDFCompatibleDatafeed extends UDFCompatibleDatafeedBase {
    constructor(datafeedURL, updateFrequency) {
        var requester = new Requester();
        var quotesProvider = new QuotesProvider(datafeedURL, requester);
        super(datafeedURL, quotesProvider, requester, updateFrequency);
    }
}
export { UDFCompatibleDatafeed };
