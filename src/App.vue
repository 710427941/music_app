<template>
  <div id="app">
    <base-header></base-header>
    <base-tabs></base-tabs>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import BaseHeader from 'components/header/BaseHeader'
import BaseTabs from 'components/tab/BaseTabs'

export default {
  name: 'App',
  components: {
    BaseHeader, BaseTabs
  }
}
</script>
