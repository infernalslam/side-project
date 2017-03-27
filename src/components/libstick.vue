<template>
  <div>
    <header-view></header-view>
    <list-view></list-view>
  </div>
</template>

<script>
// import firebase from 'firebase'
import ListView from './list/listAll.vue'
import HeaderView from './Header/header.vue'
export default {
  name: 'libstick',
  data () {
    return {
      data: []
    }
  },
  components: {
    HeaderView,
    ListView
  },
  mounted () {
  }
}
</script>
