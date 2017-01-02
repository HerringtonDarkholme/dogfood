import vivio from 'vivio'
import sideBar from './sidebar'
import mainPanel from './main-panel'
import {style} from 'typestyle'

const font = style({
  fontFamily: '"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif'
})

export default
vivio.component(module)
.components({sideBar, mainPanel})
.render(h => h
  .div.class(font)
  .elRow.elRow()
  .elRow.props({gutter: 10, justify: 'center', type: 'flex'})
    .elCol.props({span: 4})
      .sideBar.sideBar()
    .elCol()
    .elCol.props({span: 12})
      .mainPanel.mainPanel()
    .elCol()
  .elRow()
  .div()
)
.done()
