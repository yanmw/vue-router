<template>
    <div>
      <h2>Home</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link to="news">News</router-link>
          </li>
          <li>
            <router-link to="msg">Msg</router-link>
          </li>
        </ul>
        <div>
          <router-view></router-view>
          <hr>
        </div>
      </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
