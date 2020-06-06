// 数据按照拼音排序，分类(data数据源，field数据中拼音的key)
export function dataLetterSort(data, field) {
  const list = []
  // 首字母 转 大写英文
  data.forEach((item) => {
    const letter = item[field].substr(0, 1).toUpperCase()
    if (!(letter in list)) {
      list[letter] = []
    }
    list[letter].push(item)
  })
  // 转换 格式
  const resault = []
  for (const key in list) {
    resault.push({
      label: key,
      children: list[key]
    })
  }
  // 进行 排序；
  resault.sort(function(x, y) {
    return x.label.charCodeAt(0) - y.label.charCodeAt(0)
  })

  return resault
}
