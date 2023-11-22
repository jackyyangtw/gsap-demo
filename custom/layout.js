export const Header = () => {
    return {
        $template: `
        <div>
        <!-- Mock Header CSS -->
        <link rel="stylesheet" href="http://new.ieiworld.com/%5bmk_upload%5d/marketing/landing-page-TEST/forV3HeaderTest/header-base.css">
        <link rel="stylesheet" href="http://new.ieiworld.com/%5bmk_upload%5d/marketing/landing-page-TEST/forV3HeaderTest/header.css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://new.ieiworld.com/_attach_file/filehub/337.css" type="text/css">
        <!-- Mock HEADER v1_1.6 : START -->
        <header class="iei-main-header hdr-wrapper clearfix">
            <!-- MOBILE HEADER -->
            <div class="iei-header-mobile"> 
                <nav class="m-hdr-header-wrapper">
                    <div class="m-hdr-header-row">
                        <div class="m-hdr-left-col">
                            <a href="javascript://"><img src="http://new.ieiworld.com/%5bmk_upload%5d/marketing/landing-page-TEST/mock-header/_img/v3_IEI_Logo.svg" alt=""></a>
                        </div>
                        <div class="m-hdr-right-col">
                            <div class="m-hdr-locale-box">
                                <a href="javascript://" class="m-hdr-lang-btn"><span class="m-hdr-lang-title">EN</span></a>
                            </div>
                            <!--  在button加上class "is-active" 會是X的狀態  (已用JQuery控制) -->
                            <button class="m-hdr-hamburger hamburger hamburger--slider" type="button">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <!-- 加上class "hdr-v-visible" 會顯示div.m-hdr-locale-row (已用JQuery控制) -->
                    <div class="m-hdr-locale-row">
                        <div class="m-hdr-locale-col">
                            <img src="http://new.ieiworld.com/%5bmk_upload%5d/marketing/landing-page-TEST/mock-header/_img/m-hdr-lang-icon.svg" alt="lang-icon" class="m-hdr-locale-icon">
                            <select class="m-hdr-locale-select" name="m-hdr-lang" id="">
                                <option value="">English - Global</option>
                                <option value="">繁體中文</option>
                                <option value="">Español</option>
                                <option value="">Français</option>
                                <option value="">Deutsch</option>
                                <option value="">한국어</option>
                                <option value="">简体中文</option>
                                <option value="">日本語</option>
                                <option value="">Русский язык</option>
                                <option value="">Italiano</option>
                            </select>
                        </div>
                    </div>
                    <!-- 加上class "hdr-v-visible" 會顯示div.m-hdr-black-mask (已用JQuery控制)-->
                    <div class="m-hdr-black-mask-for-locale m-hdr-black-mask"></div>
                    <!-- MOBILE MENU CONTENT -->
                    <div class="m-hdr-menu-content">
                        <div class="m-hdr-search-row">
                            <div class="m-hdr-searchbar">
                                <a href="javascript://" class="m-hdr-search-btn clearfix">
                                    <svg viewBox="0 0 30.51 31.66">
                                        <defs></defs>
                                        <title>Search</title>
                                        <g data-name="layer 1" class="m-hdr-search-icon-layer-1">
                                            <g data-name="layer 2" class="m-hdr-search-icon-layer-2">
                                                <path class="m-hdr-search-icon-cls-1 active" d="M29.21,31.66a1.29,1.29,0,0,1-.94-.4l-5.49-5.74L22,25.44A13.85,13.85,0,0,1,14,28a14,14,0,1,1,10.7-5l0,.8,5.43,5.67a1.31,1.31,0,0,1,0,1.85,1.3,1.3,0,0,1-.9.36M14,2.6A11.39,11.39,0,1,0,25.37,14,11.4,11.4,0,0,0,14,2.6"/></g></g></svg>
                                </a>
                                <div class="m-hdr-search-box">
                                    <div class="m-hdr-search-border active">
                                        <input type="text" placeholder="Search" class="m-hdr-search-field" autocomplete="off">
                                        <a href="javascript://" class="m-hdr-search-clear"><img src="http://new.ieiworld.com/%5bmk_upload%5d/marketing/landing-page-TEST/mock-header/_img/m-hdr-search-clear-icon.svg" alt="clear-icon"></a>
                                    </div> 
                                <!-- auto-complete block -->
                                    <!-- div.m-hdr-search-autocomplete-block加上class "hdr-d-block" 會顯示自動完成表單 -->
                                    <div class="m-hdr-search-autocomplete-block">
                                        <ul class="m-hdr-search-autocomplete-group">
                                            <li class="m-hdr-search-autocomplete-item">embedded world</li>
                                            <li class="m-hdr-search-autocomplete-item">Donec viverra faucibus sem non vulputate</li>
                                            <li class="m-hdr-search-autocomplete-item">embedded abc</li>
                                            <li class="m-hdr-search-autocomplete-item">embedded qwer</li>
                                            <li class="m-hdr-search-autocomplete-item">embedded asdfghj</li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <!-- MOBILE ACCORDION MENU -->
                        <ul class="m-hdr-main-menu m-hdr-menu-list m-hdr-accordion">
                            <li>
                                <!--  在<a>加上class "active" 會是active的狀態, 箭頭會轉向上, (已用JQuery控制)-->
                                <a href="javascript://">
                                    <span class="m-hdr-h1">Products</span>
                                    <!-- 有子選單(ul.m-hdr-menu-list)才需要render<i>箭頭 -->
                                    <i class="hdr-icon-box"><svg class="m-hdr-chevron-icon" viewBox="0 0 18.73 10.31"><g data-name="m-hdr-chevron-icon-1"><g data-name="m-hdr-chevron-icon-2"><path d="M10,10l8.42-8.42a1,1,0,0,0,0-1.34.94.94,0,0,0-1.33,0L9.37,8,1.61.28A.94.94,0,0,0,.28.28a1,1,0,0,0,0,1.34L8.7,10A1,1,0,0,0,10,10Z"/></g></g></svg></i>
                                </a>
                                <!-- submenu -->
                                <ul class="m-hdr-menu-list m-hdr-sub-accordion">
                                    <li>
                                        <!--  在<a>加上class "active" 會是active的狀態, 箭頭會轉向上 (已用JQuery控制)-->
                                        <!-- <a>加上帶有編號的ID對應json檔的key -->
                                        <a href="javascript://" id="prod_cat_01_M">
                                            <span class="m-hdr-h2">AI Solution</span>
                                            <!-- 有子選單(ul.m-hdr-menu-list)才需要render<i>箭頭 -->
                                            <i class="hdr-icon-box active"><svg class="m-hdr-chevron-icon" viewBox="0 0 18.73 10.31"><g data-name="m-hdr-chevron-icon-1"><g data-name="m-hdr-chevron-icon-2"><path d="M10,10l8.42-8.42a1,1,0,0,0,0-1.34.94.94,0,0,0-1.33,0L9.37,8,1.61.28A.94.94,0,0,0,.28.28a1,1,0,0,0,0,1.34L8.7,10A1,1,0,0,0,10,10Z"/></g></g></svg></i>
                                        </a>
                                        <!-- sub-submenu -->
                                        <!-- <ul class="m-hdr-menu-list">
                                            <li><a href="javascript://"><span class="m-hdr-h3">Overview</span></a></li>
                                            <li><a href="javascript://"><span class="m-hdr-h3">AIoT Computing</span></a></li>
                                            <li>
                                                <a href="javascript://"><span class="m-hdr-h3">Edge Computing</span></a>
                                                <ul class="m-hdr-menu-list">
                                                    <li><a href="javascript://"><span class="m-hdr-h4">CPU Accelerator</span></a></li>
                                                    <li><a href="javascript://"><span class="m-hdr-h4">VPU Accelerator</span></a></li>
                                                    <li><a href="javascript://"><span class="m-hdr-h4">FPGA Acceleratorr</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#"><span class="m-hdr-h3">AIoT & Edge Computing</span></a></li>
                                        </ul> -->
                                    </li>
                                    <li>
                                        <a href="javascript://" id="prod_cat_02_M">
                                            <span class="m-hdr-h2">Networking & Data Storage</span>
                                            <i class="hdr-icon-box active"><svg class="m-hdr-chevron-icon" viewBox="0 0 18.73 10.31"><g data-name="m-hdr-chevron-icon-1"><g data-name="m-hdr-chevron-icon-2"><path d="M10,10l8.42-8.42a1,1,0,0,0,0-1.34.94.94,0,0,0-1.33,0L9.37,8,1.61.28A.94.94,0,0,0,.28.28a1,1,0,0,0,0,1.34L8.7,10A1,1,0,0,0,10,10Z"/></g></g></svg></i>
                                            </a>
                                        <!-- sub-submenu -->
                                        <!-- <ul class="m-hdr-menu-list">
                                            <li><a href="javascript://"><span class="m-hdr-h3">Overview</span></a></li>
                                            <li><a href="javascript://"><span class="m-hdr-h3">AIoT & Edge Computing</span></a></li>
                                            <li>
                                                <a href="javascript://"><span class="m-hdr-h3">Edge Computing</span>
                                                </a>
                                                <ul class="m-hdr-menu-list">
                                                    <li><a href="javascript://"><span class="m-hdr-h4">FPGA Accelerator</span></a></li>
                                                    <li><a href="javascript://"><span class="m-hdr-h4">CPU Accelerator</span></a></li>
                                                    <li><a href="javascript://"><span class="m-hdr-h4">VPU Accelerator</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#"><span class="m-hdr-h3">AIoT Computing</span></a></li>
                                        </ul> -->
                                    </li>
                                    <li>
                                        <a href="javascript://" id="prod_cat_03_M">
                                            <span class="m-hdr-h2">QTS Gateway</span>
                                            <i class="hdr-icon-box active"><svg class="m-hdr-chevron-icon" viewBox="0 0 18.73 10.31"><g data-name="m-hdr-chevron-icon-1"><g data-name="m-hdr-chevron-icon-2"><path d="M10,10l8.42-8.42a1,1,0,0,0,0-1.34.94.94,0,0,0-1.33,0L9.37,8,1.61.28A.94.94,0,0,0,.28.28a1,1,0,0,0,0,1.34L8.7,10A1,1,0,0,0,10,10Z"/></g></g></svg></i></a>
                                        <!-- sub-submenu -->
                                        <!-- <ul class="m-hdr-menu-list">
                                            <li><a href="javascript://"><span class="m-hdr-h3">Overview</span></a></li>
                                            <li><a href="javascript://"><span class="m-hdr-h3">AIoT Computing</span></a></li>
                                            <li><a href="javascript://"><span class="m-hdr-h3">Edge Computing</span></a>
                                                <ul class="m-hdr-menu-list">
                                                    <li><a href="javascript://"><span class="m-hdr-h4">CPU Accelerator</span></a></li>
                                                    <li><a href="javascript://"><span class="m-hdr-h4">VPU Accelerator</span></a></li>
                                                    <li><a href="javascript://"><span class="m-hdr-h4">FPGA Accelerator</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript://"><span class="m-hdr-h3">AIoT & Edge Computing</span></a></li>
                                        </ul> -->
                                    </li>
                                    <li>
                                        <a href="javascript://" id="prod_cat_04_M"><span class="m-hdr-h2">Embedded Computer</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript://" id="prod_cat_05_M"><span class="m-hdr-h2">Industrial Embedded System</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript://" id="prod_cat_06_M"><span class="m-hdr-h2">Panel PC</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <!--  在<a>加上class "active" 會是active的狀態, 箭頭會轉向上 (已用JQuery控制)-->
                                <a href="javascript://">
                                    <span class="m-hdr-h1">Solutions</span>
                                    <i class="hdr-icon-box"><svg class="m-hdr-chevron-icon" viewBox="0 0 18.73 10.31"><g data-name="m-hdr-chevron-icon-1"><g data-name="m-hdr-chevron-icon-2"><path d="M10,10l8.42-8.42a1,1,0,0,0,0-1.34.94.94,0,0,0-1.33,0L9.37,8,1.61.28A.94.94,0,0,0,.28.28a1,1,0,0,0,0,1.34L8.7,10A1,1,0,0,0,10,10Z"/></g></g></svg></i>
                                </a>
                                <ul class="m-hdr-menu-list">
                                    <li>
                                        <a href="javascript://"><span class="m-hdr-h2">Smart Factory</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript://"><span class="m-hdr-h2">Smart Healthcare</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript://"><span class="m-hdr-h2">Smart Home</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript://"><span class="m-hdr-h2">Smart Transport</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript://"><span class="m-hdr-h2">CNC Machine Data Collection</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript://">
                                    <span class="m-hdr-h1">Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript://">
                                    <span class="m-hdr-h1">Resource</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript://">
                                    <span class="m-hdr-h1">Buy</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript://">
                                    <span class="m-hdr-h1">About Us</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="m-hdr-h1">Member</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="m-hdr-h1">Contact Us</span>
                                </a>
                            </li>
                            <!--  可在li加上class: hdr-d-flex(顯示) 或 hdr-d-none(隱藏) -->
                            <li>
                                <a href="#">
                                    <span class="m-hdr-h1 m-hdr-highlight-btn">IEI LIVE</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="m-hdr-placeholder"></div>
            <!-- DESKTOP/PC HEADER -->
            <div class="iei-header-pc">
                <!-- 預留區塊 測試 -->
                <!-- div.hdr-msg-row加上class "active" 會顯示訊息區塊-->
                <div class="hdr-msg-row clearfix">
                    <div class="hdr-container">
                        Pellentesque ipsum eros, tristique a scelerisque quis, cursus
                        <p>Pellentesque ipsum eros, tristique a scelerisque quis, cursus eget erat. Donec viverra faucibus sem non vulputate. Fusce tincidunt scelerisque lorem, et dictum sem consectetur nec. Fusce eu fringilla velit, nec posuere ante. Etiam id arcu velit.</p>
                    </div>
                </div>
                <!-- logo, searchbar, locale row-->
                <div class="hdr-top-row clearfix">
                    <div class="hdr-container">
                        <div class="hdr-left-col clearfix">
                            <div class="hdr-img-box">
                                <a href="javascript://"><img src="http://new.ieiworld.com/%5bmk_upload%5d/marketing/landing-page-TEST/mock-header/_img/v3_IEI_Logo.svg" alt="IEI logo"></a>
                            </div>
                        </div>
                        <div class="hdr-right-col clearfix">
                            <div class="hdr-searchbar">
                                <a href="javascript://" class="hdr-search-btn clearfix">
                                    <svg viewBox="0 0 30.51 31.66">
                                        <defs></defs>
                                        <title>Search</title>
                                        <g data-name="layer 1" class="hdr-search-icon-layer-1">
                                            <g data-name="layer 2" class="hdr-search-icon-layer-2">
                                                <path class="hdr-search-icon-cls-1" d="M29.21,31.66a1.29,1.29,0,0,1-.94-.4l-5.49-5.74L22,25.44A13.85,13.85,0,0,1,14,28a14,14,0,1,1,10.7-5l0,.8,5.43,5.67a1.31,1.31,0,0,1,0,1.85,1.3,1.3,0,0,1-.9.36M14,2.6A11.39,11.39,0,1,0,25.37,14,11.4,11.4,0,0,0,14,2.6"/></g></g></svg>
                                </a>
                                <div class="hdr-search-box">
                                    <div class="hdr-search-border">
                                        <input type="text" placeholder="Search" class="hdr-search-field" autocomplete="off">
                                        <a href="javascript://" class="hdr-search-clear"></a>
                                    </div>
                                    <!-- auto-complete block -->
                                    <!-- div.hdr-search-autocomplete-block加上class "hdr-d-block" 會顯示自動完成表單 -->
                                    <div class="hdr-search-autocomplete-block">
                                        <ul class="hdr-search-autocomplete-group">
                                            <li class="hdr-search-autocomplete-item">embedded world</li>
                                            <li class="hdr-search-autocomplete-item">Donec viverra faucibus</li>
                                            <li class="hdr-search-autocomplete-item">embedded abc</li>
                                            <li class="hdr-search-autocomplete-item">embedded qwer</li>
                                            <li class="hdr-search-autocomplete-item">embedded asdfghj</li>
                                        </ul>
                                    </div>   
                                </div>
                            </div>
                            <div class="hdr-locale">
                                <a href="javascript://" class="hdr-locale-btn">
                                    <div class="hdr-text-box"><span class="hdr-h2">English-Global</span></div>
                                    <div class="hdr-icon-box">
                                        <svg viewBox="0 0 10.77 9.32"><defs></defs><g data-name="triangle-down-icon-layer-1" class="hdr-triangle-down-icon-layer-1"><g data-name="triangle-down-icon-layer-2" class="hdr-triangle-down-icon-layer-2"><polygon class="hdr-triangle-down-icon-cls-1" points="5.38 9.32 2.69 4.66 0 0 5.38 0 10.77 0 8.07 4.66 5.38 9.32"/></g></g></svg>
                                    </div>
                                </a>
                                <!-- lang-menu-block-->
                                <div class="hdr-lang-menu-wrapper">
                                    <div class="hdr-lang-menu-block">
                                        <div class="hdr-lang-menu-title-box">
                                            <span class="hdr-h2">Choose your language</span>
                                        </div>
                                        <hr>
                                        <ul class="hdr-lang-menu-group">
                                            <li class="hdr-lang-menu-item">
                                                <a href="javascript://"><span class="hdr-h3">English - Global</span></a>
                                            </li>
                                            <!-- 當前的語系要加上active的class -->
                                            <li class="hdr-lang-menu-item active">
                                                <a href="javascript://"><span class="hdr-h3">繁體中文</span></a>
                                            </li>
                                            <li class="hdr-lang-menu-item">
                                                <a href="javascript://"><span class="hdr-h3">Español</span></a>
                                            </li>
                                            <li class="hdr-lang-menu-item">
                                                <a href="javascript://"><span class="hdr-h3">Français</span></a>
                                            </li>
                                            <li class="hdr-lang-menu-item">
                                                <a href="javascript://"><span class="hdr-h3">Deutsch</span></a>
                                            </li>
                                            <li class="hdr-lang-menu-item">
                                                <a href="javascript://"><span class="hdr-h3">한국어</span></a>
                                            </li>
                                            <li class="hdr-lang-menu-item">
                                                <a href="javascript://"><span class="hdr-h3">简体中文</span></a>
                                            </li>
                                            <li class="hdr-lang-menu-item">
                                                <a href="javascript://"><span class="hdr-h3">日本語</span></a>
                                            </li>
                                            <li class="hdr-lang-menu-item">
                                                <a href="javascript://"><span class="hdr-h3">Русский язык</span></a>
                                            </li>
                                            <li class="hdr-lang-menu-item">
                                                <a href="javascript://"><span class="hdr-h3">Italiano</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- menu row -->
                <div class="hdr-nav-row clearfix">
                    <div class="hdr-container clearfix">
                        <!-- main menu -->
                        <nav class="hdr-nav-menu">
                            <div class="hdr-nav-item hdr-products-item">
                                <a href="javascript://" class="hdr-nav-link"></a>
                                <span class="hdr-h1">Products</span>
                                <!-- submenu -->
                                <div class="hdr-submenu-wrapper">
                                    <ul class="hdr-submenu hdr-ul-style-1 hdr-submenu-products">
                                    <div class="hdr-submenu-mega-bg"></div>
                                    <li class="hdr-sub-item">
                                        <!-- <a>加上帶有編號的ID對應json檔的key -->
                                        <a href="javascript://" class="hdr-sub-link" id="prod_cat_01"><span class="hdr-h3">AI Solution</span></a>
                                        <div class="hdr-sub-block">
                                            <div class="hdr-sub-col">
                                                <ul class="hdr-cat-group hdr-ul-style-1">
                                                    <li class="hdr-title">
                                                        <span class="hdr-h2">Categories</span>
                                                    </li>
                                                    <li class="hdr-sub-item">
                                                        <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">AIoT & Edge Computing</span></a>
                                                    </li>
                                                    <li class="hdr-sub-item">
                                                        <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">AIoT Dev. Kit</span></a>
                                                    </li>
                                                    <li class="hdr-sub-item">
                                                        <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Accelerator Card</span></a>
                                                        <ul class="hdr-cat-sub-group hdr-ul-style-2 ">
                                                            <li>
                                                                <a href="javascript://" class="hdr-sub-link"><span class="hdr-h4">CPU Accelerator</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript://" class="hdr-sub-link"><span class="hdr-h4">FPGA Accelerator</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript://" class="hdr-sub-link"><span class="hdr-h4">VPU Accelerator</span></a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="hdr-sub-item">
                                                        <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">ABCD Gateway</span></a>
                                                    </li>
                                                    <li class="hdr-sub-item">
                                                        <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">AI Robot</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="hdr-sub-col">
                                                <ul class="hdr-featured-group hdr-ul-style-1">
                                                    <li class="hdr-title">
                                                        <span class="hdr-h2">Featured</span>
                                                    </li>
                                                    <li class="hdr-sub-item">
                                                        <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">OpenVINO™ toolkit</span></a>
                                                    </li>
                                                    <li class="hdr-sub-item">
                                                        <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Edge computing</span></a>
                                                    </li>
                                                    <li class="hdr-sub-item">
                                                        <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Puzzle Series</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="hdr-sub-col">
                                                <ul class="hdr-prod-group hdr-ul-style-1">
                                                    <li class="hdr-title">
                                                        <span class="hdr-h2">Newly Launched</span>
                                                    </li>
                                                    <li class="hdr-prod-group-block">
                                                        <ul id="hdr_prod_slider" class="hdr-prod-slider">
                                                            <li class="hdr-prod-column">
                                                                <a href="javascript://" target="_blank">
                                                                    <div class="hdr-prod-tile">
                                                                        <div class="hdr-pic-row">
                                                                            <img src="https://new.ieiworld.com/_index/_img/mustang-200-cpu-accelerator-card.png" alt="AAAAAAAAAAA">
                                                                        </div>
                                                                        <div class="hdr-title-row">
                                                                            <span class="hdr-h3">Mustang-F100 FPGA Accelerator supported OpenVINO™ toolkit FPGA Accelerator supported FPGA Accelerator supported FPGA Accelerator supported</span>
                                                                        </div>
                                                                        <div class="hdr-link-row">
                                                                            <div class="hdr-btn-box">
                                                                                <span class="hdr-h2">Learn More</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="hdr-prod-column">
                                                                <a href="javascript://" target="_blank">
                                                                    <div class="hdr-prod-tile">
                                                                        <div class="hdr-pic-row">
                                                                            <img src="https://new.ieiworld.com/_index/_img/TANK-AIoT_develop_kit.png" alt="AAAAAAAAAAA">
                                                                        </div>
                                                                        <div class="hdr-title-row">
                                                                            <span class="hdr-h3">Quisque rhoncus non tellus a egestas.</span>
                                                                        </div>
                                                                        <div class="hdr-link-row">
                                                                            <div class="hdr-btn-box">
                                                                                <span class="hdr-h2">Learn More</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="hdr-prod-column">
                                                                <a href="javascript://" target="_blank">
                                                                    <div class="hdr-prod-tile">
                                                                        <div class="hdr-pic-row">
                                                                            <img src="https://new.ieiworld.com/_index/_img/PPC-F15C-Q370_AI_panel_PC_600x600.png" alt="AAAAAAAAAAA">
                                                                        </div>
                                                                        <div class="hdr-title-row">
                                                                            <span class="hdr-h3">Quisque rhoncus non tellus a egestas. Mauris tincidunt purus eget</span>
                                                                        </div>
                                                                        <div class="hdr-link-row">
                                                                            <div class="hdr-btn-box">
                                                                                <span class="hdr-h2">Learn More</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> -->
                                    </li>
                                    <li class="hdr-sub-item">
                                        <a href="javascript://" class="hdr-sub-link" id="prod_cat_02"><span class="hdr-h3">Networking & Data Storage</span></a>
                                    </li>
                                    <li class="hdr-sub-item">
                                        <a href="javascript://" class="hdr-sub-link" id="prod_cat_03"><span class="hdr-h3">QTS Gateway</span></a>
                                    </li>
                                    <li class="hdr-sub-item">
                                        <a href="javascript://" class="hdr-sub-link" id="prod_cat_04"><span class="hdr-h3">Embedded Computer</span></a>
                                    </li>
                                    <li class="hdr-sub-item">
                                        <a href="javascript://" class="hdr-sub-link" id="prod_cat_05"><span class="hdr-h3">Industrial Embedded System</span></a>
                                    </li>
                                    <li class="hdr-sub-item">
                                        <a href="javascript://" class="hdr-sub-link" id="prod_cat_06"><span class="hdr-h3">Panel PC</span></a>
                                    </li>
                                    <li class="hdr-sub-item">
                                        <a href="javascript://" class="hdr-sub-link" id="prod_cat_07"><span class="hdr-h3">Mobile Computing</span></a>
                                    </li>
                                    <li class="hdr-sub-item">
                                        <a href="javascript://" class="hdr-sub-link" id="prod_cat_08"><span class="hdr-h3">Video Capture & Machine Vision</span></a>
                                    </li>
                                    <li class="hdr-sub-item">
                                        <a href="javascript://" class="hdr-sub-link" id="prod_cat_09"><span class="hdr-h3">Power Supply & Peripherals</span></a>
                                    </li>
                                    </ul> 
                                </div>
                            </div>
                            <div class="hdr-nav-item">
                                <a href="javascript://" class="hdr-nav-link"></a>
                                <span class="hdr-h1">Solutions</span>
                                <!-- submenu -->
                                <div class="hdr-submenu-wrapper">
                                    <ul class="hdr-submenu hdr-ul-style-1">
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Smart Factory</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Smart Healthcare</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Smart Home</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Smart Transport</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">CNC Machine Data Collection</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="hdr-nav-item">
                                <a href="javascript://" class="hdr-nav-link"></a>
                                <span class="hdr-h1">Services</span>
                                <!-- submenu -->
                                <div class="hdr-submenu-wrapper">
                                    <ul class="hdr-submenu hdr-ul-style-1">
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">In vulputate iaculis</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Donec gravida</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Vivamus egestas</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Nulla non lorem</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="hdr-nav-item">
                                <a href="javascript://" class="hdr-nav-link"></a>
                                <span class="hdr-h1">Resource</span>
                                <!-- submenu -->
                                <div class="hdr-submenu-wrapper">
                                    <ul class="hdr-submenu hdr-ul-style-1">
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">In vulputate iaculis</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Donec gravida</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Vivamus egestas</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Nulla non lorem</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="hdr-nav-item">
                                <a href="javascript://" class="hdr-nav-link"></a>
                                <span class="hdr-h1">Buy</span>
                                <!-- submenu -->
                                <div class="hdr-submenu-wrapper">
                                    <ul class="hdr-submenu hdr-ul-style-1">
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">In vulputate iaculis</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Donec gravida</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Vivamus egestas</span></a>
                                        </li>
                                        <li class="hdr-sub-item">
                                            <a href="javascript://" class="hdr-sub-link"><span class="hdr-h3">Nulla non lorem</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="hdr-nav-item">
                                <a href="javascript://" class="hdr-nav-link"></a>
                                <span class="hdr-h1">About Us</span>
                            </div>
                            <div class="hdr-nav-item">
                                <a href="javascript://" class="hdr-nav-link"></a>
                                <span class="hdr-h1">Member</span>
                            </div>
                            <div class="hdr-nav-item">
                                <a href="javascript://" class="hdr-nav-link"></a>
                                <span class="hdr-h1">Contact Us</span>
                            </div>
                            <!--  在div.hdr-nav-item加上class: hdr-d-flex(顯示) 或 hdr-d-none(隱藏), 預設請加上hdr-d-none  -->
                            <div class="hdr-nav-item">
                                <a href="#" class="hdr-nav-link"></a>
                                <span class="hdr-h1 hdr-highlight-btn">IEI LIVE</span>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- 電腦版預留header的高度 -->
            <div id="Main_Menu_wrap_false" class="pc-hdr-placeholder"></div>
        </header>
    </div>
        `
    }
}

