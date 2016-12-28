import Vivio from 'vivio'

const component =
  Vivio.component()
  .render(h => h.h1.$`Hello world!`.h1())
  .done()

Vivio.start({component})
