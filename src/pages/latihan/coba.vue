<template>
  <div class="q-pa-md " >
    
    <div class="row" >
    <div class="col" style="align : center" >
      <!-- Qlist awal -->
    <q-list bordered class="rounded-borders q-mx-auto " style="max-width: 400px"  >
      <q-item-label header>
        <q-btn color="blue" icon="add_box"  label="admin" class="sp" size="sm" @click="add()"/>
      </q-item-label>
        
      <q-item  class="bg-teal">
        <q-item-section avatar top class="col-1 gt-xm" style="align : center">
          <q-item-label class="q-mt-sm" >No</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-xm" style="align : center">
          <q-item-label class="q-mt-sm">Username</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-xm" style="align : center">
          <q-item-label class="q-mt-sm">Password
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-4 gt-xm" > 
          <q-item-label class="q-mt-sm flex flex-center">Aksi
          </q-item-label>
        </q-item-section>

      </q-item>
        
        <!-- Tabel -->
      <q-item v-for="(admin, index ) in admin2" :key="admin.id" class="bg-grey-3" line="1">
        <q-item-section avatar top class="col-1 gt-xm">
          <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-xm">
          <q-item-label class="q-mt-sm">{{admin.username}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-xm">
          <q-item-label class="q-mt-sm">{{admin.password}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-4 gt-xm flex flex-center">
          <q-item-label lines="1">
           
              <q-btn  size="12px" flat dense round icon="edit" @click="edit(admin)"/>
              <q-btn  size="12px" flat dense round icon="delete" @click="onDelete(admin.id)" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <!-- Qlist akhir -->

    <!-- Form popup awal  -->
    <q-dialog v-model="dialog" persistent>
      <q-card>
        <q-card-section>
        <div id="form" class="q-mx-auto" style="max-width: 400px">
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="form.username"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              filled
              type="password"
              v-model="form.password"
              label="Your password "
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter your password',
              ]"
            />

            <!-- Button awal -->
            <div>
              <q-btn flat label="Add" type="submit" color="primary" v-close-popup v-show="!updateSubmit"/>
              <q-btn flat label="Update" type="button" color="primary" v-close-popup v-show="updateSubmit" @click="update(form)"/>
              <q-btn flat label="Cancel" color="primary" v-close-popup="cancelEnabled" @click="batal()" />
            
            </div>
            <!-- Button akhir -->

          </q-form>
        </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- Form popup akhir  -->

    </div>
    </div>
  </div>
</template>


<style lang="sass" scoped>
    .row > div
      padding: 5px 7px
</style>

<script>
import admins from '../../api/admin/index';

export default {
  data () {
    return {
      current: 3,
      updateSubmit: false,
      dialog : false,
      cancelEnabled: false,
      admin2: [
        { }
      ],
      form:{
        id : '',
        username : '',
        passwor : ''
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
    add(){
      this.dialog=true
      this.updateSubmit= false

    },
    
    // method untuk Tambah data
    onSubmit(){
      const self=this
      admins.postAdmin(window, self.form.username, self.form.password
    )
      .then(function(result)
        {
          self.$router.go('/admin')
        })
      .catch(function(err){
        console.log(err);
      });
    },

    edit(admin){
       if (confirm('Anda akan di alihkan ke halaman Edit data, Tekan OK untuk lanjut atau Batal untuk kembali')){
        try {
            this.dialog=true
            this.updateSubmit= true
            this.form.id=admin.id
            this.form.username=admin.username
            this.form.password=admin.password
        } catch (error) {
            console.log(error.message)
        }
       }
      
    },
    batal(){
      if (confirm('Apakah Anda yakin ingin keluar proses ini !!!')){
      this.dialog=false
      }
    },
    update(id){ 
      const self=this
      admins.putAdmin(window, self.form.id, self.form.username, self.form.password
    )
      .then(function(result)
        {
          self.$router.go('/admin')
        })
      .catch(function(err){
        console.log(err);
      });
      }
  }
  
}
</script>

<style>
    
</style>