export const TopSec = (props) => {
    return {
        $template: `
        <section id="top_sec" class="top-sec all-section pt-5">
        <nav class="prod-nav-wrapper d-flex">
            <div class="custom-container">
                <!-- MOBILE NAV -->
                <div class="mob-nav d-flex d-xl-none justify-content-between">
                    <a href="#top_sec" class="scroll-to-anchor-mob"><h3 class="white mt-0 mb-0">{{ modelName }}</h3></a>
                    <a href="javascript://" id="mob_nav_btn" class="mob-nav-btn">
                        <img src="../_img/icon/arrow-down.svg" alt="" class="mob-nav-arrow">
                    </a>
                </div>
                <div class="mob-nav-menu-content">
                    <ul class="mob-menu-list">
                        <a href="#top_sec" class="m-list-item scroll-to-anchor-mob"><li class="white">Overview</li></a>
                        <a href="#feature_sec" class="m-list-item scroll-to-anchor-mob"><li class="white">Features</li></a>
                        <a href="#spec_sec" class="m-list-item scroll-to-anchor-mob"><li class="white">Specifications</li></a>
                        <a href="#material_sec" class="m-list-item scroll-to-anchor-mob"><li class="white">Marketing Material</li></a>
                        <a href="https://download.ieiworld.com/?model=DRPC-230-ULT5" class="m-list-item" target="_blank"><li class="white">Download</li></a>
                        <a href="/<?=$IS_LANG_SET?>/sales_inquiry_form/?II=714&tag=5" class="m-list-item" target="_blank"><li class="light-green">Send Inquiry</li></a>
                    </ul>
                </div>
                <!-- PC NAV -->
                <div class="pc-nav d-none d-xl-flex">
                    <div class="nav-col left-col d-flex align-items-center">
                        <!-- item -->
                        <div class="item-box d-flex align-items-center mr-4"> 
                            <a href="#top_sec" class="scroll-to-anchor">
                                <p class="white title-p-model-name">{{ modelName }}</p>
                            </a>
                        </div>
                    </div>
                    <div class="nav-col right-col d-flex flex-row flex-wrap justify-content-end align-items-center">
                        <!-- item -->
                        <div class="item-box d-flex align-items-center mr-4"> 
                            <a href="#feature_sec" class="scroll-to-anchor">
                                <p class="white">Features</p>
                            </a>
                        </div>
                        <div class="item-box d-flex align-items-center mr-4"> 
                            <a href="#spec_sec" class="scroll-to-anchor">
                                <p class="white">Specifications</p>
                            </a>
                        </div>
                        <div class="item-box d-flex align-items-center mr-4"> 
                            <a href="#material_sec" class="scroll-to-anchor">
                                <p class="white">Marketing Material</p>
                            </a>
                        </div>
                        <div class="item-box d-flex align-items-center mr-4"> 
                            <a href="https://download.ieiworld.com/?model=DRPC-230-ULT5" target="_blank">
                                <p class="white">Download</p>
                            </a>
                        </div>
                        <div class="item-box d-flex align-items-center mr-4"> 
                            <a href="/<?=$IS_LANG_SET?>/sales_inquiry_form/?II=714&tag=5" target="_blank">
                                <button class="btn btn-sm btn-1 px-3">
                                    <p class="white">Send Inquiry</p>
                                </button>                              
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container top-sec-container">
            <div class="row mt-4 mt-lg-5">
                <div class="col-12">
                    <h1 class="text-center">{{ modelName }}</h1>
                </div>
                <div class="col-12 mb-5">
                    <h3 class="dark-grey text-center mt-0 mb-0">Fanless DIN-Rail Embedded System with 8th Generation Intel® Core™ Processor</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div class="album-block">
                        <!-- Main Slider -->
                        <div class="album-box">
                            <!-- Slider Carousel -->
                            <div id="pd_main_slider" class="pd-prod-slider" style="min-height: 300px">
                                <figure>
                                    <img src="../_img/DRPC-230-ULT5-s_800x800.png" alt="">
                                </figure>
                                <figure>
                                    <img src="../_img/DRPC-230-ULT5-s_F_800x800.png" alt="">
                                </figure>
                                <figure>
                                    <img src="../_img/DRPC-230-ULT5-s_T_800x800.png" alt="">
                                </figure>
                                <figure>
                                    <img src="../_img/DRPC-230-ULT5_800x800.png" alt="">
                                </figure>
                                <figure>
                                    <img src="../_img/DRPC-230-ULT5_F_800x800.png" alt="">
                                </figure>
                                <figure>
                                    <img src="../_img/DRPC-230-ULT5_T_800x800.png" alt="">
                                </figure>
                            </div>
                        </div>
                        <!-- thumbnail area -->
                        <div class="prod-nav-row">
                            <!-- Nav Slider Carousel -->
                            <ul id="pd_nav_slider" class="pd-thumbnail-slider">
                                <li>
                                    <figure>
                                        <img src="../_img/DRPC-230-ULT5-s_800x800.png" alt="">
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="../_img/DRPC-230-ULT5-s_F_800x800.png" alt="">
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="../_img/DRPC-230-ULT5-s_T_800x800.png" alt="">
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="../_img/DRPC-230-ULT5_800x800.png" alt="">
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="../_img/DRPC-230-ULT5_F_800x800.png" alt="">
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="../_img/DRPC-230-ULT5_T_800x800.png" alt="">
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="prod-feature-block d-flex justify-content-center">
                        <div class="prod-feature-wrapper d-inline-block">
                            <!-- 自訂內容: START -->
                            <div class="overview-item">
                                <div class="indent-active">» Whiskey Lake Core™ i5-8365UE / Whiskey Lake Celeron® 4205U</div>
                                <div class="indent-active">» Triple GbE LAN Ports</div>
                                <div class="indent-active">» Multiple USB 3.2 Gen 2 (10Gb/s)</div>
                                <div class="indent-active">» Multiple COM Ports</div>
                                <div class="indent-active">» Modularized Flexible Expansion</div>
                            </div>
                            <!-- 自訂內容: END -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `,
        modelName: props.modelName
    }
}

