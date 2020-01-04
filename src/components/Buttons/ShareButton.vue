<template>

  <div id="container">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <ul>
      <li>
          <a href="#"><i class="fa fa-share"></i>
            <span style="font-family: sans-serif;"> Share </span>
          </a>
      </li>

    </ul>
  </div>
</template>

<script>
</script>

<style>
ul{

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: block;
  margin: 0;
  padding: 0;
}

ul li{
    list-style-type: none;
    margin: 30 -5px;
}

ul li a .fa{

    font-size: 40px;
    color: #333;
    line-height: 80px;
    transition: 0.5s;
    padding-right: 30px;
}


ul li a span{

    padding: 0;
    margin: 0;
    position: absolute;
    top: 30px;
    color: #333;
    letter-spacing: 4px;
    transition: 0.5s;
}

ul li a {

    text-decoration: none;
    display: absolute;
    display: block;
    width: 210px;
    height: 80px;
    background: #fff;
    text-align: left;
    padding-left: 10px;
    transform: rotate(0deg) skewX(0deg) translate(0,0);
    transition: 0.5s;
    box-shadow: -10px 10px 5px rgba(0,0,0,0,5);
}

ul li a:before{

  content: '';
  position: absolute;
  top: 3px;
  left: -5px;
  height: 100%;
  width: 5px;
  background: #b1b1b1;
  transform: rotate(0deg) skewY(-44deg);
  transform: 0.5s;
}

ul li a:after{

content: '';
position: absolute;
bottom: -5px;
left: -5px;
height: 5px;
width: 5px;
background: #b1b1b1;
transform: rotate(0deg) skewX(-45deg);
transform: 0.5s;




}

ul li a:hover{

    transform: rotate(0deg) skew(5deg,5deg) translate(0px,0px);

}

ul li:hover .fa{

    color: #fff;
}

ul li:hover span{

    color: #fff;
}

ul li:hover a{

    background: #dd4b39;
}

ul li:hover a:before{

    background: #b33a2b;
}

ul li:hover a:after{

    background: #e66a5a;
}

</style>
