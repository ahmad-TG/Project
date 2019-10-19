<template>
  <div class="q-pa-md">
    <a href="/#/employees" >
        <q-btn color="red" icon="add_box"  label="Owner" class="sp" />
    </a>
    <q-table
      :data="employees"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nama',
          align: 'left',
          field: row => row.nama,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'email',
          required: true,
          label: 'Email',
          align: 'left',
          field: row => row.email,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'nomorTelepon',
          required: true,
          label: 'Telp',
          align: 'left',
          field: row => row.nomorTelepon,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'jenisKelamin',
          required: true,
          label: 'Jenis Kelamin',
          align: 'left',
          field: row => row.jenisKelamin,
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
        }
         ],
      employees: [
        {
          
        }
      ]
    }
  },
  async mounted(){
    const response = await axios.get('http://localhost:3000/api/Employees')
    this.employees=response.data
  }
}
</script>