export const SpecSec = () => {
    return {
        $template: `
        <section id="spec_sec" class="spec-sec all-section bg-light-grey">
        <div class="container">
            <div class="row mb-3 mt-lg-4">
                <div class="col-12 d-flex flex-column flex-lg-row align-items-lg-center">
                    <div class="title-box d-inline-block mb-3 mb-lg-0"><h2 class="text-center text-lg-left mt-0 mb-0 mr-2">Specifications</h2></div>
                    <div class="download-box d-flex justify-content-center">
                        <a href="https://iei.pse.is/drpc-230" target="_blank">
                            <button class="btn btn-sm btn-3">
                                <p class="mb-0">PDF</p>
                            </button>
                        </a>
                        <!-- <a href="">
                            <button class="btn btn-sm btn-3">
                                <p class="mb-0">XLS</p>
                            </button>
                        </a> -->
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <hr class="grey-divider">
                </div>
            </div>
            <!-- title: main spec -->
            <div class="row mb-3 mt-lg-4">
                <div class="col-12">
                    <h3 class="text-center text-lg-left mb-4">Hardware Spec.</h3>
                </div>
            </div>
            <!-- main spec table -->
            <div class="row">
                <div class="col-12">
                    <table class="prod-table-1">
                        <tbody>
                            <tr class="title-row">
                                <th class="tb-heading-1" colspan="2">Form factor</th>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">SBC Form Factor</th>
                                <td>» CPU:<br>
                                    Intel® Whiskey Lake Core™ i5-8365UE<br>
                                    Intel® Whiskey Lake Celeron® 4205U<br><br>
                                    » Chipset:<br>
                                    SoC<br><br>
                                    » System Memory:<br>
                                    2 x DDR4 2400Hz SO-DIMM (up to 32GB)<br><br>
                                    » Power:<br>
                                    Input : 3-pin terminal block, 12 V ~ 24 V DC<br>
                                    Consumption: 12V @ 4.98 A (Intel® Core™ i5-8365UE CPU with 8GB 2400 MHz DDR4 memory)<br><br>
                                    » Reliability:<br>
                                    Operating Shock: Half-sine wave shock 5G, 11ms, 100 shocks per axis, IEC68-2-27<br>
                                    Operating Vibration: MIL-STD-810G 514.6C-1 (SSD)<br>
                                    Safety/EMC : CE/FCC<br>
                                </td>
                            </tr>
                            <tr class="title-row">
                                <th class="tb-heading-1" colspan="2">I/O Interface</th>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">I/O Ports</th>
                                <td>» 6 x USB 3.2 Gen 2 (DRPC-230-ULT5-C/8G/S-R10 has four USB 3.2 Gen 2 & two USB 2.0)<br><br>
                                    » Ethernet:<br>
                                    3 x RJ-45<br>
                                    2 x PCIe GbE by Intel® I211 controller<br>
                                    1 x PCIe GbE by Intel® I219 controller<br><br>
                                    » COM Port:<br>
                                    4 x RS-232/422/485 with AFC (DB-9)<br>
                                    2 x RS-232 (RJ-45)<br><br>
                                    » Digital I/O:<br>
                                    8-bit digital I/O , 4-bit input / 4-bit output<br><br>
                                    » Display:<br>
                                    1 x HDMI 1.4b (lockable)<br>
                                    1 x DP<br><br>
                                    » TPM:<br>
                                    1 x TPM 2.0 (optional)<br>
                                </td>
                            </tr>
                            <tr class="title-row">
                                <th class="tb-heading-1" colspan="2">Expansion Slots</th>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Expansion Slots</th>
                                <td>» M.2:<br>
                                    1 x 2230 A key (PCIe/ USB 2.0)<br>
                                    Celeron SKU: 1 x 2230 A key (PCIe)<br><br>
                                    » PCIe Mini:<br>
                                    1 x Full-size (PCIe/ USB 3.0/ SATA)<br><br>
                                    » Backplane:<br>
                                    1 x PCIe by 4<br>
                                    (Expansion SKU only)<br>
                                </td>
                            </tr>
                            <tr class="title-row">
                                <th class="tb-heading-1" colspan="2">System</th>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Cooling method / System Fan</th>
                                <td>Fanless</td>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Drive Bays</th>
                                <td>1 x 2.5” SATA 6Gb/s HDD/SSD bay</td>
                            </tr>
                            <tr class="title-row">
                                <th class="tb-heading-1" colspan="2">Indicator&Buttons</th>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Buttons</th>
                                <td>1 x Power button<br>
                                    1 x Reset button<br>
                                    1 x AT/ATX switch
                                </td>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Indicators</th>
                                <td>1 x Power LED<br>
                                    1 x HDD LED
                                </td>
                            </tr>
                            <tr class="title-row">
                                <th class="tb-heading-1" colspan="2">Physical Characteristics</th>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Construction</th>
                                <td>Extruded aluminum alloy</td>
                            </tr>
                            <tr class="title-row">
                                <th class="tb-heading-1" colspan="2">Color</th>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Color</th>
                                <td>Black + Silver</td>
                            </tr>
                            <tr class="title-row">
                                <th class="tb-heading-1" colspan="2">Dimensions</th>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Dimensions</th>
                                <td>81 x 150 x 190 mm<br>
                                    127 x 150 x 190 mm (Expansion SKU)
                                </td>
                            </tr>
                            <tr class="title-row">
                                <th class="tb-heading-1" colspan="2">Weight</th>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Weight</th>
                                <td>2.9KG/ 3.2KG<br>
                                    3.2KG/ 3.5KG (Expansion SKU)
                                </td>
                            </tr>
                            <tr class="title-row">
                                <th class="tb-heading-1" colspan="2">Environment</th>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Operating Temperature</th>
                                <td>-20 ~ 60°C with air flow (SSD)</td>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">Humidity</th>
                                <td>10 ~ 95% non condensing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- title: Ordering Info -->
            <div class="row mb-3 mt-lg-4">
                <div class="col-12">
                    <h3 class="text-center text-lg-left mb-4">Ordering Information</h3>
                </div>
            </div>
            <!-- Ordering Info table -->
            <div class="row">
                <div class="col-12">
                    <table class="prod-table-1">
                        <tbody>
                            <tr>
                                <th class="tb-heading-2">DRPC-230-ULT5-i5/8G/S-R10</th>
                                <td>Fanless embedded system, Intel®Whiskey Lake i5-8365UE 1.6GHz (quad core, TDP 15W), 8GB DDR4 pre-installed memory, HDMI/DP, 3 PCIe GbE, 6 COM, 12~24V DC and RoHS</td>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">DRPC-230-ULT5-i5/8G-R10</th>
                                <td>Fanless embedded system, Intel®Whiskey Lake i5-8365UE 1.6GHz (quad core, TDP 15W), 8GB DDR4 pre-installed memory, HDMI/DP, 3 PCIe GbE, 6 COM, 12~24V DC, PCIex4 extension layer and RoHS</td>
                            </tr>
                            <tr>
                                <th class="tb-heading-2">DRPC-230-ULT5-C/8G/S-R10</th>
                                <td>Fanless embedded system, Intel®Whiskey Lake Celeron™4205U 1.8GHz (dual core, TDP 15W), 8GB DDR4 pre-installed memory, HDMI/DP, 3 PCIe GbE, 6 COM, 12~24V DC and RoHS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- title: Package Contents -->
            <div class="row mb-3 mt-lg-4">
                <div class="col-12">
                    <h3 class="text-center text-lg-left mb-4">Package Contents</h3>
                </div>
            </div>
            <!-- Package Contents table -->
            <div class="row">
                <div class="col-12">
                    <table class="prod-table-1">
                        <tbody>
                            <tr>
                                <th class="tb-heading-2">Package Content</th>
                                <td>1 x DIN-rail mounting kit<br>1 x Screw kit<br>1 x SATA cable</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- download pdf row -->
            <div class="row">
                <div class="col-12">
                    <hr class="grey-divider">
                    <h3 class="dl-title d-block d-lg-inline-block text-center text-lg-left mr-2">Download Specs.</h3>
                    <div class="download-box d-flex justify-content-center d-lg-inline-block">
                        <a href="https://iei.pse.is/drpc-230" target="_blank">
                            <button class="btn btn-sm btn-3">
                                <p class="mb-0">PDF</p>
                            </button>
                        </a>
                        <!-- <a href="">
                            <button class="btn btn-sm btn-3">
                                <p class="mb-0">XLS</p>
                            </button>
                        </a> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
        `,
    }
}

