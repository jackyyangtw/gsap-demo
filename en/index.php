<?php

//解決css快取問題 

$Today=date("Ymd", time());

////////載入 設定檔 start////////////////////////////
 
$Lc_My_Ser=1;  //啟用 本頁語系切換

include($_SERVER['DOCUMENT_ROOT']."/_p/_set.php");

//指定載入menu語系  $IS_LANG_SET = "en";
  
//所在資料夾目標語系判斷
include($_SERVER['DOCUMENT_ROOT']."/_p/_lang_use_portfolio_set.php");

////////載入 設定檔 end///////////////////////////

?>
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="IEI Integration Corp.">
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="pragma" content="no-cache" />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
        <title>POCm-W22C-RPL</title>
        <meta name="description" content="Fanless DIN-Rail Embedded System with Intel® Core™ CPU">
        <meta name="keywords" content="DRPC-230-ULT5">
        <!-- reset css -->
        <link rel="stylesheet" href="../_css/reset.css" type="text/css">
        <!-- bootstrap-4.3.1 -->
        <link href="https://webdls.ieiworld.com/data/_lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <!-- CSS -->
        <link rel="stylesheet" href="https://webdls.ieiworld.com/data/_lib/animateCss/animate.css" type="text/css">
        <link rel="stylesheet" href="https://webdls.ieiworld.com/data/_lib/easy-responsive-tabs/easy-responsive-tabs.css" type="text/css" />
        <link rel='stylesheet' href='https://webdls.ieiworld.com/data/_lib/slick/slick.css' type='text/css' />
        <link rel='stylesheet' href='https://webdls.ieiworld.com/data/_lib/slick/slick-theme.css' type='text/css' />
        <link rel="stylesheet" href="../_css/lp-main.css<?php echo "?v={$Today}";?>" type="text/css">
        
        <!-- JS -->
        <script src="https://webdls.ieiworld.com/data/_lib/jquery/jquery-3.5.1.min.js"></script>
        <script src="https://webdls.ieiworld.com/data/_lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="https://webdls.ieiworld.com/data/_lib/smooth-scroll/SmoothScroll.js"></script>
        <link rel="stylesheet" href="https://webdls.ieiworld.com/data/_lib/slick-1.8.1/slick.css">
        <link rel="stylesheet" href="https://webdls.ieiworld.com/data/_lib/slick-1.8.1/slick-theme.css">
        <link rel="stylesheet" href="https://webdls.ieiworld.com/data/_lib/bootstrap/css/bootstrap.min.css">
        <script src="https://webdls.ieiworld.com/data/_lib/jquery/jquery-3.5.1.min.js"></script>
        <script src="https://webdls.ieiworld.com/data/_lib/slick-1.8.1/slick.min.js"></script>
        <script defer src="https://webdls.ieiworld.com/data/_lib/_js/prod-main.js"></script>
    </head>
    <body>
<?php

////////載入官網檔頭 start////////////////////////////

$No_Jq=1;
include($_SERVER['DOCUMENT_ROOT']."/_p/_header.php"); 

////////載入官網檔頭 end///////////////////////////

?>
    <!-- v1_0.6-->
    <div v-scope="TopSec({modelName: 'W10B-IMX8M-R10'})"></div>
    <section id="feature_sec" class="feature-sec">
        <!-- ////////////////貼入後台的HTML START////////////////////// -->
        <link rel="stylesheet" href="../_scss/style.css">
        <script src="https://webdls.ieiworld.com/data/_lib/GSAP/3.11.1/gsap-3.11.1.js"></script>
        <script src="https://webdls.ieiworld.com/data/_lib/GSAP/3.11.1/scrollTrigger-v3.1.1.js"></script>
        <link href="https://webdls.ieiworld.com/data/_lib/Master-CSS/1.9.4.css" rel="stylesheet">
        <script src="https://webdls.ieiworld.com/data/_lib/Master-CSS/1.35.3.js"></script>
        <script src="https://webdls.ieiworld.com/data/_lib/Master-CSS/custom/master-css-media.js"></script>
        <script src="https://webdls.ieiworld.com/data/_lib/aos/aos.js"></script>
        <link rel="stylesheet" href="https://webdls.ieiworld.com/data/_lib/aos/aos.css">
        <script defer src="../custom/script.js" type="module"></script>
        <div class="wrapper
        $transition-time:0.3s
        $blue-color:#003F80
        $orange-color:#F5C19C
        $light-blue-color:#459DE0
        $light-grey-color:#F3F3F3
        $grey-color:#D0D0D1
        $dark-grey-color:#3E3A39
        $bg-linear-3:linear-gradient(180deg,var(--light-blue-color)|0%,white|40%,var(--orange-color)|60%,white|90%)
        $bg-linear-2:linear-gradient(180deg,var(--light-blue-color)|0%,white|70%,var(--orange-color)|90%)

        {f:16}_td
        p:2em|0_section {p:6em|0;min-h:90vh;flex;ai:center}_section@width1200 
        {color:var(--dark-grey-color);font-weight:500;text:center;f:26;pb:0.5em}_h3 {f:36}_h3@width768 {f:40}_h3@width1200
        {font-weight:600;f:20;pb:0.6em}_h4 {f:24;pb:0.8em}_h4@width1200
        {lh:2;color:#595757}_p
        max-w:100%_img
        {lh:1.8}_li
        {max-w:1280}_.container@width1440
        {flex;flex:column;jc:center;ai:center}_.flex-center
        " >
        <section class="sec-1 bg:#206F79">
            <div class="container">
                <div class="row">
                    <div class="col-12 pb-5">
                        <h3>Title</h3>
                        <!-- <img class="opacity:0.3" src="../_img/test.png" alt=""> -->
                    </div>
                    <div class="col-12">
                        <div class="rel flex jc:center ai:center h:30vh w:100%">
                            <button class="reset-btn abs right:30% top:30% opacity:0 transition:0.3s z:2">replay</button>
                            <div class="animate-1">
                                <div class="elements-container transition:0.3s
                                {w:100;h:100;r:30;abs;transition:0.3s;left:40%;top:50%;translate(-50%,-50%)}_.element
                                {opacity:0;transition:0.3s}_.element-text
                                ">
                                    <div class="element spread-left bg:beryl">
                                        <div class="element-text text-fade-up">some text</div>
                                    </div>
                                    <div class="element bg:sky">
                                        <div class="element-text text-fade-down">some text</div>
                                    </div>
                                    <div class="element spread-right bg:purple">
                                        <div class="element-text text-fade-up">some text</div>
                                    </div>
                                    <div class="element spread-right bg:orange">
                                        <div class="element-text text-fade-down">some text</div>
                                    </div>
                                </div>
                                <figure class="dust opacity:0 transition:0.3s">
                                    <img  src="../_img/bg_01.png" alt="">
                                </figure>
                            </div>
                            <div class="animate-2 transition:0.3s">
                                <figure>
                                    <img src="../_img/img_31.png" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <div v-scope="SpecSec()"></div>
    <div v-scope="MKTSec()"></div>
    <?php

    ////////載入官網檔尾 start////////////////////////////
        
    $Mfb_Close=1;
    include($_SERVER['DOCUMENT_ROOT']."/_p/_footer.php"); 

    ////////載入官網檔尾 end///////////////////////////

    ?>
    </body>

    </html>
