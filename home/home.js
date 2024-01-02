document.addEventListener('scroll',() => {
    const header =document.querySelector('header');
    if(window.scrollY>0){
        header.classList.add('scrolled');
    }else {
        header.classList.remove('scrolled')
    }
})

if (location.pathname.match(/fullcpgrid/i) ? true : false) {
    document.documentElement.style.fontSize = "32px"
      document.querySelector(".secondnav").style.display = "flex";
      setTimeout(function() {
          document.querySelector(".mainnav").classList.add("demoanim");
    }, 500);
  }
