
  function sliderSettingWithData() {
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://appqubz-001-site2.etempurl.com/api/vi/GetAppSlider/PakegName?pakgeName=com.kitrina.xyz",
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "7e06f881-5916-48c3-afd5-579215d9afd5"
  }
}
var base_url = "http://appqubz-001-site1.etempurl.com";
$.ajax(settings).done(function (response) {
 var $sliderHtml = '';
 var activeClass = '';
  $.each( response, function( key, myresponse ) {
    var title = myresponse.Title;
    var description = myresponse.Discraption;

    var url = myresponse.Url.split('~');
    var image_url = base_url+url[1];
    if(key == 0){
      activeClass = 'active';
    }else{
      activeClass = '';
    }
      $sliderHtml += '<div class="item '+activeClass+'">';
        $sliderHtml += '<a href="#"><img src="img/slider3.jpg" alt="Los Angeles" style="width:100%; height: 250px"></a>';
       $sliderHtml += '<div class="caption">';
      $sliderHtml += '<div class="container">';
            $sliderHtml += '<a href="#"><h2>Naat collections</h2></a><br><br><br>';
              
                  $sliderHtml += '</div>';
              $sliderHtml += '</div>';
      $sliderHtml += '</div>';
                              
  });
  //console.log($sliderHtml);
$('#myCarousel .carousel-inner').html($sliderHtml);
 });
}