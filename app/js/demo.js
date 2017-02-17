$("#navigationMain .navbar-nav.navbar-right a").on('click',function(e) {
  $("#navigationMain .navbar-nav.navbar-right li").removeClass('active');
  	$(this).parent().addClass('active');
    var url = e.target.href;
    var hash = url.substring(url.indexOf("#")+1);
    $('html, body').animate({
        scrollTop: ($('#'+hash).offset().top + 20)
    }, 500);
    return false;
});
$('.testemonialssIcon').on('mouseover', function() {
	$('#mouseSchow').animate({'opacity': 1});
});
$('.testemonialssIcon').on('mouseout', function() {
	$('#mouseSchow').animate({'opacity': 0});
});
var hashArray = ['header','portfolio', 'about', 'footer'];
$(document).on('scroll', function() {
	for(var licz = 0; licz < (hashArray.length - 1); licz++) {
		if(document.body.scrollTop > $('#' + hashArray[(hashArray.length - 1)]).offset().top) {
			$('#navigationMain .navbar-nav.navbar-right li').removeClass('active')
			$('#navigationMain .navbar-nav.navbar-right li').eq(licz + 1).addClass('active');
		} else if(document.body.scrollTop >= $('#' + hashArray[licz]).offset().top && document.body.scrollTop < $('#' + hashArray[licz + 1]).offset().top ) {
			$('#navigationMain .navbar-nav.navbar-right li').removeClass('active');
			$('#navigationMain .navbar-nav.navbar-right li').eq(licz ).addClass('active');
		}
	}
});