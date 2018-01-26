const _import = require('./_import_' + process.env.NODE_ENV)

const constantRouterMap = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: _import('recommend/Recommend')
  },
  {
    path: '/singer',
    component: _import('singer/Singer')
  },
  {
    path: '/rank',
    component: _import('rank/Rank')
  },
  {
    path: '/search',
    component: _import('search/Search')
  }
]

export default constantRouterMap
