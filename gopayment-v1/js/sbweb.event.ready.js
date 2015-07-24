$(function() {
	
	$(document).ready(function() {
			
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
				
				jModalOpen(url, width, height,scrolling);
				
				return(false);
			});
			
			 function jModalOpen(url,width,height,scrolling) {	 
			$('.jdiFrame').attr('width',width).attr('height',height).attr('src',url).attr('scrolling',scrolling);
	  		width = parseInt(width) + 20;
	  		height = parseInt(height) + 50;
	  		$('#jModal').dialog('option', 'width', width).dialog('option', 'height', height).dialog('open');
		}
		
		function jModalClose() {
			$('#jModal').dialog('close');
				
	 }	
		
	});

	return {};
	
});