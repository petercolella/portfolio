$(document).ready(function() {
  $('.slider').slider({
    interval: 2000
  });
  $('.button-collapse').sideNav();
});
$('.modal').modal();
$('.parallax').parallax();
$('.scrollspy').scrollSpy({
  scrollOffset: 0
});
var options = [
  {
    selector: '#staggered-list1',
    offset: 100,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  },
  {
    selector: '#staggered-list2',
    offset: 100,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  },
  {
    selector: '#staggered-list3',
    offset: 100,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  },
  {
    selector: '#about',
    offset: 200,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  },
  {
    selector: '#awards',
    offset: 200,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  }
];
Materialize.scrollFire(options);
