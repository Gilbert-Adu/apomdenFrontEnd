<template>
    <div class="col-lg-12 control-section">
      <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />

        <div class="sample_container avatar-card">
            <!-- Card Component -->
            <div class="e-card e-custom-card">
                <div class="e-card-header">
                    <!-- xLarge Circle Avatar-->
                    <div class="e-avatar e-avatar-circle e-avatar-xlarge">
                      <i :class="icon"></i>

                    </div>

                </div>
                <div class="e-card-header">
                    <div class="e-card-header-caption center">
                        <div class="e-card-header-title name">{{this.system}}</div>
                        <div class="e-card-sub-title"></div>
                    </div>
                </div>
                <div class="e-card-content">
                    <p class="avatar-content">
                      {{this.message}}
                      <br><br><br>
                      <button style= "height:30px ; width:100px; border-radius:20px; background-color:#87CEFA"><a href="#" download>Download </a><font-awesome-icon icon="download" /></button>
                    </p>



                </div>

        </div>
        </div>


    </div>
</template>

<script>

  export default {

    name: 'Downloads',
    props: ['system', 'icon', 'message']
  }
</script>





<style>

    a{

        text-decoration: none;
        color: black;
    }
    .sample_container.avatar-card {
        max-width: 300px;
        margin: auto;
        min-height: 400px;
    }

    .avatar-content{
        font-family: Montserrat;
    }

    /* Card Customizations */

    .avatar-card .e-custom-card {
        position: relative;
        margin-top: 80px;
        overflow: visible;
        border-radius: 15px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: 0.2s;
        border-width: 1px;
        padding: 1px;
    }

    .e-custom-card.e-card:hover {
        border-width: 1px;
        padding: 1px;
    }

    .e-custom-card :nth-child(2) .e-card-header-title.name {
        margin-top: 20px;
    }

    .sample_container p.avatar-content {
        line-height: 20px;
        font-family: inherit;
    }

    .avatar-card .e-custom-card .e-card-header {
        text-align: center;
    }

    .avatar-card .e-custom-card .e-avatar {
        font-size: 40px;
        position: absolute;
        top: calc(0% - 1.5em);
        left: calc(50% - 1.5em);

    }

    .e-card.e-custom-card :nth-child(3) {
        padding: 12px 0px 20px 0px;
        height: 130px;
    }

    .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-header-title {
        font-size: 24px;
        font-weight: 500;
        line-height: normal;
        color: rgba(83, 101, 132, 0.65);
        text-shadow: 0 0 0.1px;
    }

    .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-sub-title {
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: rgba(86, 90, 97, 0.65);
        text-shadow: 0 0 0.1px;
    }

    .avatar-card .e-custom-card.e-card .e-card-content {
        overflow: visible;
        width: auto;
        margin: -5px 20px 0 20px;
        word-spacing: 1px;
        font-family: Montserrat;
    }

    .avatar-card .avatar-content {
        color: rgba(250, 200, 130, 0.6);
        margin: 0 auto;
        text-align: center;
        color: rgb(94, 94, 94);
        border: none;
        padding: 0;
        font-size: 14px;

    }

    .avatar-card .avatar-content {
        margin-bottom: 0;
    }

    .sample_container.avatar-card .name {
        margin-top: 10px;
    }

    .highcontrast .avatar-card .e-custom-card.e-card .avatar-content {
        color: rgba(255, 255, 255, 0.84);
    }

    .highcontrast .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-sub-title {
        color: rgba(255, 255, 255, 0.45);
    }

    .highcontrast .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-header-title {
        color: rgba(255, 255, 255, 0.84);
    }


</style>
