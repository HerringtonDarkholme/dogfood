import vivio from 'vivio'
import {style} from 'typestyle'

const h1 = style({
  fontFamily: '"Droid Serif",Georgia,"Times New Roman",Times,serif',
  textAlign: 'center',
  fontSize: 24
})


export default
vivio.component(module)
  .render(h => h
    .elMenu
      .h1.class(h1)
        .span.style({color: '#2aa198'}).$`Vue`.span()
        .$`Awesome`
      .h1()
      .elMenuItem.props({index: '0'}).$`Official Resources`.elMenuItem()
      .elMenuItem.props({index: '1'}).$`External Resources`.elMenuItem()
    .elMenu()
  )
  .done()
