 // insert jquery
var head = document.getElementsByTagName("HEAD")[0];

//define jquery to insert to ecrey page
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.selectedDiv {  outline:3px dashed blue; -webkit-box-shadow: 0px 0px 14px 2px rgba(0,0,0,0.44); -moz-box-shadow: 0px 0px 14px 2px rgba(0,0,0,0.44); box-shadow: 0px 0px 14px 2px rgba(0,0,0,0.44); } .selectedDbl{outline:3px solid red;}';

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js';

head.appendChild(script);
head.appendChild(style);


var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.cssClass { color: #F00; }';




jQuery(document).ready(function($) {

    // add bootstrap
    $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.min.css" type="text/css" />');
    //disable all link in page
    $('body').on('click.myDisable', 'a', function(e) { e.preventDefault(); });

         jQuery('body').bind('mousemove' ,function(e){
         	 $(this).find('.selectedDiv').removeClass('selectedDiv');
         	 e.preventDefault();
             console.log(e.target);
             $(e.target).addClass('selectedDiv');        
         });

         jQuery('body').bind('click' ,function(e){
             $(this).find('.selectedDbl').removeClass('selectedDbl');
             console.log(e.target);
             $(e.target).addClass('selectedDbl');  
         });
         
 });