<template>
  <div>
    <p>ID: {{$route.params.id}}</p>
    <ul>
      <li>{{msgDetail.id}}</li>
      <li>{{msgDetail.title}}</li>
      <li>{{msgDetail.content}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        msgDetail: {}
      }
    },
    mounted() {
      setTimeout(() => {
        const AllMsgDetail = [
          {
            id: 1,
            title: 'msg001',
            content: 'content001'
          },
          {
            id: 2,
            title: 'msg002',
            content: 'content002'
          },
          {
            id: 4,
            title: 'msg004',
            content: 'content004'
          }
        ]
        this.AllMsgDetail = AllMsgDetail
        const id = this.$route.params.id*1
        this.msgDetail = AllMsgDetail.find(detail => detail.id === id)
      }, 500)
    },
    watch:{
      $route:function (value) {
        const id = value.params.id*1
        this.msgDetail = this.AllMsgDetail.find(detail => detail.id === id)
      }
    }
  }
</script>

<style>

</style>
