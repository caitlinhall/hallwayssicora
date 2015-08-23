// $(document).ready(function(){
// 	$.ajax({
// 		url: "/instagram",
// 	}).done(function(data) {
// 		var parsed = JSON.parse(data);
// 		var picContainer = $("#picContainer");
// 		if(picContainer){
// 			for(var i = 0; i < parsed.length; i++){
// 		        picContainer.append("<img id='grid' src='" + parsed[i] + "'alt='pic' />");
// 		    }
// 		}
// 	});
	
// 	$('a[href*=#]:not([href=#])').click(function() {
// 		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// 		  var target = $(this.hash);
// 		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// 		  if (target.length) {
// 		    $('html,body').animate({
// 		      scrollTop: target.offset().top
// 		    }, 1000);
// 		    return false;
// 		  }
// 		}
// 	});
// });