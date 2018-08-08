<template>
  <div>
    <mu-appbar style="width: 100%;height: 30px;">
      <mu-button flat slot="left" to='/mainpage'>
        <mu-icon value="library_books"></mu-icon> 首页
      </mu-button>
      <mu-button flat slot="left" to='/premire'>
        <mu-icon value="build"></mu-icon>
      </mu-button>
      <mu-button flat slot="left" to='/chrt'>
        <mu-icon value="dashboard"></mu-icon>
      </mu-button>
      <mu-button flat slot="left" to='/serch'>
        <mu-icon value="done_all"></mu-icon>
      </mu-button>
    </mu-appbar>


    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>