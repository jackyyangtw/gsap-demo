$(document).ready(function() {
  //------------- product slider: resize images ---------------
  $('section.prod-sec div.prod-slider div.prod-tile div.pic-box img').each(function(){
      var imgWidth = $(this).width();
      var imgHeight = $(this).height();
      if(imgHeight>imgWidth){
          $(this).css({"width":"auto","max-height":"224px"})
      }
  });
  
  ////////////  NAV BG color for PC version //////////////////////
  pcNavBgColor();
  $(window).scroll(function() {
    pcNavBgColor();
  });
  $(window).resize(function() {
    pcNavBgColor(); //called the function on resize
  });
  function pcNavBgColor() {
    var windowSize = window.innerWidth;
    var scrollTop = $(window).scrollTop();
    // var navOffsetTop = $('nav.prod-nav-wrapper').offset().top;
    if (windowSize >= 1200 && scrollTop > 100) {
      $("nav.prod-nav-wrapper").addClass("active");
    } else {
      $("nav.prod-nav-wrapper").removeClass("active");
    }
  }
  
  ///////////// header &  NAV ///////////////
  if ($("header.iei-main-header").length > 0) {
    //當header2019 V3 存在時
    handleNavForV3Header();
  }
  // if ($("#Mobible_Main_Menu_wrap").length > 0) {
  //   //當header V2 存在時
  //   handleSolNavForV2Header();
  // }
  function handleNavForV3Header() {
    //header brekpoint:   mobile version < 992 <= pc version
    //nav brekpoint: mobile version < 1200 <= pc version
    var PC_Top_Height = $(".pc-hdr-placeholder").outerHeight(); //PC header placeholder
    var Mob_Top_Height = $(".m-hdr-placeholder").outerHeight(); //Mobile header placeholder
    defaultlNavPos(); // default for nav position
    headerCssChanged(); // change some css of header menu
    
    $(window).scroll(function() {
      if (
        $(".m-hdr-menu-content").is(":visible") ||
        $(".m-hdr-locale-row").hasClass("hdr-v-visible")
      ) {
        return;
      }
      handleHeaderPos("scroll"); //處理header
    });
  
    $(window).resize(function() {
      //console.log('window resized');
      defaultlNavPos(); // default for nav position
      handleHeaderPos("resize");
    });
    //--------header FN---------------------------------------------------
    //Note:
    //header brekpoint:   mobile version < 992 <= pc version
    //nav brekpoint: mobile version < 1200 <= pc version
    //--------------------------------------------------------------------
    function defaultlNavPos() {
      var PC_Top_Height = $(".pc-hdr-placeholder").outerHeight(); //PC header placeholder 54
      var Mob_Top_Height = $(".m-hdr-placeholder").outerHeight(); //Mobile header placeholder 92
      // default for nav position
      var windowSize = window.innerWidth;
        //console.log(windowSize);
      /*for mobile*/
      $("nav.prod-nav-wrapper").css("position", "fixed");
      $("nav.prod-nav-wrapper").css("top", Mob_Top_Height);
      $("nav.prod-nav-wrapper").css({ transition: "top 0.2s" });
      if (windowSize >= 992) {
        //for PC
        $("nav.prod-nav-wrapper").css("top", PC_Top_Height);
      }
    }
    function headerCssChanged() {
      // change some css of header menu
      //console.log('headerCssChanged');
      $("body header.iei-main-header.hdr-wrapper div.iei-header-pc").css({
        transition: "top 0.2s"
      }); //PC header
      $(
        "body header.iei-main-header.hdr-wrapper div.iei-header-mobile nav.m-hdr-header-wrapper div.m-hdr-header-row"
      ).css({ transition: "top 0.2s" }); //PC header
    }
  
    function handleHeaderPos(e) {
      //handle header position
      var windowSize = window.innerWidth;
      if (windowSize >= 992) {
        //console.log(e+' PC');
        handleHeaderTopPC();
      } else {
        //console.log(e+' Mobile');
        handleHeaderTopMob();
      }
    }
  
    function handleHeaderTopPC() {
      // console.log('handleHeaderTopPC');
      // heandle header position for PC version    
      var PC_Top_Height = $(".pc-hdr-placeholder").outerHeight(); //PC header placeholder
      var scrollTop = $(window).scrollTop();
      if (objC.scrollDir === "up") {
        //scroll up
        $(".iei-header-pc").css("top", "0");
        $("nav.prod-nav-wrapper").css("top", PC_Top_Height);     
      } else if(objC.scrollDir === "down" && scrollTop > PC_Top_Height){
        //console.log(PC_Top_Height);
        $(".iei-header-pc").css("top", -PC_Top_Height);
        $("nav.prod-nav-wrapper").css("top", 0);       
      }
    }
  
    function handleHeaderTopMob() {
      // heandle header position for mobile version
      var Mob_Top_Height = $(".m-hdr-placeholder").outerHeight(); //Mobile header placeholder
      var scrollTop = $(window).scrollTop();
      if (objC.scrollDir === "up") {
        //scroll up
        $(".m-hdr-header-row").css("top", "0"); //show header-mobile
        $("nav.prod-nav-wrapper").css("top", Mob_Top_Height);
      } else if(objC.scrollDir === "down" && scrollTop > Mob_Top_Height) {
        $(".m-hdr-header-row").css("top", -Mob_Top_Height);
        $("nav.prod-nav-wrapper").css("top", 0);
      }
    }
  }
  
  var objC = {
  scrollDir: "", // 'up' or 'down'
  prevScrollpos: 0,
  init: function(){
      this.prevScrollpos = $(window).scrollTop(); 
      this.bindEvents.call(this); // 傳入this
  },
  bindEvents: function(){
      var that = this; // objC
      $(window).scroll(function() { 
          // sets scroll direction
          var scroll = $(window).scrollTop(); 
          // console.log([scroll, that.prevScrollpos]);
          if (scroll === that.prevScrollpos) {
              return;
          }
          if (scroll > that.prevScrollpos) { 
              //console.log('scrollDown'); 
              that.scrollDir = 'down';
          } else { 
              //console.log('scrollUp'); 
              that.scrollDir = 'up';
          } 
          that.prevScrollpos = scroll; 
      }); 
    }     
  };
  
  objC.init();
  
  //------------------------ mobile NAV menu open/close ------------------------------------
  
  $("a#mob_nav_btn").click(function() {
    if ($(".mob-nav-arrow").hasClass("active")) {
      //如果按鈕已經是開啟狀態, 點擊則...
      $(".mob-nav-arrow").removeClass("active");
      $("div.mob-nav-menu-content").slideUp(300, "swing");
    } else {
      //當按鈕是未開啟的時, 點擊則...
      $(".mob-nav-arrow").addClass("active");
      $("div.mob-nav-menu-content").slideDown(300, "swing");
    }
  });
  
  //----------------------------NAV: scroll to anchor--------------------------------------------
  
  // for PC
  $(".scroll-to-anchor").click(function(e) {
      e.preventDefault();
     
      var that = $(this);
      that.addClass('disabled');
  
      var navH = $(".prod-nav-wrapper").height();
      //let positionTop = document.querySelector(".iei-header-pc").clientHeight;
      var PC_Top_Height = $(".pc-hdr-placeholder").outerHeight(); //PC header placeholder
      var fullUrl = this.href;
      var parts = fullUrl.split("#"); // cut into two parts
      var targetId = parts[1]; // select the section id
      var targetTop = $('#'+targetId).offset().top - navH;
  
      var scrollTop = $(window).scrollTop();
      if (scrollTop > targetTop) {
          targetTop = targetTop - PC_Top_Height;
      }
  
      $("html, body").animate({ scrollTop: targetTop }, 1000, function(){
        that.removeClass('disabled');
      } );   
  
    });
  
    // for mobile
  $(".scroll-to-anchor-mob").click(function(e) {
    e.preventDefault();
  
    var that = $(this);
    that.addClass('disabled');
  
    var navRowH = $(".mob-nav").height(); // nav height
    var Mob_Top_Height = $(".m-hdr-placeholder").outerHeight(); //Mobile header placeholder = .m-hdr-header-row height
    //let positionTop = document.querySelector(".m-hdr-header-row").clientHeight;
    var fullUrl = this.href;
    var parts = fullUrl.split("#"); // cut into two parts
    var targetId = parts[1]; // select the section id
    var targetTop = $("#" + targetId).offset().top; // get target Top position value
  
    var scrollTop = $(window).scrollTop();
    if (scrollTop > targetTop) { //視窗範圍頂部 > 物件頂部  表示物件會在視窗範圍上方 也表示要往上捲才會到目標 
      targetTop = targetTop - Mob_Top_Height - navRowH; //目標頂部 被重新指定為 目標頂部減掉nav的高度 
      $(".mob-nav-arrow").removeClass("active");
      $("div.mob-nav-menu-content").slideUp(300, "swing");
    } else {//視窗範圍頂部 < 物件頂部  表示物件會在視窗範圍上方 也表示要往下捲才會到目標 
      targetTop = targetTop - navRowH; //目標物件頂部 被重新指定為 目標頂部減掉nav的高度 
      $(".mob-nav-arrow").removeClass("active");
      $("div.mob-nav-menu-content").slideUp(300, "swing");
    }
  
    $("html, body").animate({ scrollTop: targetTop }, 1000, function(){
      that.removeClass('disabled');
    });
  
  });
});


// set Eol section Width
const overViewItem = document.querySelector('.overview-item');
const endOfLife = document.querySelector('.end-of-life');
let overviewItemWidth = 0;
function setEolSecWidth() {
  if(endOfLife) {
    overviewItemWidth = overViewItem.offsetWidth;
    endOfLife.style.width = `${overviewItemWidth}px`;
  }
}
window.addEventListener('load',function(){
  setEolSecWidth();
});
window.addEventListener('resize',function(){
  setEolSecWidth();
});