import vivio from 'vivio'

interface Repo {
  name: string
  category: string
  link?: string
  description?: string
}

const PAGE_SIZE = 10
const ALL = 'All'

const data = {
  repos: require<Repo[]>('../data.json'),
  currentCategory: ALL,
  searchString: '',
  currentPage: 0,
}

function getPage<T>(arr: T[], page: number) {
  return arr.slice(PAGE_SIZE * page, PAGE_SIZE)
}

function search(source: string, pattern: string): boolean {
  const reg = new RegExp(pattern.split('').join('.*'), 'i')
  return reg.test(source)
}

export default vivio.store(data)
  .getters({
    categories(state) {
      console.log(state)
      const duplicate = state.repos.map(repo => repo.category)
      return Array.from(new Set(duplicate))
    },
    currentItems(state) {
      const pattern = state.searchString
      let repos = state.repos.filter(repo => {
        return search(repo.name, pattern) || repo.description && search(repo.description, pattern)
      })
      if (state.currentCategory !== ALL) {
        repos = repos.filter(repo => repo.category === state.currentCategory)
      }
      return getPage(repos, state.currentPage)
    },
    searchString: s => s.searchString,
  })
  .mutationsWithArg({
    changeCategory(state, category: string) {
      state.currentCategory = category
    },
    changeSearch(state, search: string) {
      state.searchString = search
    }
  })
  .done()
