<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  }
}
</script>

<style>
body,html,#app{
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color:transparent;
}
*{
  margin: 0;
  padding: 0;
  font-family:PingFangSC-Regular;
  font-size: 14px;
}

</style>
