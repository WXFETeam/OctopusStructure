import { merge } from 'lodash';
import en from './en-US';
import cn from './zh-CN';
import commLocales from '@webLocales/index'; 

export default {
    'en-US': merge(en, commLocales.en),
    'zh-CN': merge(cn, commLocales.cn)
}