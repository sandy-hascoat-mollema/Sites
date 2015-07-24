function showHoverPopup(id){
	if (id == 1) {
		$('#retail-store').css('display', 'block');
		$('#transportation-automotive').css('display', 'none');
		$('#professional-services').css('display', 'none');
		$('#food-catering').css('display', 'none');
		$('#events').css('display', 'none');
		$('#construction').css('display', 'none');
		$('#health-beauty').css('display', 'none');
		$('#home-services').css('display', 'none');
		$('#fundraising').css('display', 'none');
		$('#photography').css('display', 'none');
}
	else if(id==2)
	{
		
		$('#transportation-automotive').css('display', 'block');
		$('#retail-store').css('display', 'none');
		$('#professional-services').css('display', 'none');
		$('#food-catering').css('display', 'none');
		$('#events').css('display', 'none');
		$('#construction').css('display', 'none');
		$('#health-beauty').css('display', 'none');
		$('#home-services').css('display', 'none');
		$('#fundraising').css('display', 'none');
		$('#photography').css('display', 'none');
		
	}
	else if(id==3)
	{
		
		$('#professional-services').css('display', 'block');
		$('#retail-store').css('display', 'none');
		$('#transportation-automotive').css('display', 'none');
		$('#food-catering').css('display', 'none');
		$('#events').css('display', 'none');
		$('#construction').css('display', 'none');
		$('#health-beauty').css('display', 'none');
		$('#home-services').css('display', 'none');
		$('#fundraising').css('display', 'none');
		$('#photography').css('display', 'none');
	}
	else if(id==4)
	{
		
		$('#food-catering').css('display', 'block');
		$('#retail-store').css('display', 'none');
		$('#transportation-automotive').css('display', 'none');
		$('#professional-services').css('display', 'none');
		$('#events').css('display', 'none');
		$('#construction').css('display', 'none');
		$('#health-beauty').css('display', 'none');
		$('#home-services').css('display', 'none');
		$('#fundraising').css('display', 'none');
		$('#photography').css('display', 'none');
	}
	else if(id==5)
	{
		
		$('#events').css('display', 'block');
		$('#retail-store').css('display', 'none');
		$('#transportation-automotive').css('display', 'none');
		$('#professional-services').css('display', 'none');
		$('#food-catering').css('display', 'none');
		$('#construction').css('display', 'none');
		$('#health-beauty').css('display', 'none');
		$('#home-services').css('display', 'none');
		$('#fundraising').css('display', 'none');
		$('#photography').css('display', 'none');
	}
	else if(id==6)
	{
		
		$('#construction').css('display', 'block');
		$('#retail-store').css('display', 'none');
		$('#transportation-automotive').css('display', 'none');
		$('#professional-services').css('display', 'none');
		$('#food-catering').css('display', 'none');
		$('#events').css('display', 'none');
		$('#health-beauty').css('display', 'none');
		$('#home-services').css('display', 'none');
		$('#fundraising').css('display', 'none');
		$('#photography').css('display', 'none');
	}
	else if(id==7)
	{
		
		$('#health-beauty').css('display', 'block');
		$('#retail-store').css('display', 'none');
		$('#transportation-automotive').css('display', 'none');
		$('#professional-services').css('display', 'none');
		$('#food-catering').css('display', 'none');
		$('#events').css('display', 'none');
		$('#construction').css('display', 'none');
		$('#home-services').css('display', 'none');
		$('#fundraising').css('display', 'none');
		$('#photography').css('display', 'none');
	}
	else if(id==8)
	{
		
		$('#home-services').css('display', 'block');
		$('#retail-store').css('display', 'none');
		$('#transportation-automotive').css('display', 'none');
		$('#professional-services').css('display', 'none');
		$('#food-catering').css('display', 'none');
		$('#events').css('display', 'none');
		$('#construction').css('display', 'none');
		$('#health-beauty').css('display', 'none');
		$('#fundraising').css('display', 'none');
		$('#photography').css('display', 'none');
	}
	else if(id==9)
	{
		
		$('#fundraising').css('display', 'block');
		$('#retail-store').css('display', 'none');
		$('#transportation-automotive').css('display', 'none');
		$('#professional-services').css('display', 'none');
		$('#food-catering').css('display', 'none');
		$('#events').css('display', 'none');
		$('#construction').css('display', 'none');
		$('#health-beauty').css('display', 'none');
		$('#home-services').css('display', 'none');
		$('#photography').css('display', 'none');
	}
	else if(id==10)
	{
		
		$('#photography').css('display', 'block');
		$('#retail-store').css('display', 'none');
		$('#transportation-automotive').css('display', 'none');
		$('#professional-services').css('display', 'none');
		$('#food-catering').css('display', 'none');
		$('#events').css('display', 'none');
		$('#construction').css('display', 'none');
		$('#health-beauty').css('display', 'none');
		$('#home-services').css('display', 'none');
		$('#fundraising').css('display', 'none');
	}
}

