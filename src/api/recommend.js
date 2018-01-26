import jsonp from 'utils/jsonp'
import { commonParams, options } from 'api/config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/getmv_by_tag'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    ein: 29,
    sortid: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random()
  })

  return jsonp(url, data, options)
}

