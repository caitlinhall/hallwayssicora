//timeline functions
$(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});

$(".toggle-btn:not('.noscript') input[type=radio]").addClass("visuallyhidden");
$(".toggle-btn:not('.noscript') input[type=radio]").change(function() {
    if( $(this).attr("name") ) {
        $(this).parent().addClass("success").siblings().removeClass("success")
    } else {
        $(this).parent().toggleClass("success");
    }
});

var i = 2;
$(".anotherRSVP").click(function() {
	$(".anotherRSVP").last().before("<div class='guest'>Guest "+ i +"</div><div class='form-group wedding-form'>" +
		"<input type='firstName' class='form-control' id='exampleInputFirstName1' placeholder='First Name'></div>" +
		"<div class='form-group wedding-form'><input type='lastName' class='form-control' id='exampleInputLastName1' placeholder='Last Name'></div>" +
		"<div class='toggle-btn-grp joint-toggle'><label onclick='' class='toggle-btn'><input type='radio' name='group3'/>Accept</label>" +
		"<label onclick='' class='toggle-btn'><input type='radio' name='group3'/>Regret</label></div>");
	i = i + 1;
});





