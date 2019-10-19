<template>
  <q-page class="flex flex-center">
      <q-card style="width :350px">
          <q-bar>
            <q-icon name="eva-lock-outline" />
            <div>Otentikasi Pengguna</div>
          </q-bar>

          <q-card-section>
              <q-input outlined 
              ref="email" 
              v-model="email" 
              label="Email"
              type="email" 
              placeholder="Masukan Email" 
              hint=""
              :rules="[
                val =>!!val || 'email di perlukan',
                val =>this.validateEmail(val) || 'email di perlukan'
              ]"/>
          </q-card-section>

          <q-card-section>
              <q-input outlined 
              ref="password" 
              v-model="password" 
              label="Password"
              type="password" 
              placeholder="Masukan password" 
              hint=""
              :rules="[
                val =>!!val || 'password di perlukan',
                val =>this.validatepassword(val) || 'password di perlukan'
            ]"/>
          </q-card-section>

          <q-card-section>
              <q-btn
                  push 
                  color="primary"
                  label="Simpan"
                  class ="full-width"
                  size="lg"
                  @click="cobaMasuk"
              />
          </q-card-section>
      </q-card>
  </q-page>
</template>


<script>
import validator from 'validator'

export default {
name : 'PageMasuk',
  data(){
    return{
      email : '',
      password : ''
    }
  },
  methods : {
    validateEmail(value){
      return isEmail(value)
    }
  },
  cobaMasuk(){
    console.log('coba masuk')
  }
}
</script>