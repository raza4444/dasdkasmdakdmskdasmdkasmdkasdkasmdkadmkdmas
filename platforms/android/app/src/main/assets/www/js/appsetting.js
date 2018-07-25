function appSetting(pkgname) {
var base_url = "http://appqubz-001-site1.etempurl.com";
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://appqubz-001-site2.etempurl.com/api/vi/GetApplicationSetting/PakegName?pakgeName="+pkgname,
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "03ce7257-9417-4006-963b-030143c6cdfe"
  }
}
var rowDisplay = 's6';
var response = [];
$.ajax(settings).done(function (response) {
	
  var logo = response.Log.split('~');
  var logo = base_url+logo[1];
  var row =  response.RowDisplay;
  if(row == 1 )
  {
  	rowDisplay = 's12'; 
  }
  if(row == 2) {
  rowDisplay = 's6'; 	
  }
  if (row == 3) {
rowDisplay = 's4'; 
  }
  if(row != 1 || row != 2 || row != 3)
  {
  	rowDisplay = 's6'; 
  }

  $("#logo_src").attr("src",logo);
  $(".model_logo_img").attr("src",logo);
   var splah = response.SplashScreen.split('~')
  var splashscreen = base_url+splah[1];
  $(".complete").hide();
$(".loader").delay(7000).hide(function(){
$(this).fadeOut("slow");
$(".complete").show();
$(this).hide();
});
    $('.loader').css('background-image', 'url(' + splashscreen + ')');
	$( ".getname" ).html( response.Title );
	$( "#descriptionId" ).html( response.Discraption );
	$(".backgroundClor").css('background-color', response.Color);
	$('.slider-slick .overlay').css('background','linear-gradient(to left,'+response.Color+', #c4c4c4)');
	$('.slider-slick .overlay').css('background','-webkit-linear-gradient(to left,'+response.Color+', #c4c4c4)');

	$('.text_category').css('background-color', response.Color);
	$('.inner_text_category').css('color', response.Color);
	$('.w3-bar').css('background-color', response.Color);
 
});
return response =  [rowDisplay , 'asdas' ]; 
}


