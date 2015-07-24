/* core javascript for Launch Pad 3.0 FW */

//remove unused elements from dom

// EDITABLE LIST OF ALL ELEMENTS TO BE REMOVED
var LB_elementsToRemove = { 
	"tags": ["li", "ul", "ol", "h5", "h6"],
	"ids": ["img_946", "pre-content", "footer_banner", "twoSeg_layer_container", "threeSeg_layer_container", "fourSeg_layer_container", "fiveSeg_layer_container", "header_nav_wrap"],
	"classes": ["img_rt", "img_left", "img_block", "img_content", "title_block", "title_block_f", "form_block", "secondary_link", "link_bullet", "grid", "col5", "rt", "linktext_block"]
};

// DO NOT EDIT BELOW
function getElementsByClass(node,searchClass,tag) {
	var classElements = [];
	var els = node.getElementsByTagName(tag); // use "*" for all elements
	var elsLen = els.length;
	var pattern = new RegExp("\\b"+searchClass+"\\b");
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
	  		classElements[j] = els[i];
	   		j++;
	    }
	}
	return classElements;
}

// test for emptyness
function isEmpty(el) {
	if(el){
		if(el.childNodes.length === 0){
			return true;
		} else
		if(!el.innerHTML.match(/\S/)){
			return true;
		}
		return false;
	}
	return false;
}

// remove the elements 
function removeIt(el, type) {
	
	var allEls = [],
	toRemove = "",
	r = "";
	
	if(type == "tag"){
		allEls = document.getElementsByTagName(el);
		var resultArray = [];
		
		for (var i=0;i<allEls.length;i++) {
			resultArray.push(allEls[i]);
		}
		
					
		for(j=0; j<resultArray.length; j++){
			toRemove = resultArray[j];
			if(isEmpty(toRemove)){
				r = toRemove;
				r.parentNode.removeChild(toRemove);
			}
		}
	} else
	
	if(type == "id"){
		toRemove = document.getElementById(el);
		
						
		if(isEmpty(toRemove)){
			
			r = toRemove;
			r.parentNode.removeChild(toRemove);
			
		}
	} else
	
	if(type == "class"){
		allEls = getElementsByClass(document,el,'*');
		for(i=0; i<allEls.length; i++){
			toRemove = allEls[i];
			if(isEmpty(toRemove)){
				r = toRemove;
				r.parentNode.removeChild(toRemove);
			}
		}
	}
}


// loop through elements object and call remove func
function removeElements(){
	for (var key in LB_elementsToRemove){
		if(LB_elementsToRemove.hasOwnProperty(key)){
			var type = "";
			if(key == "tags"){ type = "tag"; }
			else if(key == "ids"){ type = "id"; }
			else if(key == "classes"){ type = "class"; }
			var obj = LB_elementsToRemove[key];
			for (var element in obj){
				if(obj.hasOwnProperty(element)){
					removeIt(obj[element], type);
				}
			}			
		}
	}
}

				
// onload...
// Dean Edwards/Matthias Miller/John Resig

function init() {
// quit if this function has already been called
if (arguments.callee.done) return;

// flag this function so we don't do the same thing twice
arguments.callee.done = true;

// kill the timer
if (_timer) clearInterval(_timer);

// do stuff
removeElements();
};

/* for Mozilla/Opera9 */
if (document.addEventListener) {
document.addEventListener("DOMContentLoaded", init, false);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
var script = document.getElementById("__ie_onload");
script.onreadystatechange = function() {
if (this.readyState == "complete") {
  init(); // call the onload handler
}
};
/*@end @*/

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
var _timer = setInterval(function() {
if (/loaded|complete/.test(document.readyState)) {
  init(); // call the onload handler
}
}, 10);
}

/* for other browsers */
window.onload = init;
