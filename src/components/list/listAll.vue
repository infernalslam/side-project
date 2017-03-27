<template lang="html">
  <div class="section">
      <div class="columns">
          <div class="column"><list-view-left :left="left"></list-view-left></div>
          <div class="column"><list-view-center :center="center"></list-view-center></div>
          <div class="column"><list-view-right :right="right"></list-view-right></div>
    </div>
</div>
  </div>
</template>

<script>
import listViewLeft from './listleft.vue'
import listViewCenter from './listcenter.vue'
import listViewRight from './listright.vue'
export default {
  name: 'listall',
  props: ['right', 'center', 'left'],
  components: {
    listViewLeft,
    listViewCenter,
    listViewRight
  }
}
</script>

<style lang="css">
</style>
