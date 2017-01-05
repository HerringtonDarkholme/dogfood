import vivio from 'vivio'
import {style} from 'typestyle'
import {mapGetters} from './helper'

const h1 = style({
  fontFamily: '"Droid Serif",Georgia,"Times New Roman",Times,serif',
  textAlign: 'center',
  fontSize: 24
})


export default
vivio.component(module)
  .computed(mapGetters('categories'))
  .render((h, vm) => h
    .elMenu
      .h1.class(h1)
        .span.style({color: '#2aa198'}).$`Vue`.span()
        .$`Awesome`
      .h1()
      .for(vm.categories, (h, category, i) => h
        .elMenuItem.props({index: '' + i}).$(category).elMenuItem()
      )
    .elMenu()
  )
  .done()
