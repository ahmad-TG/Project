<template>
  
  <div class="q-pa-md">

    <router-link to="/admin_add">
        <q-btn color="blue" icon="add_box"  label="admin" class="sp" />
    </router-link>


    <q-table
      :data="admin"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>
<style>
.sp{
  margin-bottom: 10px
}
</style>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      columns: [
        {
          name: 'nama_owner',
          required: true,
          label: 'Nama Owner',
          align: 'left',
          field: row => row.nama_owner,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'tanggalLahir',
          required: true,
          label: 'Tanggal Lahir',
          align: 'left',
          field: row => row.tanggalLahir,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'nomorTelepon',
          required: true,
          label: 'No. Telp',
          align: 'left',
          field: row => row.nomorTelepon,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'alamat',
          required: true,
          label: 'Alamat',
          align: 'left',
          field: row => row.alamat,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        }
         ],
      admin: [
        {
          
        }
      ]
    }
  },
  async mounted(){
    const response = await axios.get('http://localhost:3000/api/owners')
    this.admin=response.data
  },
  methods :{

  }
}
</script>