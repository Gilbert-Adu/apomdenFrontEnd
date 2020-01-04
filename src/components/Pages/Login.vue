<template>

  <div id="container">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/boostrap/4.1.3/css/bootstrap.min.css">

    <div class="row">
    <div class="col-md-10 offset=md-1">

    <div class="row">

      <div class="col-md-5 register-left">
      <img src="">
        <h3>Join Us</h3>
        <p>Subscribe to know more</p>
        <button type="button" class="btn btn-primary">About Us</button>
      </div>

      <div class="col-md-7 register-right">
        <h2>Register Here</h2>
        <div class="register-form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name">
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Username">
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Email">
          </div>

          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password">
          </div>

          <button type="button" class="btn btn-primary">Register</button>

        </div>
      </div>

    </div>
    </div>
    </div>
  </div>
</template>

<script>
</script>

<style>

  body{
    background-image: linear-gradient(to right, #ff5722, #ff9800);
    margin-top: 150px !important;
  }

  .register-left{
      text-align: center;
      color: #fff;
      padding: 30px;
  }

  .register-left img{

      margin-top: 60px;
      margin-bottom: 18px;
      width: 80px;
  }

  .register-left p{

    padding: 20px 20px 0;
  }

  .register-left .btn-primary{

    border-radius: 1.5rem;
    border: none;
    width: 120px;
    background: #f8f8f8;
    font-weight: 600;
    color: #555;
    margin-top: 20px;
    padding: 10px;
  }

  .register-left .btn-primary:hover{

    background: #000;

  }

  .register-right{

    border: none;
    background: #f8f8f8;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
    padding: 50px;
  }

  .register-right h2{

    text-align: center;
    margin-bottom: 10px;
    color: #555;
  }

  .register-form{

      padding: 30px;
  }

  .register-right .btn-primary{
    float: right;
    border-radius: 1.5rem;
    border: none;
    width: 120px;
    background: #f8f8f8;
    font-weight: 600;
    color: #fff;
    margin-top: 20px;
    padding: 10px;
  }

  .register-right .btn-primary:hover{

    background: #ff5722;
  }

</style>
