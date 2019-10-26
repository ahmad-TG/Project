quasar
<template>
<q-card class="my-card text-white m" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
  <div class="row">
    <div id="form" class="q-mx-auto " style="max-width: 400px">
      <q-card style="width :350px" >
        <q-form  @submit="onSubmit" >
          <q-bar>
            <q-icon name="eva-lock-outline" />
            <div>Otentikasi User</div>
          </q-bar>

          <q-card-section>
              <q-input outlined 
              v-model="username" 
              label="username"
              type="text" 
              placeholder="Masukan username" 
              hint=""
              :rules="[
                val =>!!val || 'username di perlukan'
              ]"/>
          </q-card-section>

          <q-card-section>
              <q-input outlined 
              v-model="password" 
              label="Password"
              type="password" 
              placeholder="Masukan password" 
              hint=""
              :rules="[
                val =>!!val || 'password di perlukan'
            ]"/>
          </q-card-section>

          <q-card-section>
              <q-btn
                  push 
                  color="primary"
                  label="Simpan"
                  class ="full-width"
                  size="lg"
                  type="submit"
              />
          </q-card-section>
        </q-form>
      </q-card>
    </div>
  </div>
</q-card>
</template>

<style scoped>

  #form{
    /* margin-left: 30%;
    margin-top: 20%;
    margin: auto; */
    margin-top: 15%; 

  }
  .m {
    height: 730px;
  }
  
</style>

<script>
import login_api from '../api/login/index';

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
                self.$router.go('/home')
            }
        })
      .catch(function(err){
        console.log(err);
      });
    }
  }
}
</script>