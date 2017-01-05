import vivio from 'vivio'
import sideBar from './sidebar'
import mainPanel from './main-panel'
import {style} from 'typestyle'

const font = style({
  fontFamily: '"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
  $nest: {
    a: {
      paddingLeft: '0.5em',
      textDecoration: 'none',
      color: '#1F2D3D',
      transition: 'color 0.3s',
      $nest: {
        '&:hover': {
          color: '#58B7FF'
        }
      }
    },
  }
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
