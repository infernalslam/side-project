<template lang="html">
  <div>
  <div class="section" v-for="show in right">
    <div class="card">
            <div class="card-image">
              <span class="tag is-danger is-large">Free print</span>
                <figure class="image is-square">
                    <img :src="show.url" :alt="show.name" @click="printImg(show.url)">
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
                        <p class="subtitle is-6"> Price {{ show.price }} Bath</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'listright',
  props: ['right', 'printImg']
}
</script>
