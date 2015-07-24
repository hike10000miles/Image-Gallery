'use strict';



(function($) {
  $(document).ready(function() {
    // Add your jQuery code here
    var $overlay = $('<div id="overlay"></div>');
    var $image = $('<img>');
    var $caption = $('<p></p>');
    $overlay.append($image);
    $overlay.append($caption);
    // Add overlay
    $('body').append($overlay);
    // Click event on a link, see the image over the overlay and read caption
	$('#imageGallery a').click(function(event){
		event.preventDefault();
		var $imageLocation = $(this).attr('href');
		$image.attr('src', $imageLocation);
		$overlay.show();
		var $captionText = $(this).children('img').attr('alt');
		$caption.text($captionText);
	});
	$overlay.click(function() {
		$(this).hide();
	});
  });
})(jQuery);
