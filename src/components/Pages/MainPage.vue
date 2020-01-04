<template>


  <div>
    <div class="cards">
      <div class="windows-card">
        <Downloads
        v-bind:system="system.windows"
        v-bind:icon="windows"
        v-bind:message="winMessage"
        />
      </div>

      <div class="apple-card">
        <Downloads v-bind:system="system.apple"
         v-bind:icon="apple"
         v-bind:message="appMessage"
         />
      </div>

      <div class="linux-card">
        <Downloads v-bind:system="system.linux"
         v-bind:icon="linux"
         v-bind:message="linMessage"
         />
      </div>
    </div>
   </div>
</template>

<script>
  import Downloads from './Downloads'

  export default {


      components: {
          Downloads
      },

      data() {

          return{

                system:{windows: 'Windows',
                apple: 'Mac OS',
                linux: 'Linux'},
                windows: 'fab fa-windows',
                apple: 'fab fa-apple',
                linux: 'fab fa-linux',
                winMessage: 'Download Apomden for Windows 7+',
                appMessage: 'Download Apomden for Mac OS',
                linMessage: 'Download Apomden for linux'
          }
      }
  }
</script>


<style>
  .windows-card, .apple-card, .linux-card{
      display: inline-block;
      margin-top: 200px;
      margin-right: 60px;
      margin-left: 120px;
    }

    .windows-card{
        margin-top: 20px;
    }

</style>
