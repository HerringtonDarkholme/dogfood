import vivio from 'vivio'

interface Repo {
  name: string
  category: string
  link?: string
  description?: string
}

const data = {
  repos: require<Repo[]>('../data.json'),
  currentCategory: '',
  searchString: '',
}

export default vivio.store(data)
  .getters({
    categories(state) {
      console.log(state)
      const duplicate = state.repos.map(repo => repo.category)
      return Array.from(new Set(duplicate))
    },
    currentItems(state) {
      if (!state.currentCategory) return state.repos.slice(0, 20)
      return state.repos.filter(repo => repo.category === state.currentCategory)
    }
  })
  .mutationsWithArg({
    changeCategory(state, category: string) {
      state.currentCategory = category
    }
  })
  .done()
