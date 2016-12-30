import vivio, {Vue} from 'vivio'
import 'element-ui/lib/theme-default/index.css'
import * as ElementUI from 'element-ui'
Vue.use(ElementUI)

import component from './components'
vivio.start({component})
