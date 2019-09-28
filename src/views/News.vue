<template>
    <div>
      <ul>
        <li v-for="(value,index) in newsArr" :key="index">{{value}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          newsArr:['news01','news02','news03']
        }
      }
    }
</script>

<style>

</style>
