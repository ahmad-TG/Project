<template>
  
  <div class="q-pa-md">

    <router-link to="/projek_add">
        <q-btn color="blue" icon="add_box"  label="admin" class="sp" />
    </router-link>


    <q-table
      :data="projek"
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
          name: 'namaProjek',
          required: true,
          label: 'Nama Project',
          align: 'left',
          field: row => row.namaProjek,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'penanggungJawab',
          required: true,
          label: 'Penanggung Jawab',
          align: 'left',
          field: row => row.PenanggungJawab,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'KetuaProjek',
          required: true,
          label: 'Ketua Projek',
          align: 'left',
          field: row => row.KetuaProjek,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        }
         ],
      projek: [
        {
          
        }
      ]
    }
  },
  async mounted(){
    const response = await axios.get('http://localhost:3000/api/projeks')
    this.projek=response.data
  },
  methods :{

  }
}
</script>