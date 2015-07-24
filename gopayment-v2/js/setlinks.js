// Dynamically set links if priority code query string is present

(function(){

	// cookie functions
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	

	// change link hrefs based on query string
	function getpcode(){
	
	    var qs = window.location.search.substring(1),	// query string
	    params = qs.split("&"),							// split into array
	    key,
	    pcode = null;									// pcode is null by default
	
		// extract the p_code parameter (p) if it exists
	    for (i=0; i<params.length; i++) {
	        key = params[i].substring(0, 1);
	        if (key == 'p') {
	            pcode = params[i].substring(2);
	        }
	    }
	    return pcode;
	}
	
	function set_pcode_cookie(){
		var qs_pcode = getpcode(),
		pcode_cookie = readCookie('lb_pcode');
		
		// set the cookie if it doesn't exist or if the query string pcode has a different value than the cookie
		if (pcode_cookie && qs_pcode) {
			if (qs_pcode !== pcode_cookie) {
				createCookie('lb_pcode', qs_pcode, 30);
			}
		}
		else if (qs_pcode) {
			createCookie('lb_pcode', qs_pcode, 30);	
		}
		
	}
	
	function setLinks(){
		var pcode,
		base_signup_url = 'https://merchant.intuit.com/signup/?b=GoPayment',
		base_login_url = 'http://gopayment.intuit.com/GoPayment/site/login?b=GoPayment',
		url,
		signup_els = ['ball_header_nav_link6', 'link_innercol2_button_1', 'link_innerButton_1', 'link_innerButton_2'],
		login_els = ['link_innerheader_Button'];	// array of element ids to modify
	
		set_pcode_cookie();
		pcode = readCookie('lb_pcode');
	
		// if there's a pcode, modify hrefs. otherwise, href = stays the same
		if (pcode !== null && pcode != 'null') {
			// sign up links
			for (i=0; i<signup_els.length; i++) {
				if (document.getElementById(signup_els[i])) {
					url = base_signup_url + '&p=' + pcode;
					document.getElementById(signup_els[i]).href = url;
				}
			}
			
			// login links
			for (j=0; j<login_els.length; j++) {
				if (document.getElementById(login_els[j])) {
					url = base_login_url + '&p=' + pcode;
					document.getElementById(login_els[j]).href = url;
				}
			}

			
		}
	}
	
	setLinks();
})();
