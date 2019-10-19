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
    /* margin-left: 30%;
    margin-top: 20%;
    margin: auto; */
    margin-top: 15%; 

  }
  
</style>

<script>
import login_api from '../api/admin/index';

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
      
      login_api
      .userLogin(window, self.username, self.password )
      .then(function(result)
        {
            console.log(result)
            if(result){
              self.$router.push('/home')
            }
        })
      .catch(function(err){
        console.log(err);
      });
    }
  }
}
</script>