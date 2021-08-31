/**
 * 
 */
Schema.addCategory({
	name: "ios_controls",
	text: "<@i18n resource='schema.category.ios.controls'/>",
	dataAttributes: []
});

/**
 * Button
 */

Schema.addShape({
	name: "ios7Button1",
	title: "<@i18n resource='schema.ios.controls.button'/>",
	category: "ios_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 240,
		h: 40
	},
	anchors: [],
	lineStyle: {lineWidth: 0},
	fontStyle: {size: 16, color: "252,84,57", bold: true},
	textBlock: [{
		position: {x: 10, y: 0, w: "w-20", h: "h"},
		text: "<@i18n resource='schema.ios.controls.action'/>"
	}],
	path: [
		{
			actions: {ref: "roundRectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios_controls/thumb/button1.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "ios7Button2",
	title: "<@i18n resource='schema.ios.controls.button'/>",
	category: "ios_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 240,
		h: 40
	},
	anchors: [],
	lineStyle: {lineWidth: 0},
	fontStyle: {size: 16, color: "34,124,231"},
	textBlock: [{
		position: {x: 10, y: 0, w: "w-20", h: "h"},
		text: "Cancel"
	}],
	path: [
		{
			actions: {ref: "roundRectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios_controls/thumb/button2.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Text
 */
Schema.addShape({
	name: "ios7Text",
	title: "<@i18n resource='schema.ios.controls.input'/>",
	category: "ios_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 240,
		h: 30
	},
	anchors: [],
	lineStyle: {lineWidth: 0},
	fillStyle: {type: "solid", color: "215,216,218"},
	fontStyle: {size: 14, color: "80,80,80", textAlign: "left"},
	textBlock: [{
		position: {x: 10, y: 0, w: "w-20", h: "h"},
		text: "<@i18n resource='schema.ios.controls.input.text'/>"
	}],
	path: [
		{
			actions: {ref: "roundRectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios_controls/thumb/text.png", imageW: 30, imageH: 8, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "ios7Stepper",
	title: "<@i18n resource='schema.ios.controls.stepper'/>",
	category: "ios_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 90,
		h: 28
	},
	anchors: [],
	lineStyle: {lineWidth: 2, lineColor: "0,122,255"},
	fillStyle: {type: "solid", color: "0,0,0", alpha: 0.1},
	textBlock: [],
	path: [
		{
			actions: {ref: "roundRectangle"}
		},{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "w/2", y: 0},
				{action: "line", x: "w/2", y: "h"},
				{action: "move", x: "w/4-6", y: "h/2"},
				{action: "line", x: "w/4+6", y: "h/2"},
				{action: "move", x: "w*0.75-6", y: "h/2"},
				{action: "line", x: "w*0.75+6", y: "h/2"},
				{action: "move", x: "w*0.75", y: "h/2-6"},
				{action: "line", x: "w*0.75", y: "h/2+6"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = -2;
		w += 2;
		return [
			{
				fillStyle: {type: "image", alpha: 1, fileId: "/images/designer/ios_controls/thumb/stepper.png", imageW: 30, imageH: 9, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Slider
 */
Schema.addShape({
	name: "ios7Slider",
	title: "<@i18n resource='schema.ios.controls.slider'/>",
	category: "ios_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 200,
		h: 30
	},
	anchors: [],
	textBlock: [],
	resizeDir: ["l", "r"],
	path: [
		{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 4, lineColor: "73,126,191"},
			actions: [
				{action: "move", x: 0, y: "h/2"},
				{action: "line", x: "w*0.6", y: "h/2"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 4, lineColor: "203,203,203"},
			actions: [
				{action: "move", x: "w*0.6", y: "h/2"},
				{action: "line", x: "w", y: "h/2"}
			]
		},{
			fillStyle: {type: "image", fileId: "/images/designer/ios_controls/slider_ico.png", imageX: "w*0.6-13", imageY: "h/2-13", imageW: 26, imageH: 26, display: "static"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = -2;
		w += 2;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios_controls/thumb/slider.png", imageW: 25, imageH: 6, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Progress
 */
Schema.addShape({
	name: "ios7ControlProgress",
	title: "<@i18n resource='schema.ios.controls.progress'/>",
	category: "ios_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 200,
		h: 10
	},
	anchors: [],
	textBlock: [],
	resizeDir: ["l", "r"],
	path: [
		{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 4, lineColor: "73,126,191"},
			actions: [
				{action: "move", x: 0, y: "h/2"},
				{action: "line", x: "w*0.6", y: "h/2"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 4, lineColor: "203,203,203"},
			actions: [
				{action: "move", x: "w*0.6", y: "h/2"},
				{action: "line", x: "w", y: "h/2"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * Switch
 */
Schema.addShape({
	name: "ios7SwitchOn",
	title: "<@i18n resource='schema.ios.controls.switch.on'/>",
	category: "ios_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 50,
		h: 28
	},
	anchors: [],
	textBlock: [],
	resizeDir: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_controls/switch_on.png", imageW: 50, imageH: 28, display: "original"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = -2;
		w += 2;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios_controls/thumb/switch_on.png", imageW: 30, imageH: 17, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "ios7SwitchOff",
	title: "<@i18n resource='schema.ios.controls.switch.off'/>",
	category: "ios_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 50,
		h: 28
	},
	anchors: [],
	textBlock: [],
	resizeDir: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_controls/switch_off.png", imageW: 50, imageH: 28, display: "original"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = -2;
		w += 2;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios_controls/thumb/switch_off.png", imageW: 30, imageH: 17, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Sort
 */
Schema.addShape({
	name: "ios7Sort",
	title: "<@i18n resource='schema.ios.controls.sort'/>",
	category: "ios_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 12,
		h: 311
	},
	anchors: [],
	textBlock: [],
	resizeDir: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_controls/sort.png", imageW: 12, imageH: 311, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = -2;
		w += 2;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios_controls/thumb/sort.png", imageW: 8, imageH: 30, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});






