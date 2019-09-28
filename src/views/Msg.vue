<template>
  <div>
    <ul>
      <li v-for="(m, index) in msg" :key="m.id">
        <router-link :to="`/home/msg/detail/${m.id}`">{{m.title}}</router-link>
        <button @click="pushShow(m.id)">push查看</button>
        <button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: []
      }
    },
    mounted() {
      //模拟ajax请求后台数据
      setTimeout(() => {
        const msg = [
          {
            id: '1',
            title: 'msg001'
          },
          {
            id: '2',
            title: 'msg002'
          },
          {
            id: '4',
            title: 'msg004'
          }
        ]
        this.msg = msg
      }, 1000)
    },
    methods: {
      pushShow(id) {
        this.$router.push(`/home/msg/detail/${id}`)
      },
      replaceShow(id) {
        this.$router.replace(`/home/msg/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>
