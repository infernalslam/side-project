<template lang="html">
  <div>
  <div class="section" v-for="show in left">
    <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img class="fix" :src="show.url" :alt="show.name">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img :src="show.url">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{ show.name }}</p>
                        <p class="subtitle is-6">Price {{ show.price }} Bath</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'listleft',
  props: ['left']
}
</script>

<style scoped>
.fix {
  width: 500px !important;
  height:500px !important;
}
</style>
