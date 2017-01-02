import vivio from 'vivio'
import {style} from 'typestyle'

const margin = style({
  margin: '10px 0'
})


const lists = [
  {
    name: 'ElementUI',
    description: 'Desktop UI elements for Vue.js 2.0 @ElemeFE',
    category: 'Component Collections'
  },
  {
    name: 'nuxt.js',
    description: ' A minimalistic framework for server-rendered Vue.js applications',
    category: 'development tools'
  }
]

export default
vivio.component(module)
.render(h => {
  return h
  .div
    .elInput.props({placeholder: 'Search', icon: 'search', size: 'large'})
    .elInput()
    .for(lists, (h, d) => h
      .elRow.class(margin)
        .elCard
          .elTag.$(d.name).elTag()
          .p.$(d.description).p()
        .elCard()
      .elRow()
    )
  .div()
})
.done()
