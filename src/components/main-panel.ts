import vivio from 'vivio'
import {style} from 'typestyle'
import {mapGetters} from './helper'

const margin = style({
  margin: '10px 0',
  $nest: {
    a: {
      paddingLeft: '0.5em',
      textDecoration: 'none',
      color: '#1F2D3D',
      $nest: {
        '&:hover': {
          color: '#58B7FF'
        }
      }
    },
    '&.v-enter': {
      opacity: 0,
      transition: 'opacity 0.5s ease',
    },
    '&.v-enter-active': {
      opacity: 1,
      transition: 'opacity 0.5s ease',
    },
    '&.v-leave': {
      opacity: 0,
    },
  }
})

const TYPES = ['primary', 'gray', 'success', 'warning', 'danger']

export default
vivio.component(module)
.computed(mapGetters('currentItems', 'categories'))
.methods({
  tagType(cat: string) {
    let index = this.categories.indexOf(cat) % TYPES.length
    return TYPES[index]
  }
})
.render((h, vm) => h
  .div
    .elInput.props({placeholder: 'Search', icon: 'search', size: 'large'})
    .elInput()
    .transitionGroup
    .for(vm.currentItems, (h, d) => h
      .elRow.class(margin).key(d.name)
        .elCard
          .elTag
            .props({type: vm.tagType(d.category)})
            .$(d.category).elTag()
          .a.attrs({href: d.link, target: '_blank'}).$(d.name).a()
          .p.$(d.description || '').p()
        .elCard()
      .elRow()
    )
    .transitionGroup()
  .div()
)
.done()
