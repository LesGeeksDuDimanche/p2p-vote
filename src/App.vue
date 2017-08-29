<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <div class="text-center" style="max-width: 750px; margin: auto;">
  	<router-link to="/">
      <img style="display:block; position: relative; left: 0.2rem; max-width:10rem;margin-top: 1rem;margin-bottom:1rem;" src="./assets/logo.png">
    </router-link>
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
