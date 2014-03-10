(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48802423-1', 'fukkk.us');
ga('send', 'pageview');

/*
 * Vanilla JS lettering -> put a span around every character. 
 */
function spanInjection(el) {
  // Handle errors
  try {

    // Content of the element
    var string = el.innerHTML,
    // Result
        result = ''
    ;

    // Iterate over all characters of the given string
    for (var i = 0; i < string.length; i++) {
      // Surround each character with a span
      result += '<span>' + string.charAt(i) + '</span>';
    }

    // Set the new content for the element
    el.innerHTML = result;

    // Return the element itself for chaining
    return el;

  } catch (error) {}
};

var logo = spanInjection(document.querySelector('.logo'));
var button = spanInjection(document.querySelector('.button__alpha'));
