$(()=>{
    var navopen = 0;
    $('#allloginPopup').css('display','none');
    $('.mobileLoginOtp').css('display','none');
    $('.forgotPasswordOtp').css('display','none');
    $('#schedule').css('display','none');
    $('#uploadlogo').css('display','none');
    $('.dropdown .expand').slideUp();
    if(window.innerWidth < 600){
        $('.navright a').on('click',()=>{
            $('#navbar nav .navright').css('transform','translateX(-100%)');
            $('#navbar nav .navright').css('box-shadow','none');
            var el = $('.navOpen .i')[0];
            navopen = 0;
            if(el.classList.contains("fa-times")){
                el.classList.remove("fa-times");
                el.classList.add("fa-bars");
            }
            else{
                el.classList.add("fa-times");
            }
        });
    }

    // image Slider
    var slidercount = 0;
    var totalimage = 7; // merchant Total image for gallery
    $($('.imageInnerSlider img')[0]).css('opacity','1');
    $('.imageLarge .leftImageSlide').on('click',function(){
        if(slidercount != 0){
            slidercount -=1;
            $('.imageLarge #imagesrc').attr('src',$('.imageInnerSlider img')[slidercount].src);
            $('.imageInnerSlider img').css('opacity','0.5');
            $($('.imageInnerSlider img')[slidercount]).css('opacity','1');
            if(window.innerWidth > 600){
                if(slidercount >=3){
                    var slideC = (slidercount-3)*98;
                    $('.imageInnerSlider').css('transform','translateX(-'+ slideC+'px)');
                }
            }
                else{
                    if(slidercount >=1){
                        var slideC = (slidercount-1)*98;
                        $('.imageInnerSlider').css('transform','translateX(-'+ slideC+'px)');
                    }
                }
        }
    });
    $('.imageLarge .rightImageSlide').on('click',function(){
        if(slidercount <= 5){
            console.log("element");
            slidercount +=1;
            console.log($('.imageInnerSlider img')[slidercount].src);
            $('.imageLarge #imagesrc').attr('src',$('.imageInnerSlider img')[slidercount].src);
            $('.imageInnerSlider img').css('opacity','0.5');
            $($('.imageInnerSlider img')[slidercount]).css('opacity','1');
            if(window.innerWidth > 600){
                if(slidercount >=4){
                    var slideC = (slidercount-3)*97;
                    $('.imageInnerSlider').css('transform','translateX(-'+ slideC+'px)');
                }
            }
            else{
                if(slidercount >=2){
                    var slideC = (slidercount-1)*97;
                    $('.imageInnerSlider').css('transform','translateX(-'+ slideC+'px)');
                }
            }
        }
    });
    $('.userLoginPop').css('display','none');
    $('.merchantLoginPop').css('display','none');
    $('#basicbutton').addClass('statsactive');
    $('#topDealsRight').on('click',function(event){
            $('#topDealsCard').animate({
                scrollLeft:"+=500px"
            });
    });
    $('#topDealsRight1').on('click',function(){
            $('#topDealsCard1').animate({
                scrollLeft:"+=500px"
            });
    });
    $('#topDealsRight2').on('click',function(){
            $('#topDealsCard2').animate({
                scrollLeft:"+=500px"
            });
    });
    $('#topDealsRight3').on('click',function(){
            $('#topDealsCard3').animate({
                scrollLeft: "+=500px"
            });
    });
    $('.navOpen').on('click',function(){
        if(navopen == 0){
            navopen = 1;
            $('#navbar nav .navright').css({transform:'translateX(0%)'});
            $('#navbar nav .navright').css('box-shadow',"0px 10250px 10px 10240px rgba(0, 0, 0, 0.486)");
        }
        else{
            navopen = 0;
            $('#navbar nav .navright').css({transform:'translateX(-100%)'});
            $('#navbar nav .navright').css('box-shadow','none');
        }
    });
    $('.loginbutton').on('click',function(){
        $('#allloginPopup').css('display','block');
        $('.merchantLoginPop').css('display','none');
        $('.userLoginPop').css('display','none');
        $('body').css('position','fixed');
    });
    $('.logincross').on('click',function(){
        $('#allloginPopup').css('display','none');
        $('#userSignup').css('display','block');
        $('.Uppersignup').css('display','flex');
        $('.login').css('display','block');
        $('.mobileLoginOtp').css('display','none');
        $('.forgotPasswordOtp').css('display','none');
        $('body').css('position','relative');
    });
    $('.UserLogin').on('click',function(){
        $('#allloginPopup').css('display','none');
        $('.merchantLoginPop').css('display','none');
        $('.userLoginPop').css('display','block');
        $('body').css('position','fixed');
    });
    $('.userLoginPop .cross').on('click',function(){
        $('.userLoginPop').css('display','none');
        $('#userSignup').css('display','block');
        $('.Uppersignup').css('display','flex');
        $('body').css('position','relative');
    });
    $('.BusinessLogin').on('click',function(){
        $('#allloginPopup').css('display','none');
        $('.userLoginPop').css('display','none');
        $('.merchantLoginPop').css('display','block');
        $('body').css('position','fixed');
    });
    $('.merchantLoginPop .cross').on('click',function(){
        $('.Uppersignup').css('display','flex');
        $('#userSignup').css('display','block');
        $('.merchantLoginPop').css('display','none');
        $('body').css('position','relative');
    });
    $('.mostLowerLogin .most').on('click',function(){
        $('.Uppersignup').css('display','flex');
        $('#userSignup').css('display','block');
        $('.login').css('display','none');
    });
    $('.h3Log,.already').on('click',function(){
        $('#allloginPopup').css('display','block');
        $('.merchantLoginPop').css('display','none');
        $('.userLoginPop').css('display','none');
    });
    $('.imageLarge .closeImage').on('click',function(){
        $('.imageLarge').css('transform','scale(0)');
    });
        setInterval(()=>{
            $('.card .wishlist .fa-heart').on('click',function(){
                $(this).addClass("colorred");
            });
        },100);
       setInterval(()=>{
        $('.card .wishlist .colorred').on('click',function(){
            $(this).removeClass("colorred");
        });
       },100);
    $('.editP').on('click',function(){
        $('.editPopUp').css('transform','scale(1)');
    });
    $('.editPopUp  .usercloseedit').on('click',function(){
        $('.editPopUp').css('transform','scale(0)');
    });
    $('.merchantMainDetails .mainDetail').css('display','none');
    $($('.merchantMainDetails .mainDetail')[0]).css('display','flex');
    $($('.merchantMainHeading h4')[0]).addClass('activeh');
    $('.merchantMainHeading h4').on('click',function(){
        $('.merchantMainHeading h4').removeClass('activeh');
        $(this).addClass('activeh');
        $('.merchantMainDetails .mainDetail').css('display','none');
        $($('.merchantMainDetails .mainDetail')[$('.merchantMainHeading h4').index(this)]).css('display','flex');
    });
    $('.merchantUpperImage .viewAllGallery').on('click',function(){
        $('.imageLarge').css('transform','scale(1)');
    });
    $('.loginOtpButton').on('click',function(){
        $('.login').css('display','none');
        $('.mobileLoginOtp').css('display','flex');
    });
    $('.forgotPass').on('click',function(){
        $('.login').css('display','none');
        $('.forgotPasswordOtp').css('display','flex');
    });
    setInterval(()=>{
        if($('.filterLowerSide .checkOtp .backPurple').length > 0){
            $('.applyfilter button').prop('disabled',false);
        }
        else{
            $('.applyfilter button').prop('disabled',true);
        }
    },300);
    // check Otp Condition 
    $(".checkConditions").on('click',function(){
        console.log(this);
        if($(this).is(':disabled')){
            alert('Select the Terms and Conditions');
        }
    });
    $('.filterLowerSide .checkOtp label').on('click',function(){
        if(this.className == 'backPurple'){
            var id1 = this.parentElement.children[1].innerText;
            var ar = id1.split(" ");
            var id = "";
            for(var i=0;i<ar.length;i++){
                id += ar[i];
            }
            $('.filterLowerSide .filterSelected #'+id).remove();
        }
        else{
            var id1 = this.parentElement.children[1].innerText;
            var ar = id1.split(" ");
            var id1 = "";
            for(var i=0;i<ar.length;i++){
                id1 += ar[i];
            }
            $('.filterLowerSide .filterSelected').append('<h4 id='+id1+'>'+this.parentElement.children[1].innerText+'<i class="fas fa-times i"></i></h4>');
        }
        $(this).toggleClass('backPurple');
    });
    setInterval(()=>{
        $('.filterLowerSide .filterSelected h4').on('click',function(event){
            var el = $('.filterLowerSide .checkOtp b:contains('+this.innerText+')');
           $(el[0].previousSibling).removeClass('backPurple');
            $(this).remove();
        });
    },300);

    // plus minus cart

    $('.plusminus .plus').on('click',function(){
        $(this)[0].parentElement.children[1].value = Number($(this)[0].parentElement.children[1].value) + 1;
    });
    $('.plusminus .minus').on('click',function(){
        if(Number($(this)[0].parentElement.children[1].value) > 1){
            $(this)[0].parentElement.children[1].value = Number($(this)[0].parentElement.children[1].value) - 1;
        }
    });
    // coupon type in merchant page
    $($('.merchantMainCoupons .coupontypemerchant a')[0]).addClass('active');
    $('.merchantMainCoupons .couponchoose').css('display','none');
    $($('.merchantMainCoupons .couponchoose')[0]).css('display','flex');
    $('.merchantMainCoupons .coupontypemerchant a').on('click',function(){
        var items = $('.merchantMainCoupons .coupontypemerchant a');
        items.removeClass('active');
        $(this).addClass('active');
        $('.merchantMainCoupons .couponchoose').css('display','none');
        $($('.merchantMainCoupons .couponchoose')[items.index(this)]).css('display','flex');
    });
    $('#checkTerms label').on('click',function(event){
        $('#checkTerms label').toggleClass('backPurple');
    });
    $('#checkOtp1 label').on('click',function(event){
        $('#checkOtp1 label').toggleClass('backPurple');
    });
    $('#checkOtp2 label').on('click',function(event){
        $('#checkOtp2 label').toggleClass('backPurple');
    });
    $('#checkOtp3 label').on('click',function(event){
        $('#checkOtp3 label').toggleClass('backPurple');
    });
    $('#checkOtp4 label').on('click',function(event){
        $('#checkOtp4 label').toggleClass('backPurple');
    });
    $('#checkOtp5 label').on('click',function(event){
        $('#checkOtp5 label').toggleClass('backPurple');
    });
    $('#checkOtp6 label').on('click',function(event){
        $('#checkOtp6 label').toggleClass('backPurple');
    });
    $('#checkOtp7 label').on('click',function(event){
        $('#checkOtp7 label').toggleClass('backPurple');
    });
    $('#schedulebutton,.in1 #basicInfo').on('click',function(){
        $('#basicinfo').css('display','none');
        $('#uploadlogo').css('display','none');
        $('.stats div').removeClass('statsactive');
        $('#schedulebutton').addClass('statsactive');
        $('#schedule').css('display','block');
    });
    $('#basicbutton').on('click',function(){
        $('#schedule').css('display','none');
        $('#uploadlogo').css('display','none');
        $('.stats div').removeClass('statsactive');
        $('#basicbutton').addClass('statsactive');
        $('#basicinfo').css('display','block');
    });
    $('#logobutton,.in1 #scheduleButton').on('click',function(){
        $('#basicinfo').css('display','none');
        $('#schedule').css('display','none');
        $('.stats div').removeClass('statsactive');
        $('#logobutton').addClass('statsactive');
        $('#uploadlogo').css('display','block');
    });
    $('.mobilegoback').on('click',function(){
        $('.login').css('display','block');
        $('.mobileLoginOtp').css('display','none');
        $('.forgotPasswordOtp').css('display','none');
    });
    $('.orderratingstar .star .ratorder').on('click',function(){
        $('.orderratingstar .star .fa-star').removeClass('checked');
        var index = $('.orderratingstar .star .ratorder').index(this);
        for(var i=0;i<=index;i++){
            $($('.orderratingstar .star .ratorder')[i]).addClass('checked');
        }
    });
    $('.flash2 .close1').on('click',function(){
        $('.flash2').fadeOut();
    });
    $('.flash .close1').on('click',function(){
        $('.flash').fadeOut();
    });
    $('.emailgoback').on('click',function(){
        $('.login').css('display','block');
        $('.mobileLoginOtp').css('display','none');
        $('.forgotPasswordOtp').css('display','none');
    });
    $('.signImage img').on('mousemove',function(event){
        
        var xcoordinate=event.originalEvent.x-290;
        var ycoordinate=event.originalEvent.y-(event.currentTarget.offsetTop + 70);
        var height=event.currentTarget.clientHeight;
        var width=event.currentTarget.clientWidth;
        var x=height/2-xcoordinate;
        var y=width/2-ycoordinate;
        var rotatex=(((x*2)/height)*6) + 'deg';
        var rotatey=(((y*2)/width)*6) + 'deg';
        var wid='rotateX('+rotatex+') rotateY('+rotatey+')';
        $(event.target).css('transform',wid);
    });
    $('.signImage img').on('mouseout',function(event){
        $(event.target).css('transform','rotateX(0deg) rotateY(0deg)');
    });
    var filterOn = 0;
    $('.mobileFilter').on('click',function(){
        if(filterOn == 0){
            $('.filterLowerSide').css('transform','scale(1)');
            $('body').css('position','fixed');
            filterOn = 1;
        }
        else{
            $('.filterLowerSide').css('transform','scale(0)');
            $('body').css('position','relative');
            filterOn = 0;
        }
    });
    $('.orderactive').addClass('activeh4');
    $('#activeordercontainer').css('display','flex');
    $('.orderactive').on("click",function(){
        $('.ordercardstatus h4').removeClass('activeh4');
        $(this).addClass('activeh4');
        $('#activeordercontainer').css('display','flex');
        $('#usedordercontainer').css('display','none');
    });
    $('.orderused').on("click",function(){
        $('.ordercardstatus h4').removeClass('activeh4');
        $(this).addClass('activeh4');
        $('#activeordercontainer').css('display','none');
        $('#usedordercontainer').css('display','flex');
    });
    $('.dropdown-content').slideUp(0);
    $('.dropdown-content1').slideUp(0);
    $('.navright .dropbtnLogin').on('click',function(){
        $('.dropdown-content').slideToggle();
    });
    $('.smallNavRight .dropbtnLogin').on('click',function(){
        $('.dropdown-content1').slideToggle();
    });
    $('body').on('click',function(event){
        if(event.target.className != 'dropbtnLogin' && event.target.parentElement.className != 'dropbtnLogin'){
            $('.dropdown-content').slideUp();
        }
        if(event.target.parentElement.className != 'dropbtnLogin' && event.target.className != 'dropbtnLogin')
        {
            $('.dropdown-content1').slideUp();
        }
        $('#searchResult').css('display','none');
        $('#searchResult2').css('display','none');
    });
    $('.acceptterm .checkOtp label').on('click',function(){
        $(this).toggleClass('backPurple');
    });
    //Review Pop up
    $('.ordersidedetail h5').on('click',function(){
        $('.reviewPopUp').css('transform','scale(1)');
        var attr1 = $(this).attr("data-targetid");
        document.reviewuserform.action = attr1;
    });
    $('.mainReview .submit .sub').on('click',function(){
        $('.reviewPopUp').css('transform','scale(0)');
    });
    // More filter js
    $('.morefilter').on('click',function(){
        $('.morefilterupper').css('display','flex');
    });
    $('.morefilterclose').on('click',function(){
        $('.morefilterupper').css('display','none');
    });

    // Check for backspace
    $('.inputdiv input').on('keydown',function(event){
        var key = event.keyCode || event.charCode;
        var el = this;
        if(key == 8 && el.value == "" ){
            el.blur();
            el.previousElementSibling.focus();
        }
    });
    $('#fooddrop').css('display','none');
    $('#fashiondrop').css('display','none');
    $('.othersdrop').css('display', 'none');
    $('.preloading').fadeOut(300);
});
function nextFocus(el){
    el.value=el.value.replace(/[^0-9]/g,'')
    if((el.value)>=0 && el.value != ""){
        el.blur();
        el.nextElementSibling.focus();
    }
}
function changeIcon(el){
    if(el.classList.contains("fa-times")){
        el.classList.remove("fa-times");
        el.classList.add("fa-bars");
    }
    else{
        el.classList.add("fa-times");
    }
}
// Copy to clipboard referfriend

