<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        P2P Vote
        <div slot="subtitle">Running on Quasar v{{$q.version}}</div>
      </q-toolbar-title>
      <q-btn flat v-show="handleIsLoggedIn()" @click="handleLogout()">
        Logout
        <q-icon name="lock"/>
      </q-btn>
      <q-btn flat v-show="handleIsLoggedIn()" @click="handleLogin()">
        Login
        <q-icon name="lock" />
      </q-btn>
    </q-toolbar>

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list no-border link inset-delimiter>
        <q-list-header>Actions</q-list-header>
        <q-item @click="launch('#')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="New Vote" sublabel="Organise a new Voting" />
        </q-item>

        <q-list-header>Read More</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>
    <router-view></router-view>
  </q-layout>
</template>

<script>
import {
  dom,
  event,
  openURL,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

import { isLoggedIn, login, logout } from '../lib/Authorisation';

const
  { viewport } = dom,
  { position } = event

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  },
  /*
  data() {
    return {
      isLoggedIn: isLoggedIn()
    }
  },
  */
  methods: {
    handleLogin() {
      console.log('login');
      login();
    },
    handleLogout() {
      console.log('logout');
      logout();
    },
    /*
    */
    handleIsLoggedIn() {
      var val = isLoggedIn();
      console.log('logged', val);
      return val;
    },
  }
}
</script>

<style lang="stylus">
.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
