/**
 *
 */
Schema.addCategory({
	name: "network",
	text: "Network",
	dataAttributes: []
});

/**
 * Access Point
*/
Schema.addShape({
	name: "access point",
	title: "Access Point",
	category: "network",
	props: {
		w: 80,
		h: 58
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/accessPoint.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/accessPoint.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Antenna
*/
Schema.addShape({
	name: "antenna",
	title: "Antenna",
	category: "network",
	props: {
		w: 13,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/antenna.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/antenna.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ADSL
*/
Schema.addShape({
	name: "adsl",
	title: "ADSL",
	category: "network",
	props: {
		w: 80,
		h: 24
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/adsl.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/adsl.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Building
*/
Schema.addShape({
	name: "building",
	title: "Building",
	category: "network",
	props: {
		w: 24,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/building.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/building.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Bus
*/
Schema.addShape({
	name: "bus",
	title: "Bus",
	category: "network",
	props: {
		w: 200,
		h: 20
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/bus.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/bus.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Network Cloud
*/
Schema.addShape({
	name: "network cloud",
	title: "Network Cloud",
	category: "network",
	props: {
		w: 76,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/cloud.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/cloud.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Comm
*/
Schema.addShape({
	name: "comm",
	title: "Comm",
	category: "network",
	props: {
		w: 45,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/comm.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/comm.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Dish Antenna
*/
Schema.addShape({
	name: "dish antenna",
	title: "Dish Antenna",
	category: "network",
	props: {
		w: 71,
		h: 79
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/dishAntenna.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/dishAntenna.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Ethernet
*/
Schema.addShape({
	name: "ethernet",
	title: "Ethernet",
	category: "network",
	props: {
		w: 75,
		h: 16
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/ethernet.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/ethernet.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Firewall
*/
Schema.addShape({
	name: "firewall",
	title: "Firewall",
	category: "network",
	props: {
		w: 75,
		h: 53
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/firewall.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/firewall.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Globe
*/
Schema.addShape({
	name: "globe",
	title: "Globe",
	category: "network",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/globe.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/globe.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
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
	name: "hub",
	title: "Hub",
	category: "network",
	props: {
		w: 82.5,
		h: 15
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/hub.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/hub.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * IP Phone
*/
Schema.addShape({
	name: "ip phone",
	title: "IP Phone",
	category: "network",
	props: {
		w: 75,
		h: 65
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/ipPhone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/ipPhone.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * iPhone
*/
Schema.addShape({
	name: "iphone",
	title: "iPhone",
	category: "network",
	props: {
		w: 40,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/iphone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/iphone.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * ISP
*/
Schema.addShape({
	name: "isp",
	title: "ISP",
	category: "network",
	props: {
		w: 67,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/isp.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/isp.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Mac
*/
Schema.addShape({
	name: "mac",
	title: "Mac",
	category: "network",
	props: {
		w: 76,
		h: 69
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/mac.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/mac.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * MacBook
*/
Schema.addShape({
	name: "macbook",
	title: "MacBook",
	category: "network",
	props: {
		w: 76,
		h: 43
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/macbook.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/macbook.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Monitor
*/
Schema.addShape({
	name: "monitor",
	title: "Monitor",
	category: "network",
	props: {
		w: 78,
		h: 65
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/monitor.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/monitor.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Notebook
*/
Schema.addShape({
	name: "notebook",
	title: "Notebook",
	category: "network",
	props: {
		w: 79,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/notebook.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/notebook.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Office
*/
Schema.addShape({
	name: "office",
	title: "Office",
	category: "network",
	props: {
		w: 78,
		h: 68
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/office.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/office.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * PC
*/
Schema.addShape({
	name: "pc",
	title: "PC",
	category: "network",
	props: {
		w: 77,
		h: 65
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/pc.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/pc.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Phone
*/
Schema.addShape({
	name: "phone",
	title: "Phone",
	category: "network",
	props: {
		w: 57,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/phone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/phone.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Printer
*/
Schema.addShape({
	name: "printer",
	title: "Printer",
	category: "network",
	props: {
		w: 77,
		h: 54
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/printer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/printer.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Router
*/
Schema.addShape({
	name: "router",
	title: "Router",
	category: "network",
	props: {
		w: 77,
		h: 20
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/router.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/router.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Satellite
*/
Schema.addShape({
	name: "satellite",
	title: "Satellite",
	category: "network",
	props: {
		w: 80,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/satellite.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/satellite.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Scanner
*/
Schema.addShape({
	name: "scanner",
	title: "Scanner",
	category: "network",
	props: {
		w: 79,
		h: 57
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/scanner.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/scanner.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Server
*/
Schema.addShape({
	name: "server",
	title: "Server",
	category: "network",
	props: {
		w: 36,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/server.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/server.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Signal
*/
Schema.addShape({
	name: "signal",
	title: "Signal",
	category: "network",
	props: {
		w: 47,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/signal.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/signal.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Tab
*/
Schema.addShape({
	name: "tab",
	title: "Tab",
	category: "network",
	props: {
		w: 57,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network/tab.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network/tab.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});