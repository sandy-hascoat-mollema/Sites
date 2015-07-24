/*
 * MyFonts Webfont Build ID 715248, 2011-03-03T18:08:32-0500
 * 
 * The fonts listed in this notice are subject to the End User License
 * Agreement(s) entered into by the website owner. All other parties are 
 * explicitly restricted from using the Licensed Webfonts(s).
 * 
 * You may obtain a valid license at the URLs below.
 * 
 * Webfont: Museo Slab 700
 * URL: http://new.myfonts.com/fonts/exljbris/museo-slab/700/
 * Foundry: exljbris
 * Copyright: Copyright (c) 2009 by Jos Buivenga. All rights reserved.
 * License: http://www.myfonts.com/viewlicense?1056
 * Licensed pageviews: 1,000,000/month
 * CSS font-family: MuseoSlab-700
 * CSS font-weight: normal
 * 
 * Webfont: Lucida Sans Demi
 * URL: http://new.myfonts.com/fonts/urw/lucida-sans/demi/
 * Foundry: URW++
 * Copyright: Copyright 2010 URW++ Design &amp; Development Hamburg
 * License: http://www.myfonts.com/viewlicense?1056
 * Licensed pageviews: 1,000,000/month
 * CSS font-family: LucidaSan-Dem
 * CSS font-weight: normal
 * 
 * Webfont: Lucida Sans
 * URL: http://new.myfonts.com/fonts/urw/lucida-sans/lucida-sans/
 * Foundry: URW++
 * Copyright: Copyright 2010 URW++ Design &amp; Development Hamburg
 * License: http://www.myfonts.com/viewlicense?1056
 * Licensed pageviews: 1,000,000/month
 * CSS font-family: LucidaSan-Rom
 * CSS font-weight: normal
 * 
 * (c) 2011 Bitstream, Inc
*/



// safari 3.1: data-css
// firefox 3.6+: woff
// firefox 3.5+: data-css
// chrome 4+: data-css
// chrome 6+: woff
// IE 5+: eot
// IE 9: woff
// opera 10.1+: data-css
// mobile safari: svg/data-css
// android: data-css

var browserName, browserVersion, webfontType,  webfontTypeOverride;
 
if (typeof(customPath) == 'undefined')
	var customPath = false;


if (typeof(woffEnabled) == 'undefined')
	var woffEnabled = true;


if (/myfonts_test=on/.test(window.location.search))
	var myfonts_webfont_test = true;

else if (typeof(myfonts_webfont_test) == 'undefined')
	var myfonts_webfont_test = false;


if (customPath)
	var path = customPath;

else {
	var scripts = document.getElementsByTagName("SCRIPT");
	var script = scripts[scripts.length-1].src;

	if (!script.match("://") && script.charAt(0) != '/')
		script = "./"+script;
		
	var path = script.replace(/\\/g,'/').replace(/\/[^\/]*\/?$/, '');
}


if (myfonts_webfont_test)
	document.write('<script type="text/javascript" src="' +path+ '/MyFontsWebfontsOrderM2771503_test.js"></script>');


if (/webfont=(woff|ttf|eot)/.test(window.location.search))
{
	webfontTypeOverride = RegExp.$1;

	if (webfontTypeOverride == 'ttf')
		webfontTypeOverride = 'data-css';
}


if (/MSIE (\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'MSIE';
	browserVersion = new Number(RegExp.$1);
	if (browserVersion >= 9.0 && woffEnabled)
		webfontType = 'woff';
	else if (browserVersion >= 5.0)
		webfontType = 'eot';
}
else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Firefox';
	browserVersion = new Number(RegExp.$1);
	if (browserVersion >= 3.6 && woffEnabled)
		webfontType = 'woff';
	else if (browserVersion >= 3.5)
		webfontType = 'data-css';
}
else if (/Chrome\/(\d+\.\d+)/.test(navigator.userAgent)) // must check before safari
{
	browserName = 'Chrome';
	browserVersion = new Number(RegExp.$1);

	if (browserVersion >= 6.0 && woffEnabled)
		webfontType = 'woff';

	else if (browserVersion >= 4.0)
		webfontType = 'data-css';
}
else if (/Mozilla.*(iPhone|iPad).* OS (\d+)_(\d+).* AppleWebKit.*Safari/.test(navigator.userAgent))
{
		browserName = 'MobileSafari';
		browserVersion = new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)

	if(browserVersion >= 4.2)
		webfontType = 'data-css';

	else
		webfontType = 'svg';
}
else if (/Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari/.test(navigator.userAgent))
{
	browserName = 'MobileSafari';
	webfontType = 'svg';
}
else if (/Safari\/(\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Safari';
	if (/Version\/(\d+\.\d+)/.test(navigator.userAgent))
	{
		browserVersion = new Number(RegExp.$1);
		if (browserVersion >= 3.1)
			webfontType = 'data-css';
	}
}
else if (/Opera\/(\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Opera';
	if (/Version\/(\d+\.\d+)/.test(navigator.userAgent))
	{
		browserVersion = new Number(RegExp.$1);
		if (browserVersion >= 10.1)
			webfontType = 'data-css';
	}
}


if (webfontTypeOverride)
	webfontType = webfontTypeOverride;

switch (webfontType)
{
		case 'eot':
		document.write("<style>\n");
				document.write("@font-face {font-family:\"MuseoSlab-700\";src:url(\"" + path + "/webfonts/eot/style_183113.eot\");}\n");
				document.write("@font-face {font-family:\"LucidaSan-Dem\";src:url(\"" + path + "/webfonts/eot/style_4879.eot\");}\n");
				document.write("@font-face {font-family:\"LucidaSan-Rom\";src:url(\"" + path + "/webfonts/eot/style_4878.eot\");}\n");
				document.write("</style>");
		break;
		
		case 'woff':
		document.write("<style>\n");
				document.write("@font-face {font-family:\"MuseoSlab-700\";src:url(\"" + path + "/webfonts/woff/style_183113.woff\") format(\"woff\");}\n");
				document.write("@font-face {font-family:\"LucidaSan-Dem\";src:url(\"" + path + "/webfonts/woff/style_4879.woff\") format(\"woff\");}\n");
				document.write("@font-face {font-family:\"LucidaSan-Rom\";src:url(\"" + path + "/webfonts/woff/style_4878.woff\") format(\"woff\");}\n");
				document.write("</style>");
		break;
	
		case 'data-css':
		document.write("<link rel='stylesheet' type='text/css' href='" + path + "/webfonts/datacss/MyFontsWebfontsOrderM2771503.css'>");
		break;
	
		case 'svg':
		document.write("<style>\n");
				document.write("@font-face {font-family:\"MuseoSlab-700\";src:url(\"" + path + "/webfonts/svg/style_183113.svg#MuseoSlab-700\") format(\"svg\");}\n");
				document.write("@font-face {font-family:\"LucidaSan-Dem\";src:url(\"" + path + "/webfonts/svg/style_4879.svg#LucidaSan-Dem\") format(\"svg\");}\n");
				document.write("@font-face {font-family:\"LucidaSan-Rom\";src:url(\"" + path + "/webfonts/svg/style_4878.svg#LucidaSan-Rom\") format(\"svg\");}\n");
				document.write("</style>");
		break;
		
	default:
		break;
}