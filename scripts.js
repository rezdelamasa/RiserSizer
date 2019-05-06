// List of all fixtures with data
var fixtures = 
	[
		{
			name: "Bathroom Group",
			occupancy: "Private",
			fixtureType: "Flush Tank",
			loadValues: {
				cold: 2.7,
				hot: 1.5,
				total: 3.6
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "FT"
			}
		},
		{
			name: "Bathroom Group",
			occupancy: "Private",
			fixtureType: "Flushometer Valve",
			loadValues: {
				cold: 6.0,
				hot: 3.0,
				total: 8.0
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "FV"
			}
		},
		{
			name: "Bathtub",
			occupancy: "Private",
			fixtureType: "Faucet",
			loadValues: {
				cold: 1.0,
				hot: 1.0,
				total: 1.4
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "Fa."
			}
		},
		{
			name: "Bathtub",
			occupancy: "Public",
			fixtureType: "Faucet",
			loadValues: {
				cold: 3.0,
				hot: 3.0,
				total: 4.0
			},
			shorthand: {
				occupancy: "Pu.",
				fixtureType: "Fa."
			}
		},
		{
			name: "Bidet",
			occupancy: "Private",
			fixtureType: "Faucet",
			loadValues: {
				cold: 1.5,
				hot: 1.5,
				total: 2.0
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "Fa."
			}
		},
		{
			name: "Combination Fixture",
			occupancy: "Private",
			fixtureType: "Faucet",
			loadValues: {
				cold: 2.25,
				hot: 2.25,
				total: 3.0
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "Fa.",
				name: "Combi. Fixture"
			}
		},
		{
			name: "Dishwashing Machine",
			occupancy: "Private",
			fixtureType: "Faucet",
			loadValues: {
				cold: 1.0,
				hot: 1.0,
				total: 1.4
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "Fa.",
				name: "Dish. Mach."
			}
		},
		{
			name: "Drinking Fountain",
			occupancy: "Offices, etc.",
			fixtureType: '3/8" valve',
			loadValues: {
				cold: 0.25,
				hot: 0,
				total: 0.25
			},
			shorthand: {
				occupancy: "Of.",
				fixtureType: '3/8" V',
				nane: "Drink. Foun."
			}
		},
		{
			name: "Kitchen Sink",
			occupancy: "Private",
			fixtureType: "Faucet",
			loadValues: {
				cold: 1.0,
				hot: 1.0,
				total: 1.4
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "Fa."
			}
		},
		{
			name: "Kitchen Sink",
			occupancy: "Hotel, restaurant",
			fixtureType: "Faucet",
			loadValues: {
				cold: 3.0,
				hot: 3.0,
				total: 4.0
			},
			shorthand: {
				occupancy: "H/R",
				fixtureType: "Fa."
			}
		},
		{
			name: "Laundry Trays (1 to 3)",
			occupancy: "Private",
			fixtureType: "Faucet",
			loadValues: {
				cold: 1.0,
				hot: 1.0,
				total: 1.4
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "Fa.",
				name: "Laun. Trays 1-3"
			}
		},
		{
			name: "Lavatory",
			occupancy: "Private",
			fixtureType: "Faucet",
			loadValues: {
				cold: 0.5,
				hot: 0.5,
				total: 0.7
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "Fa."
			}
		},
		{
			name: "Lavatory",
			occupancy: "Public",
			fixtureType: "Faucet",
			loadValues: {
				cold: 1.5,
				hot: 1.5,
				total: 2.0
			},
			shorthand: {
				occupancy: "Pu.",
				fixtureType: "Fa."
			}
		},
		{
			name: "Service Sink",
			occupancy: "Offices, etc.",
			fixtureType: "Faucet",
			loadValues: {
				cold: 2.25,
				hot: 2.25,
				total: 3.0
			},
			shorthand: {
				occupancy: "Of.",
				fixtureType: "Fa."
			}
		},
		{
			name: "Shower Head",
			occupancy: "Private",
			fixtureType: "Mixing Valve",
			loadValues: {
				cold: 1.0,
				hot: 1.0,
				total: 1.4
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "MV"
			}
		},
		{
			name: "Shower Head",
			occupancy: "Public",
			fixtureType: "Mixing Valve",
			loadValues: {
				cold: 3.0,
				hot: 3.0,
				total: 4.0
			},
			shorthand: {
				occupancy: "Pu.",
				fixtureType: "MV"
			}
		},
		{
			name: "Urinal",
			occupancy: "Public",
			fixtureType: '1" Flushometer Valve',
			loadValues: {
				cold: 10.0,
				hot: 0,
				total: 10.0
			},
			shorthand: {
				occupancy: "Pu.",
				fixtureType: '1" FV'
			}
		},
		{
			name: "Urinal",
			occupancy: "Public",
			fixtureType: '3/4" Flushometer Valve',
			loadValues: {
				cold: 5.0,
				hot: 0,
				total: 5.0
			},
			shorthand: {
				occupancy: "Pu.",
				fixtureType: '3/4" FV'
			}
		},
		{
			name: "Urinal",
			occupancy: "Public",
			fixtureType: 'Flush Tank',
			loadValues: {
				cold: 3.0,
				hot: 0,
				total: 3.0
			},
			shorthand: {
				occupancy: "Pu.",
				fixtureType: "FT"
			}
		},
		{
			name: "Washing Machine (8 lb)",
			occupancy: "Private",
			fixtureType: 'Automatic',
			loadValues: {
				cold: 1.0,
				hot: 1.0,
				total: 1.4
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "Auto",
				name: "Wash. Mach. 8lb"
			}
		},
		{
			name: "Washing Machine (8 lb)",
			occupancy: "Public",
			fixtureType: 'Automatic',
			loadValues: {
				cold: 2.25,
				hot: 2.25,
				total: 3.0
			},
			shorthand: {
				occupancy: "Pu.",
				fixtureType: "Auto",
				name: "Wash. Mach. 8lb"
			}
		},
		{
			name: "Washing Machine (15 lb)",
			occupancy: "Public",
			fixtureType: 'Automatic',
			loadValues: {
				cold: 3.0,
				hot: 3.0,
				total: 4.0
			},
			shorthand: {
				occupancy: "Pu.",
				fixtureType: "Auto",
				name: "Wash. Mach. 15lb"
			}
		},
		{
			name: "Water Closet",
			occupancy: "Private",
			fixtureType: 'Flushometer Valve',
			loadValues: {
				cold: 6.0,
				hot: 0,
				total: 6.0
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "FV"
			}
		},
		{
			name: "Water Closet",
			occupancy: "Private",
			fixtureType: 'Flush Tank',
			loadValues: {
				cold: 2.2,
				hot: 0,
				total: 6.0
			},
			shorthand: {
				occupancy: "Pr.",
				fixtureType: "FT"
			}
		},
		{
			name: "Water Closet",
			occupancy: "Public",
			fixtureType: 'Flushometer Valve',
			loadValues: {
				cold: 10.0,
				hot: 0,
				total: 10.0
			},
			shorthand: {
				occupancy: "Pu.",
				fixtureType: "FV"
			}
		},
		{
			name: "Water Closet",
			occupancy: "Public",
			fixtureType: 'Flushometer Tank',
			loadValues: {
				cold: 5.0,
				hot: 0,
				total: 5.0
			},
			shorthand: {
				occupancy: "Pu.",
				fixtureType: "FT"
			}
		},
		{
			name: "Water Closet",
			occupancy: "Public or Private",
			fixtureType: 'Flushometer Tank',
			loadValues: {
				cold: 2.0,
				hot: 0,
				total: .20
			},
			shorthand: {
				occupancy: "Pu./Pr.",
				fixtureType: "FT"
			}
		}
	]

