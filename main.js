 // insert jquery
var head = document.getElementsByTagName("HEAD")[0];

//define jquery to insert to ecrey page
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.selectedDiv { border: 2px solid #F00; }';


script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js';

head.appendChild(script);
head.appendChild(style);


var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.cssClass { color: #F00; }';




jQuery(document).ready(function($) {

      
         jQuery('body').bind('mousemove' ,function(e){
             $(this).find('.selectedDiv').removeClass('selectedDiv');
             e.preventDefault();
             console.log(e.target);
             $(e.target).addClass('selectedDiv');
             // $(e.target).css('border', '2px solid red');
             // e.css('border', '2px solid red');
         });
         
 });