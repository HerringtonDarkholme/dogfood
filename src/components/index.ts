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
    h4: {
      margin: 0
    }
  }
})

export default
vivio.component()
.components({sideBar, mainPanel})
.render(h => h
  .div.class(font)
  .elRow.elRow()
  .elRow.props({gutter: 20, justify: 'center', type: 'flex'})
    .elCol.props({span: 5})
      .sideBar.sideBar()
    .elCol()
    .elCol.props({span: 13})
      .mainPanel.mainPanel()
    .elCol()
  .elRow()
  .div()
)
.done(module)
