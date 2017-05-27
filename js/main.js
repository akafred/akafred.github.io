function filter(tag) {
  setActiveTag(tag);
  showContainer(tag);
}

function setActiveTag(tag) {
  // loop through all items and remove active class
  var items = document.getElementsByClassName('blog-tag-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }

  // set the selected tag's item to active
  var item = document.getElementById(tag + '-item');
  if(item) {
    item.setAttribute('class', 'blog-tag-item active');
  }
}

function showContainer(tag) {
  // loop through all lists and hide them
  var lists = document.getElementsByClassName('blog-list-container');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'blog-list-container hidden');
  }

  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container');
  if(list) {
    list.setAttribute('class', 'blog-list-container');
  }
}

if(window.location.hash) {
  var tag = window.location.hash.split('#')[1];
  filter(tag);
}


$(document).ready(function(){
 $('.menu-icon').click(function(){
  $('.menu-icon').data('clicked', true);
  $('.site-nav, .menu-container, .title-menu, .menu-icon span').toggleClass('show-menu');
 });

 $(window).on("scroll", function(e){

  if ($(window).scrollTop() >= $(".post-header").height()) $(".post-header").css('opacity', '0.3');
    else $(".post-header").css('opacity', '1');

    if ($(window).scrollTop() >= (".post-page-header").height() && ($('div.show-menu').length > 0)) {
      $('.post-page-header .site-nav').css({
        'background-color': 'white',
        'color': 'black'
      });
    }

    if ($(window).scrollTop() >= $(".post-page-header").height() ){
      $('.post-page-header .site-nav').css({
        'background-color': 'white',
        'color': 'black'
      });

      $('.post-page-header .menu-icon span').css('background-color', 'black');
    } else {
      $('.post-page-header .site-nav').css({
        'background-color': 'transparent',
        'color': 'white'
      });

      $('.post-page-header .menu-icon span').css('background-color', 'white');
    }

 });
});
