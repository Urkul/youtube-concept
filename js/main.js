const myChannelSlider = new Swiper('.channel-slider', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints:{
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '#my-channel-button-next',
    prevEl: '#my-channel-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const recommendedSlider = new Swiper('.channel-slider-big', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints:{
    1600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 2
    }
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextE1: '#channel-button-next-big',
    prevE1: '#channel-button-prev-big',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const recommendedChannelSlider = new Swiper('.recommended-channel-slider', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints:{
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextE1: '#recommended-channel-button-next-big',
    prevE1: '#recommended-channel-button-prev-big',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640){
  myChannelSlider.destroy();
  recommendedSlider.destroy();
  recommendedChannelSlider.destroy();
}