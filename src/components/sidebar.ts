import vivio, {html} from 'vivio'
import {style} from 'typestyle'
import {mapGetters, mapMutations} from './helper'

const h1 = style({
  fontFamily: '"Droid Serif",Georgia,"Times New Roman",Times,serif',
  textAlign: 'center',
  fontSize: 30
})

function menuItem(h: any, category: string, index: number) {
  const vm = this
  return html()
    .elMenuItem.props({index: '' + index})
      .nativeOn({click: () => vm.changeCategory(category)})
      .$(category)
    .elMenuItem()
}

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
      .children(menuItem.bind(vm)(h, 'All', -1))
      .for(vm.categories, menuItem.bind(vm))
    .elMenu()
  )
  .done()
