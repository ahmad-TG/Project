<template>
  <div>
      <table border="2">
          <thead>
              <tr>
                  <th>No</th>
                  <th>username</th>
                  <th>password</th>
                  <th>aksi</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(admin, index) in admin2" :key="admin.id">
                  <td>{{index+1}}</td>
                  <td>{{admin.username}}</td>
                  <td>{{admin.password}}</td>
                  <td>
                    <q-btn class="gt-xs" size="12px" flat dense round icon="edit" @click="edit(admin)"/>
                    <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(admin.id)" />
                  </td>
              </tr>
          </tbody>
      </table>
      <br>

      <form >
         
          <input type="hidden" v-model="form.id" >
          <label >username : </label>
          <input type="text" v-model="form.username">
          <br>
          <label >password : </label>
          <input type="text" v-model="form.password" >
          <button type="submit" v-show="!updateSubmit">add</button>  
          <button type="button" v-show="updateSubmit" @click="update(form)">Update</button>
          
      </form>
  </div>
</template>

<script>
import axios from 'axios'
import admins from '../../api/admin/index';
export default {
  data () {
    return {
      updateSubmit: false,
      cancelEnabled: false,
      admin2: [
        { }
      ],
      form: 
          {
            id :'',
            username : '',
            password : ''
          }     
      
    }
  },

  // Get data dari Api
  async mounted(){
    const response = await 
    admins.getAdmin(window)
        {
          this.admin2=response
        }
   },
  
  
  methods : {

    // Method untuk delete data By ID
    onDelete(id){
      if (confirm('Apakah anda yakin akan menghapus data ini ?')){
      admins.deleteAdmin(window, id)
      .then((res)=>{
        admins.getAdmin(window)
        .then((res)=>{
               this.admin2=res.data
               this.$router.go('/admin')
           })
           .catch(()=>{
               alert('Error load data');
           })
        
      })
      .catch(()=>{
        alert('Error load data');
      })
      console.log("delete called");
      }
    },
    
    // method untuk Tambah data
    onSubmit(){
      const self=this
      admins.postAdmin(window, self.username, self.password
    )
      .then(function(result)
        {
          self.$router.go('/admin')
        })
      .catch(function(err){
        console.log(err);
      });
    },
    // method untuk edit data
    edit(admin){
         
        try {
            this.updateSubmit= true
            this.form.id=admin.id
            this.form.username=admin.username
            this.form.password=admin.password
            
        } catch (error) {
            console.log(error.message)
        }
        
      
    },
    // method untuk Update data
      update(id){ 
        try {
          
          console.log(id)
            axios.put('http://localhost:3000/api/admins/'+ this.form.id , {
            username : this.form.username,
            password : this.form.password
            })
            .then(res=>{
              console.log(res.data)
            });
            
        } catch (error) {
            console.log(error.message)
        }
      }
  },
  
  
}

</script>

<style>
    
</style>