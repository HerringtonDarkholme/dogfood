import vivio from 'vivio'
import {style} from 'typestyle'
import {mapGetters} from './helper'

const margin = style({
  margin: '10px 0'
})


export default
vivio.component(module)
.computed(mapGetters('currentItems'))
.render((h, vm) => h
  .div
    .elInput.props({placeholder: 'Search', icon: 'search', size: 'large'})
    .elInput()
    .for(vm.currentItems, (h, d) => h
      .elRow.class(margin)
        .elCard
          .elTag.$(d.name).elTag()
          .p.$(d.description || '').p()
        .elCard()
      .elRow()
    )
  .div()
)
.done()
