$( document ).ready( function( ) {


				var isIE = ( navigator.appName === "Microsoft Internet Explorer" );

				$( ".overlay" ).click( function( event ) {
					if ( event.preventDefault ) event.preventDefault( );
					event.returnValue = false;
					
					var url, width, height, scrolling;
					url = $(this).attr("href");
					//alert(url);
					var query = url.split("?");
					var vars = query[1].split("&");
					//alert(query);
					//alert(vars);
					for (var i = 0; i < vars.length; i++) {
						var pair = vars[i].split("=");
						switch (pair[0]){
							case "width":width=pair[1];break;
							case "height":height=pair[1];break;
							case "scrolling":scrolling=pair[1];break;
							default:break;
						}
					}	
					var myWidth = 0, myHeight = 0;
					  if( typeof( window.innerWidth ) == 'number' ) {
						//Non-IE
						myWidth = window.innerWidth;
						myHeight = window.innerHeight;
					  } 
					  else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
						//IE 6+ in 'standards compliant mode'
						myWidth = document.documentElement.clientWidth;
						myHeight = document.documentElement.clientHeight;						
					  }
						//console.log(myHeight);
						if(myHeight < 500){		
						
							$('div.lightbox').css('top', "5%");	
						}
						else{
							$('div.lightbox').css('top', "30%");	
						}
						
					$( "#lightboxContents" ).attr('src',url)								
					$( ".lightbox" ).width( width ).height( height );
					// Set source of iframe.

					if ( !isIE )
					{
						$( ".lightsDown, .lightboxField" ).fadeIn( 300 );
					}
					else
					{
						$( ".lightsDown, .lightboxField" ).show( );
						$( "#lightboxContents" ).height( width - 50 );
					}
				} );

				$( "#close" ).click( function( event ) {
					if ( event.preventDefault ) event.preventDefault( );
					event.returnValue = false;

					if ( !isIE )
					{
						$( ".lightsDown, .lightboxField" ).fadeOut( 1000 );
					}
					else
					{
						$( ".lightsDown, .lightboxField" ).hide( );						
					}
					$( "#lightboxContents" ).attr('src', ''); // to fix IE flash unload issue
				} );

				$( document ).keyup( function( event ) {
					if ( event.keyCode === 27 ) // User pressed Escape.  Close window.
					{
						$( '#close' ).click( );
					}
				} );
				

			} );