// object containing all data
var data = {
	currentRiser: '',
	currentFloor: '',
	risers: [

	],
}

// create a sidebar/catalog of all fixtures that the user can add to the riser/floor 
fixtures.forEach(function(f) {
	// create li
	var item = document.createElement('LI');
	item.classList.add('sidebar__item');
	item.classList.add('item');

	// create li button 
	var itemButton = document.createElement('BUTTON');
	itemButton.classList.add('item__button');
	itemButton.setAttribute('onclick', 'selectFixture(' + fixtures.indexOf(f) + ')');

	// create li name label
	var itemLabel = document.createElement('H1');
	itemLabel.classList.add('item__label');
	itemLabel.textContent = f.name;

	// create li occupancy label
	var itemOccupancyLabel = document.createElement('P');
	itemOccupancyLabel.classList.add('item__occupancy');
	itemOccupancyLabel.textContent = f.occupancy;

	// create li type label
	var itemTypeLabel = document.createElement('P');
	itemTypeLabel.classList.add('item__type');
	itemTypeLabel.textContent = f.fixtureType;

	// append all child elements to item parent element
	itemButton.appendChild(itemLabel);
	itemButton.appendChild(itemOccupancyLabel);
	itemButton.appendChild(itemTypeLabel);

	item.appendChild(itemButton);

	// append items to sidebar list
	var list = document.querySelector('.sidebar__list');
	list.appendChild(item);
});


