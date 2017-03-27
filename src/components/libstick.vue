<template>
  <div>
    <header-view></header-view>
    <list-view :left="left" :center="center" :right="right"></list-view>
  </div>
</template>

<script>
import store from './../vuex/store'
import ListView from './list/listAll.vue'
import HeaderView from './Header/header.vue'
export default {
  name: 'libstick',
  data () {
    return {
      data: [],
      store,
      left: [],
      center: [],
      right: []
    }
  },
  components: {
    HeaderView,
    ListView
  },
  mounted () {
    let vm = this
    store.state.db.on('child_added', function (data) {
      let item = data.val()
      item.id = data.key
      vm.data.push(item)
      vm.setData(vm.data)
    })
  },
  methods: {
    setData (data) {
      var row = data.length / 3
      row = Math.ceil(row)
      console.log('row ::', row) // 16
      this.left = data.slice(0, row - 1)
      this.center = data.slice(row, (row + row) - 1)
      this.right = data.slice((row + row), data.length)
      console.log('left ', this.left)
      console.log('center ', this.center)
      console.log('right ', this.right)
    }
  }
}
</script>
