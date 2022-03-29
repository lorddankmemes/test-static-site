<template>
  <q-layout >
    <q-page-container style="background-color: #FFFFFF;">
      <router-view />
    </q-page-container>

    <k-footer />
  </q-layout>
</template>

<script>
import KFooter from './Footer'

export default {
  data () {
  },

  name: 'WebLayout',
  components: {
    KFooter
  }
}
</script>
