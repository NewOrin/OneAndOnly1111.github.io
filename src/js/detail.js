/* 获取url上某个参数 */
function getParams (key) {
  let hash = window.location.hash || window.location.search
  let reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, 'i')
  let _paramsStart = hash.indexOf('?')
  if (_paramsStart >= 0) {
    let r = hash.substring(_paramsStart + 1).match(reg)
    if (r !== null) {
      return decodeURIComponent(r[2])
    }
  }
  return null
}

let articleInfo;
let titleEle, collegeEle, descEle, contentEle;
function getArticle () {
  const articleId = getParams('id')
  if (!articleId || !articleList) return
  articleInfo = articleList.find(item => item.id == articleId)
}
function getElement () {
  titleEle = document.getElementsByClassName('title')[0]
  collegeEle = document.getElementsByClassName('college')[0]
  descEle = document.getElementsByClassName('desc')[0]
  contentEle = document.getElementsByClassName('content')[0]
  console.log('article', articleInfo)
  titleEle.innerHTML = articleInfo.title
  collegeEle.innerHTML = articleInfo.college
  descEle.innerHTML = articleInfo.desc
  contentEle.innerHTML = articleInfo.content
}
function init () {
  getArticle()
  getElement()
}
init()