export const MKTSec = () => {
    return {
        $template: `
        <section id="material_sec" class="material-sec all-section">
        <div class="container">
            <div class="row mt-lg-4">
                <div class="col-12">
                    <div class="title-box mb-5"><h2 class="text-center text-lg-left mt-0 mb-0">Marketing Material</h2></div>
                </div>
            </div>
            <div class="tab-block d-flex justify-content-center">
                <div id="horizontal_tab_mtl" class="horizontal-tab">
                    <ul class="resp-tabs-list">
                        <li><h4 class="tab-title">All</h4></li>
                        <li><h4 class="tab-title">Video</h4></li>
                    </ul>
                    <div class="resp-tabs-container">
                        <div class="resp-tab-content">
                            <ul class="all-list">
                                <li>
                                    <h4 class="tab-title">Video</h4>
                                    <ul class="unordered-list-group">
                                        <li><a href="https://live.ieiworld.com/zh-tw/video/show/304" target="_blank">適合您的中小型嵌入式系統｜Intel® CoreTM ｜DRPC-230-ULT5</a></li>
                                        <li><a href="https://live.ieiworld.com/en/video/show/305" target="_blank">Suitable for Your Intel Core Solution Box PC｜DRPC-230-ULT5｜Product Introduction</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="resp-tab-content">
                            <ul class="video-list">
                                <li>
                                    <ul class="unordered-list-group">
                                        <li><a href="https://live.ieiworld.com/zh-tw/video/show/304" target="_blank">適合您的中小型嵌入式系統｜Intel® CoreTM ｜DRPC-230-ULT5</a></li>
                                        <li><a href="https://live.ieiworld.com/en/video/show/305" target="_blank">Suitable for Your Intel Core Solution Box PC｜DRPC-230-ULT5｜Product Introduction</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `
    }
}

