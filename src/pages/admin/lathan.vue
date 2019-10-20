<template>
    
</template>

<script>
import admins from '../../api/admin/index';

export default {
    data() {
        return {
            current: 3,
            updateSubmit: false,
            dialog: false,
            cancelEnabled: false,
            admin2: [{}],
            form: {
                id: '',
                username: '',
                passwor: ''
            }
        }
    }, 

    // Get data dari Api
    async mounted() {
        const response = await
        admins.getAdmin(window) 
            {
                this.admin2 = response
            }
        },

    methods: {

        // Method untuk delete data By ID
        onDelete(id) {
            if (confirm('Apakah anda yakin akan menghapus data ini ?')) {
                admins.deleteAdmin(window, id)
                    .then((res) => {
                        admins.getAdmin(window)
                            .then((res) => {
                                this.admin2 = res.data
                                this.$router.go('/admin')
                            })
                            .catch(() => {
                                alert('Error load data');
                            })
                    })
                    .catch(() => {
                        alert('Error load data');
                    })
                console.log("delete called");
            }
        },

        // Methods add untuk mengaktifkan popup
        add() {
            this.dialog = true
            this.updateSubmit = false
          },

        // method untuk Tambah data
        onSubmit() {
            const self = this
            admins.postAdmin(window, self.form.username, self.form.password)
                .then(function (result) {
                    self.$router.go('/admin')
                })
                .catch(function (err) {
                    console.log(err);
                });
            },

         // method untuk Edit data
        edit(admin) {
            if (confirm('Anda akan di alihkan ke halaman Edit data, Tekan OK untuk lanjut atau Batal untuk kembali')) {
                try {
                    this.dialog = true
                    this.updateSubmit = true
                    this.form.id = admin.id
                    this.form.username = admin.username
                    this.form.password = admin.password
                } catch (error) {
                    console.log(error.message)
                }
            }
        },

        // method Tombol batal pada popup
        batal() {
            if (confirm('Apakah Anda yakin ingin keluar proses ini !!!')) {
                this.dialog = false
            }
        },

        // method Update
        update(id) {
            const self = this
            admins.putAdmin(window, self.form.id, self.form.username, self.form.password)
            .then(function (result) {
                self.$router.go('/admin')
            })
            .catch(function (err) {
                console.log(err);
            });
        }
    }
}
</script>