// when the user clicks the create riser button, hide the home div and display the editor page
var overview = document.querySelector('.overview');
var editor = document.querySelector('.editor');
var createButton = document.querySelector('.create-button');
createButton.addEventListener('click', function(e) {
	e.preventDefault();
	overview.classList.toggle('hidden');
	editor.classList.toggle('hidden');
	// data.risers.push(newRiserArray);

	// event handling for riser label form 
	var riserForm = document.querySelector('.riser__label__form');
	var riserInput = document.querySelector('.riser__label__input');

	// when the user creates a new riser, put 'focus' on the riser label form by adding a box shadow around the riser label div
	var riserLabel = document.querySelector('.riser__label');
	riserLabel.classList.add('focused');

	// keep input in focus
	var riserLabelBottom = document.querySelector('.riser__label__text--bottom');
	console.log(riserLabelBottom);
	// while(riserLabelBottom.innerHTML = '') {
		console.log(document.activeElement); 
		riserInput.focus();
		riserInput.onblur = function (event) {
			var blurEl = this;
			setTimeout(function() {
	            blurEl.focus()
	        }, 10);
		}
	// }

	// then user can input the label
	// when user submits the form, get the value and apply it to the riser label.
	riserForm.addEventListener('submit', function(e) {
		console.log(riserLabelBottom);
		riserInput.blur();
		var floorInput = document.querySelector('.input--label');
		floorInput.focus();
		console.log(document.activeElement);
		e.preventDefault();
		console.log(riserInput.value);
		riserLabelBottom.innerHTML = riserInput.value;
		var newRiserObject = {
			label: '',
			floors: []
		};
		newRiserObject.label = riserInput.value;
		data.risers.push(newRiserObject);
		data.currentRiser = riserInput.value;
		// hide the form and show the label.
		this.classList.add('hidden');
		riserLabelBottom.classList.remove('hidden');
		riserLabel.classList.remove('focused');
		var floor = document.querySelector('.floor');
		floor.classList.remove('floor-margin-helper');

		// now move the 'tutorial' to the floor label form
		var floorForm = document.querySelector('.floor__label__form');
		floorForm.classList.add('focused');
		// keep input in focus
		floorInput.onblur = function (event) {
			var blurEl = this;
			setTimeout(function() {
	            blurEl.focus()
	        }, 10);
		}
	});


	// handle sidebar item clicks
	// when a user clicks on a sidebar item, add it to the active floor and display it
});

// back button handling
var backButton = document.querySelector('.button--back');
backButton.addEventListener('click', function(e) {
	// if user didn't fill out the init forms, just simply go back
	if(!data.currentFloor && !data.currentRiser) {
		console.log(e.target);
		// hide the editor
		editor.classList.toggle('hidden');
		// show the risers page again
		overview.classList.toggle('hidden');
	} else {
		// if the user did, get the saved info from the init forms and use it to add a riser to the risers page
		console.log('you filled out the init');
		// hide the editor
		editor.classList.toggle('hidden');
		// show the risers page again
		overview.classList.toggle('hidden');

		// use the current data to create an element on the homepage to represent a created riser
		createRiserOverview();

		// then clear the data.current props so that they can be used again to create another riser
		data.currentRiser = '';
		data.currentFloor = '';
	}
});

