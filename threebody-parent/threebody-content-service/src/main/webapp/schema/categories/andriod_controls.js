/**
 * 
 */
Schema.addCategory({
	name: "andriod_controls",
	text: "<@i18n resource='schema.category.android.forms'/>",
	dataAttributes: []
});

/**
 * Button
 */

Schema.addShape({
	name: "andriodButton1",
	title: "Button",
	category: "andriod_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 80,
		h: 35
	},
	anchors: [],
	lineStyle: {lineWidth: 0},
	fontStyle: {size: 13, color: "80,80,80", bold: false},
	fillStyle: {type: "solid", color: "213,213,213"},
	textBlock: [{
		position: {x: 10, y: 0, w: "w-20", h: "h"},
		text: "Button"
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
				fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/thumb/button1.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});



/**
 * Input
 */

Schema.addShape({
	name: "andriodInput1",
	title: "<@i18n resource='schema.category.android.forms.input'/>",
	category: "andriod_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 180,
		h: 35
	},
	anchors: [],
	lineStyle: {lineWidth: 0},
	fontStyle: {size: 13, color: "80,80,80", bold: false,textAlign:"left"},
	fillStyle: {type: "solid", color: "233,233,233"},
	textBlock: [{
		position: {x: 10, y: 0, w: "w-20", h: "h"},
		text: "<@i18n resource='schema.category.android.forms.input'/>"
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
				fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/thumb/input.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Check box
 */

Schema.addShape({
	name: "andriodCheck",
	title: "Checkbox",
	category: "andriod_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 25,
		h: 25
	},
	anchors: [],
	lineStyle: {lineWidth: 0},
	fontStyle: {size: 13, color: "80,80,80", bold: false,textAlign:"left"},
	resizeDir: [],
	textBlock: [{
		position: {x: 28, y: 0, w: "w*2+180", h: "h"},
		text: "Checkbox"
	}],
	path: [
		{
			fillStyle: {alpha: 0},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/checkbox.png",display: "original"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/thumb/checkbox.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Radio box
 */

Schema.addShape({
	name: "andriodRadio",
	title: "Radio Button",
	category: "andriod_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 25,
		h: 25
	},
	anchors: [],
	lineStyle: {lineWidth: 0},
	fontStyle: {size: 13, color: "80,80,80", bold: false,textAlign:"left"},
	resizeDir: [],
	textBlock: [{
		position: {x: 28, y: 0, w: "w*2 + 180", h: "h"},
		text: "Radio Button"
	}],
	path: [
		{
			fillStyle: {alpha: 0},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/radio.png",display: "original"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = -5;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/thumb/radio.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Switch
 */
Schema.addShape({
	name: "andriodSwitchOff",
	title: "Switch Off",
	category: "andriod_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 70,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	anchors: [],
	resizeDir: [],
	textBlock:[],
	path: [
		{
			fillStyle: {alpha: 0},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/off.png",display: "original"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/thumb/off.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
/**
 * Switch
 */
Schema.addShape({
	name: "andriodSwitchOnf",
	title: "Switch On",
	category: "andriod_controls",
	attribute: {
		linkable: false
	},
	props: {
		w: 70,
		h: 40
	},
	lineStyle: {lineWidth: 0},
	anchors: [],
	textBlock:[],
	resizeDir: [],
	path: [
		{
			fillStyle: {alpha: 0},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/on.png",display: "original"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/thumb/on.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
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
	name: "andriodSlider",
	title: "<@i18n resource='schema.category.android.forms.slider'/>",
	category: "andriod_controls",
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
			lineStyle: {lineWidth: 4, lineColor: "0,150,136"},
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
			fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/slider_icon.png", imageX: "w*0.6-13", imageY: "h/2-13", imageW: 26, imageH: 26, display: "static"},
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
				fillStyle: {type: "image", fileId: "/images/designer/andriod_controls/thumb/slider.png", imageW: 25, imageH: 6, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});