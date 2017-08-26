<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
  	<router-link to="/"><i>P2P Vote</i></router-link>
  	<div class="text-center" style="max-width: 750px; margin: auto;">
      <q-card>
    	  <router-view />
      </q-card>
    </div>
  </div>
</template>

<script>
import { QCard } from 'quasar'
/*
 * Root component
 */
export default {
  components: { QCard }
}
</script>

<style></style>
