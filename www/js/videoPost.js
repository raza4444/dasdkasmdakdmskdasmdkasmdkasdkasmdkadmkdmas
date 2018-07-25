function showVideoPost(postSize) {
			var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://appqubz-001-site2.etempurl.com/api/v1/GetVideo/PakegName?pakgeName=com.kitrina.xyz",
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "ba9c2174-fa8f-49e1-8397-93caabfbefe4"
  }
}
var html = '';
var base_url = "http://appqubz-001-site1.etempurl.com";
$.ajax(settings).done(function (response) {
$.each( response, function( key, myresponse ) {

  	var image_url = myresponse.Url.split('~');
  	var image = base_url+image_url[1];
	html += '<a class="col-sm-12" data-toggle="modal" id="'+myresponse.Id+'" onclick="openModel(this)" >';
					html += '<div  style="margin-bottom:10px;" class="col eachsize '+postSize+'" >';
						html +=	'<div class="entry ">';
							html +=	'<img src="'+image+'" alt="" >';
							html += '<div class="desc">';
								html +=	'<p style="text-align:center;">'+myresponse.Title+'</p>';								
							html += '</div>';
						html += '</div>';
					html += '</div>';
				html += '</a>';
					
			});
			$('#main_content').html(html);
});  
}

function openModel(object) {
var id = $(object).attr('id');
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://appqubz-001-site2.etempurl.com/api/v1/GetPostDiscraption/postId?postId="+id,
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "9300a46c-448f-49be-b9d8-c86ef37645f5"
  }
}

$.ajax(settings).done(function (response) {
 $('#img_link').css('display','none');
 $('#video_list').css('display','block');
 $('#myModal .modal-content').css('background-color' , '#fff');
 $('.post_title').html(response.Title);
//youtube
var stringKeyword = response.Keyword;
var keyword = stringKeyword.split(' ').join('+');
var type = 'video';

if(response.Limit == 0 || response.Limit == null)
{
	var limit = 5;
}
else
{
	var limit = response.Limit;
}

if(response.IsYoutube == false){

getDailymotionBySearch(keyword , limit);
}
else
{
getyoutubeVideoBySearch(keyword, type , limit);

}
$('#myModal').css('display', 'block');
});
}
$("#closeModel").click(function(){
	$('#myModal').css('display', 'none');
});
$("#closeVideoModel").click(function(){
	$('#videoModal').css('display', 'none');
	$('#myModal').css('display', 'block');
});