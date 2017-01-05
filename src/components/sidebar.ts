import vivio, {html} from 'vivio'
import {style} from 'typestyle'
import {mapGetters, mapMutations} from './helper'

const h1 = style({
  fontFamily: '"Droid Serif",Georgia,"Times New Roman",Times,serif',
  textAlign: 'center',
  fontSize: 30
})


export default
vivio.component(module)
  .computed(mapGetters('categories'))
  .methods(mapMutations('changeCategory'))
  .render((h, vm) => h
    .elMenu
      .h1.class(h1)
        .span.style({color: '#2aa198', marginRight: '-0.2em'}).$`Vue`.span()
        .$` Awesome`
      .h1()
      .elMenuItem.props({index: '-1'}).nativeOn({click: () => vm.changeCategory('All')}).$`All`.elMenuItem()
      .for(vm.categories, (h, category, index) => h
        .elMenuItem.props({index: '' + index}).nativeOn({click: () => vm.changeCategory(category)}).$(category).elMenuItem()
      )
    .elMenu()
  )
  .done()