// 
function createRiserOverview() {
	console.log(data.currentRiser);
	var overviewList = document.querySelector('.overview__list');
	data.risers.forEach(function(r) {
		// if(r.label == data.currentRiser) {
			console.log(r);
			var overviewItem = document.createElement('LI');
			overviewItem.classList.add('overview__item');

			var overviewLabel = document.createElement('DIV');
			overviewLabel.classList.add('overview__label');

			var overviewLabelTop = document.createElement('DIV');
			overviewLabelTop.classList.add('overview__label__top');

			var overviewLabelTextTop = document.createElement('H1');
			overviewLabelTextTop.classList.add('overview__label__text');
			overviewLabelTop.innerHTML = 'P';

			overviewLabelTop.appendChild(overviewLabelTextTop);

			var overviewLabelBottom = document.createElement('DIV');
			overviewLabelBottom.classList.add('overview__label__bottom');

			var overviewLabelTextBottom = document.createElement('H1');
			overviewLabelTextBottom.classList.add('overview__label__text');
			overviewLabelTextBottom.innerHTML = data.currentRiser;

			overviewLabelBottom.appendChild(overviewLabelTextBottom);

			overviewLabel.appendChild(overviewLabelTop);
			overviewLabel.appendChild(overviewLabelBottom);

			// creating the actual overview elements
			// create a list element of floors and the amount of fixtures each
			var overviewRiser = document.createElement('UL');
			overviewRiser.classList.add('overview__riser');

			r.floors.forEach(function(f) {
				var overviewRiserFloor = document.createElement('LI');
				overviewRiserFloor.classList.add('overview__riser__floor');

				var overviewRiserFloorLabel = document.createElement('H1');
				overviewRiserFloorLabel.classList.add('overview__riser__floor__label');
				overviewRiserFloorLabel.innerHTML = f.label;

				var overviewRiserFloorFixtures = document.createElement('P');
				overviewRiserFloorFixtures.classList.add('overview__riser__floor__fixtures');
				overviewRiserFloorFixtures.innerHTML = f.fixtures.length + ' fixtures';

				overviewRiserFloor.appendChild(overviewRiserFloorLabel);
				overviewRiserFloor.appendChild(overviewRiserFloorFixtures);

				overviewRiser.insertBefore(overviewRiserFloor, overviewRiser.childNodes[0]);
			});

			overviewItem.appendChild(overviewLabel);
			overviewItem.appendChild(overviewRiser);

			overviewList.appendChild(overviewItem);

			// eventually will show total fu's, gpms, and pipe size
		// }
	});
}






// when the initial floor form is submitted
	// prevent default
	// hide form
	// display submitted label as a text element
	// make add floor buttons visible

var form = document.querySelector('.floor__label__form');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	this.classList.add('hidden');
	var input = document.querySelector('.input--label')
	var floorLabel = document.querySelector('.floor__label');
	console.log(input.value);
	floorLabel.innerHTML = input.value;

	// create a new floor object that contains a label and an array
	var newFloorObject = {
		label: input.value,
		fixtures: [],
	};

	data.currentFloor = input.value;

	var addButtons = document.querySelectorAll('.add-button');
	addButtons.forEach(function(b) {
		b.classList.remove('hidden');
	});

	var floorMenu = document.querySelector('.floor__menu');
	floorMenu.classList.remove('hidden');

	// on submit, add the riser to the data.risers. data.risers will be an array of array. the nested arrays will be the floors
	data.risers[0].floors.push(newFloorObject);
})

// first handle clicks
function selectFixture(id) {
	console.log(id);

	var floorList = document.querySelector('.floor--active').querySelector('.floor__list');
	floorList.appendChild(createFixture(id));

	data.risers.forEach(function(r) {
		if(r.label == data.currentRiser) {
			r.floors.forEach(function(f) {
				if(f.label == data.currentFloor) {
					f.fixtures.push(fixtures[id]);
				}
			});
		}
	});
	console.log(data.risers);
}

// create the element as it will be display on the floor
function createFixture(id) {
	var fixture = document.createElement('LI');
	fixture.classList.add('fixture');

	var fixtureName = document.createElement('H1');
	fixtureName.classList.add('fixture__name');
	fixtureName.textContent = fixtures[id].name;

	var fixtureOccupancy = document.createElement('P');
	fixtureOccupancy.classList.add('fixture__occupancy');
	fixtureOccupancy.textContent = fixtures[id].shorthand.occupancy;

	var fixtureType = document.createElement('P');
	fixtureType.classList.add('fixture__type');
	fixtureType.textContent = fixtures[id].shorthand.fixtureType;

	fixture.appendChild(fixtureName);
	fixture.appendChild(fixtureOccupancy);
	fixture.appendChild(fixtureType);

	return fixture;
}



// Add floor buttons clicks
var addButtons = document.querySelectorAll('.add-button');