export const Footer = () => {
    return {
        $template:`
        <div id="footer_copyright" class="footer_copyright" style="display: block;">
        <div class="footer-wrapper" align="center">
        <table border="0" class="footer_table left-col">
        <tbody>
        <tr>
        <td class="footer_col"><div class="col_title">
                                    About IEI</div>
                <div><a href="/en/about/con_show.php?op=showone&amp;cid=1" target="_top" title="About IEI Integration Corp.">About IEI Integration Corp.</a></div>
                <div><a href="https://www.ieiworld.com/en/news/con_show.php?op=showone&amp;cid=1138" target="_top" title="The Latest Updated to COVID-19 ( 2019-nCov)">The Latest Updated to COVID-19</a></div>
                <div><a href="/en/about/con_show.php?op=showone&amp;cid=2" target="_top" title="About IEI">R&amp;D</a></div>
                <div><a href="/en/about/con_show.php?op=showone&amp;cid=5" target="_top" title="About IEI">IEI Group</a></div>
                <div><a href="/en/about/index_cat.php?cat=2" target="_top" title="">CSR</a></div>
                <div><a href="/en/about/con_show.php?op=showone&amp;cid=25" target="_top" title="">Information Security Policy</a></div>
                <div><a href="/en/about/con_show.php?op=showone&amp;cid=7" target="_top" title="About IEI">Contact Us</a></div>
                <div><a href="/en/finance/" target="_top" title="">Investors</a></div></td><td class="footer_col"><div class="col_title">
                                    Product</div>
                <div><a href="/ai-ready-solution/en/" target="_top" title="AIoT">AIoT &amp; Edge Computing</a></div>
                <div><a href="/en/product/items_by_cat_intro.php?CA=2" target="_top" title="Networking">Networking</a></div>
                <div><a href="/en/product/items_by_cat_intro.php?CA=3" target="_top" title="Embedded Computer">Embedded Computer</a></div>
                <div><a href="/en/product/items_by_cat_intro.php?CA=4" target="_top" title="Embedded System">Embedded System</a></div>
                <div><a href="/en/product/items_by_cat_intro.php?CA=5" target="_top" title="Panel PC &amp; Monitor">Panel PC &amp; Monitor</a></div>
                <div><a href="/en/product/items_by_cat_intro.php?CA=8" target="_top" title="Power Supply">Power Supply</a></div>
                <div><a href="/en/product/items_by_cat_intro.php?CA=9" target="_top" title="Peripherals">Peripherals</a></div></td><td class="footer_col"><div class="col_title">
                                    Solution</div>
                <div><a href="/odm/en/" target="_top" title="ODM Solution">ODM Solution</a></div>
                <div><a href="/autonomous-mobile-robot/en/" target="_top" title="Autonomous Mobile Robot">Autonomous Mobile Robot</a></div>
                <div><a href="/electric-vehicle-charging-solution/en/" target="_top" title="Electric Vehicle Charging Solution">Electric Vehicle Charging Solution</a></div>
                <div><a href="/ai-ready-solution/en/" target="_top" title="AI Ready Solution">AI Ready Solution</a></div>
                <div><a href="/puzzle_network_appliance/en/" target="_top" title="Networking Solution">Networking Solution</a></div>
                <div><a href="/medical-solution/en/" target="_top" title="Medical Solution">Medical Solution</a></div>
                <div><a href="/en/smart-factory/" target="_top" title="Smart Factory">Smart Factory</a></div>
                <div><a href="/en/smart-transportation/" target="_top" title="Solution">Smart Transport</a></div>
                <div><a href="/en/smart-retail-solution/" target="_top" title="Solution">Smart Retail</a></div>
                <div><a href="/en/smart-home/" target="_top" title="Solution">Smart Home</a></div></td><td class="footer_col"><div class="col_title">
                                    Service</div>
                <div><a href="/en/product/eol.php" target="_top" title="The items listed below are end-of-life (EOL).">End-of-Life Products</a></div>
                <div><a href="/en/online_support_form/" target="_top" title="Support">Technical Support &amp; Feedback</a></div>
                <div><a href="/en/qa/" target="_top" title="Support">FAQ</a></div>
                <div><a href="/en/support/con_show.php?cid=49" target="_top" title="Security Advisory">Security Advisory</a></div>
                <div><a href="/en/software_service/con_show.php?op=showone&amp;cid=1" target="_top" title="Software Service">Software Service</a></div>
                <div><a href="/en/support/con_show.php?cid=10" target="_top" title="Warranty Policy">Warranty Policy</a></div>
                <div><a href="https://download.ieiworld.com/" target="_blank" title="Download Center">Download Center</a></div></td></tr><tr><td colspan="4"><div style="min-height:20px;"></div></td></tr><tr><td class="footer_col"><div class="col_title">
                                    Buy</div>
                <div><a href="/en/sales_inquiry_form/" target="_top" title="Sample Request">Sample Request</a></div>
                <div><a href="https://memberzone.ieiworld.com/resource/advanced.php?utm_source=ieiworld&amp;utm_medium=footer_menu&amp;utm_campaign=ieiworld_where_to_buy" target="_blank" title="Buy">Local Distributor</a></div>
                <div><a href="https://store.qnap.com/iei-e-shop.html?utm_source=ieiworld-website&amp;utm_medium=footer-menu-btn&amp;utm_campaign=IEI-QNAP-EC-en&amp;utm_content=footer-menu-btn" target="_top" title="Buy online">USA E-SHOP</a></div></td><td class="footer_col"><div class="col_title">
                                    Resource</div>
                <div><a href="/en/news/list.php?cat=2" target="_top" title="Resource">Case Study</a></div>
                <div><a href="/en/marketing-material" target="_blank" title="Catalog &amp; Brochure">Catalog &amp; Brochure</a></div>
                <div><a href="https://download.ieiworld.com/" target="_top" title="Download Center">Download Center</a></div>
                <div><a href="https://www.youtube.com/user/ieimarketing" target="_blank" title="IEI YouTube">YouTube</a></div>
                <div><a href="/en/news/list.php" target="_top" title="Resource">Newsroom</a></div>
                <div><a href="/en/news/?&amp;cat=17" target="_top" title="Press Release">Press Release</a></div>
                <div><a href="/en/support/con_show.php?cid=19" target="_blank" title="Subscribe IEI Newsletter">Subscribe IEI Newsletter</a></div>
                <div><a href="/en/news/list.php?cat=6" target="_top" title="Resource">White Paper</a></div></td>
        </tr>
        </tbody>
        </table>
        <table class="footer_table right-col">
         <tbody>
          <tr>
          <td class="footer_col">
           <div class="col_title">Connect with us</div>
           
        <a href="https://www.facebook.com/IEIIntegration/" target="_blank" title="Facebook" class="follow_item">
        <span class="fa"><span class="fa-facebook-square"></span></span>
        <!-- <img src='https://www.ieiworld.com/images/mobile/footer/fb.png' border='0'> -->
        </a>
        <a href="https://twitter.com/ieiworld" target="_blank" title="Twitter" class="follow_item">
        <span class="fa"><span class="fa-twitter-square"></span></span>
        <!-- <img src='https://www.ieiworld.com/images/mobile/footer/twitter.png' border='0'> -->
        </a>
        <a href="https://www.youtube.com/user/ieimarketing/" target="_blank" title="YouTube" class="follow_item">
        <span class="fa"><span class="fa-youtube-square"></span></span>
        <!-- <img src='https://www.ieiworld.com/images/mobile/footer/youtube.png' border='0'> -->
        </a>
        <a href="https://www.linkedin.com/company/iei-technology-corp/" target="_blank" title="LinkedIn" class="follow_item">
        <span class="fa"><span class="fa-linkedin-square"></span></span>
        </a>
        <a class="news-subscribe-btn" href="/en/support/con_show.php?cid=19" target="_blank">
            <span class="subscribe-wrapper">
                <i class="fa fa-bell suscribe-icon" aria-hidden="true"></i>        
                <span>Subscribe eNewsletter</span>
            </span>
            <i class="fa fa-arrow-right arrow-right" aria-hidden="true"></i> 
        </a>
          </td>
          </tr>
         </tbody>
        </table>
        </div>
        <div style="clear:both;height:5px;"></div>
        <script type="text/javascript">
        <!--
        
        var footer_lang_timer; 
        
         function footer_lang_close_Do(){
          if(document.getElementById('lang_choose_place')){
          document.getElementById('lang_choose_place').style.display='none';
          }
         }
             
         function footer_lang_close_start(){
          clearTimeout(footer_lang_timer);
          footer_lang_timer= setTimeout('footer_lang_close_Do()', 600);
         }
         
        //-->
        </script>
        <style type="text/css">
        .footer_lang_wrap #lang_choose_place{
        top:-303px;
        }
        </style><div align="center"><div class="footer_lang_wrap"><div class="choose_body" onmouseover="clearTimeout(footer_lang_timer);" onmouseout="footer_lang_close_start();"> <div style="background-color:transparent;">
               <a href="javascript://" onclick="document.getElementById('lang_choose_place').style.display='block';">
               <div id="lang_choose_record">
               English - Global</div></a></div><div id="lang_choose_place"><a href="javascript://" class="choose_btn">
              <div class="l_mark">English - Global</div></a><a onclick="location.href ='/tw/index.php';" href="javascript://" class="choose_btn">
              <div class="">繁體中文</div></a><a onclick="location.href ='/es/index.php';" href="javascript://" class="choose_btn">
              <div class="">Español</div></a><a onclick="location.href ='/fr/index.php';" href="javascript://" class="choose_btn">
              <div class="">Français</div></a><a onclick="location.href ='/de/index.php';" href="javascript://" class="choose_btn">
              <div class="">Deutsch</div></a><a onclick="location.href ='/kr/index.php';" href="javascript://" class="choose_btn">
              <div class="">한국어</div></a><a onclick="location.href ='/cn/index.php';" href="javascript://" class="choose_btn">
              <div class="">简体中文</div></a><a onclick="location.href ='/jp/index.php';" href="javascript://" class="choose_btn">
              <div class="">日本語</div></a><a onclick="location.href ='/ru/index.php';" href="javascript://" class="choose_btn">
              <div class="">Русский язык</div></a><a onclick="location.href ='/it/index.php';" href="javascript://" class="choose_btn">
              <div class="">Italiano</div></a>
        <a id="f_lang_close_sign" href="javascript://" onclick="footer_lang_close_Do();">
        <img src="https://www.ieiworld.com/images/close_v1_png" alt="" border="0"></a></div></div><div style="float:right;border:0pt solid #0000ff;padding:0px 10px 0px 0px;">
              <img src="https://www.ieiworld.com/images/earth.png" alt=""></div></div>
    </div><div style="clear:both;height:25px;"></div></div>
        `
    }
}