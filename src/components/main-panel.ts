import vivio from 'vivio'
import {style} from 'typestyle'
import {mapGetters} from './helper'

const margin = style({
  margin: '10px 0',
  cursor: 'pointer',
  $nest: {
    '&:hover .el-card': {
      boxShadow: '0 2px 6px 0 rgba(0,0,0,.24),0 0 8px 0 rgba(0,0,0,.08)',
    },
    '&:hover a': {
      color: '#58B7FF'
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
        .elCard.nativeOn({click: () => window.open(d.link)})
          .a.$(d.name).a()
          .elTag.style({float: 'right'})
            .props({type: vm.tagType(d.category)})
            .$(d.category)
          .elTag()
          .p.$(d.description || '').p()
        .elCard()
      .elRow()
    )
    .transitionGroup()
  .div()
)
.done()
