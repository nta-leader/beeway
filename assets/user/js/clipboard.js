(function($) {
  'use strict';
  var clipboard = new Clipboard('.btn-clipboard');
  clipboard.on('success', function(e) {
  	$("#s_copy").html('Copied!');
  });
  clipboard.on('error', function(e) {
    console.log(e);
  });
})(jQuery);