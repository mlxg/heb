// 百度地图脚步异步加载
export function map(ak) {
  return new Promise((resolve, reject) => {
    window.onload = function() {
      resolve(BMap)
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
    script.onerror = reject
    document.head.appendChild(script)
  })
}
