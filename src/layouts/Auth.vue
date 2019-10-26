<template>
<div>
    <div class="row">
      <div class="col bg blue">
          <q-tabs
            v-model="tab"
            no-caps
            class="bg-orange text-white shadow-2"
          >
            <q-tab name="mails" label="Mails" />
            <q-tab name="alarms" label="Alarms" />
            <q-tab name="movies" label="Movies" />
        </q-tabs>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <q-carousel
          animated
          v-model="slide"
          infinite
          autoplay
          transition-prev="slide-right"
          transition-next="slide-left"
          navigation
          
        >
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>
      </div>
    </div>

    

    <div class="row">
      <div class="col-2-xs ">
         <div class="q-ma-md bg-blue " >
            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
         </div>
      </div>
      <div class="col-2-xs ">
         <div class="q-ma-md bg-blue">
            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
         </div>
      </div>
      <div class="col-2-xs ">
         <div class="q-ma-md bg-blue">
            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
         </div>
      </div>
      <div class="col-2-xs ">
          <div class="q-ma-md bg-blue">
            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
         </div>
      </div>




      


    




      
    </div>
  </div>
</template>    

<style lang="stylus">
.mg{
  height : 690px;
  width : 1366px;
}
.my-content{
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
}
// .thumb{
//   width :200px;
//   height: 200px;
// }
</style>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>