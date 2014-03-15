
(function () {
	'use strict';

	// dom 
	// 
	var 
	components 	= document.querySelector('#components_list').children,
	content 	= document.querySelector('#content');

	// Event Handling
	// 
	var onComponentClick = function (e) {
		renderComponent(e.target.id);
	};

	// Methods
	// 
	var renderComponent = function (name) {
		// clear content
		while (content.hasChildNodes()) {
		    content.removeChild(content.lastChild);
		}
		// render component
		var el = document.createElement(name);
		content.appendChild(el);
	};

	// main
	//
	var i;
	for (i=0; i<components.length; i++) {
		components[i].addEventListener('click', onComponentClick);
	}


})(); 