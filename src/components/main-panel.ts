import vivio from 'vivio'

export default
vivio.component(module)
.render(h => {
  let lists = ['vue', 'awesome']
  return h
  .div
    .elInput.props({placeholder: 'Search', icon: 'search'})
    .elInput()
    .for(lists, (h, d) => h
      .elRow
        .elCard
          .p.$(d).p()
        .elCard()
      .elRow()
    )
  .div()
})
.done()
