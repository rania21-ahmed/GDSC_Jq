$(document).ready(function(){

    /**Start span**/

    $("span").hover(
        function(){
            $(this).css("color","#ccc");
            $(this).css("borderBottom","1px solid black");
    },
        function(){
            $(this).css("color","#000");
            $(this).css("borderBottom","0px solid black");
        }
    );
   
    /****End ul*******/
    /******All Proudect***** */
    $(".s_1").click(function(){

        $("div").show();
        $(".fullter").hide();
        $(".search").hide();
        
    });
    /******Start Div Women******/ 
    $(".s2").click(
        function(){
             $(".wom").show();
             $(".man").hide();
             $(".watch").hide();
              $(".shose").hide();

        }
    );
    
    /******Start men***** */
    $(".s3").click(
        function(){
             $(".wom").hide();
             $(".man").show();
             $(".watch").hide();
        }
    );
    /*****Start Bag******/ 
    $(".s4").click(
        function(){
            $(".bag").show();
            $(".shose").hide();
            $(".watch").hide();
             $(".wom").hide();
             $(".man").hide();
        }
    );
    /*****Start Shose******/ 
    $(".s5").click(
        function(){
            $(".shose").show();
            $(".watch").hide();
             $(".wom").hide();
             $(".man").hide();
        }
    );
    /*****Start Wathes******/ 
    $(".s6").click(
        function(){
            $(".watch").show();
             $(".wom").hide();
             $(".man").hide();
             $(".shose").hide();
        }
    );


    /******Icone******/
    $("i").click(function(){
        $(this).css("color","blue");
    }) ;

    /*****Strat Flutter****** */
    $(".item-text").hover(
        function(){
        $(this).css("color","blue");
    },
        function(){
            $(this).css("color","#555");
        }
    );
    
    $(".fullter").hide();
    $(".x1").hide();
    $(".s1").show();
    
    $(".fullter-btn").click(function(){
        $(".fullter").toggle();
        $(".search").hide();
        $(".s1").toggle();
        $(".x1").toggle();
        
    });

    /******Start Search******/
    $(".x").hide();
    $(".s").show();

    $(".search").hide();
    $(".search-btn").click(function(){
        $(".search").toggle();
        $(".fullter").hide();
        $(".s").toggle();
        $(".x").toggle();
    });

    /*********image scale***************/
    

});