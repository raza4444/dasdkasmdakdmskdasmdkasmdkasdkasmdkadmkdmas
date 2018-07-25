
	function showWallaperPost(rowSize) {
var wallpaper_html = '';
	for (var i = 0; i <= 4; i++) {
var wallpaper_url = 'http://appqubz-001-site1.etempurl.com/Content/AppImages/PostImages/636676003311611531_1.jpg';
wallpaper_html += '<a  data-toggle="modal" link="'+wallpaper_url+'" onclick="openModelWallpaper(this)" >';
					wallpaper_html += '<div  style="margin-bottom:10px;" class="col eachsize '+rowSize+'" >';
						wallpaper_html +=	'<div class="entry ">';
							wallpaper_html +=	'<img src="'+wallpaper_url+'" alt="" >';
						wallpaper_html += '</div>';
					wallpaper_html += '</div>';
				wallpaper_html += '</a>';
	
	}
	$('#main_content_wallpaper').html(wallpaper_html);

}

function openModelWallpaper(object)
{
	var image_url = $(object).attr('link');
	$('#wallpaper_url').attr('src',image_url );
	$('#img_link').css('display','block');
	$('#video_list').css('display','none');
	$('#img_link').css('padding-top','148px');
	$('#myModal').css('display', 'block');
	$('#myModal .modal-content').css('background-color' , '#000');
	    

}
//wallpaper post end

