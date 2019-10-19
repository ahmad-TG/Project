quasar
<template>
  <div class="row">
    <div id="form" class="q-mx-auto" style="max-width: 400px">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="username"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Your password "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please enter your password',
          ]"
        />

        <div>
          <q-btn label="Login" type="submit" color="primary"/>
          
        </div>
      </q-form>
    </div>
  </div>
</template>

<style scoped>

  #form{
    margin-top: 15%; 
  }
  
</style>

<script>

import axios from 'axios'
export default {

  data(){
    return{
      username : "",
      password : ""
    }
  },

  methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:3000/api/admins', {
    username: self.username,
    password: self.password
    })
    .then(function (response) {
      return  self.$router.push('/admin')
         
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>