import vivio from 'vivio'
import {style} from 'typestyle'

const h1 = style({
  fontFamily: '"Droid Serif",Georgia,"Times New Roman",Times,serif',
  textAlign: 'center'
})


var sidebar =  vivio.component()
  .render(h => h
    .elMenu
      .h1.class(h1)
        .span.style({color: '#2aa198'}).$`Vue`.span()
        .$`awesome`
      .h1()
      .elMenuItem.props({index: '0'}).$`Official Resources`.elMenuItem()
      .elMenuItem.props({index: '1'}).$`External Resources`.elMenuItem()
    .elMenu()
  )
  .done()

// assuming Webpack's HMR API.
// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {

	  var hotAPI: any = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("[hot-module-hash]", sidebar)
	  } else {
	    hotAPI.reload("[hot-module-hash]", sidebar)
	    hotAPI.rerender("[hot-module-hash]", sidebar)
	  }
}

export default sidebar
