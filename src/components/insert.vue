<template lang="html">
  <div>
    <div class="section">
        <div class="field">
            <label class="label">name</label>
            <p class="control">
                <input class="input" type="text" placeholder="ชื่อรูป" v-model="name">
            </p>
        </div>

        <div class="field">
            <label class="label">url</label>
            <p class="control has-icon has-icon-right">
                <input class="input is-success" type="text" placeholder="ลิ้งรูป" v-model="url">
                <span class="icon is-small">
        <i class="fa fa-check"></i>
      </span>
            </p>
        </div>
        <button @click="add(name, url)"> add </button>
    </div>

    <div v-for="show in data">
      {{show.id}} <br>
      {{show.name}} <br>
      <img :src="show.url"> <br>
      {{show.price}}
      <button@click="edit(show.id)"> {{mode2}} </button>
      <button@click="del(show.id)"> del </button>
      <br><hr>
    </div>

    <div v-show="mode">
      name :<input type="text" :value="dataEdit.name" v-model="newName">
      url : <input type="text" :value="dataEdit.url" v-model="newUrl">
    </div>


  </div>
</template>

<script>
import store from './../vuex/store'
import firebase from 'firebase'
export default {
  name: 'insert',
  data () {
    return {
      data: [],
      name: '',
      url: '',
      mode: false,
      dataEdit: {},
      newName: '',
      newUrl: '',
      mode2: 'edit',
      store
    }
  },
  mounted () {
    let vm = this
    store.state.db.on('child_added', function (data) {
      let item = data.val()
      item.id = data.key
      vm.data.push(item)
      console.log(vm.data)
    })
    store.state.db.on('child_removed', function (data) {
      let id = data.key
      let index = vm.data.findIndex(item => item.id === id)
      vm.data.splice(index, 1)
    })
    store.state.db.on('child_changed', function (data) {
      let id = data.key
      let index = vm.data.findIndex(item => item.id === id)
      let item = data.val()
      item.id = data.key
      vm.data[index].id = item.id
      vm.data[index].name = item.name
      vm.data[index].surname = item.url
      vm.data[index].number = item.price
      console.log('data update : ', vm.data[index])
    })
  },
  methods: {
    add (name, url) {
      store.state.db.push({
        name: name,
        url: url,
        price: 30
      })
      this.name = ''
      this.url = ''
      this.data.reverse()
    },
    edit (id) {
      var vm = this
      if (this.mode === false) {
        var index = this.data.findIndex(item => item.id === id)
        this.dataEdit = this.data[index]
        if (index > -1) {
          this.mode = true
          this.mode2 = 'submit'
        }
        firebase.database().ref('libstick/' + id).update({
          name: vm.newName,
          url: vm.newUrl,
          price: 30
        })
      } else if (this.mode === true) {
        this.mode2 = 'edit'
        this.mode = false
        this.newName = ''
        this.newUrl = ''
      }
    },
    del (id) {
      firebase.database().ref('libstick/' + id).remove()
    }
  }
}
</script>
