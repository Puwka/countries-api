<template>
    <v-app>
      <TheHeader></TheHeader>
      <router-view></router-view>   
    </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  data () {
    return {

    }
  },
  name: 'App',
  components: {
    TheHeader
  }
}
</script>