function myFunctionRefer() {
    var copyText = document.getElementById("referf");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  function couponcodesel(el){
    var parent = el.parentElement.children[0];
    var copyText = parent;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  $('.fooddrop').css('display', 'none');
  $('.fashiondrop').css('display', 'none');
  $('.othersdrop').css('display', 'none');
  
  function changedroptype(el) {
    if (el.value == 1) {
      $('.fooddrop').css('display', 'block');
      $('.fashiondrop').css('display', 'none');
      $('.othersdrop').css('display', 'none');
    } else if (el.value == 2) {
      $('.fashiondrop').css('display', 'block');
      $('.fooddrop').css('display', 'none');
      $('.othersdrop').css('display', 'none');
    }
    else if (el.value == 3) {
      $('.othersdrop').css('display', 'block');
      $('.fooddrop').css('display', 'none');
      $('.fashiondrop').css('display', 'none');
    }
  }
$('.ahmedsel').css('display','none');
$('.vadosel').css('display','none');
$('.sursel').css('display','none');
function districtmerchantchange(el){
    if(el.value == 1){
        $('.ahmedsel').css('display','block');
        $('.vadosel').css('display','none');
        $('.sursel').css('display','none');
    }
    else if(el.value == 2){
        $('.vadosel').css('display','block');
        $('.ahmedsel').css('display','none');
        $('.sursel').css('display','none');
    }
    else if(el.value ==3){
        $('.sursel').css('display','block');
        $('.ahmedsel').css('display','none');
        $('.vadosel').css('display','none');
    }
}

//change button
function changebutton(el){
    if(el.checked){
        el.parentElement.parentElement.nextElementSibling.children[0].disabled = false;
        $(el.parentElement.parentElement.nextElementSibling.children[0]).css('background-color','#227ab3');
        $(el.parentElement.parentElement.nextElementSibling.children[0]).css('border-color','#227ab3');
    }
    else{
        el.parentElement.parentElement.nextElementSibling.children[0].style.backgroundColor = '#8b99a2';
        el.parentElement.parentElement.nextElementSibling.children[0].style.borderColor = '#8b99a2';
        el.parentElement.parentElement.nextElementSibling.children[0].disabled = true;
    }
}
$("document").ready(function(){
    setTimeout(function(){
        $("div.flash").remove();
    }, 5000 ); // 5 secs

});
$("document").ready(function(){
    setTimeout(function(){
        $("div.flash2").remove();
    }, 5000 ); // 5 secs

});
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
        $('.autocomplete-items div').slice(9,-1).css('display','none');
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/
  var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("searchInput"), countries);
  autocomplete(document.getElementById("searchInput2"), countries);

// HD POINTS SHOW BUTTON 
  function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
  
// input validation

function validate() {

    var valid = true;
    valid = checkEmpty($("#businesstype"));
    valid = valid && checkEmpty($("#businesstype2"));
    valid = valid && checkEmpty($("#businessname"));
    valid = valid && checkNumber($('#phonenumber'));
    valid = valid && checkEmail($("#email1"));
    valid = valid && checkEmpty($("#state"));
    valid = valid && checkEmpty($("#addressline"));
    valid = valid && checkEmpty($("#about"));
    $("#basicInfo").attr("disabled",true);
    $("#basicInfo").css('background-color',"#636363");
    $("#basicInfo").css('border-color',"#636363");
    if(valid) {
    $("#basicInfo").attr("disabled",false);
    $("#basicInfo").css('border-color',"#227ab3");
    $("#basicInfo").css('background-color',"#227ab3");
} 
}

function checkEmpty(obj) {
    var name = $(obj).attr("name");
    $(".class"+name).css("border","");
    console.log($(obj));
    if($(obj).val() == "" || $(obj).val() == 0) {
    console.log(name);
    $('.class'+name).css("border","#FF0000 1px solid");
    console.log('hiincheckempty',name);
    return false;
    }
    
    return true; 
    }
    function checkEmail(obj) {
    var result = true;
    
    var name = $(obj).attr("name");
    $(".class"+name).css("border","");
    result = checkEmpty(obj);
    
    var email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    result = email_regex.test($(obj).val());
    
    if(!result) {
    $('.class'+name).css("border","#FF0000 1px solid");
    return false;
    }
    
    return result; 
    }
    function checkNumber(obj) {
        var result = true;
        
        var name = $(obj).attr("name");
        $(".class"+name).css("border","");
        result = checkEmpty(obj);
        
        var email_regex = /^([0-9]{10})$/;
        result = email_regex.test($(obj).val());
        
        if(!result) {
        $('.class'+name).css("border","#FF0000 1px solid");
        return false;
        }
        
        return result; 
        }

function showpassword(el){
    if(el.parentElement.children[1].type == "password"){
        el.parentElement.children[1].type = "text";
        el.style.color = "#227ab3";
    }
    else{
        el.parentElement.children[1].type = "password";
        el.style.color = "black";
    }
}

var figure = $(".footerAdd").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}
