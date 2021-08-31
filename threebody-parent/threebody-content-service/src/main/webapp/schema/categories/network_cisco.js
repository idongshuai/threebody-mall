/**
 *
 */
Schema.addCategory({
	name: "cisco_bulidings",
	text: "Cisco Bulidings",
	dataAttributes: []
});

/**
 * Branch Office
*/
Schema.addShape({
	name: "branch office",
	title: "Branch Office",
	category: "cisco_bulidings",
	props: {
		w: 52,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/branchOffice.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/branchOffice.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * End Office
*/
Schema.addShape({
	name: "end office",
	title: "End Office",
	category: "cisco_bulidings",
	props: {
		w: 74,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/endOffice.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/endOffice.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Generic Building
*/
Schema.addShape({
	name: "generic building",
	title: "Generic Building",
	category: "cisco_bulidings",
	props: {
		w: 53,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/genericBuilding.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/genericBuilding.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Government Building
*/
Schema.addShape({
	name: "government building",
	title: "Government Building",
	category: "cisco_bulidings",
	props: {
		w: 77,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/governmentBuilding.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/governmentBuilding.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * MDU
*/
Schema.addShape({
	name: "mdu",
	title: "MDU",
	category: "cisco_bulidings",
	props: {
		w: 64,
		h: 79
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/mdu.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/mdu.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Small Business
*/
Schema.addShape({
	name: "small business",
	title: "Small Business",
	category: "cisco_bulidings",
	props: {
		w: 78,
		h: 44
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/smallBusiness.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/smallBusiness.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Telecommuter House
*/
Schema.addShape({
	name: "telecommuter house",
	title: "Telecommuter House",
	category: "cisco_bulidings",
	props: {
		w: 75,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/telecommuterHouse.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/telecommuterHouse.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Telecommuter House PC
*/
Schema.addShape({
	name: "telecommuter house pc",
	title: "Telecommuter House PC",
	category: "cisco_bulidings",
	props: {
		w: 75,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/telecommuterHousePC.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/telecommuterHousePC.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * University
*/
Schema.addShape({
	name: "university",
	title: "University",
	category: "cisco_bulidings",
	props: {
		w: 78,
		h: 31
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/university.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Bulidings/university.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
/////////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_computers_peripherals",
	text: "Cisco Computers and Peripherals",
	dataAttributes: []
});

/**
 * IBM Mainframe
*/
Schema.addShape({
	name: "ibm mainframe",
	title: "IBM Mainframe",
	category: "cisco_computers_peripherals",
	props: {
		w: 53,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/ibmMainframe.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/ibmMainframe.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IBM Mini AS400
*/
Schema.addShape({
	name: "ibm mini as400",
	title: "IBM Mini AS400",
	category: "cisco_computers_peripherals",
	props: {
		w: 53,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/ibmMiniAS400.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/ibmMiniAS400.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IBM Tower
*/
Schema.addShape({
	name: "ibm tower",
	title: "IBM Tower",
	category: "cisco_computers_peripherals",
	props: {
		w: 43,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/ibmTower.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/ibmTower.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Laptop
*/
Schema.addShape({
	name: "cisco laptop",
	title: "Cisco Laptop",
	category: "cisco_computers_peripherals",
	props: {
		w: 78,
		h: 53
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/laptop.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/laptop.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Macintosh
*/
Schema.addShape({
	name: "macintosh",
	title: "Macintosh",
	category: "cisco_computers_peripherals",
	props: {
		w: 80,
		h: 56
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/macintosh.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/macintosh.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Microphone
*/
Schema.addShape({
	name: "microphone",
	title: "Microphone",
	category: "cisco_computers_peripherals",
	props: {
		w: 64,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/microphone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/microphone.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco PC
*/
Schema.addShape({
	name: "cisco pc",
	title: "PC",
	category: "cisco_computers_peripherals",
	props: {
		w: 78,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/pc.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/pc.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PC Adapter Card
*/
Schema.addShape({
	name: "pc adapter card",
	title: "PC Adapter Card",
	category: "cisco_computers_peripherals",
	props: {
		w: 57,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/pcAdapterCard.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/pcAdapterCard.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PC Routercard
*/
Schema.addShape({
	name: "pc routercard",
	title: "PC Routercard",
	category: "cisco_computers_peripherals",
	props: {
		w: 77,
		h: 69
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/pcRoutercard.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/pcRoutercard.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Printer
*/
Schema.addShape({
	name: "cisco printer",
	title: "Printer",
	category: "cisco_computers_peripherals",
	props: {
		w: 78,
		h: 29
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/printer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/printer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Scanner
*/
Schema.addShape({
	name: "cisco scanner",
	title: "Scanner",
	category: "cisco_computers_peripherals",
	props: {
		w: 80,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/scanner.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/scanner.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Speaker
*/
Schema.addShape({
	name: "speaker",
	title: "Speaker",
	category: "cisco_computers_peripherals",
	props: {
		w: 45,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/speaker.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/speaker.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Sun Workstation
*/
Schema.addShape({
	name: "sun workstation",
	title: "Sun Workstation",
	category: "cisco_computers_peripherals",
	props: {
		w: 77,
		h: 62
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/sunWorkstation.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/sunWorkstation.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Supercomputer
*/
Schema.addShape({
	name: "supercomputer",
	title: "Supercomputer",
	category: "cisco_computers_peripherals",
	props: {
		w: 67,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/supercomputer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/supercomputer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Tablet
*/
Schema.addShape({
	name: "cisco tablet",
	title: "Cisco Tablet",
	category: "cisco_computers_peripherals",
	props: {
		w: 75,
		h: 41
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/tablet.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/tablet.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Terminal
*/
Schema.addShape({
	name: "terminal",
	title: "Terminal",
	category: "cisco_computers_peripherals",
	props: {
		w: 80,
		h: 73
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/terminal.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/terminal.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * UPC
*/
Schema.addShape({
	name: "upc",
	title: "UPC",
	category: "cisco_computers_peripherals",
	props: {
		w: 80,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/upc.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/upc.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Video Camera
*/
Schema.addShape({
	name: "video camera",
	title: "Video Camera",
	category: "cisco_computers_peripherals",
	props: {
		w: 55,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/videoCamera.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/videoCamera.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * WEB Browser
*/
Schema.addShape({
	name: "web browser",
	title: "WEB Browser",
	category: "cisco_computers_peripherals",
	props: {
		w: 78,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/webBrowser.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/webBrowser.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Workstation
*/
Schema.addShape({
	name: "workstation",
	title: "Workstation",
	category: "cisco_computers_peripherals",
	props: {
		w: 77,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/workstation.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ComputersandPeripherals/workstation.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
////////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_control_module",
	text: "Cisco Controllers and Modules",
	dataAttributes: []
});

/**
 * 10GE FCoE
*/
Schema.addShape({
	name: "10ge fcoe",
	title: "10GE FCoE",
	category: "cisco_control_module",
	props: {
		w: 57,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/10GE_FCoE.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/10GE_FCoE.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * 3174 (desktop)
*/
Schema.addShape({
	name: "3174 (desktop)",
	title: "3174 (desktop)",
	category: "cisco_control_module",
	props: {
		w: 76,
		h: 32
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/3174_desktop.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/3174_desktop.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * 3x74 (Floor)
*/
Schema.addShape({
	name: "3x74 (floor)",
	title: "3x74 (Floor)",
	category: "cisco_control_module",
	props: {
		w: 77,
		h: 66
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/3x74_floor.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/3x74_floor.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Content Switch Module
*/
Schema.addShape({
	name: "content switch module",
	title: "Content Switch Module",
	category: "cisco_control_module",
	props: {
		w: 78,
		h: 58
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/contentSwitchModule.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/contentSwitchModule.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Firewall Service Module (FwSM)
*/
Schema.addShape({
	name: "firewall service module (fwsm)",
	title: "Firewall Service Module (FwSM)",
	category: "cisco_control_module",
	props: {
		w: 47,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/firewallServiceModule_fwsm.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/firewallServiceModule_fwsm.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Service Module
*/
Schema.addShape({
	name: "service module",
	title: "Service Module",
	category: "cisco_control_module",
	props: {
		w: 61,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/ServiceModule.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/ServiceModule.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * System Controller
*/
Schema.addShape({
	name: "system controller",
	title: "System Controller",
	category: "cisco_control_module",
	props: {
		w: 75,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/systemController.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/systemController.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Virtual Switch Controller (VSC3000)
*/
Schema.addShape({
	name: "virtual switch controller (vsc3000)",
	title: "Virtual Switch Controller (VSC3000)",
	category: "cisco_control_module",
	props: {
		w: 38,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/virtualSwitchController_vsc3000.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ControllersandModules/virtualSwitchController_vsc3000.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
/////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_directors",
	text: "Cisco Directors",
	dataAttributes: []
});

/**
 * Content Engine (Cache Director)
*/
Schema.addShape({
	name: "content engine (cache director)",
	title: "Content Engine (Cache Director)",
	category: "cisco_directors",
	props: {
		w: 77,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Directors/contentEngine_cacheDirector.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Directors/contentEngine_cacheDirector.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Director-Class Fibre Channel Director
*/
Schema.addShape({
	name: "director-class fibre channel director",
	title: "Director-Class Fibre Channel Director",
	category: "cisco_directors",
	props: {
		w: 57,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Directors/director-classFibreChannelDirector.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Directors/director-classFibreChannelDirector.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Distributed Director
*/
Schema.addShape({
	name: "distributed director",
	title: "Distributed Director",
	category: "cisco_directors",
	props: {
		w: 77,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Directors/distributedDirector.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Directors/distributedDirector.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Localdirector
*/
Schema.addShape({
	name: "localdirector",
	title: "Localdirector",
	category: "cisco_directors",
	props: {
		w: 80,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Directors/localdirector.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Directors/localdirector.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Workgroup Director
*/
Schema.addShape({
	name: "workgroup director",
	title: "Workgroup Director",
	category: "cisco_directors",
	props: {
		w: 80,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Directors/workgroupDirector.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Directors/workgroupDirector.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_hubs_gateways",
	text: "Cisco Hubs and Gateways",
	dataAttributes: []
});

/**
 * 100baset hub
*/
Schema.addShape({
	name: "100baset hub",
	title: "100baset hub",
	category: "cisco_hubs_gateways",
	props: {
		w: 76,
		h: 38
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/100basetHub.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/100basetHub.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * access gateway
*/
Schema.addShape({
	name: "access gateway",
	title: "access gateway",
	category: "cisco_hubs_gateways",
	props: {
		w: 80,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/accessGateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/accessGateway.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Hub
*/
Schema.addShape({
	name: "cisco hub",
	title: "Cisco Hub",
	category: "cisco_hubs_gateways",
	props: {
		w: 76,
		h: 38
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/ciscoHub.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/ciscoHub.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Generic Gateway
*/
Schema.addShape({
	name: "generic gateway",
	title: "Generic Gateway",
	category: "cisco_hubs_gateways",
	props: {
		w: 67,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/genericGateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/genericGateway.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Hub
*/
Schema.addShape({
	name: "cisco_hub",
	title: "Hub",
	category: "cisco_hubs_gateways",
	props: {
		w: 67,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/hub.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/hub.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * MAS Gateway
*/
Schema.addShape({
	name: "mas gateway",
	title: "MAS Gateway",
	category: "cisco_hubs_gateways",
	props: {
		w: 74,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/masGateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/masGateway.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Small Hub
*/
Schema.addShape({
	name: "small hub",
	title: "Small Hub",
	category: "cisco_hubs_gateways",
	props: {
		w: 80,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/smallHub.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/smallHub.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Universal Gateway
*/
Schema.addShape({
	name: "universal gateway",
	title: "Universal Gateway",
	category: "cisco_hubs_gateways",
	props: {
		w: 74,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/universalGateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/universalGateway.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * VPN Gateway
*/
Schema.addShape({
	name: "cisco vpn gateway",
	title: "VPN Gateway",
	category: "cisco_hubs_gateways",
	props: {
		w: 76,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/vpnGateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/HubsandGateways/vpnGateway.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
//////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_misc",
	text: "Cisco  Misc",
	dataAttributes: []
});

/**
 * 15200
*/
Schema.addShape({
	name: "15200",
	title: "15200",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 46
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/15200.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/15200.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * 7500ars (7513)
*/
Schema.addShape({
	name: "7500ars (7513)",
	title: "7500ars (7513)",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/7500ars_7513.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/7500ars_7513.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * 6700 series
*/
Schema.addShape({
	name: "6700 series",
	title: "6700 series",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/6700Series.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/6700Series.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Access Point
*/
Schema.addShape({
	name: "cisco access point",
	title: "Cisco Access Point",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 33
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/accesspoint.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/accesspoint.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ACE
*/
Schema.addShape({
	name: "ace",
	title: "ACE",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ace.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ace.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ACS
*/
Schema.addShape({
	name: "ACS",
	title: "ACS",
	category: "cisco_misc",
	props: {
		w: 79,
		h: 56
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ACS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ACS.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ADM
*/
Schema.addShape({
	name: "adm",
	title: "ADM",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/adm.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/adm.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco ASA 5500
*/
Schema.addShape({
	name: "cisco asa 5500",
	title: "Cisco ASA 5500",
	category: "cisco_misc",
	props: {
		w: 66,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ciscoAsa5500.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ciscoAsa5500.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Asic Processor
*/
Schema.addShape({
	name: "asic processor",
	title: "Asic Processor",
	category: "cisco_misc",
	props: {
		w: 56,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/asicProcessor.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/asicProcessor.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ASR 1000 Series
*/
Schema.addShape({
	name: "asr 1000 series",
	title: "ASR 1000 Series",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 71
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ASR1000Series.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ASR1000Series.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ATA
*/
Schema.addShape({
	name: "ata",
	title: "ATA",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 42
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ata.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ata.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ATM 3800
*/
Schema.addShape({
	name: "atm 3800",
	title: "ATM 3800",
	category: "cisco_misc",
	props: {
		w: 67,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/atm3800.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/atm3800.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * AVS
*/
Schema.addShape({
	name: "avs",
	title: "AVS",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/avs.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/avs.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * AXP
*/
Schema.addShape({
	name: "axp",
	title: "AXP",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 72
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/AXP.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/AXP.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * BBSM
*/
Schema.addShape({
	name: "bbsm",
	title: "BBSM",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 31
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/bbsm.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/bbsm.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Breakout Box
*/
Schema.addShape({
	name: "breakout box",
	title: "Breakout Box",
	category: "cisco_misc",
	props: {
		w: 46,
		h: 79
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/breakoutBox.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/breakoutBox.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Bridge
*/
Schema.addShape({
	name: "bridge",
	title: "Bridge",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 63
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/bridge.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/bridge.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * BTS 10200
*/
Schema.addShape({
	name: "bts 10200",
	title: "BTS 10200",
	category: "cisco_misc",
	props: {
		w: 49,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/bts10200.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/bts10200.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Call Manager
*/
Schema.addShape({
	name: "call manager",
	title: "Call Manager",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 49
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/callmanager.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/callmanager.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Car
*/
Schema.addShape({
	name: "car",
	title: "Car",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 49
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/car.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/car.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Carrier Routing System
*/
Schema.addShape({
	name: "carrier routing system",
	title: "Carrier Routing System",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/carrierRoutingSystem.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/carrierRoutingSystem.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * CDDI FDDI
*/
Schema.addShape({
	name: "cddi fddi",
	title: "CDDI FDDI",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 37
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/cddi-fddi.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/cddi-fddi.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * CDM
*/
Schema.addShape({
	name: "cdm",
	title: "CDM",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 50
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/cdm.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/cdm.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco 1000
*/
Schema.addShape({
	name: "cisco 1000",
	title: "Cisco 1000",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 67
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/cisco1000.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/cisco1000.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco CA
*/
Schema.addShape({
	name: "cisco ca",
	title: "Cisco CA",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 68
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ciscoCa.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ciscoCa.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Unityexpress
*/
Schema.addShape({
	name: "cisco unityexpress",
	title: "Cisco Unityexpress",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 65
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ciscoUnityexpress.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ciscoUnityexpress.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Works
*/
Schema.addShape({
	name: "cisco works",
	title: "Cisco Works",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 62
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ciscoworks.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ciscoworks.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Contact Center
*/
Schema.addShape({
	name: "contact center",
	title: "Contact Center",
	category: "cisco_misc",
	props: {
		w: 71,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/contactCenter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/contactCenter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Content Transformation Engine (CTE)
*/
Schema.addShape({
	name: "content transformation engine (cte)",
	title: "Content Transformation Engine (CTE)",
	category: "cisco_misc",
	props: {
		w: 78,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/contentTransformationEngine_cte.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/contentTransformationEngine_cte.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * CS MARS
*/
Schema.addShape({
	name: "CS MARS",
	title: "CS MARS",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/cs-mars.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/cs-mars.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * CSM S
*/
Schema.addShape({
	name: "CSM S",
	title: "CSM S",
	category: "cisco_misc",
	props: {
		w: 57,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/csm-s.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/csm-s.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * CSU DSU
*/
Schema.addShape({
	name: "CSU DSU",
	title: "CSU DSU",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 32
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/csu_dsu.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/csu_dsu.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * CUBE
*/
Schema.addShape({
	name: "CUBE",
	title: "CUBE",
	category: "cisco_misc",
	props: {
		w: 78,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/CUBE.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/CUBE.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Detector
*/
Schema.addShape({
	name: "detector",
	title: "Detector",
	category: "cisco_misc",
	props: {
		w: 78,
		h: 56
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/detector.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/detector.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Dot-dot
*/
Schema.addShape({
	name: "dot-dot",
	title: "Dot-dot",
	category: "cisco_misc",
	props: {
		w: 78,
		h: 56
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/dot-dot.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/dot-dot.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Dpt
*/
Schema.addShape({
	name: "dpt",
	title: "Dpt",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/dpt.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/dpt.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * DSLAM
*/
Schema.addShape({
	name: "dslam",
	title: "DSLAM",
	category: "cisco_misc",
	props: {
		w: 71,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/dslam.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/dslam.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Dual Mode
*/
Schema.addShape({
	name: "dual mode",
	title: "Dual Mode",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/dualModeAp.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/dualModeAp.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * DWDM Filter
*/
Schema.addShape({
	name: "dwdm filter",
	title: "DWDM Filter",
	category: "cisco_misc",
	props: {
		w: 56,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/dwdmFilter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/dwdmFilter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * FDDI Ring
*/
Schema.addShape({
	name: "fddi ring",
	title: "FDDI Ring",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 30
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/fddiRing.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/fddiRing.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Front End Processor
*/
Schema.addShape({
	name: "front end processor",
	title: "Front End Processor",
	category: "cisco_misc",
	props: {
		w: 64,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/frontEndProcessor.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/frontEndProcessor.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * General Applicance
*/
Schema.addShape({
	name: "general applicance",
	title: "General Applicance",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/generalApplicance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/generalApplicance.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Generic Processor
*/
Schema.addShape({
	name: "generic processor",
	title: "Generic Processor",
	category: "cisco_misc",
	props: {
		w: 53,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/genericProcessor.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/genericProcessor.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * H 323
*/
Schema.addShape({
	name: "h 323",
	title: "H 323",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 74
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/h.323.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/h.323.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Handheld
*/
Schema.addShape({
	name: "handheld",
	title: "Handheld",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 41
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/handheld.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/handheld.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * HP Mini
*/
Schema.addShape({
	name: "hp mini",
	title: "HP Mini",
	category: "cisco_misc",
	props: {
		w: 73,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/hpMini.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/hpMini.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ICM
*/
Schema.addShape({
	name: "icm",
	title: "ICM",
	category: "cisco_misc",
	props: {
		w: 36,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/icm.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/icm.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ICS
*/
Schema.addShape({
	name: "ics",
	title: "ICS",
	category: "cisco_misc",
	props: {
		w: 72,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ics.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ics.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Internet Streamer
*/
Schema.addShape({
	name: "internet streamer",
	title: "Internet Streamer",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 51
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/internetStreamer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/internetStreamer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IOS SLB
*/
Schema.addShape({
	name: "ios slb",
	title: "IOS SLB",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 51
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/iosSlb.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/iosSlb.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IP
*/
Schema.addShape({
	name: "ip",
	title: "IP",
	category: "cisco_misc",
	props: {
		w: 70,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ip.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ip.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IPTC
*/
Schema.addShape({
	name: "iptc",
	title: "IPTC",
	category: "cisco_misc",
	props: {
		w: 79,
		h: 44
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/iptc.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/iptc.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IPTV Content Manager
*/
Schema.addShape({
	name: "iptv content manager",
	title: "IPTV Content Manager",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 50
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/iptvContentManager.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/iptvContentManager.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IP Communicator
*/
Schema.addShape({
	name: "ip communicator",
	title: "IP Communicator",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 43
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ipCommunicator.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ipCommunicator.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IP DSL
*/
Schema.addShape({
	name: "ip dsl",
	title: "IP DSL",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 43
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ipDsl.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ipDsl.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ITP
*/
Schema.addShape({
	name: "itp",
	title: "ITP",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/itp.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/itp.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * JBOD
*/
Schema.addShape({
	name: "jbod",
	title: "JBOD",
	category: "cisco_misc",
	props: {
		w: 36,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/jbod.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/jbod.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Key
*/
Schema.addShape({
	name: "key",
	title: "Key",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 35
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/key.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/key.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Keys
*/
Schema.addShape({
	name: "keys",
	title: "Keys",
	category: "cisco_misc",
	props: {
		w: 57,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/keys.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/keys.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Lan to Lan
*/
Schema.addShape({
	name: "lan to lan",
	title: "Lan to Lan",
	category: "cisco_misc",
	props: {
		w: 74,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/lanToLan.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/lanToLan.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Lightweight AP
*/
Schema.addShape({
	name: "lightweight ap",
	title: "Lightweight AP",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 37
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/lightweightAp.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/lightweightAp.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Longreach CPE
*/
Schema.addShape({
	name: "longreach cpe",
	title: "Longreach CPE",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 72
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/longreachCpe.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/longreachCpe.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * MAU
*/
Schema.addShape({
	name: "MAU",
	title: "MAU",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 24
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/mau.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/mau.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * MCU
*/
Schema.addShape({
	name: "mcu",
	title: "MCU",
	category: "cisco_misc",
	props: {
		w: 66,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/mcu.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/mcu.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ME 1100
*/
Schema.addShape({
	name: "me 1100",
	title: "ME 1100",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/me1100.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/me1100.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Mediator
*/
Schema.addShape({
	name: "mediator",
	title: "Mediator",
	category: "cisco_misc",
	props: {
		w: 72,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Mediator.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Mediator.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Meetingplace
*/
Schema.addShape({
	name: "meetingplace",
	title: "Meetingplace",
	category: "cisco_misc",
	props: {
		w: 47,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/meetingplace.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/meetingplace.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Mesh AP
*/
Schema.addShape({
	name: "mesh ap",
	title: "Mesh AP",
	category: "cisco_misc",
	props: {
		w: 79,
		h: 44
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/meshAp.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/meshAp.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Metro 1500
*/
Schema.addShape({
	name: "metro 1500",
	title: "Metro 1500",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 67
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/metro1500.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/metro1500.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Mini VAX
*/
Schema.addShape({
	name: "mini vax",
	title: "Mini VAX",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 67
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/miniVax.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/miniVax.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Mobile Streamer
*/
Schema.addShape({
	name: "mobile streamer",
	title: "Mobile Streamer",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 51
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/mobileStreamer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/mobileStreamer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * MSE
*/
Schema.addShape({
	name: "mse",
	title: "MSE",
	category: "cisco_misc",
	props: {
		w: 78,
		h: 44
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/MSE.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/MSE.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * MUX
*/
Schema.addShape({
	name: "mux",
	title: "MUX",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 57
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/mux.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/mux.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * MXE
*/
Schema.addShape({
	name: "mxe",
	title: "MXE",
	category: "cisco_misc",
	props: {
		w: 72,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/MXE.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/MXE.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * NAC Appliance
*/
Schema.addShape({
	name: "nac appliance",
	title: "NAC Appliance",
	category: "cisco_misc",
	props: {
		w: 79,
		h: 60
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/nacAppliance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/nacAppliance.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * NCE
*/
Schema.addShape({
	name: "nce",
	title: "NCE",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/NCE.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/NCE.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Netranger
*/
Schema.addShape({
	name: "netranger",
	title: "Netranger",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/netranger.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/netranger.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Netsonar
*/
Schema.addShape({
	name: "netsonar",
	title: "Netsonar",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/netsonar.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/netsonar.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Network Management
*/
Schema.addShape({
	name: "network management",
	title: "Network Management",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 69
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/networkManagement.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/networkManagement.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Nexus 1000
*/
Schema.addShape({
	name: "nexus 1000",
	title: "Nexus 1000",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Nexus1000.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Nexus1000.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Nexus 2000
*/
Schema.addShape({
	name: "nexus 2000",
	title: "Nexus 2000",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 37
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Nexus2000.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Nexus2000.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Nexus 5000
*/
Schema.addShape({
	name: "nexus 5000",
	title: "Nexus 5000",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 37
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Nexus5000.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Nexus5000.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Nexus 7000
*/
Schema.addShape({
	name: "nexus 7000",
	title: "Nexus 7000",
	category: "cisco_misc",
	props: {
		w: 57,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Nexus7000.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Nexus7000.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Octel
*/
Schema.addShape({
	name: "octel",
	title: "Octel",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 63
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/octel.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/octel.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Ons15500
*/
Schema.addShape({
	name: "ons15500",
	title: "Ons15500",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ons15500.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ons15500.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Optical Amplifier
*/
Schema.addShape({
	name: "optical amplifier",
	title: "Optical Amplifier",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 58
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/opticalAmplifier.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/opticalAmplifier.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Optical Transport
*/
Schema.addShape({
	name: "optical transport",
	title: "Optical Transport",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/opticalTransport.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/opticalTransport.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PAD 1
*/
Schema.addShape({
	name: "pad 1",
	title: "PAD 1",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 61
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/padX.28.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/padX.28.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PAD 2
*/
Schema.addShape({
	name: "pad 2",
	title: "PAD 2",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 44
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pad.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pad.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Page Icon
*/
Schema.addShape({
	name: "page icon",
	title: "Page Icon",
	category: "cisco_misc",
	props: {
		w: 54,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pageIcon.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pageIcon.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PBX
*/
Schema.addShape({
	name: "pbx",
	title: "PBX",
	category: "cisco_misc",
	props: {
		w: 74,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pbx.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pbx.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PC Software
*/
Schema.addShape({
	name: "pc software",
	title: "PC Software",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 71
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pcSoftware.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pcSoftware.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PC Video
*/
Schema.addShape({
	name: "pc video",
	title: "PC Video",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 65
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pcVideo.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pcVideo.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PDA
*/
Schema.addShape({
	name: "pda",
	title: "PDA",
	category: "cisco_misc",
	props: {
		w: 55,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pda.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pda.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PMC
*/
Schema.addShape({
	name: "pmc",
	title: "PMC",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 49
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pmc.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pmc.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Protocol Translator
*/
Schema.addShape({
	name: "protocol translator",
	title: "Protocol Translator",
	category: "cisco_misc",
	props: {
		w: 52,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/protocolTranslator.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/protocolTranslator.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PXF
*/
Schema.addShape({
	name: "pxf",
	title: "PXF",
	category: "cisco_misc",
	props: {
		w: 61,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pxf.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/pxf.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Ratemux
*/
Schema.addShape({
	name: "ratemux",
	title: "Ratemux",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 60
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ratemux.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ratemux.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Repeater
*/
Schema.addShape({
	name: "repeater",
	title: "Repeater",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 50
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/repeater.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/repeater.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Route Switch Processor
*/
Schema.addShape({
	name: "route switch processor",
	title: "Route Switch Processor",
	category: "cisco_misc",
	props: {
		w: 56,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/routeSwitchProcessor.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/routeSwitchProcessor.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Rpsrps
*/
Schema.addShape({
	name: "rpsrps",
	title: "Rpsrps",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 50
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/rpsrps.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/rpsrps.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Safeharbor Icon
*/
Schema.addShape({
	name: "safeharbor icon",
	title: "Safeharbor Icon",
	category: "cisco_misc",
	props: {
		w: 58,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/safeharborIcon.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/safeharborIcon.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Service Control
*/
Schema.addShape({
	name: "service control",
	title: "Service Control",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 51
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/serviceControl.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/serviceControl.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Services
*/
Schema.addShape({
	name: "services",
	title: "Services",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 73
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Services.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/Services.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Set top box
*/
Schema.addShape({
	name: "set top box",
	title: "Set top box",
	category: "cisco_misc",
	props: {
		w: 79,
		h: 29
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/SetTopBox.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/SetTopBox.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * SSC
*/
Schema.addShape({
	name: "ssc",
	title: "SSC",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ssc.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ssc.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * SSL Terminator
*/
Schema.addShape({
	name: "ssl terminator",
	title: "SSL Terminator",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 69
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/sslTerminator.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/sslTerminator.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * STB
*/
Schema.addShape({
	name: "stb",
	title: "STB",
	category: "cisco_misc",
	props: {
		w: 79,
		h: 34
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/stb.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/stb.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * STP
*/
Schema.addShape({
	name: "stp",
	title: "STP",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/stp.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/stp.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Streamer
*/
Schema.addShape({
	name: "streamer",
	title: "Streamer",
	category: "cisco_misc",
	props: {
		w: 79,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/streamer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/streamer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * SVX
*/
Schema.addShape({
	name: "svx",
	title: "SVX",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 74
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/svx.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/svx.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Telecommuter Icon
*/
Schema.addShape({
	name: "telecommuter icon",
	title: "Telecommuter Icon",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 65
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/telecommuterIcon.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/telecommuterIcon.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Token
*/
Schema.addShape({
	name: "token",
	title: "Token",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/token.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/token.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * TP MCU
*/
Schema.addShape({
	name: "tp mcu",
	title: "TP MCU",
	category: "cisco_misc",
	props: {
		w: 65,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/TPMCU.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/TPMCU.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Transpath
*/
Schema.addShape({
	name: "transpath",
	title: "Transpath",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/transpath.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/transpath.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Truck
*/
Schema.addShape({
	name: "truck",
	title: "Truck",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 29
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/truck.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/truck.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Turret
*/
Schema.addShape({
	name: "turret",
	title: "Turret",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 30
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/turret.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/turret.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * TV
*/
Schema.addShape({
	name: "tv",
	title: "TV",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 74
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/tv.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/tv.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * UBR910
*/
Schema.addShape({
	name: "ubr910",
	title: "UBR910",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 37
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ubr910.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ubr910.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * UMG Series
*/
Schema.addShape({
	name: "umg series",
	title: "UMG Series",
	category: "cisco_misc",
	props: {
		w: 76,
		h: 37
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/umgSeries.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/umgSeries.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * UPS
*/
Schema.addShape({
	name: "ups",
	title: "UPS",
	category: "cisco_misc",
	props: {
		w: 80,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ups.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/ups.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Vault
*/
Schema.addShape({
	name: "vault",
	title: "Vault",
	category: "cisco_misc",
	props: {
		w: 75,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/vault.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/vault.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * VIP
*/
Schema.addShape({
	name: "vip",
	title: "VIP",
	category: "cisco_misc",
	props: {
		w: 57,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/vip.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/vip.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * VPN Concentrator
*/
Schema.addShape({
	name: "vpn concentrator",
	title: "VPN Concentrator",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/vpnConcentrator.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/vpnConcentrator.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * VSD
*/
Schema.addShape({
	name: "vsd",
	title: "VSD",
	category: "cisco_misc",
	props: {
		w: 78,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/VSD.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/VSD.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * VSS
*/
Schema.addShape({
	name: "vss",
	title: "VSS",
	category: "cisco_misc",
	props: {
		w: 56,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/VSS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/VSS.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * WAE
*/
Schema.addShape({
	name: "wae",
	title: "WAE",
	category: "cisco_misc",
	props: {
		w: 77,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/wae.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/wae.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * WISM
*/
Schema.addShape({
	name: "wism",
	title: "WISM",
	category: "cisco_misc",
	props: {
		w: 68,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/wism.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Misc/wism.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
///////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_modems_phones",
	text: "Cisco  Modems and Phones",
	dataAttributes: []
});

/**
 * Cable Modem
*/
Schema.addShape({
	name: "cable modem",
	title: "Cable Modem",
	category: "cisco_modems_phones",
	props: {
		w: 76,
		h: 37
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/cableModem.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/cableModem.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cellular Phone
*/
Schema.addShape({
	name: "cellular phone",
	title: "Cellular Phone",
	category: "cisco_modems_phones",
	props: {
		w: 42,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/cellularPhone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/cellularPhone.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Fax
*/
Schema.addShape({
	name: "fax",
	title: "Fax",
	category: "cisco_modems_phones",
	props: {
		w: 75,
		h: 35
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/fax.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/fax.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Hootphone
*/
Schema.addShape({
	name: "hootphone",
	title: "Hootphone",
	category: "cisco_modems_phones",
	props: {
		w: 76,
		h: 56
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/hootphone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/hootphone.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco IP Phone
*/
Schema.addShape({
	name: "cisco ip phone",
	title: "IP Phone",
	category: "cisco_modems_phones",
	props: {
		w: 75,
		h: 37
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/ipPhone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/ipPhone.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Mobile Access Ip Phone
*/
Schema.addShape({
	name: "mobile access ip phone",
	title: "Mobile Access Ip Phone",
	category: "cisco_modems_phones",
	props: {
		w: 78,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/mobileAccessIpPhone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/mobileAccessIpPhone.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Modem
*/
Schema.addShape({
	name: "modem",
	title: "Modem",
	category: "cisco_modems_phones",
	props: {
		w: 77,
		h: 28
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/modem.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/modem.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * CiscoPhone
*/
Schema.addShape({
	name: "cisco phone",
	title: "Phone",
	category: "cisco_modems_phones",
	props: {
		w: 76,
		h: 56
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/phone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/phone.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Phone Fax
*/
Schema.addShape({
	name: "phone fax",
	title: "Phone Fax",
	category: "cisco_modems_phones",
	props: {
		w: 80,
		h: 36
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/phone_fax.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/phone_fax.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * RF Modem
*/
Schema.addShape({
	name: "RF modem",
	title: "RF Modem",
	category: "cisco_modems_phones",
	props: {
		w: 80,
		h: 42
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/RFModem.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/RFModem.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Softphone
*/
Schema.addShape({
	name: "softphone",
	title: "Softphone",
	category: "cisco_modems_phones",
	props: {
		w: 78,
		h: 72
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/softphone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/ModemsandPhones/softphone.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
/////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_people",
	text: "Cisco  People",
	dataAttributes: []
});

/**
 * Androgenous Person
*/
Schema.addShape({
	name: "androgenous person",
	title: "Androgenous Person",
	category: "cisco_people",
	props: {
		w: 70,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/androgenousPerson.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/androgenousPerson.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Mac Woman
*/
Schema.addShape({
	name: "mac woman",
	title: "Mac Woman",
	category: "cisco_people",
	props: {
		w: 50,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/macWoman.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/macWoman.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Man Woman
*/
Schema.addShape({
	name: "man woman",
	title: "Man Woman",
	category: "cisco_people",
	props: {
		w: 56,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/man_woman.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/man_woman.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PC Man
*/
Schema.addShape({
	name: "pc man",
	title: "PC Man",
	category: "cisco_people",
	props: {
		w: 56,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/pcMan.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/pcMan.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Running Man
*/
Schema.addShape({
	name: "running man",
	title: "Running Man",
	category: "cisco_people",
	props: {
		w: 70,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/runningMan.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/runningMan.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Sitting Woman
*/
Schema.addShape({
	name: "sitting woman",
	title: "Sitting Woman",
	category: "cisco_people",
	props: {
		w: 52,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/sittingWoman.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/sittingWoman.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Standing man
*/
Schema.addShape({
	name: "standing man",
	title: "Standing man",
	category: "cisco_people",
	props: {
		w: 30,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/standingMan.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/standingMan.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Standing Woman
*/
Schema.addShape({
	name: "standing woman",
	title: "Standing Woman",
	category: "cisco_people",
	props: {
		w: 30,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/standingWoman.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/People/standingWoman.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
//////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_routers",
	text: "Cisco  Routers",
	dataAttributes: []
});

/**
 * 10700
*/
Schema.addShape({
	name: "10700",
	title: "10700",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/10700.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/10700.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * 3200 Mobile Access Router
*/
Schema.addShape({
	name: "3200 mobile access router",
	title: "3200 Mobile Access Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 45
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/3200MobileAccessRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/3200MobileAccessRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ATM Router
*/
Schema.addShape({
	name: "atm router",
	title: "ATM Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/atmRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/atmRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ATM Tag Switch Router
*/
Schema.addShape({
	name: "atm tag switch router",
	title: "ATM Tag Switch Router",
	category: "cisco_routers",
	props: {
		w: 64,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/atmTagSwitchRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/atmTagSwitchRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Broadband Router
*/
Schema.addShape({
	name: "broadband router",
	title: "Broadband Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/broadbandRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/broadbandRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Content Service Router
*/
Schema.addShape({
	name: "content service router",
	title: "Content Service Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/contentServiceRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/contentServiceRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Gigabit Switch ATM Tag Router
*/
Schema.addShape({
	name: "gigabit switch atm tag router",
	title: "Gigabit Switch ATM Tag Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/gigabitSwitchAtmTagRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/gigabitSwitchAtmTagRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IAD Router
*/
Schema.addShape({
	name: "iad router",
	title: "IAD Router",
	category: "cisco_routers",
	props: {
		w: 74,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/iadRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/iadRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IP Telephony Router
*/
Schema.addShape({
	name: "ip telephony router",
	title: "IP Telephony Router",
	category: "cisco_routers",
	props: {
		w: 78,
		h: 68
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/ipTelephonyRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/ipTelephonyRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ISCSI Router
*/
Schema.addShape({
	name: "iscsi router",
	title: "ISCSI Router",
	category: "cisco_routers",
	props: {
		w: 78,
		h: 60
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/iscsiRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/iscsiRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Mobile Access Router
*/
Schema.addShape({
	name: "mobile access router",
	title: "Mobile Access Router",
	category: "cisco_routers",
	props: {
		w: 78,
		h: 46
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/mobileAccessRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/mobileAccessRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * NCE Router
*/
Schema.addShape({
	name: "nce router",
	title: "NCE Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/NCERouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/NCERouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Netflow Router
*/
Schema.addShape({
	name: "netflow router",
	title: "Netflow Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/netflowRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/netflowRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Optical Services Router
*/
Schema.addShape({
	name: "optical services router",
	title: "Optical Services Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/opticalServicesRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/opticalServicesRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Router With Silicon Switch
*/
Schema.addShape({
	name: "router with silicon switch",
	title: "Router With Silicon Switch",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/routerWithSiliconSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/routerWithSiliconSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Router
*/
Schema.addShape({
	name: "cisco router",
	title: "Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/router.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/router.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Router In Building
*/
Schema.addShape({
	name: "router in building",
	title: "Router In Building",
	category: "cisco_routers",
	props: {
		w: 54,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/routerinBuilding.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/routerinBuilding.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Service Router
*/
Schema.addShape({
	name: "service router",
	title: "Service Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/ServiceRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/ServiceRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Space Router
*/
Schema.addShape({
	name: "space router",
	title: "Space Router",
	category: "cisco_routers",
	props: {
		w: 78,
		h: 42
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/SpaceRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/SpaceRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Storage Router
*/
Schema.addShape({
	name: "storage router",
	title: "Storage Router",
	category: "cisco_routers",
	props: {
		w: 78,
		h: 60
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/storageRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/storageRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * TDM router
*/
Schema.addShape({
	name: "tdm router",
	title: "TDM router",
	category: "cisco_routers",
	props: {
		w: 78,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/tdmRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/tdmRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Voice Router
*/
Schema.addShape({
	name: "voice router",
	title: "Voice Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/voiceRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/voiceRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Wavelength Router
*/
Schema.addShape({
	name: "wavelength router",
	title: "Wavelength Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/wavelengthRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/wavelengthRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Wireless Router
*/
Schema.addShape({
	name: "wireless router",
	title: "Wireless Router",
	category: "cisco_routers",
	props: {
		w: 80,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/wirelessRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Routers/wirelessRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
///////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_security",
	text: "Cisco  Security",
	dataAttributes: []
});

/**
 * Centri Firewall
*/
Schema.addShape({
	name: "centri firewall",
	title: "Centri Firewall",
	category: "cisco_security",
	props: {
		w: 56,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/centriFirewall.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/centriFirewall.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Security
*/
Schema.addShape({
	name: "cisco security",
	title: "Cisco Security",
	category: "cisco_security",
	props: {
		w: 80,
		h: 72
	},
	lineStyle: {lineWidth: 0},
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/ciscosecurity.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/ciscosecurity.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Firewall
*/
Schema.addShape({
	name: "cisco firewall",
	title: "Cisco Firewall",
	category: "cisco_security",
	props: {
		w: 36,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/firewall.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/firewall.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Gatekeeper
*/
Schema.addShape({
	name: "gatekeeper",
	title: "Gatekeeper",
	category: "cisco_security",
	props: {
		w: 80,
		h: 58
	},
	lineStyle: {lineWidth: 0},
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/gatekeeper.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/gatekeeper.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Guard
*/
Schema.addShape({
	name: "guard",
	title: "Guard",
	category: "cisco_security",
	props: {
		w: 78,
		h: 50
	},
	lineStyle: {lineWidth: 0},
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/guard.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/guard.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IOS Firewall
*/
Schema.addShape({
	name: "ios firewall",
	title: "IOS Firewall",
	category: "cisco_security",
	props: {
		w: 50,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/iosFirewall.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/iosFirewall.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Lock
*/
Schema.addShape({
	name: "lock",
	title: "Lock",
	category: "cisco_security",
	props: {
		w: 68,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/lock.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/lock.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PIX Firewall
*/
Schema.addShape({
	name: "pix firewall",
	title: "PIX Firewall",
	category: "cisco_security",
	props: {
		w: 80,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/pixFirewall.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/pixFirewall.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Router Firewall
*/
Schema.addShape({
	name: "router Firewall",
	title: "Router Firewall",
	category: "cisco_security",
	props: {
		w: 78,
		h: 62
	},
	lineStyle: {lineWidth: 0},
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/router_firewall.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Security/router_firewall.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
/////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_servers",
	text: "Cisco  Servers",
	dataAttributes: []
});

/**
 * Cisco Unified Presence Server
*/
Schema.addShape({
	name: "cisco unified presence server",
	title: "Cisco Unified Presence Server",
	category: "cisco_servers",
	props: {
		w: 64,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/ciscoUnifiedPresenceServer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/ciscoUnifiedPresenceServer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Communications Server
*/
Schema.addShape({
	name: "communications server",
	title: "Communications Server",
	category: "cisco_servers",
	props: {
		w: 76,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/communicationsServer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/communicationsServer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Directory Server
*/
Schema.addShape({
	name: "directory server",
	title: "Directory Server",
	category: "cisco_servers",
	props: {
		w: 78,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/directoryServer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/directoryServer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * File Server
*/
Schema.addShape({
	name: "file server",
	title: "File Server",
	category: "cisco_servers",
	props: {
		w: 60,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/fileServer2.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/fileServer2.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Fileserver
*/
Schema.addShape({
	name: "fileserver",
	title: "Fileserver",
	category: "cisco_servers",
	props: {
		w: 56,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/fileserver.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/fileserver.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Host
*/
Schema.addShape({
	name: "host",
	title: "Host",
	category: "cisco_servers",
	props: {
		w: 78,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/host.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/host.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Iptv Server
*/
Schema.addShape({
	name: "iptv server",
	title: "Iptv Server",
	category: "cisco_servers",
	props: {
		w: 78,
		h: 52
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/iptvServer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/iptvServer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Microwebserver
*/
Schema.addShape({
	name: "microwebserver",
	title: "Microwebserver",
	category: "cisco_servers",
	props: {
		w: 80,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/microwebserver.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/microwebserver.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * MOH Server
*/
Schema.addShape({
	name: "moh server",
	title: "MOH Server",
	category: "cisco_servers",
	props: {
		w: 56,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/mohServer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/mohServer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Server With Router
*/
Schema.addShape({
	name: "server with router",
	title: "Server With Router",
	category: "cisco_servers",
	props: {
		w: 48,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/serverWithRouter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/serverWithRouter.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * SIP Proxy Werver
*/
Schema.addShape({
	name: "sip proxy werver",
	title: "SIP Proxy Werver",
	category: "cisco_servers",
	props: {
		w: 52,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/sipProxyWerver.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/sipProxyWerver.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Software Based Server
*/
Schema.addShape({
	name: "software based server",
	title: "Software Based Server",
	category: "cisco_servers",
	props: {
		w: 68,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/softwareBasedServer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/softwareBasedServer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Standard Host
*/
Schema.addShape({
	name: "standard host",
	title: "Standard Host",
	category: "cisco_servers",
	props: {
		w: 58,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/standardHost.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/standardHost.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Storage Server
*/
Schema.addShape({
	name: "storage server",
	title: "Storage Server",
	category: "cisco_servers",
	props: {
		w: 54,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/storageServer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/storageServer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Unity Server
*/
Schema.addShape({
	name: "unity server",
	title: "Unity Server",
	category: "cisco_servers",
	props: {
		w: 58,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/unityServer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/unityServer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Voice Commserver
*/
Schema.addShape({
	name: "voice commserver",
	title: "Voice Commserver",
	category: "cisco_servers",
	props: {
		w: 78,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/voiceCommserver.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/voiceCommserver.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * WWW Sserver
*/
Schema.addShape({
	name: "www server",
	title: "WWW Sserver",
	category: "cisco_servers",
	props: {
		w: 76,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/wwwServer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Servers/wwwServer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
///////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_storage",
	text: "Cisco  Storage",
	dataAttributes: []
});

/**
 * Cisco File Engine
*/
Schema.addShape({
	name: "cisco file engine",
	title: "Cisco File Engine",
	category: "cisco_storage",
	props: {
		w: 80,
		h: 58
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/ciscoFileEngine.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/ciscoFileEngine.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Cisco Cloud
*/
Schema.addShape({
	name: "cisco cloud",
	title: "Cisco Cloud",
	category: "cisco_storage",
	props: {
		w: 80,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/cloud.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/cloud.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Diskette
*/
Schema.addShape({
	name: "diskette",
	title: "Diskette",
	category: "cisco_storage",
	props: {
		w: 78,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/diskette.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/diskette.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * FC Storage
*/
Schema.addShape({
	name: "fc storage",
	title: "FC Storage",
	category: "cisco_storage",
	props: {
		w: 78,
		h: 46
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/fcStorage.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/fcStorage.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Fibre Channel Disk Subsystem
*/
Schema.addShape({
	name: "fibre channel disk subsystem",
	title: "Fibre Channel Disk Subsystem",
	category: "cisco_storage",
	props: {
		w: 56,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/fibreChannelDiskSubsystem.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/fibreChannelDiskSubsystem.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * File Cabinet
*/
Schema.addShape({
	name: "file cabinet",
	title: "File Cabinet",
	category: "cisco_storage",
	props: {
		w: 64,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/fileCabinet.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/fileCabinet.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Relational Database
*/
Schema.addShape({
	name: "relational database",
	title: "Relational Database",
	category: "cisco_storage",
	props: {
		w: 78,
		h: 62
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/relationalDatabase.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/relationalDatabase.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Tape Array
*/
Schema.addShape({
	name: "tape array",
	title: "Tape Array",
	category: "cisco_storage",
	props: {
		w: 56,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/tapeArray.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/tapeArray.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * WEB Cluster
*/
Schema.addShape({
	name: "web cluster",
	title: "WEB Cluster",
	category: "cisco_storage",
	props: {
		w: 78,
		h: 46
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/webCluster.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Storage/webCluster.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
/////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_switches",
	text: "Cisco  Switches",
	dataAttributes: []
});

/**
 * ATM Fast Gigabit Etherswitch
*/
Schema.addShape({
	name: "atm fast gigabit etherswitch",
	title: "ATM Fast Gigabit Etherswitch",
	category: "cisco_switches",
	props: {
		w: 78,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/atmFastGigabitEtherswitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/atmFastGigabitEtherswitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ATM Switch
*/
Schema.addShape({
	name: "atm switch",
	title: "ATM Switch",
	category: "cisco_switches",
	props: {
		w: 76,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/atmSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/atmSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Class 4 5 Switch
*/
Schema.addShape({
	name: "class 4 5 switch",
	title: "Class 4 5 Switch",
	category: "cisco_switches",
	props: {
		w: 76,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/class4_5Switch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/class4_5Switch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Content Service Switch 1100
*/
Schema.addShape({
	name: "content service switch 1100",
	title: "Content Service Switch 1100",
	category: "cisco_switches",
	props: {
		w: 78,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/contentServiceSwitch1100.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/contentServiceSwitch1100.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Content Switch
*/
Schema.addShape({
	name: "content switch",
	title: "Content Switch",
	category: "cisco_switches",
	props: {
		w: 60,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/contentSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/contentSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Fibre Channel Fabric Switch
*/
Schema.addShape({
	name: "fibre channel fabric switch",
	title: "Fibre Channel Fabric Switch",
	category: "cisco_switches",
	props: {
		w: 80,
		h: 60
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/fibreChannelFabricSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/fibreChannelFabricSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Generic Softswitch
*/
Schema.addShape({
	name: "generic softswitch",
	title: "Generic Softswitch",
	category: "cisco_switches",
	props: {
		w: 52,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/genericSoftswitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/genericSoftswitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Intelliswitch Stack
*/
Schema.addShape({
	name: "intelliswitch stack",
	title: "Intelliswitch Stack",
	category: "cisco_switches",
	props: {
		w: 72,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/intelliswitchStack.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/intelliswitchStack.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ISDN Switch
*/
Schema.addShape({
	name: "isdn switch",
	title: "ISDN Switch",
	category: "cisco_switches",
	props: {
		w: 76,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/isdnSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/isdnSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Layer 2 Remote Switch
*/
Schema.addShape({
	name: "layer 2 remote switch",
	title: "Layer 2 Remote Switch",
	category: "cisco_switches",
	props: {
		w: 78,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/layer2RemoteSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/layer2RemoteSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Layer 3 Switch
*/
Schema.addShape({
	name: "layer 3 switch",
	title: "Layer 3 Switch",
	category: "cisco_switches",
	props: {
		w: 78,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/layer3Switch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/layer3Switch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * MGX 8000 Multiservice Switch
*/
Schema.addShape({
	name: "mgx 8000 multiservice switch",
	title: "MGX 8000 Multiservice Switch",
	category: "cisco_switches",
	props: {
		w: 78,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/mgx8000MultiserviceSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/mgx8000MultiserviceSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Mulitswitch Device
*/
Schema.addShape({
	name: "mulitswitch device",
	title: "Mulitswitch Device",
	category: "cisco_switches",
	props: {
		w: 78,
		h: 50
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/mulitswitchDevice.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/mulitswitchDevice.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Multi-Fabric Server Switch
*/
Schema.addShape({
	name: "multi-fabric server switch",
	title: "Multi-Fabric Server Switch",
	category: "cisco_switches",
	props: {
		w: 56,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/multi-fabricServerSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/multi-fabricServerSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Multilayer Remote Switch
*/
Schema.addShape({
	name: "multilayer remote switch",
	title: "Multilayer Remote Switch",
	category: "cisco_switches",
	props: {
		w: 58,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/multilayerRemoteSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/multilayerRemoteSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PBX Switch
*/
Schema.addShape({
	name: "pbx switch",
	title: "PBX Switch",
	category: "cisco_switches",
	props: {
		w: 80,
		h: 74
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/pbxSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/pbxSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Programmable Switch
*/
Schema.addShape({
	name: "programmable switch",
	title: "Programmable Switch",
	category: "cisco_switches",
	props: {
		w: 76,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/programmableSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/programmableSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Server Switch
*/
Schema.addShape({
	name: "server switch",
	title: "Server Switch",
	category: "cisco_switches",
	props: {
		w: 76,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/serverSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/serverSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Simulitlayer Switch
*/
Schema.addShape({
	name: "simulitlayer switch",
	title: "Simulitlayer Switch",
	category: "cisco_switches",
	props: {
		w: 76,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/simulitlayerSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/simulitlayerSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Softswitch PGW MGC
*/
Schema.addShape({
	name: "softswitch pgw mgc",
	title: "Softswitch PGW MGC",
	category: "cisco_switches",
	props: {
		w: 68,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/softswitchPgwMgc.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/softswitchPgwMgc.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Virtual Layer Switch
*/
Schema.addShape({
	name: "virtual layer switch",
	title: "Virtual Layer Switch",
	category: "cisco_switches",
	props: {
		w: 58,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/virtualLayerSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/virtualLayerSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Voice ATM Switch
*/
Schema.addShape({
	name: "voice atm switch",
	title: "Voice ATM Switch",
	category: "cisco_switches",
	props: {
		w: 76,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/voiceAtmSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/voiceAtmSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Voice switch
*/
Schema.addShape({
	name: "voice switch",
	title: "Voice switch",
	category: "cisco_switches",
	props: {
		w: 78,
		h: 42
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/voiceSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/voiceSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Workgroup Switch
*/
Schema.addShape({
	name: "workgroup switch",
	title: "Workgroup Switch",
	category: "cisco_switches",
	props: {
		w: 78,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/workgroupSwitch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Switches/workgroupSwitch.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
/////////////
/**
 *
 */
Schema.addCategory({
	name: "cisco_wireless",
	text: "Cisco Wireless",
	dataAttributes: []
});

/**
 * Cisco Antenna
*/
Schema.addShape({
	name: "cisco antenna",
	title: "Cisco Antenna",
	category: "cisco_wireless",
	props: {
		w: 66,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/antenna.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/antenna.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Ground Terminal
*/
Schema.addShape({
	name: "ground terminal",
	title: "Ground Terminal",
	category: "cisco_wireless",
	props: {
		w: 66,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/GroundTerminal.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/GroundTerminal.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Radio Tower
*/
Schema.addShape({
	name: "radio tower",
	title: "Radio Tower",
	category: "cisco_wireless",
	props: {
		w: 30,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/radioTower.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/radioTower.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Sattelite Dish
*/
Schema.addShape({
	name: "sattelite dish",
	title: "Sattelite Dish",
	category: "cisco_wireless",
	props: {
		w: 60,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/satteliteDish.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/satteliteDish.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Sattelite
*/
Schema.addShape({
	name: "sattelite",
	title: "Sattelite",
	category: "cisco_wireless",
	props: {
		w: 80,
		h: 28
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/sattelite.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/sattelite.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * WI-FI Tag
*/
Schema.addShape({
	name: "wi-fi tag",
	title: "WI-FI Tag",
	category: "cisco_wireless",
	props: {
		w: 80,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wi-fiTag.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wi-fiTag.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Wireless Bridge
*/
Schema.addShape({
	name: "wireless bridge",
	title: "Wireless Bridge",
	category: "cisco_wireless",
	props: {
		w: 78,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wirelessBridge.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wirelessBridge.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Wireless Location Appliance
*/
Schema.addShape({
	name: "wireless location appliance",
	title: "Wireless Location Appliance",
	category: "cisco_wireless",
	props: {
		w: 78,
		h: 44
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wirelessLocationAppliance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wirelessLocationAppliance.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Wireless Transport
*/
Schema.addShape({
	name: "wireless transport",
	title: "Wireless Transport",
	category: "cisco_wireless",
	props: {
		w: 78,
		h: 56
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wirelessTransport.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wirelessTransport.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Wireless
*/
Schema.addShape({
	name: "wireless",
	title: "Wireless",
	category: "cisco_wireless",
	props: {
		w: 44,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wireless.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wireless.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Wlan Controller
*/
Schema.addShape({
	name: "wlan controller",
	title: "Wlan Controller",
	category: "cisco_wireless",
	props: {
		w: 80,
		h: 46
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wlanController.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_cisco/Wireless/wlanController.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});