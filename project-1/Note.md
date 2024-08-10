<!-- JS for toggle Menu -->
 <script>

    var menuItems = document.getElementById("menuItems");

    menuItems.style.maxHeight = "0px";

    function menuToggle(){
        if(menuItems.style.maxHeight == "0px"){
            menuItems.style.maxHeight = "200px";
        }
        else{
            menuItems.style.maxHeight = "0px";
        }
    }


 </script>


  <!-- JS for product gallery -->

<script>

    var productsImg = document.getElementById("productsImg");

    var smallImg = document. getElementsByClassName("smallImg");

    smallImg[0].onclick = function(){
        productsImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function(){
        productsImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function(){
        productsImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function(){
        productsImg.src = smallImg[3].src;
    }


</script>



 <!--  JS for toggle Form -->
   <script>

    var loginForm = document.getElementById("loginForm");

    var regForm = document.getElementById("regForm");

    var Indicator = document.getElementById("Indicator");

    function register(){

        regForm.style.transform = "translateX(0px)";

        loginForm.style.transform = "translateX(0px)";
        
        Indicator.style.transform = "translateX(100px)";
    }

    function login(){
        
        regForm.style.transform = "translateX(300px)";

        loginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
    }

   </script>