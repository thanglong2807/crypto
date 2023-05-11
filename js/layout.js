$(".header").html(`
        <div class="container">
                <div class="header-content">
                <h1>
                <a href="./index.html">
                    <img loading="lazy" class="header-logo" src="./images/icon/logo.svg" alt="logo">
                </a>
                </h1>
                <img loading="lazy" id="check-navbar" class="header_nav" src="images/icon/nav-menu.svg" alt="">
                <div id='active' ">
                    <div class="header-list" >
                    <ul class="header-nav">
                        <li class="header-nav-link">
                            <a href="Marketplace.html" class="header_link font-small">Marketplace</a>
                        </li>
                        <li class="header-nav-link">
                            <a href="Rankings.html" class="header_link font-small">Rankings</a>
                        </li>
                        <li class="header-nav-link">
                            <a href="./ConnectWallet.html" class="header_link font-small">Connect a wallet</a>
                        </li>
                    </ul>
                    <a href="./CreateAccount.html" class="header-btn btn">
                        <img loading="lazy" class="header-btn-logo" src="./images/icon/User.svg" alt="Sign Up">
                        <span class="header-btn-text">Sign Up</span>
                    </a>
                    </div>
                </div>
                </div>
        </div>
`)

$('.footer').html(`
<div class="container">
<div class="footer-content">
    <div class="footer_top">
        <div class="footer_top-lists ">
            <h3 class="footer_top-title">
                <a href="">
                    <img loading="lazy" src="images/img/Logo.png" alt="">
                </a>
            </h3>
            <ul class="footer_top-list">
                <li>
                    <a href="">NFT marketplace UI created with Anima for Figma.</a>
                </li>
                <li>
                    <a href="">Join our community</a>
                </li>
                <li class="footer_top-icon">
                    <a href="">
                        <img loading="lazy" src="./images/icon/DiscordLogo.svg" alt="">
                    </a>
                    <a href="">
                        <img loading="lazy" src="./images/icon/YoutubeLogo.svg" alt="">
                    </a>
                    <a href="">
                        <img loading="lazy" src="./images/icon/TwitterLogo.svg" alt="">
                    </a>
                    <a href="">
                        <img loading="lazy" src="./images/icon/InstagramLogo.svg" alt="">
                    </a>

                </li>
            </ul>
        </div>
        <div class="footer_top-lists ">
            <h3 class="footer_top-title">
                <a href="">
                    Explore
                </a>
            </h3>
            <ul class="footer_top-list">
                <li>
                    <a href="Marketplace.html">Marketplace</a>
                </li>
                <li>
                    <a href="Rankings.html">Rankings</a>
                </li>
                <li>
                    <a href="">
                        Connect a wallet
                    </a>

                </li>
            </ul>
        </div>
        <div class="footer_top-list footer_form">
            <h3 class="footer_top-title">
                <a href="">
                    Join our weekly digest
                </a>
            </h3>
           <p>Get exclusive promotions & updates straight to your inbox.</p>
           <form class="digest_form--input footer_forms" action="">
            <input  class="digest_form-input" type="email" placeholder="Enter your email here">
            <button class="digest_form--input-btn btn" >
                <img loading="lazy" src="./images/icon/EnvelopeSimple.svg" alt="">
                Subscribe
            </button>
        </form>
        </div>
    </div>
    <hr class="footer_line">
    <div class="footer_botton">
        <p>
            Ⓒ NFT Market. Use this template freely.
        </p>
    </div>
</div>
</div>

`)



////////////////////////////////

////////////////////////////////////////////////////////////////////////
$(window).resize(function () {

    var width = $(window).width();

    if (width <= 400) {
        $('.discover-content').html(`
        <div class="discover-left">
        <h2 class="discover-title">
            Discover digital art & Collect NFTs
        </h2>
        <p class="discover-des">
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
        </p>
        </div>
        <div class="discover-right">
        <img loading="lazy" src="./images/img/Image Placeholder.png" alt="img">
        <div class="discover-walking">
            <h3 class="discover-walking-title">Space Walking</h3>
            <div class="discover-walking-info">
                <img loading="lazy" class="discover-walking-icon" src="images/img/Avatar.png" alt="">
                <h4 class="discover-walking-info-title">Animakid</h4>
            </div>
        </div>
        </div>
        <div class="discover-center">
        <button class="discover-btn btn">
            <img loading="lazy" src="images/icon/RocketLaunch.svg" alt="icon">
            <span>Get Started</span>
        </button>
        <ul class="discover-list">
            <li class="discover-list-item">
                <h3 class="discover-list-item-title">240k+ </h3>
                <span class="discover-list-item-des">Total Sale</span>
            </li>
            <li class="discover-list-item">
                <h3 class="discover-list-item-title">100k+</h3>
                <span class="discover-list-item-des">Auctions</span>
            </li>
            <li class="discover-list-item">
                <h3 class="discover-list-item-title">240k+</h3>
                <span class="discover-list-item-des">Artists</span>
            </li>
        </ul>
        </div>
`)
    }
    else {
        $('.discover-content').html(`<div class="discover-left">
       <h2 class="discover-title">
           Discover digital art & Collect NFTs
       </h2>
       <p class="discover-des">
           NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
       </p>
       <button class="discover-btn btn">
           <img loading="lazy" src="images/icon/RocketLaunch.svg" alt="icon">
           <span>Get Started</span>
       </button>
       <ul class="discover-list">
           <li class="discover-list-item">
               <h3 class="discover-list-item-title">240k+ </h3>
               <span class="discover-list-item-des">Total Sale</span>
           </li>
           <li class="discover-list-item">
               <h3 class="discover-list-item-title">100k+</h3>
               <span class="discover-list-item-des">Auctions</span>
           </li>
           <li class="discover-list-item">
               <h3 class="discover-list-item-title">240k+</h3>
               <span class="discover-list-item-des">Artists</span>
           </li>
       </ul>
   </div>
   <div class="discover-right">
       <img loading="lazy" src="./images/img/Image Placeholder.png" alt="img">
       <div class="discover-walking">
           <h3 class="discover-walking-title">Space Walking</h3>
           <div class="discover-walking-info">
               <img loading="lazy" class="discover-walking-icon" src="images/img/Avatar.png" alt="">
               <h4 class="discover-walking-info-title">Animakid</h4>
           </div>
       </div>
   </div>`)
    }
});