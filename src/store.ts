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
  return arr.slice(PAGE_SIZE * page, PAGE_SIZE * (page + 1))
}

function search(source: string, pattern: string): boolean {
  const reg = new RegExp(pattern.split('').join('.*'), 'i')
  return reg.test(source)
}

export default vivio.store(data)
  .getters({
    categories(state) {
      const duplicate = state.repos.map(repo => repo.category)
      return Array.from(new Set(duplicate))
    },
    filteredItem(state) {
      const pattern = state.searchString
      let repos = state.repos.filter(repo => {
        return search(repo.name, pattern) || repo.description && search(repo.description, pattern)
      })
      if (state.currentCategory !== ALL) {
        repos = repos.filter(repo => repo.category === state.currentCategory)
      }
      return repos
    },
    currentPage: s => s.currentPage + 1,
    searchString: s => s.searchString,
  })
  .getters({
    totalCount(s, g) {
      return g.filteredItem.length
    },
    currentItems(s, g) {
      return getPage(g.filteredItem, s.currentPage)
    }
  })
  .mutationsWithArg({
    changeCategory(state, category: string) {
      state.currentCategory = category
      state.currentPage = 0
    },
    changeSearch(state, search: string) {
      state.searchString = search
      state.currentPage = 0
    },
    changePage(state, page: number) {
      state.currentPage = page - 1
    },
  })
  .done()
