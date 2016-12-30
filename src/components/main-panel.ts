import vivio from 'vivio'

export default
vivio.component(module)
.render(h => h
  .div
    .elInput.props({placeholder: 'Search', icon: 'search'})
    .elInput()
    .ul
      .for(['vue', 'awesome'], (h, d) => h.li.$(d).li())
    .ul()
  .div()
)
.done()