function closeAllPopups(){
	
		$('#photography').css('display', 'none');
		$('#retail-store').css('display', 'none');
		$('#transportation-automotive').css('display', 'none');
		$('#professional-services').css('display', 'none');
		$('#food-catering').css('display', 'none');
		$('#events').css('display', 'none');
		$('#construction').css('display', 'none');
		$('#health-beauty').css('display', 'none');
		$('#home-services').css('display', 'none');
		$('#fundraising').css('display', 'none');
}
function hideRetailStore(e){
	if (!e) var e = window.event;
	var tg = (window.event) ? e.srcElement : e.target;
	if (tg.id != 'retail-store'){
		return;
	}
	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	while (reltg != tg && reltg.tagName != 'BODY'){
		reltg = reltg.parentNode;
		if (reltg == tg){
			return;
		}
	}
	document.getElementById("retail-store").style.display="none";
	return false;
}
function hideTransportationAutomotive(e){
	if (!e) var e = window.event;
	var tg = (window.event) ? e.srcElement : e.target;
	if (tg.id != 'transportation-automotive'){
		return;
	}
	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	while (reltg != tg && reltg.tagName != 'BODY'){
		reltg = reltg.parentNode;
		if (reltg == tg){
			return;
		}
	}
	document.getElementById("transportation-automotive").style.display="none";
	return false;
}

function hideProfessionalServices(e){
	if (!e) var e = window.event;
	var tg = (window.event) ? e.srcElement : e.target;
	if (tg.id != 'professional-services'){
		return;
	}
	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	while (reltg != tg && reltg.tagName != 'BODY'){
		reltg = reltg.parentNode;
		if (reltg == tg){
			return;
		}
	}
	document.getElementById("professional-services").style.display="none";
	return false;
}

function hideFoodCatering(e){
	if (!e) var e = window.event;
	var tg = (window.event) ? e.srcElement : e.target;
	if (tg.id != 'food-catering'){
		return;
	}
	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	while (reltg != tg && reltg.tagName != 'BODY'){
		reltg = reltg.parentNode;
		if (reltg == tg){
			return;
		}
	}
	document.getElementById("food-catering").style.display="none";
	return false;
}

function hideEvents(e){
	if (!e) var e = window.event;
	var tg = (window.event) ? e.srcElement : e.target;
	if (tg.id != 'events'){
		return;
	}
	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	while (reltg != tg && reltg.tagName != 'BODY'){
		reltg = reltg.parentNode;
		if (reltg == tg){
			return;
		}
	}
	document.getElementById("events").style.display="none";
	return false;
}
function hideConstruction(e){
	if (!e) var e = window.event;
	var tg = (window.event) ? e.srcElement : e.target;
	if (tg.id != 'construction'){
		return;
	}
	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	while (reltg != tg && reltg.tagName != 'BODY'){
		reltg = reltg.parentNode;
		if (reltg == tg){
			return;
		}
	}
	document.getElementById("construction").style.display="none";
	return false;
}
function hideHealthBeauty(e){
	if (!e) var e = window.event;
	var tg = (window.event) ? e.srcElement : e.target;
	if (tg.id != 'health-beauty'){
		return;
	}
	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	while (reltg != tg && reltg.tagName != 'BODY'){
		reltg = reltg.parentNode;
		if (reltg == tg){
			return;
		}
	}
	document.getElementById("health-beauty").style.display="none";
	return false;
}

function hideHomeServices(e){
	if (!e) var e = window.event;
	var tg = (window.event) ? e.srcElement : e.target;
	if (tg.id != 'home-services'){
		return;
	}
	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	while (reltg != tg && reltg.tagName != 'BODY'){
		reltg = reltg.parentNode;
		if (reltg == tg){
			return;
		}
	}
	document.getElementById("home-services").style.display="none";
	return false;
}
function hideFundraising(e){
	if (!e) var e = window.event;
	var tg = (window.event) ? e.srcElement : e.target;
	if (tg.id != 'fundraising'){
		return;
	}
	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	while (reltg != tg && reltg.tagName != 'BODY'){
		reltg = reltg.parentNode;
		if (reltg == tg){
			return;
		}
	}
	document.getElementById("fundraising").style.display="none";
	return false;
}
function hidePhotography(e){
	if (!e) var e = window.event;
	var tg = (window.event) ? e.srcElement : e.target;
	if (tg.id != 'photography'){
		return;
	}
	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	while (reltg != tg && reltg.tagName != 'BODY'){
		reltg = reltg.parentNode;
		if (reltg == tg){
			return;
		}
	}
	document.getElementById("photography").style.display="none";
	return false;
}
var cnt=0;
function showMoreCategories(name){
	//alert(name);
	cnt= cnt+1;
	//alert("cont"+cnt);
	if (cnt == 1) {
		document.getElementById("moreCategories").style.display = "block";
		if(name=='parent')
			document.getElementById("arrowImage").src = "../images/9x8_arrow_down_white.png";
		else if(name=='child')
			document.getElementById("arrowImage").src = "../../images/9x8_arrow_down_white.png";
		document.getElementById("arrowImage").width = "9";
		document.getElementById("arrowImage").height = "8";
	}
	else if(cnt==2){
		document.getElementById("moreCategories").style.display = "none";
		document.getElementById("banner_div").style.display = "block";
		if(name=='parent')
			document.getElementById("arrowImage").src = "../images/4x8_arrow_white.png";
		else if(name=='child')
			document.getElementById("arrowImage").src = "../../images/4x8_arrow_white.png";
		document.getElementById("arrowImage").width = "4";
		document.getElementById("arrowImage").height = "8";
		cnt=0;
	}
	
	
}

