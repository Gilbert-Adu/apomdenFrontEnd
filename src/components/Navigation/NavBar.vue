<template>

  <div id="container">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <nav>
      <div class="toggle">
        <i class="fa fa-bars menu" aria-hidden="true"></i>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript"></script>

<style>

  #container{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  nav{
    width: 100%;
    background: #00316b;
  }

  ul{

  width: 80%;
  margin: 0 auto;
  padding: 0;
  }

  ul li{

    list-style: none;
    display: inline-block;
    padding: 20px;
  }

  ul li:hover{
    background: #e91e63;
  }

  ul li a{

      color: #fff;
      text-decoration: none;
  }

  .toggle{
    width: 100%;
    padding: 10px 20px;
    background: #001f44;
    text-align: right;
    box-sizing: border-box;
    color: #fff;
    font-size: 30px;

  }

  @media (max-width:768px){

    .toggle{
    display: block;
    }

    ul {

    width: 100%;

    }

    ul li {
        display: block;
        text-align: center;

    }

    .active{
      display: block;
    }

  }

    </style>
