$(function (){

return {
jQueryDialog: function() {
			$('#mainBody').append('<div id="jModal"><iframe class="jdiFrame" src="javascript:false;" frameborder="0"></iframe></div>');
			
			$('#jModal').dialog({
				autoOpen: false,
				draggable: false,
				resizable: false,
				stack: false,
				modal: true,
				zIndex: 100000,
				beforeclose: function(event, ui){ //fix IE flash unable to unload problem
					$('.jdiFrame').attr('src', '');
				}
			});
			$('a.jModal').click(function(){
				var url, width, height, scrolling;
				
				if ($(this).attr("rel")!= ""){
					// Checks legacy jmodal implmentation.  Takes "rel" attribute for URL along with other attributes in anchor tag.
					url = $(this).attr("rel");
					width = $(this).attr("width");
					height = $(this).attr("height");
					scrolling = $(this).attr("scrolling");
				}
				else{
					url = $(this).attr("href");
					var query = url.split("?");
					var vars = query[1].split("&");
					
					for (var i = 0; i < vars.length; i++) {
						var pair = vars[i].split("=");
						switch (pair[0]){
							case "width":width=pair[1];break;
							case "height":height=pair[1];break;
							case "scrolling":scrolling=pair[1];break;
							default:break;
						}
					}
				}
				
				sbweb.ui.jModalOpen(url, width, height,scrolling);
				return(false);
			});
		},
		
		jModalOpen: function(url,width,height,scrolling) {
			$('.jdiFrame').attr('width',width).attr('height',height).attr('src',url).attr('scrolling',scrolling);
	  		width = parseInt(width) + 20;
	  		height = parseInt(height) + 50;
	  		$('#jModal').dialog('option', 'width', width).dialog('option', 'height', height).dialog('open');
		},
		
		jModalClose: function() {
			$('#jModal').dialog('close');
				
	 }	
}
	 
			});
