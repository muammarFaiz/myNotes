```js
// edit css
// $('h1').css('color', 'red');

// add classes
// $('h1').addClass('pubu pubuFriend');

// edit inner HTML
// $('.b1').text('edited using .text');
// $('.b2').html('<b>edited using .html</b>');

// add attributes in general
// $('a').attr('href', 'https://spacearmor.github.io/newtab_firefox/');

// adde event listener, click
// $('.b1').click(function() {
//   $('.b2').css('width', '10rem');
// });

// add event listener, keypress
// $('input').keypress(function(event) {
//   console.log(event.key);
// });
// $(document).keypress(function(event) {
//   $('.mainh1').text(event.key);
// });

// add event listener with on
// $('.b2').on('click', function(event) {
//   $('.b2').text('i am clicked');
// });

// add elements using .before, .after, .prepend, and .append
// $('.mainh1').before('<button type="button" name="button">before</button>');
// $('.mainh1').after('<button type="button" name="button">after</button>');
// $('.mainh1').prepend('<button type="button" name="button">prepend</button>');
// $('.mainh1').append('<button type="button" name="button">append</button>');

// .hide and .show elements
// $('h1').hide();
// $('h1').show();

// .fadeout , .fadein , .fadetogle
// is like hide and show but with fade/slowly/using opacity first.
// the number is miliseconds the elements took to fadeout/in
// $('h1').fadeOut(1000);
// $('.b1').click(function(event) {
//   $('h1').fadeIn(1000);
// });
// $('.b2').click(function(event) {
//   $('h1').fadeToggle(1000);
// });

// .slideup , .slideDown
// just like hide and show but slide animate it as if the bottom of the document slides.
// $('h1').slideUp(1000);
// $('.b1').click(function(event) {
//   $('h1').slideDown(1000);
// });
// $('.b2').click(function(event) {
//   $('h1').slideToggle(1000);
// });

// .animate use is very similar to transform: in css, but the value must be number like 15rem or 2 or 5%
// $('h1').animate({'font-size': '3rem'}, 1000);

// chaining animations
// $('h1').slideUp(1000).slideDown(1000).slideUp(1000).slideDown(1000);
```
