function getyoutubeVideoBySearch(keyword, type , limitVideo) {
url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+keyword+'&type='+type+'&maxResults='+limitVideo+'&key=AIzaSyCBpW5wgGXTdt4nLvWo_Tb7wIa1crCHirk';
$.ajax({
        type: "GET",
        url: url,
        success: function(response) {
        	//console.log(response.items);
        	var items = response.items;
        	var html= '';
        	$.each(items,function(index,item){
                           var vedio_id = item.id.videoId;
                           var $title = item.snippet.title
                           if ($title.length < 50) {
                           var title = $title;
                           }
                           else {
                           	var title = $title.slice(0 , 50)+'...';
                           }
                           var image_url = item.snippet.thumbnails.default.url
                         
        html += '<div style="margin-bottom:10px;" class="col s12">';
	html += '<div class="entry video_list_div">';

		html += '<img src="'+image_url+'" alt="" style="padding: 4px;border: 1px solid #c4c4c4;width: 100%;max-height: 235px;">';
		html += '<div class="desc">';

			html += '<a vedioId="'+vedio_id+'" platform="youtube" style="color:#000 !important" onclick="videoModel(this)" ><h4 style="font-size: 26px;margin-left: 2px;font-family: timenewroman;font-weight: bold;padding-top: 8px;">'+title+'</h4></a>';
		html += '</div>';
	html += '</div>';
html
});
       	$('#img_link').css('display','none');
		$('#video_list').html(html);
        },
        error: function(response) {
            console.log(response);
        }
});
}

function getDailymotionBySearch(keyword , limitVideo) {
	$.ajax({
 	type: "GET",
	url: 'https://api.dailymotion.com/videos?search='+keyword+'&limit='+limitVideo+'',
	success: function(response) {
		
		var items = response.list;
		var html = '';
		$.each(items,function(index,item){
			
			var vedio_id = item.id;
			var $title = item.title;
			 if ($title.length < 50) {
                           var title = $title;
                           }
                           else {
                           	var title = $title.slice(0 , 50)+'...';
                           }
			var image_url = 'https://www.dailymotion.com/thumbnail/video/'+vedio_id+'';
			var channel = item.channel;
			
	html += '<div style="margin-bottom:10px;" class="col s12">';
	html += '<div class="entry video_list_div">';

		html += '<img src="'+image_url+'" alt="" style="padding: 4px;border: 1px solid #c4c4c4;width: 100%;max-height: 235px;">';
		html += '<div class="desc">';

			html += '<a vedioId="'+vedio_id+'" platform="dailymotion" style="color:#000 !important" onclick="videoModel(this)" ><h4 style="font-size: 26px;margin-left: 2px;font-family: timenewroman;font-weight: bold;padding-top: 8px;">'+title+'</h4></a>';
		html += '</div>';
	html += '</div>';
html += '</div>';
});
		$('#img_link').css('display','none');
		$('#video_list').html(html);
},
	 error: function(response) {

            console.log(response);
        }
});

//end dailymotion

}

function videoModel(object) {
			var videoid = $(object).attr('vedioId');
			var platform = $(object).attr('platform');
			
			//alert(videoid);
			$('#myModal').css('display', 'none');
			$('#videoModal').css('display', 'block');
			if (platform == 'dailymotion') {
			videourl = 'https://www.dailymotion.com/embed/video/'+videoid+'';
			$('#videoplayer').attr('src' , videourl);
	
			}
			if(platform == 'youtube')
			{
videourl = 'https://www.youtube.com/embed/'+videoid+'';
			$('#videoplayer').attr('src' , videourl);
			}
			
		}
