// ==UserScript==
// @name         ScribdView
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Pratheesh Russell.S
// @match        https://www.scribd.com/document/*
// @grant        none
// ==/UserScript==



window.setInterval(function(){
  var elements = document.getElementsByClassName("between_page_module");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
	var elements2 = document.getElementsByClassName("between_page_portal_root");
    while(elements2.length > 0){
        elements2[0].parentNode.removeChild(elements2[0]);
    }
    var elements3 = document.getElementsByClassName("auto__doc_page_webpack_doc_page_blur_promo");
    while(elements3.length > 0){
        elements3[0].parentNode.removeChild(elements3[0]);
    }
    var DownButton = document.getElementsByClassName("download_btn_container");
    for(var j = 0; j < DownButton.length; j++)
    {
        DownButton[j].innerHTML = '<button onclick="window.open(\'https://www.scrdownloader.com/scribd?url='+window.location.href+'\', \'_blank\');" class="auto__doc_page_shared_forms_common_button download_btn flat_btn" aria-label="Download" type="button"><span class="label">Download Now</span></button>';
    }


	var items = document.body.getElementsByTagName("*");
	for (var i = 0, len = items.length; i < len; i++) {
    items[i].removeAttribute("unselectable");
	items[i].style.color = null;
	items[i].style.textShadow = null;
	items[i].style.opacity = null;
	items[i].classList.remove("blurred_page");
	}
}, 500);
