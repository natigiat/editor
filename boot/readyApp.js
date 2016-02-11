 // insert jquery
 var head = document.getElementsByTagName("HEAD")[0];

 //define jquery to insert to ecrey page
 var style = document.createElement('style');
 style.type = 'text/css';
 style.innerHTML = '.selectedDiv {  outline:3px dashed #286EBB; -webkit-box-shadow: 0px 0px 14px 2px rgba(0,0,0,0.44); -moz-box-shadow: 0px 0px 14px 2px rgba(0,0,0,0.44); box-shadow: 0px 0px 14px 2px rgba(0,0,0,0.44); } .selectedDbl{outline:3px solid #FA7252;}    .bresponsive {font: 14px/18px "Montserrat", sans-serif; } .bresponsive #leftMenu ul {list-style: none; padding: 0px; } .bresponsive #leftMenu li span {margin-left: 9px; } .bresponsive #leftMenu span.lnr {font-size: 20px; } .bresponsive a.menuLi {height: 42px; } .bresponsive .menuImages{height:100px; } .bresponsive a {text-decoration: none; } .bresponsive :after, :before {-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } .bresponsive .pad-15 {padding: 15px; } .bresponsive .clear {clear: both; } .bresponsive .clear:after, .clear:before{display: table; } .bresponsive .header {min-height: 55px; background: #273135; border-bottom: 1px solid #273135; } .bresponsive a.toggle-nav {top: 12px; right: 15px; position: absolute; color: #fff; line-height: 25px; font-size: 22px; background: #DE5939; padding: 3px 5px; border-radius: 1px; transform: rotate(90deg); } .bresponsive .header > .left-head {width: 250px; display: block; background:#20282B; position:relative; } .bresponsive .header > .left-head .logo img{max-width:150px; width:100%; } .bresponsive .header > .left-head .logo{padding:10px 0px 10px 15px; } .bresponsive .nice-nav {width: 250px; background: #DE5939; height: 100%; transition: all 0.4s ease-in-out 0s; float: left; } .bresponsive #leftMenu{position: fixed; top: 104px; left: 0; z-index: 5555555555555555555; } .bresponsive .no-padding{padding:0px !important; } .bresponsive a.menuImages {     padding: 20px 0px!important; } .bresponsive .imageEffect img {width: 55px !important; height: 55px !important; padding: 0px!important; float: left; margin-left: 15px; } .bresponsive .sliderBox {margin-top: 6px; } .bresponsive .nice-nav.open {margin-left: -250px; display: block; } .nice-nav > .user-info {padding: 10px 15px; color: #fff; border-bottom: 1px solid #ddd; min-height: 41px; } .bresponsive .nice-nav .user-info .user-name, .bresponsive .nice-nav .user-info img{float:left;} .bresponsive .nice-nav> .user-info > .user-name {padding: 0px 10px; } .bresponsive .user-info > .user-name h5 {text-transform: uppercase; font-size: 16px; } .bresponsive .user-info > .user-name span {font-size: 80%; color: #555; font-style: italic; } .bresponsive .nice-nav li.child-menu span.toggle-right {text-align: right; float: right; display: inline-block; position: absolute; right: 0; padding: 15px; top: 0; background: #DE5939; bottom: 0; } .bresponsive .nice-nav ul li a {padding: 12px; background: #FA7252; border-bottom: 1px solid #ddd; display: block; color: #fff; position: relative; } .bresponsive .nice-nav ul li.child-menu ul {background: #aaa; display: none; } .bresponsive .nice-nav ul li.child-menu ul li a {background: #273135; padding: 10px 20px; } .bresponsive .slider {width: 100%; } .bresponsive input[type="range"] {-webkit-appearance: none; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); width: 100%; height: 13px; margin: 0; border: none; padding: 1px 2px; border-radius: 14px; background: #232528; box-shadow: inset 0 1px 0 0 #0d0e0f, inset 0 -1px 0 0 #3a3d42; -webkit-box-shadow: inset 0 1px 0 0 #0d0e0f, inset 0 -1px 0 0 #3a3d42; outline: none; } .bresponsive input[type="range"]::-moz-range-track {border: inherit; background: transparent; } .bresponsive input[type="range"]::-ms-track {border: inherit; color: transparent; background: transparent; } .bresponsive input[type="range"]::-ms-fill-lower, .bresponsive input[type="range"]::-ms-fill-upper {background: transparent; } .bresponsive input[type="range"]::-ms-tooltip {display: none; } .bresponsive .active {color: #FA7252; } .bresponsive .activeImage  {border: 2px solid #FA7252; } /* thumb */ .bresponsive input[type="range"]::-webkit-slider-thumb {-webkit-appearance: none; width: 20px; height: 12px; border: none; border-radius: 12px; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #529de1), color-stop(100%, #245e8f)); /* android <= 2.2 */ background-image: -webkit-linear-gradient(top , #529de1 0, #245e8f 100%); background-image: linear-gradient(to bottom, #529de1 0, #245e8f 100%); } .bresponsive input[type="range"]::-moz-range-thumb {width: 40px; height: 18px; border: none; border-radius: 12px; background-image: linear-gradient(to bottom, #529de1 0, #245e8f 100%); } .bresponsive input[type="range"]::-ms-thumb {width: 40px; height: 18px; border-radius: 12px; border: 0; background-image: linear-gradient(to bottom, #529de1 0, #245e8f 100%); } .bresponsive .menuTextSize .dropdown {display: inline-block; position: relative; overflow: hidden; height: 28px; width: 100%; background: #f2f2f2; border: 1px solid; border-color: white #f7f7f7 whitesmoke; border-radius: 3px; background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06)); background-image: -moz-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06)); background-image: -o-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06)); background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.06)); -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08); box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08); } .bresponsive .menuTextSize .dropdown:before, .dropdown:after {position: absolute; z-index: 2; top: 9px; right: 10px; width: 0; height: 0; border: 4px dashed; border-color: #888888 transparent; pointer-events: none; } .bresponsive .menuTextSize .dropdown:before {border-bottom-style: solid; border-top: none; } .bresponsive .menuTextSize .dropdown:after {margin-top: 7px; border-top-style: solid; border-bottom: none; } .bresponsive .menuTextSize .dropdown-select {position: relative; width: 130%; margin: 0; padding: 6px 8px 6px 10px; height: 28px; line-height: 14px; font-size: 12px; color: #62717a; text-shadow: 0 1px white; background: #f2f2f2; /* Fallback for IE 8 */ background: rgba(0, 0, 0, 0) !important; border: 0; border-radius: 0; -webkit-appearance: none; } .bresponsive .menuTextSize .dropdown-select:focus {z-index: 3; width: 100%; color: #394349; outline: 2px solid #49aff2; outline: 2px solid -webkit-focus-ring-color; outline-offset: -2px; } .bresponsive .menuTextSize .dropdown-select > option {margin: 3px; padding: 6px 8px; text-shadow: none; background: #f2f2f2; border-radius: 3px; cursor: pointer; } /* Fix for IE 8 putting the arrows behind the select element. */ .bresponsive .lt-ie9 .dropdown {z-index: 1; } .bresponsive .lt-ie9 .dropdown-select {z-index: -1; } .bresponsive .lt-ie9 .dropdown-select:focus {z-index: 3; } @-moz-document url-prefix() {.bresponsive .dropdown-select {padding-left: 6px; } } .bresponsive .menuTextSize .dropdown-dark {background: #273135; border-color: #273135; background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4)); background-image: -moz-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4)); background-image: -o-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4)); background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4)); -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.1), 0 1px 1px rgba(0, 0, 0, 0.2); box-shadow: inset 0 1px rgba(255, 255, 255, 0.1), 0 1px 1px rgba(0, 0, 0, 0.2); } .bresponsive .menuTextSize .dropdown-dark:before {border-bottom-color: #aaa; } .bresponsive .menuTextSize .dropdown-dark:after {border-top-color: #aaa; } .bresponsive .menuTextSize .dropdown-dark .dropdown-select {color: #aaa; text-shadow: 0 1px black; background: #444;  /* Fallback for IE 8 */ } .bresponsive .menuTextSize .dropdown-dark .dropdown-select:focus {color: #ccc; } .bresponsive .menuTextSize .dropdown-dark .dropdown-select > option {background: #444; text-shadow: 0 1px rgba(0, 0, 0, 0.4); } /*rightbox*/ .bresponsive .rightbox {background: #20282B; position: fixed; z-index: 22222222222221; right: 0; top: 115px; padding: 20px; border-radius: 15px; color: #C5C5C5; text-align: center; -webkit-box-shadow: 10px 3px 5px 0px rgba(173,154,173,0.77); -moz-box-shadow: 10px 3px 5px 0px rgba(173,154,173,0.77); box-shadow: 10px 3px 5px 0px rgba(173,154,173,0.77); text-shadow: 3px 3px 2px rgba(150, 150, 150, 1) } .bresponsive span.lnr.lnr-smartphone.modebox {width: 100%; float: left; font-size: 30px; text-align: center; margin-top: 10px; }';
 
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
    
     
     $('body').append(' <div class="bresponsive" <!-- start left menu --> <div id="leftMenu"> <div class="header"> <div class="left-head"> <div class="logo"> <img src="http://cdns2.freepik.com/media/img/logo.png"> </div> <a href="#" class="toggle-nav">|||</a> </div> <div class="right-head"> </div> </div> <div class="nice-nav"> <div class="user-info clear"> <img src="http://rubix305.sketchpixy.com/imgs/avatars/avatar0.png"> <div class="user-name "> <h5>Jone Doe</h5> <span>Front-end Designer</span> </div> </div> <div class="clear"></div> <ul> <li class="child-menu"> <a href="#" class=""><span class="lnr lnr-laptop-phone"></span><span>Screen Size</span> <span class="lnr lnr-chevron-right toggle-right"></span> </a> <ul class="child-menu-ul"> <li> <a href="#" class="menuLi"> <div class="col-sm-3 cXs "><span class="lnr lnr-smartphone"></span></div> <div class="col-sm-3 cS  "><span class="lnr lnr-tablet"></span></div> <div class="col-sm-3 cM  "><span class="lnr lnr-laptop"></span></div> <div class="col-sm-3 cL  "><span class="lnr lnr-screen"></span></div> </a> </li> </ul> </li> <li class="child-menu"> <a href="#" class=""><span class="lnr lnr-frame-expand"></span><span>Boxes</span> <span class="lnr lnr-chevron-right toggle-right"></span> </a> <ul class="child-menu-ul"> <li> <a href="#" class="menuLi"> <div class="col-sm-4"> Width </div> <div class="col-sm-7 no-padding sliderBox pull-right"> <div class="slider"> <div class="col-sm-11 no-padding"><input type="range" value="2" min="1" max="12"></input></div> <div class="col-sm-1 no-padding"><output class="rangeValue">2</output></div> </div> </div> </a> </li> <li> <a href="#" class="menuLi"> <div class="col-sm-4"> Hieght </div> <div class="col-sm-7 no-padding sliderBox pull-right"> <div class="form-group"> <div class="col-sm-11 no-padding"><input type="text" class="form-control" id="divHight" placeholder="Auto"></div> <div class="col-sm-1 no-padding"><output class="rangeValue">px</output></div> </div> </div> </a> </li> <li> <a href="#" class="menuLi"> <div class="col-sm-3"> Position </div> <div class="col-sm-2 menuLiPos posOffsetLeft"><span class="lnr lnr-indent-decrease"></span></div> <div class="col-sm-2 menuLiPos posOffsetRight"><span class="lnr lnr-indent-increase"></span></div> <div class="col-sm-2 menuLiPos posCharLeft">L</div> <div class="col-sm-2 menuLiPos posCharRight">R</div> </a> </li> <li> <a href="#" class="menuLi"> <div class="col-sm-3"> Visability </div> <div class="col-sm-9"> <div class="col-sm-4"><span class="lnr lnr-eye"></span></div> </div> </a> </li><li> <a href="#" class="menuLi"> <div class="col-sm-6"> hide(editor) </div> <div class="col-sm-6"> <div class="col-sm-6"><span class="lnr lnr-eye editorHide"></span></div> <div class="col-sm-6"><span class="lnr lnr-eye editorShow"></span></div> </div> </a> </li>  </ul> </li> <li class="child-menu"> <a href="#" class=""><span class="lnr lnr-picture"></span><span>Images</span> <span class="lnr lnr-chevron-right toggle-right"></span> </a> <ul class="child-menu-ul"> <li> <a href="#" class="menuImages "> <div class="col-sm-12"> <div class="imageEffect"> <img data-src="holder.js/140x140" class="img-rounded img-icon" alt="140x140" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTFiZmQ0YTg1NyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1MWJmZDRhODU3Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA2MjUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 140px; height: 140px;"> </div> <div class=" imageEffect"> <img data-src="holder.js/140x140" class="img-circle img-icon" alt="140x140" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTFiZmQ0YTg1NyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1MWJmZDRhODU3Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA2MjUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 140px; height: 140px;"> </div> <div class=" imageEffect"> <img data-src="holder.js/140x140" class="img-thumbnail img-icon" alt="140x140" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTFiZmQ0YTg1NyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1MWJmZDRhODU3Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA2MjUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 140px; height: 140px;"> </div> </div> </a> </li> </ul> </li> <li class="child-menu"> <a href="#" class=""><span class="lnr lnr-text-size"></span><span>Text</span> <span class="lnr lnr-chevron-right toggle-right"></span> </a> <ul class="child-menu-ul"> <li> <a href="#" class="menuLi menuTextAlign"> <div class="col-sm-4"> Align </div> <div class="col-sm-8 no-padding  pull-right"> <div class="col-sm-3 no-padding"><span class="lnr lnr-text-align-left"></span></span></div> <div class="col-sm-3 no-padding"><span class="lnr lnr-text-align-center"></span></div> <div class="col-sm-3 no-padding"><span class="lnr lnr-text-align-right"></span></div> <div class="col-sm-3 no-padding"><span class="lnr lnr-text-align-justify"></span></div> </div> </a> </li> <li> <a href="#" class="menuLi menuTextSize"> <div class="col-sm-4"> Size </div> <div class="col-sm-8 no-padding  pull-right"> <section> <div class="dropdown dropdown-dark"> <select name="two" class="dropdown-select fontSize"> <option value="">Font Size</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="12">12</option> <option value="14">14</option> <option value="16">16</option> <option value="18">18</option> <option value="20">20</option> <option value="22">22</option> <option value="26">26</option> <option value="28">28</option> <option value="30">30</option> <option value="34">34</option> <option value="36">36</option> </select> </div> </section> </div> </a> </li> <li> <a href="#" class="menuLi menuTexttrans"> <div class="col-sm-8"> Tranforomation </div> <div class="col-sm-4 pull-right"> <div class="col-sm-6 no-padding trans transU">U</div> <div class="col-sm-6 no-padding trans transL">L</div> </div> </a> </li> </ul> </li> <li> <a href="#" class=""><span class="lnr lnr-question-circle"></span><span>Info</span></a> </li> <li class="child-menu"> <a href="#" class=""><span class="lnr lnr-picture"></span><span>Code</span> <span class="lnr lnr-chevron-right toggle-right"></span> </a> <ul class="child-menu-ul"> <li> <a href="#" class="menuLi"> <div class="col-sm-3"> Size </div> <div class="col-sm-9"> <div class="title"> <h2> Embedding Ace in Your Site link <a href="http://ace.c9.io/#nav=about"> link</a> </h2> </div> <div id="editor"> function foo(items) {var x = "All this is syntax highlighted"; return x; } </div> </div> </a> </li> </ul> </li> </ul> </div> <div class="body-part"></div> </div> <!-- end left menu --> </div></div>');
     
     $('body').on('click.myDisable', function(e) {
         e.preventDefault();
     });

     jQuery('body').not('.lnr').on('mousemove', function(e) {
         $(this).find('.selectedDiv').removeClass('selectedDiv');
         e.preventDefault();
         // console.log(e.target);
         $(e.target).addClass('selectedDiv');
     });

     jQuery('#leftMenu').on('mousemove', function(e) {
        e.preventDefault();
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

         window.resizeTo(768,30);     
         window.focus();                          
 

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

     
    var divs = [];
    function log(classVal){
         if(selectedBox.context.id) 
         {
            // screen = {findBy: "id" ,  key:selectedBox.context.id , val:classVal , tagname: selectedBox.context.tagName };
             divs.push({
                screenSize: screen,
                findBy: "id", 
                key: selectedBox.context.id,
                val: classVal,
                tagname: selectedBox.context.tagName
             });
         }
         else
         {
            // screen = {findBy: "class" ,  key:selectedBox.context.classList[0] , val:classVal , tagname: selectedBox.context.tagName};
            divs.push({
                screenSize: screen,
                findBy: "id", 
                key: selectedBox.context.classList[0],
                val: classVal,
                tagname: selectedBox.context.tagName
            });
         }
    }

     //*********boxex
     //width
     $("input[type=range]").on('change', function(event) {

         rangeVal = $(this).val();
         $('.rangeValue').text(rangeVal);
         //get selected screen size
         $selectedScreen = prop.screenSize;
         
         //get the range valur
         // console.log(prop);
         if (typeof(selectedScreen) != "undefined" && selectedScreen !== null) {
               
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

             var classWidth = selectedScreen + rangeVal;
             selectedBox.addClass(classWidth);
 
         }

         log(classWidth);
         
     });

     // height
     $("#divHight").on('keyup', function(event) {

         divHight = $(this).val();

         $selectedScreen = prop.screenSize;
   
         selectedBox.css('height', divHight);
         
     });

     
     //position
     
     $('.posCharLeft').on('click', function(event) {
         if(selectedBox.hasClass('pull-right')) {selectedBox.removeClass('pull-right');} 
         selectedBox.addClass('pull-left');
         
         divClass = selectedBox.attr('class');
         log("pull-left");

     });

     $('.posCharRight').on('click', function(event) {
         if(selectedBox.hasClass('pull-left')) {selectedBox.removeClass('pull-left');}
         selectedBox.addClass('pull-right');

         divClass = selectedBox.attr('class');
         log("pull-RIGHT");
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

     //visabilitty
     $('.lnr-eye').on('click', function(event) {
         
         var divhidden = ('hidden-'+screen.width);
         selectedBox.addClass(divhidden);
         log(divhidden);

     });

     //editor hide and show
     $('.editorHide').on('click', function(event) {   
         selectedBox.hide();
     });

     $('.editorShow').on('click', function(event) {   
         selectedBox.show();
     });


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

        console.log(divs);
    });



        


 });