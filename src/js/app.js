import '../styles/main.scss';


new Vue({
  el: '.home',
  data:  {
    activeItem: '',
    location: window.location.href,
    visibleQuestions: true,
    isloadMoreVisible: true,
    questions: [
      'Lorem ipsum dolor sit amet, consectetuer ibh euismod?',
      'Lorem ipsum dolor sit amet, consectetuer ibh euismod?',
      'Lorem ipsum dolor sit amet, consectetuer ibh euismod?',
      'Lorem ipsum dolor sit amet, consectetuer ibh euismod?',
      'Lorem ipsum dolor sit amet, consectetuer ibh euismod?',
    ]
  },
  computed: {
  },
  methods: {
    loadMore() {
      if ( this.questions.length < 20 ) {
        for( var i = 0; i < 5; i++ ) {
          this.questions.push(this.questions[i]);
        }
      } else {
        this.isloadMoreVisible = false;
      }
    },
    isActive(item) {
      return this.activeItem === item;
    },
    setActive(item) {
      this.activeItem = item;
      this.visibleQuestions = true;
      this.questions.length = 5;
    },
    isItemActive(item) {
      return this.activeItem === item;
    },
    setActiveItem(item, parent) {
      this.activeItem = item;
      if (parent) {

      }
    }
  }
})

$(document).ready(function() {
  if($('.slider')) {
    $('.slider').slick({
      // centerMode: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: '<i class="fa fa-chevron-right slick-arrows next "></i>',
      prevArrow: '<i class="fa fa-chevron-left slick-arrows prev"></i>'
    });
  }

})
