import vivio from 'vivio'
import {style} from 'typestyle'
import {mapGetters, mapMutations} from './helper'

const DURATION = '0.39s'

const margin = style({
  margin: '10px 0',
  cursor: 'pointer',
  transition: 'pointer',
  $nest: {
    '&:hover .el-card': {
      boxShadow: '0 2px 6px 0 rgba(0,0,0,.24),0 0 8px 0 rgba(0,0,0,.08)',
    },
    '&:hover a': {
      color: '#58B7FF'
    },
    '&.v-enter': {
      opacity: 0,
      transform: 'translateY(5px)',
    },
    '&.v-enter-to': {
      opacity: 1,
      transition: 'all',
      transitionTimingFunction: 'cubic-bezier(.55,0,.1,1)',
      transitionDuration: DURATION,
      transitionDelay: DURATION,
    },
    '&.v-leave': {
      opacity: 1,
      transform: 'translateY(-5px)',
    },
    '&.v-leave-to': {
      opacity: 0,
      transition: 'all',
      transitionTimingFunction: 'ease-out',
      transitionDuration: DURATION,
    },
  }
})

const TYPES = ['primary', 'gray', 'success', 'warning', 'danger']

export default
vivio.component(module)
.computed(mapGetters('currentItems', 'categories', 'searchString'))
.methods({
  tagType(cat: string) {
    let index = this.categories.indexOf(cat) % TYPES.length
    return TYPES[index]
  },
})
.methods(mapMutations('changeSearch'))
.render((h, vm) => h
  .div
    .elInput
      .props({placeholder: 'Search', icon: 'search', size: 'large', value: vm.searchString})
      .on({input: vm.changeSearch})
    .elInput()
    .transitionGroup
    .for(vm.currentItems, (h, d) => h
      .elRow.class(margin).key(d.name)
        .elCard.nativeOn({click: () => window.open(d.link)})
          .elTag.style({float: 'right'})
            .props({type: vm.tagType(d.category)})
            .$(d.category)
          .elTag()
          .h4
            .a.$(d.name).a()
          .h4()
          .p.$(d.description || '').p()
        .elCard()
      .elRow()
    )
    .transitionGroup()
  .div()
)
.done()
