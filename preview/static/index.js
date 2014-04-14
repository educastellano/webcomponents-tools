
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
		var el,
			_extends = CustomElements.registry[name].extends;

		// clear content
		while (content.hasChildNodes()) {
		    content.removeChild(content.lastChild);
		}
		// render component
		if (_extends) {
			el = document.createElement(_extends);
			el.setAttribute('is', name);
		}
		else {
			el = document.createElement(name);
		}
		
		// el.value = el.innerHTML = name;
		content.appendChild(el);
	};

	// main
	//
	var i;
	for (i=0; i<components.length; i++) {
		components[i].addEventListener('click', onComponentClick);
	}


})(); 