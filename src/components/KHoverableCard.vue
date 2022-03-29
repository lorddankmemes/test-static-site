<template>
    <q-card :class="{ 'bg-primary text-white': hover }" class="fit text-center k-card"  @mouseover="hover = true" @mouseleave="hover = false">
        <q-card-section class="q-pa-sm q-gutter-sm fit">
            <slot name="normal" v-if="!hover"></slot>
            <slot name="hovered" v-if="hover"></slot>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
  data () {
    return {
      hover: false
    }
  }
}
</script>
