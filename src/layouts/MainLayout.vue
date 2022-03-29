<template>
  <q-layout >
    <q-header class="bg-landing">
<!--         <q-toolbar class="k-block">
          <div class="q-pl-xl">
            <q-btn class="text-poppins text-bold" to="/resume">RESUME</q-btn>
          </div>

          <q-space />
            <div class="row flex flex-end justify-end q-pt-xl q-pb-md q-gutter-xs">
                       <div><a target="_blank" href="https://www.linkedin.com/in/siti-rabiatul-husna-sahmuddin/"><img src="~assets/Group.png" style="width:82%; height:70%;"/></a></div>
                      <div><a target="_blank" href="https://gitlab.com/llhusna"><img src="~assets/gitlab-circle.svg" style="width:85%; height:90%; margin-top:-5px"/></a></div>
            </div>

        </q-toolbar> -->
    </q-header>

    <q-page-container style="background-color: #FFFFFF;">
      <router-view />
    </q-page-container>
    <t-footer />
  </q-layout>
</template>

<script>
import TFooter from './FooterTalent'

export default {
  data () {
  },

  name: 'MainLayout',
  components: {
    TFooter
  }
}
</script>
