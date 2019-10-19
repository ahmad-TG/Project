<template>
<q-page class="flex flex-center">
    <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
        <q-card-section>
            <div class="text-h6">Frontend</div>
            <div class="text-subtitle2">latihan 1</div>
        </q-card-section>

        <q-card-section>
            <table style="margin :'1px'">
                <tr >
                    <td><input v-model="message" @keyup="handlekeyup" /></td>
                    <td> <button @click="clearMessage">Clear</button></td>
                </tr>

                <tr>
                    <td>
                        <h6>Tampilkan Teks :</h6>
                    </td>
                    <td >
                        <h5 v-if='message.length'> {{ message }}</h5>
                        <h5 v-else>No Massage</h5>
                    </td>
                </tr>
                <tr>
                    <td>Converter To UpperCase :</td>
                    <td>
                        <h5>{{ uppercaseMessage() }}</h5>
                    </td>

                </tr>
                <tr>
                    <td>Converter upercas to lower :</td>
                    <td>
                        <h5>{{ lowercaseMessage() }}</h5>
                    </td>

                </tr>
            </table>

            <ul>
                <li v-for="task in tasks" :key="task.name" >
                    <div>{{task.name}}</div>
                    <small>
                        dve{{task.dveDate}} at {{task.dveTime}}
                    </small>

                </li>
            </ul>
        </q-card-section>
    </q-card>

</q-page>
</template>

// style css
<style scoped>
  .my-card {
    width: 100%;
    max-width: 450px;
  }
  #sp {
      margin-top: 1px;
      margin-bottom: 1px;
  }
</style>

<script>
export default {
    data() {
        return {
            message: 'test vue',
            tasks : [
                {
                    name : "Go to Shop",
                    dveDate : "2019/02/12",
                    dveTime : "18.09"
                },
                {
                    name : "get stone fruits",
                    dveDate : "2018/02/11",
                    dveTime : "17.20"
                }
            ]
        }
    },

    methods: {
        clearMessage() {
            this.message = ''
        },

        handlekeyup(e) {
            if (e.keyCode == 27) {
                this.message = 'ESC'
            } else if (e.keyCode == 27) {
                this.message = 'A'
            }
        },
        uppercaseMessage() {
            return this.message.toUpperCase()

        },
        lowercaseMessage() {
            return this.uppercaseMessage().toLowerCase()
        }
    }
}
</script>
