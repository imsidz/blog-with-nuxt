<template>
	<div>
		<nav class="qt-menubar nav-wrapper qt-content-primary">

            <ul class="qt-menu-secondary qt-content-primary-light hide-on-xl-and-down">
                <li>We add some cool test here <a href="#" class="qt-btn qt-btn-s qt-btn-ghost">Subscribe Now</a></li>
                <li class="right"><a href="#">Login</a></li>
                <li class="right"><a href="#">Favorites</a></li>
                <li class="right"><a href="#">Newsletter</a></li>
            </ul>

            <ul class="qt-desktopmenu hide-on-xl-and-down">
                <li class="qt-logo-link">
                    <a href="index.html" class="brand-logo qt-logo-text"><img src="imagestemplate/logo.png" alt="home"></a>
                </li>
                <li class="qt-menuitem">
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="qt-menuitem">
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li class="menu-item-has-children qt-menuitem"><a href="#!">Video</a>
                    <ul>
                        <li><a href="archive-video.html">Video archive</a></li>
                        <li><a href="single-video.html">Video single</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children qt-menuitem"><a href="#!">Blog</a>
                    <ul>
                        <li><a href="archive.html">Blog archive</a></li>
                        <li><a href="single.html">Single post</a></li>
                    </ul>
                </li>
                <li class="qt-menubutton right">
                    <a href="#watch-later-page" class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Watch Later">
                        <i class="dripicons-clock"></i>
                    </a>
                </li>
                <li id="qtnavsearch" class="right qt-navsearch qt-menubutton">
                    <form id="qtnavform" method="get">
                        <button id="qtnavsearchbutton" class="qt-navsearch-btn">
                            <i class="icon dripicons-search"></i>
                        </button>
                        <button id="qtnavsearchclose" class="qt-navsearch-btnclose">
                            <i class="icon dripicons-cross"></i>
                        </button>
                        <input id="qtsearch" name="s" type="search" placeholder="search">
                    </form>
                </li>
            </ul>

            <ul class="qt-desktopmenu hide-on-xl-only ">
                <li><a href="#" data-activates="qt-mobile-menu" class="button-collapse qt-menu-switch qt-btn qt-btn-primary qt-btn-m"><i class="dripicons-menu"></i></a></li>
                <li>
                    <a href="index.html" class="brand-logo qt-logo-text"><img src="imagestemplate/logo.png" alt="home"></a>
                </li>
            </ul>
        </nav>

        <div id="qt-mobile-menu" class="side-nav qt-content-primary">
            <ul class="qt-side-nav">
                <li class="qt-menuitem">
                    <a href="index-2.html">Home</a>
                </li>
                <li class="qt-menuitem">
                    <a href="page-slideshow.html">Slideshow 2</a>
                </li>
                <li class="menu-item-has-children qt-menuitem"><a href="#!">Video</a>
                    <ul>
                        <li><a href="archive-video.html">Video archive</a></li>
                        <li><a href="single-video.html">Video single</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children qt-menuitem"><a href="#!">Blog</a>
                    <ul>
                        <li><a href="archive.html">Blog archive</a></li>
                        <li><a href="single.html">Single post</a></li>
                    </ul>
                </li>
            </ul>
        </div>
	</div>
</template>


<script>
	export default {

	}
</script>