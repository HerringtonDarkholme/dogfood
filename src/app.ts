import vivio, {Vue} from 'vivio'
import 'element-ui/lib/theme-default/index.css'
import * as ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.component('elCard', ElementUI.Card)

import component from './components'
import store from './store'

vivio.start({component, store})
