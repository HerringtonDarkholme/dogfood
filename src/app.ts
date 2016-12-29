import vivio from 'vivio'
import 'element-ui/lib/theme-default/index.css'
import * as ElementUI from 'element-ui'
import * as Vue from 'vue'
Vue.use(ElementUI)

  // const api: any = require('vue-hot-reload-api')

  // make the API aware of the Vue that you are using.
  // also checks compatibility.
  // Vue.use(api)


import sideBar from './components/sidebar'

import {style} from 'typestyle'

const font = style({
  fontFamily: '"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif'
})


const component =
  vivio.component()
  .components({sideBar})
  .render(h => h
    .div`.${font}`
    .elRow.props({gutter: 10, justify: 'center', type: 'flex'})
      .elCol.props({span: 4})
        .sideBar.sideBar()
      .elCol()
      .elCol.props({span: 12})
        .h1.$`Dog food app for vivio`.h1()
      .elCol()
    .elRow()
    .div()
  )
  .done()

vivio.start({component})

