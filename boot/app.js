 // insert jquery
 var head = document.getElementsByTagName("HEAD")[0];

 //define jquery to insert to ecrey page
 var style = document.createElement('style');
 style.type = 'text/css';
 style.innerHTML = '.selectedDiv {  outline:3px dashed #286EBB; -webkit-box-shadow: 0px 0px 14px 2px rgba(0,0,0,0.44); -moz-box-shadow: 0px 0px 14px 2px rgba(0,0,0,0.44); box-shadow: 0px 0px 14px 2px rgba(0,0,0,0.44); } .selectedDbl{outline:3px solid #FA7252;}';

 script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js';


 // script = document.createElement('script');
 // script.type = 'text/javascript';
 // script.src = 'http://cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace.js';


 head.appendChild(script);
 head.appendChild(style);   


 var style = document.createElement('style');
 style.type = 'text/css';
 style.innerHTML = '.cssClass { color: #F00; }';




 jQuery(document).ready(function($) {

     var screen;

     // add bootstrap
     $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.min.css" type="text/css" />');
      // add iconfont
     $('head').append('<link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" type="text/css" />');
     // // add aceEditor
     // $('head').append('<script src="http://cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace.js"></script>');

     //disable all link in page
     $('body').on('click.myDisable', function(e) {
         e.preventDefault();
     });

     jQuery('body').on('mousemove', function(e) {
         $(this).find('.selectedDiv').removeClass('selectedDiv');
         e.preventDefault();
         // console.log(e.target);
         $(e.target).addClass('selectedDiv');
     });

     jQuery('body').on('dblclick', function(e) {
         $(this).find('.selectedDbl').removeClass('selectedDbl');
         // console.log(e.target);
         $(e.target).addClass('selectedDbl');
         window.selectedBox = $(e.target);
     });
        

     //#######################left menu###########################################
     $('.toggle-nav').click(function() {

         // alert('done');
         $this = $(this);
         $nav = $('.nice-nav');
         //$nav.fadeToggle("fast", function() {
         //  $nav.slideLeft('250');
         //  });

         $nav.toggleClass('open');

     });
     $('.body-part').click(function() {
         $nav.addClass('open');
     });
     //  $nav.addClass('open');

     //drop down menu
     $submenu = $('.child-menu-ul');
     $('.child-menu .toggle-right').on('click', function(e) {
         e.preventDefault();
         $this = $(this);
         $parent = $this.parent().next();
         // $parent.addClass('active');
         $tar = $('.child-menu-ul');
         if (!$parent.hasClass('active')) {
             $tar.removeClass('active').slideUp('fast');
             $parent.addClass('active').slideDown('fast');

         } else {
             $parent.removeClass('active').slideUp('fast');
         }

     });


        
    //#######################implement ace editor##################

      var editor = ace.edit("editor");
      editor.setTheme("ace/theme/monokai");
      editor.getSession().setMode("ace/mode/javascript");
      document.getElementById('editor').style.fontSize='16px';


     //#######################left mene events##################
     var prop = {
         screenSize: '',
         property2: ''
     };



     // screen size
     // 
     $body = $('html');
     $('.cXs').click(function() {
         $('.menuLi').find('.active').removeClass('active');
         $body.css('width', '320px');
         $(this).addClass('active');

         //set selected screen
         window.selectedScreen = "col-xs-";
         prop.screenSize = "col-xs-";

         //show mode on right of the screen
         $('.rightboxText').text('X-Small Screen');
         $('.rightbox').find('div').removeClass();
         $('.rightbox').find('div').addClass('lnr smartphone');

         screen = { width:"xs" };

         
     });

     $('.cS').click(function() {
         $('.menuLi').find('.active').removeClass('active');
         $body.css('width', '768px');
         $(this).addClass('active');

         //set selected screen
         window.selectedScreen = "col-sm-";
         prop.screenSize = "col-sm-";

         //show mode on right of the screen
         $('.rightboxText').text('Small Screen');
         $('.rightbox').find('div').removeClass();
         $('.rightbox').find('div').addClass('lnr lnr-tablet');

         screen = { width:"sm" };


     });

     $('.cM').click(function() {
         $('.menuLi').find('.active').removeClass('active');
         $body.css('width', '992px');
         $(this).addClass('active');

         //set selected screen
         window.selectedScreen = "col-md-";
         prop.screenSize = "col-md-";

         //show mode on right of the screen
         $('.rightboxText').text('Medium Screen');
         $('.rightbox').find('div').removeClass();
         $('.rightbox').find('div').addClass('lnr lnr-laptop');

         screen = { width:"md" };

     });

     $('.cL').click(function() {
         $('.menuLi').find('.active').removeClass('active');
         $body.css('width', '100%');
         $(this).addClass('active');

         //set selected screen
         window.selectedScreen = "col-lg-";
         prop.screenSize = "col-lg-";

         //show mode on right of the screen
         $('.rightboxText').text('Full Screen');
         $('.rightbox').find('div').removeClass();
         $('.rightbox').find('div').addClass('lnr lnr-screen');

         screen = { width:"lg" };

     });


     //*********boxex
     //size
     $("input[type=range]").on('change', function(event) {

         rangeVal = $(this).val();
         $('.rangeValue').text(rangeVal);
         //get selected screen size
         $selectedScreen = prop.screenSize;
         
         //get the range valur
         // console.log(prop);
         if (typeof(selectedScreen) != "undefined" && selectedScreen !== null) {
             // console.log(rangeVal);
             // if(selectedBox.hasClass('[class^="c"]')){
             //   console.log("yes");
               // selectedBox.removeClass('[class^="col"]');
               
               console.log($selectedScreen);
               if($selectedScreen == "col-xs-"){
                   selectedBox.removeClass (function (index, css) {
                     return (css.match (/(^|\s)col-xs-\S+/g) || []).join(' ');
                   });
               }
               if($selectedScreen == "col-sm-"){
                   selectedBox.removeClass (function (index, css) {
                     return (css.match (/(^|\s)col-sm-\S+/g) || []).join(' ');
                   });
               }
               if($selectedScreen == "col-md-"){
                   selectedBox.removeClass (function (index, css) {
                     return (css.match (/(^|\s)col-md-\S+/g) || []).join(' ');
                   });
               }
               if($selectedScreen == "col-lg-"){
                   selectedBox.removeClass (function (index, css) {
                     return (css.match (/(^|\s)col-lg-\S+/g) || []).join(' ');
                   });
               }

               // selectedBox.addClass(classWidth);
             // }else{
             var classWidth = selectedScreen + rangeVal;
             selectedBox.addClass(classWidth);
             // }
         }
         // console.log(selectedBox);
     });
     
     //position
     
     $('.posCharLeft').on('click', function(event) {
         if(selectedBox.hasClass('pull-right')) {selectedBox.removeClass('pull-right');} 
         selectedBox.addClass('pull-left');
         
         divClass = selectedBox.attr('class');
         screen = { screenSize:screen.width ,  keyPos:divClass , valPos:"pull-left" };

     });

     $('.posCharRight').on('click', function(event) {
         if(selectedBox.hasClass('pull-left')) {selectedBox.removeClass('pull-left');}
         selectedBox.addClass('pull-right');

         divClass = selectedBox.attr('class');
         screen = { keyPos:divClass , valPos:"pull-right" };
     });


     $('.posOffsetLeft').on('click', function(event) {
         // if(selectedBox.hasClass('col-sm-offset-')) {selectedBox.removeClass('pull-right');} 
         
         var numberPattern = /\d+/g;
         classoffsetNum = selectedBox.attr('class');
         var num_id = classoffsetNum.match( numberPattern );
         var sum_num = Number(num_id) +1;
         // console.log(num_id);
         // if (num_id)   
         // {
         //      classoffsetNum.removeClass('')
         // }

         selectedBox.addClass('col-sm-offset-'+ sum_num +"'");
         
         divClass = selectedBox.attr('class');
         screen = { keyOffset:divClass , valPos:"col-sm-offset-1" };

     });
     

     // $('.posOffsetRight').on('click', function(event) {
     //     // if(selectedBox.hasClass('col-sm-offset-')) {selectedBox.removeClass('pull-right');} 
     //     classoffsetNum = selectedBox.attr('class');
     //     if (classoffsetNum.indexOf("offset") >= 0)
     //     {
     //        classoffsetNum:contains('offset').remove();
     //        console.log("true");
     //     }

     //     selectedBox.addClass('col-sm-offset-1');
         
     //     divClass = selectedBox.attr('class');
     //     screen = { keyOffset:divClass , valPos:"col-sm-offset-1" };

     // });


    
    
    // images
    $(".imageEffect").on('click', function(event) {
        // $(this).find('.activeImage').removeClass('activeImage');
        // $(this).find('.img-icon').addClass('activeImage');
        
        $imageEffect = $(this).find('img').attr("class");

        if(selectedBox.not('img-rounded')){
            if(selectedBox.hasClass('img-rounded')) {selectedBox.removeClass('img-rounded');}
            if(selectedBox.hasClass('img-circle')) {selectedBox.removeClass('img-circle');}
            if(selectedBox.hasClass('img-thumbnail')) {selectedBox.removeClass('img-thumbnail');}
        } 
        selectedBox.addClass($imageEffect)
    });

    //#######text##########3
    //text align
    $(".menuTextAlign").on('click', ".lnr" , function(e) {
        // $(this).find('.activeImage').removeClass('activeImage');
        // $(this).find('.img-icon').addClass('activeImage');
        $element = $(e.target);
        $textAlign = $element.attr("class").split(' ')[1];

        
        if(selectedBox.hasClass('text-center')) {selectedBox.removeClass('text-center');}
        if(selectedBox.hasClass('text-left')) {selectedBox.removeClass('text-left');}
        if(selectedBox.hasClass('text-right')) {selectedBox.removeClass('text-right');}
        if(selectedBox.hasClass('text-justify')) {selectedBox.removeClass('text-justify');}
  

        switch($textAlign) {
            case "lnr-text-align-center":
                selectedBox.addClass("text-center")
                break;
            case "lnr-text-align-left":
                selectedBox.addClass("text-left")
                break;
            case "lnr-text-align-right":
                selectedBox.addClass("text-right")
                break;
            case "lnr-text-align-justify":
                selectedBox.addClass("text-justify")
                break;
        
        }
    });

    //text size
    $(".menuTextSize").on('click', ".fontSize" , function(e) {
        $element = $(e.target);
        $fontSize = $element.val();
         
        // console.log($fontSize);
        
        // if(selectedBox.hasClass('text-lowercase')) {selectedBox.removeClass('text-lowercase');}
        // if(selectedBox.hasClass('text-uppercase')) {selectedBox.removeClass('text-uppercase');}
        // selectedBox.css("font-size" , $fontSize + "!important" );
        selectedBox.css('font-size', $fontSize +"px");
        
    });


    //text transiton
    $(".menuTexttrans").on('click', ".trans" , function(e) {
        $element = $(e.target);
        $textTrans = $element.attr("class").split(' ')[3];
         
        // console.log($textTrans);
        
        if(selectedBox.hasClass('text-lowercase')) {selectedBox.removeClass('text-lowercase');}
        if(selectedBox.hasClass('text-uppercase')) {selectedBox.removeClass('text-uppercase');}

        switch($textTrans) {
            case "transL":
                selectedBox.addClass("text-lowercase");
                break;
            case "transU":
                selectedBox.addClass("text-uppercase");
                break;
        }
    });

    


    $('body').on('click', function(event) {

        console.log(screen);
    });
    


 });