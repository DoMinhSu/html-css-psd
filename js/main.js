(function () {



  if (window.matchMedia("(max-width: 576px)")) {
    const smallMenu = document.querySelector('.nav__menu__main__small')
    const contentMenu = document.querySelector('.nav__menu__main__menu')
    smallMenu.addEventListener('click', (e) => {
      // if(!contentMenu.classList.contains('active'))
      // contentMenu.classList.add('active')
      // else contentMenu.classList.remove('active')
      contentMenu.classList.toggle('active')
    })
  }

  $('.services_list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });


  $('.testimonials_list').slick({
    infinite: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  });


  flatpickr(
    document.querySelector('.date'), {
    dateFormat: "Y-m-d",
    altInput: true
  });
  flatpickr(
    document.querySelector('.time'), {
    dateFormat: "Y-m-d",
    altInput: true,
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
  });
})()