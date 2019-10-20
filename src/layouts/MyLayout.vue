<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Awal header -->
      <q-header elevated class="bg" > 
        <q-toolbar >
          <q-btn
          id="hiden"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
          <!-- Awal toolbar -->
            <q-toolbar-title id="hiden">
              Quasar App
            </q-toolbar-title>
          <!-- Akhir  toolbar -->

          <!-- Awal Menu Atas -->
            <q-tabs id="menu">
              <q-route-tab v-for="nav in navs" :key="nav.id" :to="nav.to" :label="nav.label" />
            </q-tabs>
          <!-- Akhir Menu Atas -->

        </q-toolbar>
      </q-header>
    <!-- Akhir header -->

    <!-- Awal Q-Drawer -->
      <q-drawer
        v-model="leftDrawerOpen"
        :breakpoint="767"
        :width="200"
        show-if-above
        bordered
        content-class="bg-grey-2"
      >
        <q-list>
          <q-item-label header>Navigation</q-item-label>
          <q-item v-for="nav in navs" 
          :key="nav.id" 
          :to="nav.to"
          class="text-black"
          exact 
          clickable>
            <q-item-section avatar>
                <q-icon :name="nav.icon" />
            </q-item-section>
            <q-item-section>
                <q-item-label>{{nav.label}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
    <!-- Akhir Q-Drawer -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
/* untuk hidden manu ketika lebar layar melebihi 768px */
  @media screen and (min-width: 768px) {
    #menu { 
      display: none;
    }
  }
/* untuk hidden Text kuasar pada header ketika lebar layar kurang 768px */
  @media screen and (max-width: 768px) {
    #hiden {
      display: none;
    }
  }

  .q-drawer {
      color: white !important;
    }
    
</style>


<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      navs : [
        {
          label : 'Home',
          icon : 'home',
          to : '/home'
        },
        {
          label : 'Admin',
          icon : 'folder',
          to : '/admin'
        },
        {
          label : 'Owner',
          icon : 'folder',
          to : '/owner'
        },
        {
          label : 'Projek',
          icon : 'folder',
          to : '/projek'
        },
        {
          label : 'Employees',
          icon : 'folder',
          to : '/employees'
        }
      ]
    }
  }
}
</script>
