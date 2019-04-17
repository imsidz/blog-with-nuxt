<template>
  <div>
    <div id="qtMasterContainter" class="qt-parentcontainer qt-header-transparent qt-notscrolled" data-0="@class:qt-parentcontainer qt-header-transparent qt-notscrolled" data-5="@class:qt-parentcontainer qt-header-transparent qt-scrolled">
    <navbar />
    <div id="maincontent" class="qt-main qt-paper">
    <nuxt />
    </div>

    <footbar />
     </div>
  </div>
</template>

<script>

  import Navbar from './default/Navbar'
  import Footbar from './default/Footbar'
  
  export default {
    components: {
      Navbar, Footbar
    },

    head () {
      return {
        // script: [
        //   { src: '/js/modernizr-2.8.3-respond-1.4.2.min.js', body: false, defer: true },
        //   { src: '/js/jquery.js', body: false, defer: true },
        //   { src: '/js/jquery-migrate.min.js', body: false, defer: true },
        //   { src: '/js/materialize-src/js/bin/materialize.min.js', body: false, defer: true },
        //   { src: '/components/slick/slick.min.js', body: false, defer: true },
        //   { src: '/components/skrollr/skrollr.min.js', body: false, defer: true },
        //   { src: '/components/swipebox/lib/ios-orientationchange-fix.js', body: false, defer: true },
        //   { src: '/components/swipebox/src/js/jquery.swipebox.min.js', body: false, defer: true },
        //   { src: '/components/masonry/masonry.min.js', body: false, defer: true },
        //   { src: '/js/qt-main.js', body: false, defer: true }
        // ],
        link: [
          { rel: 'stylesheet', href: '/components/slick/slick.css' },
          { rel: 'stylesheet', href: '/fonts/dripicons/webfont.css' },
          { rel: 'stylesheet', href: '/fonts/qticons/qticons.css' },
          { rel: 'stylesheet', href: '/css/qt-main.css' },
          { rel: 'stylesheet', href: '/css/qt-typography.css' }
        ]
      }
    },
    
    data(){
      return{
        
      }
    }
  }

</script>


<style>

</style>