addButtons.forEach(function(b) {
	var riserList = document.querySelector('.riser__list');
	// when a button is clicked first check if it is above or below
	b.addEventListener('click', function(e) {
		var nextFloor = 0;
		if(e.target.classList.contains('add-button--above')) {
			data.risers.forEach(function(r) {
				if(r.label == data.currentRiser) {
					// get the current riser and add a new floor.
					nextFloor = Number(r.floors[r.floors.length - 1].label) + 1;
					console.log(nextFloor);
					var newFloorObject = {
						label: nextFloor + '',
						fixtures: [],
					}
					r.floors.push(newFloorObject);
					data.currentFloor = nextFloor + '';
				}
			});
			removeActiveFloors();
			riserList.insertBefore(createFloor(nextFloor), riserList.childNodes[0]);

			riserList.scrollTop = 0;
		} else if(e.target.classList.contains('add-button--below')) {
			data.risers.forEach(function(r) {
				if(r.label == data.currentRiser) {
					// get the current riser and add a new floor.
					nextFloor = Number(r.floors[0].label) - 1;
					console.log(nextFloor);
					var newFloorObject = {
						label: nextFloor + '',
						fixtures: [],
					}
					r.floors.unshift(newFloorObject);
					data.currentFloor = nextFloor + '';
				}
			});
			removeActiveFloors();
			riserList.appendChild(createFloor(nextFloor));
			riserList.scrollTop = riserList.scrollHeight;
		}
		console.log(data.risers);
	});
	// call a function that will build the floor element
	// if its above then the label will be the initial floor plus 1
	// else if its under the label will be minus 1
});

// this function removes the active class from all floors so that we can activate the newly created floor
function removeActiveFloors() {
	var floors = document.querySelectorAll('.floor');
	floors.forEach(function(f) {
		f.classList.remove('floor--active');
	});
}

// function to create a floor element
function createFloor(label) {
	var floor = document.createElement('LI');
	floor.classList.add('floor');
	floor.classList.add('floor--active');

	var floorLabel = document.createElement('H1');
	floorLabel.classList.add('floor__label');
	floorLabel.textContent = label;

	var floorList = document.createElement('UL');
	floorList.classList.add('floor__list');

	floor.appendChild(floorLabel);
	floor.appendChild(floorList);
	floor.appendChild(createFloorMenu());

	return floor;
} 

function createFloorMenu() {
	var menu = document.createElement('DIV');
	menu.classList.add('floor__menu');

	var editButton = document.createElement('BUTTON');
	editButton.classList.add('floor__menu__button');
	editButton.classList.add('floor__menu__button--edit');
	editButton.innerHTML = 'Edit';

	var clearButton = document.createElement('BUTTON');
	clearButton.classList.add('floor__menu__button');
	clearButton.classList.add('floor__menu__button--clear');
	clearButton.innerHTML = 'Clear';

	var deleteButton = document.createElement('BUTTON');
	deleteButton.classList.add('floor__menu__button');
	deleteButton.classList.add('floor__menu__button--delete');
	deleteButton.innerHTML = 'Delete';

	menu.appendChild(editButton);
	menu.appendChild(clearButton);
	menu.appendChild(deleteButton);

	return menu;
}

// when the user clicks an edit button, make the floor active
var editButtons = document.querySelectorAll('.floor__menu__button--edit');
editButtons.forEach(function(b) {
	b.addEventListener('click', function(e) {
		removeActiveFloors();
		console.log(e.target.parentNode.parentNode);
		console.log(editButtons);
		e.target.parentNode.parentNode.classList.add('floor--active');
		data.currentFloor = document.querySelector('.floor--active').querySelector('.floor__label').innerHTML + '';
		console.log(data.currentFloor);
		editButtons = document.querySelectorAll('.floor__menu__button--edit');
		editButtons.forEach(function(b) {
			b.addEventListener('click', function(e) {
				removeActiveFloors();
				console.log(e.target.parentNode.parentNode);
				console.log(editButtons);
				e.target.parentNode.parentNode.classList.add('floor--active');
				data.currentFloor = document.querySelector('.floor--active').querySelector('.floor__label').innerHTML + '';
				console.log(data.currentFloor);
				editButtons = document.querySelectorAll('.floor__menu__button--edit');
			});
		});
	});
});

// when the user clicks the clear button, delete all fixtures from the list
var clearButtons = document.querySelectorAll('.floor__menu__button--clear');
var floorList = document.querySelector('.floor--active').querySelector('.floor__list');
clearButtons.forEach(function(b) {
	b.addEventListener('click', function(e) {
		while (floorList.firstChild) {
		    floorList.removeChild(floorList.firstChild);
		}
	});
	clearButtons.forEach(function(b) {
		b.addEventListener('click', function(e) {
			console.log('jello');
			while (floorList.firstChild) {
			    floorList.removeChild(floorList.firstChild);
			}
		});
	});
});
