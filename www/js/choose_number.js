$(document).ready(function(){
    
  //Learn the number when "equality" button is pressed
  $("#learn_btn").click(function(){
    if(typeof hundreds == 'undefined'){hundreds=0;}
    if(typeof tens == 'undefined'){tens=0;}
    if(typeof ones == 'undefined'){ones=0;}
    alert(hundreds + "" + tens + "" + ones);    
    
  });

  //read value of hundreds and increase its value by one
  $(".huns_up").click(function(){
    hundreds = parseInt($(".number_block .huns").html());
    if(hundreds<9){
      hundreds+=1;
      $(".number_block .huns").html(hundreds)
    }  
  });
    
  //read value of tens and increase its value by one
  $(".tens_up").click(function(){
    tens = parseInt($(".number_block .tens").html());
    if(tens<9){
      tens+=1;
      $(".number_block .tens").html(tens)
    }  
  });
    
  //read value of ones and increase its value by one
  $(".ones_up").click(function(){
    ones = parseInt($(".number_block .ones").html());
    if(ones<9){
      ones+=1;
      $(".number_block .ones").html(ones)
    }  
  });  
    
  //read value of hundreds and decrease its value by one
  $(".huns_down").click(function(){
    hundreds = parseInt($(".number_block .huns").html());
    if(hundreds>0){
    hundreds-=1;
      $(".number_block .huns").html(hundreds)
    }  
  });
    
  //read value of tens and increase its value by one
  $(".tens_down").click(function(){
    tens = parseInt($(".number_block .tens").html());
    if(tens>0){
      tens-=1;
      $(".number_block .tens").html(tens)
    }  
  });
    
  //read value of ones and increase its value by one
  $(".ones_down").click(function(){
    ones = parseInt($(".number_block .ones").html());
    if(ones>0){
      ones-=1;
      $(".number_block .ones").html(ones)
    }  
  });  
 
 
    
    
    
});