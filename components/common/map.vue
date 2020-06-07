<template>
  <div id="place_map_wrap">
    <div class="place_map_box">
      <div id="place_map">
        <div id="map" :style="mapStyle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { map } from '~/utils/map'
export default {
  name: 'Map',

  props: {
    // eslint-disable-next-line vue/require-default-prop
    mapData: {
      type: Object,
      // 地图在该视图上的高度
      mapHeight: {
        type: Number,
        default: 600
      },
      // 经度
      longitude: {
        type: Number,
        default: 113.845282
      },
      // 纬度
      latitude: {
        type: Number,
        default: 22.613041
      },
      title: {
        type: String,
        default: '1'
      },
      description: {
        type: String,
        default: '1'
      }
    }
  },
  data() {
    return {
      ak: 'R0bgsowGrq3ElavVQTGSta90',

      mapStyle: {
        width: '100%',
        height: '100%'
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const self = this
      map(self.ak).then((BMap) => {
        const map = new BMap.Map('map')
        const point = new BMap.Point(
          this.mapData.longitude,
          this.mapData.latitude
        )
        const marker = new BMap.Marker(point) // 创建标注
        map.enableScrollWheelZoom() // 启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom() // 启用地图惯性拖拽，默认禁用
        map.addOverlay(marker) // 将标注添加到地图中
        map.centerAndZoom(point, 15)
        // 信息窗的配置信息
        const opts = {
          width: 250,
          height: 120,
          title: this.mapData.title
        }
        const infoWindow = new BMap.InfoWindow(this.mapData.description, opts) // 创建信息窗口对象
        marker.addEventListener('click', function() {
          map.openInfoWindow(infoWindow, point)
        })
        map.enableScrollWheelZoom(true)
        map.openInfoWindow(infoWindow, point) // 开启信息窗口
        const top_left_navigation = new BMap.NavigationControl() // 左上角，添加默认缩放平移控件
        map.addControl(top_left_navigation)
      })
    })
  }
}
</script>

<style scoped>
#place_map_wrap {
  width: 100%;
}
.place_map_box {
  overflow: hidden;
  width: 100%;
  height: 309px;
  margin: 0 auto;
}

div#place_map {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.anchorBL,
.BMap_cpyCtrl.BMap_noprint.anchorBL {
  display: none !important;
}
</style>
