/**
 * 
 */
Schema.addCategory({
	name: "ios_elements",
	text: "<@i18n resource='schema.category.ios.elements'/>",
	dataAttributes: []
});

/**
 * Heading
 */
Schema.addShape({
	name: "ios7Heading1",
	title: "<@i18n resource='schema.ios.elements.heading'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 120,
		h: 30
	},
	anchors: [],
	fillStyle: {type: "none"},
	fontStyle: {bold: true, size: 15},
	textBlock: [{
		position: {x: 0, y: 0, w: "w", h: "h"},
		text: "<@i18n resource='schema.ios.elements.heading'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/heading.png", imageW: 30, imageH: 11, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: 0, y: 0},
					{action: "line", x: w, y: 0},
					{action: "line", x: w, y: h},
					{action: "line", x: 0, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "ios7Heading2",
	title: "<@i18n resource='schema.ios.elements.heading'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 120,
		h: 30
	},
	anchors: [],
	fillStyle: {type: "none"},
	fontStyle: {bold: true, size: 15, color: "34,124,231"},
	textBlock: [{
		position: {x: 0, y: 0, w: "w", h: "h"},
		text: "<@i18n resource='schema.ios.elements.heading'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/heading2.png", imageW: 30, imageH: 11, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: 0, y: 0},
					{action: "line", x: w, y: 0},
					{action: "line", x: w, y: h},
					{action: "line", x: 0, y: h},
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
	name: "ios7TextLabel",
	title: "<@i18n resource='schema.ios.elements.text'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 200,
		h: 40
	},
	anchors: [],
	fillStyle: {type: "none"},
	fontStyle: {size: 12, color: "132,132,132", textAlign: "left", vAlign: "top"},
	textBlock: [{
		position: {x: 0, y: 0, w: "w", h: "h"},
		text: "<@i18n resource='schema.ios.elements.text.content'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/text.png", imageW: 30, imageH: 12, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: 0, y: 0},
					{action: "line", x: w, y: 0},
					{action: "line", x: w, y: h},
					{action: "line", x: 0, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "ios7Label",
	title: "<@i18n resource='schema.ios.elements.label'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 100,
		h: 20
	},
	anchors: [],
	fillStyle: {type: "none"},
	fontStyle: {color: "100,100,100", textAlign: "left"},
	textBlock: [{
		position: {x: 0, y: 0, w: "w", h: "h"},
		text: "<@i18n resource='schema.ios.elements.label'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/label.png", imageW: 30, imageH: 6, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: 0, y: 0},
					{action: "line", x: w, y: 0},
					{action: "line", x: w, y: h},
					{action: "line", x: 0, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "ios7TransparentBg",
	title: "<@i18n resource='schema.ios.elements.toolbarbg'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 45
	},
	anchors: [],
	fillStyle: {type: "solid", color: "247,247,247", alpha: 0.6},
	textBlock: [],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				lineStyle: {lineWidth: 0},
				fillStyle: {type: "solid", color: "200,200,200"},
				actions: [
					{action: "move", x: 0, y: -6},
					{action: "line", x: w, y: -6},
					{action: "line", x: w, y: h+6},
					{action: "line", x: 0, y: h+6},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * 状态栏
 */
Schema.addShape({
	name: "ios7StatusDark",
	title: "<@i18n resource='schema.ios.elements.statusbar.dark'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 20
	},
	anchors: [],
	resizeDir: [],
	fillStyle: {type: "none"},
	textBlock: [{
		position: {x: 100, y: 0, w: 80, h: 20}, text: "10:34 A.M", fontStyle: {bold: true, size: 12, color: "0,0,0"}
	}],
	path: [
		{
			fillStyle: {alpha: 0.6},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},{
			fillStyle: {type: "image", fileId: "/images/designer/ios/status_black.png", imageW: 280, imageH: 20, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/status_black.png", imageW: 26, imageH: 20, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: 0, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: 0, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "ios7StatusLight",
	title: "<@i18n resource='schema.ios.elements.statusbar.light'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 20
	},
	anchors: [],
	resizeDir: [],
	fillStyle: {type: "none"},
	textBlock: [{
		position: {x: 100, y: 0, w: 80, h: 20}, text: "10:34 A.M", fontStyle: {bold: true, size: 12, color: "255,255,255"}
	}],
	path: [
		{
			fillStyle: {alpha: 0.6},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},{
			fillStyle: {type: "image", fileId: "/images/designer/ios/status_white.png", imageW: 280, imageH: 20, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/status_white.png", imageW: 26, imageH: 20, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: 0, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: 0, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * 导航
 */
Schema.addShape({
	name: "ios7Nav",
	title: "<@i18n resource='schema.ios.elements.nav'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 45
	},
	resizeDir: [],
	anchors: [],
	fillStyle: {type: "solid", color: "247,247,247"},
	fontStyle: {bold: true, size: 16, color: "34,124,231"},
	lineStyle: {lineColor: "27,124,250"},
	textBlock: [{
		position: {x: 25, y: 5, w: 80, h: 35}, text: "<@i18n resource='schema.ios.elements.nav.back'/>", fontStyle: {textAlign: "left"}
	},{
		position: {x: 190, y: 5, w: 80, h: 35}, text: "<@i18n resource='schema.ios.elements.nav.action'/>", fontStyle: {textAlign: "right"}
	}],
	path: [
		{
			lineStyle: {lineWidth: 0, alpha: 0.6},
			actions: {ref: "rectangle"}
		},{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "18", y: "h*0.25"},
				{action: "line", x: 8, y: "h/2"},
				{action: "line", x: "18", y: "h*0.75"}
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
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/nav_bar.png", imageW: 26, imageH: 20, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: 0, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: 0, y: h},
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
	name: "ios7Progress",
	title: "<@i18n resource='schema.ios.elements.progress'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 50
	},
	resizeDir: [],
	anchors: [],
	fillStyle: {type: "solid", color: "247,247,247", alpha: 0.6},
	fontStyle: {bold: true, size: 12},
	textBlock: [{
		position: {x: 40, y: 8, w: 200, h: 37}, text: "<@i18n resource='schema.ios.elements.progress.content'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			lineStyle: {lineWidth: 3, lineColor: "203,203,203"},
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: 0, y: 1.5},
				{action: "line", x: "w", y: 1.5}
			]
		},
		{
			lineStyle: {lineWidth: 3, lineColor: "0,122,255"},
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: 0, y: 1.5},
				{action: "line", x: "w*0.6", y: 1.5}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * Scope
 */
Schema.addShape({
	name: "ios7TitleScope",
	title: "<@i18n resource='schema.ios.elements.scope'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 80
	},
	resizeDir: [],
	anchors: [],
	fillStyle: {type: "solid", color: "247,247,247"},
	fontStyle: {size: 14, color: "0,122,255"},
	textBlock: [{
		position: {x: 90, y: 5, w: 100, h: 25}, text: "<@i18n resource='schema.ios.elements.scope.title'/>", fontStyle: {bold: true, color: "50,50,50"}
	},{
		position: {x: 185, y: 5, w: 80, h: 25}, text: "<@i18n resource='schema.ios.elements.scope.cancel'/>", fontStyle: {textAlign: "right"}
	},{
		position: {x: 15, y: 37, w: 83, h: 28}, text: "<@i18n resource='schema.ios.elements.scope.text'/>"
	},{
		position: {x: 98, y: 37, w: 83, h: 28}, text: "<@i18n resource='schema.ios.elements.scope.text'/>", fontStyle: {color: "255,255,255"}
	},{
		position: {x: 181, y: 37, w: 83, h: 28}, text: "<@i18n resource='schema.ios.elements.scope.text'/>"
	}],
	path: [
		{
			fillStyle: {alpha: 0.6},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			lineStyle: {lineWidth: 2, lineColor: "0,122,255"},
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "15", y: "h/2+2"},
				{action: "quadraticCurve", x1: "15", y1: "h/2-3", x: "20", y: "h/2-3"},
				{action: "line", x: "w-20", y: "h/2-3"},
				{action: "quadraticCurve", x1: "w-15", y1: "h/2-3", x: "w-15", y: "h/2+2"},
				{action: "line", x: "w-15", y: "h*0.75"},
				{action: "quadraticCurve", x1: "w-15", y1: "h*0.8125", x: "w-20", y: "h*0.8125"},
				{action: "line", x: "20", y: "h*0.8125"},
				{action: "quadraticCurve", x1: "15", y1: "h*0.8125", x: "15", y: "h*0.75"},
				{action: "close"}
			]
		},{
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "0,122,255"},
			actions: [
				{action: "move", x: "w*0.35", y: "h/2-3"},
				{action: "line", x: "w*0.65", y: "h/2-3"},
				{action: "line", x: "w*0.65", y: "h*0.8125"},
				{action: "line", x: "w*0.35", y: "h*0.8125"},
				{action: "close"}
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
		var x = -1;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/scope_titled.png", imageW: 28, imageH: 24, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Scope
 */
Schema.addShape({
	name: "ios7Scope",
	title: "<@i18n resource='schema.ios.elements.scope'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 250,
		h: 28
	},
	resizeDir: [],
	anchors: [],
	fontStyle: {size: 14, color: "0,122,255"},
	textBlock: [{
		position: {x: 0, y: 0, w: 83, h: 28}, text: "<@i18n resource='schema.ios.elements.scope.text'/>"
	},{
		position: {x: 83, y: 0, w: 83, h: 28}, text: "<@i18n resource='schema.ios.elements.scope.text'/>", fontStyle: {color: "255,255,255"}
	},{
		position: {x: 166, y: 0, w: 83, h: 28}, text: "<@i18n resource='schema.ios.elements.scope.text'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "0,122,255"},
			actions: [
				{action: "move", x: "w*0.33", y: 0},
				{action: "line", x: "w*0.66", y: 0},
				{action: "line", x: "w*0.66", y: "h"},
				{action: "line", x: "w*0.33", y: "h"},
				{action: "close"}
			]
		},
		{
			lineStyle: {lineWidth: 2, lineColor: "0,122,255"},
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "0", y: "5"},
				{action: "quadraticCurve", x1: 0, y1: 0, x: 5, y: 0},
				{action: "line", x: "w-5", y: 0},
				{action: "quadraticCurve", x1: "w", y1: 0, x: "w", y: 5},
				{action: "line", x: "w", y: "h-5"},
				{action: "quadraticCurve", x1: "w", y1: "h", x: "w-5", y: "h"},
				{action: "line", x: 5, y: "h"},
				{action: "quadraticCurve", x1: 0, y1: "h", x: 0, y: "h-5"},
				{action: "close"}
			]
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = -1;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/scope.png", imageW: 28, imageH: 24, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Search
 */
Schema.addShape({
	name: "ios7Search",
	title: "<@i18n resource='schema.ios.elements.search'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 45
	},
	resizeDir: [],
	anchors: [],
	fillStyle: {type: "solid", color: "247,247,247"},
	fontStyle: {size: 14, textAlign: "left", color: "100,100,100"},
	textBlock: [{
		position: {x: 33, y: 12, w: 157, h: 21}, text: "<@i18n resource='schema.ios.elements.search.search'/>"
	},{
		position: {x: 202, y: 5, w: 68, h: 35}, text: "<@i18n resource='schema.ios.elements.search.cancel'/>", fontStyle: {size: 14, textAlign: "center", bold: true}
	}],
	path: [
		{
			fillStyle: {alpha: 0.6},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "solid", color: "255,255,255"},
			lineStyle: {lineWidth: 0},
			actions: [
				{action: "move", x: "7", y: "12"},
				{action: "quadraticCurve", x1: "7", y1: "7", x: "12", y: "7"},
				{action: "line", x: "190", y: "7"},
				{action: "quadraticCurve", x1: "195", y1: "7", x: "195", y: "12"},
				{action: "line", x: "195", y: "h-12"},
				{action: "quadraticCurve", x1: "195", y1: "h-7", x: "190", y: "h-7"},
				{action: "line", x: "12", y: "h-7"},
				{action: "quadraticCurve", x1: "7", y1: "h-7", x: "7", y: "h-12"},
				{action: "close"}
			]
		},{
			fillStyle: {type: "image", fileId: "/images/designer/ios/search_ico.png", imageW: 16, imageH: 16, display: "static", imageX: "w*0.05", imageY: "h*0.3"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = -1;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/search.png", imageW: 28, imageH: 24, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * List View
 */
Schema.addShape({
	name: "ios7ListView",
	title: "<@i18n resource='schema.ios.elements.list'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 160
	},
	anchors: [],
	fontStyle: {size: 14, textAlign: "left"},
	textBlock: [{
		position: {x: 15, y: "5", w: 265, h: "h/4-10"}, text: "<@i18n resource='schema.ios.elements.heading'/>"
	},{
		position: {x: 15, y: "h/4+5", w: 265, h: "h/4-10"}, text: "<@i18n resource='schema.ios.elements.heading'/>"
	},{
		position: {x: 15, y: "h/2+5", w: 265, h: "h/4-10"}, text: "<@i18n resource='schema.ios.elements.heading'/>"
	},{
		position: {x: 15, y: "h*0.75+5", w: 265, h: "h/4-10"}, text: "<@i18n resource='schema.ios.elements.heading'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 1, lineColor: "200,200,200"},
			actions: [
				{action: "move", x: 15, y: "Math.round(h/4) + 0.5"},
				{action: "line", x: "w", y: "Math.round(h/4) + 0.5"},
				{action: "move", x: 15, y: "Math.round(h/2) + 0.5"},
				{action: "line", x: "w", y: "Math.round(h/2) + 0.5"},
				{action: "move", x: 15, y: "Math.round(h*0.75) + 0.5"},
				{action: "line", x: "w", y: "Math.round(h*0.75) + 0.5"},
				{action: "move", x: 15, y: "h - 0.5"},
				{action: "line", x: "w", y: "h - 0.5"}
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
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/list_view.png", imageW: 28, imageH: 16, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * List Row
 */
Schema.addShape({
	name: "ios7ListRow",
	title: "<@i18n resource='schema.ios.elements.listrow'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 40
	},
	anchors: [],
	fontStyle: {size: 14, textAlign: "left"},
	textBlock: [{
		position: {x: 15, y: 5, w: 265, h: "h-10"}, text: "<@i18n resource='schema.ios.elements.heading'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 1, lineColor: "200,200,200"},
			actions: [
				{action: "move", x: 15, y: "h - 0.5"},
				{action: "line", x: "w", y: "h - 0.5"}
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
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/list_row.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Popout
 */
Schema.addShape({
	name: "ios7Tooltip",
	title: "<@i18n resource='schema.ios.elements.tooltip'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 130,
		h: 60
	},
	anchors: [],
	lineStyle: {lineWidth: 0},
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "8"},
				{action: "quadraticCurve", x1: "0", y1: "0", x: "8", y: "0"},
				{action: "line", x: "w*0.4-14", y: "0"},
				{action: "line", x: "w*0.4-7", y: "-8"},
				{action: "line", x: "w*0.4", y: "0"},
				{action: "line", x: "w-8", y: "0"},
				{action: "quadraticCurve", x1: "w", y1: "0", x: "w", y: "8"},
				{action: "line", x: "w", y: "h-8"},
				{action: "quadraticCurve", x1: "w", y1: "h", x: "w-8", y: "h"},
				{action: "line", x: "8", y: "h"},
				{action: "quadraticCurve", x1: "0", y1: "h", x: "0", y: "h-8"},
				{action: "close"}
			]
		}
	],
	drawIcon: function(w, h){
		return [
			{
				lineStyle: {lineWidth: 1, lineColor: "150,150,150"},
				actions: [
					{action: "move", x: 0.5, y: 0},
					{action: "line", x: w*0.5-5, y: 0},
					{action: "line", x: w*0.5-2.5, y: -4},
					{action: "line", x: w*0.5, y: 0},
					{action: "line", x: Math.round(w)-0.5, y: 0},
					{action: "line", x: Math.round(w)-0.5, y: h},
					{action: "line", x: 0.5, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Keyboard
 */
Schema.addShape({
	name: "ios7Keyboard",
	title: "<@i18n resource='schema.ios.elements.keyboard'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 189
	},
	anchors: [],
	lineStyle: {lineWidth: 0},
	textBlock: [],
	fillStyle: {type: "solid", color: "247,247,247"},
	path: [
		{
			fillStyle: {alpha: 0.6},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},{
			fillStyle: {type: "image", fileId: "/images/designer/ios/keyboard.png", imageW: 280, imageH: 189, display: "stretch"},
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
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/keyboard.png", imageW: 30, imageH: 19, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Alert
 */
Schema.addShape({
	name: "ios7Alert",
	title: "<@i18n resource='schema.ios.elements.alert'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 240,
		h: 115
	},
	anchors: [],
	lineStyle: {lineWidth: 0},
	fillStyle: {type: "solid", color: "222,226,227"},
	textBlock: [{
		position: {x: 10, y: 5, w: "w-20", h: "30"}, text: "<@i18n resource='schema.ios.elements.alert'/>", fontStyle: {size: 14, bold: true}
	},{
		position: {x: 10, y: 35, w: "w-20", h: "h-75"}, text: "<@i18n resource='schema.ios.elements.alert.msg'/>", fontStyle: {vAlign: "top"}
	},{
		position: {x: 5, y: "h-40", w: "w/2-10", h: 40}, text: "<@i18n resource='global.ok'/>", fontStyle: {color: "0,122,255"}
	},{
		position: {x: "w/2+5", y: "h-40", w: "w/2-10", h: 40}, text: "<@i18n resource='global.cancel'/>", fontStyle: {color: "0,122,255"}
	}],
	path: [
		{
			fillStyle: {alpha: 0.95},
			actions: [
				{action: "move", x: "0", y: "8"},
				{action: "quadraticCurve", x1: "0", y1: "0", x: "8", y: "0"},
				{action: "line", x: "w*0.4", y: "0"},
				{action: "line", x: "w-8", y: "0"},
				{action: "quadraticCurve", x1: "w", y1: "0", x: "w", y: "8"},
				{action: "line", x: "w", y: "h-8"},
				{action: "quadraticCurve", x1: "w", y1: "h", x: "w-8", y: "h"},
				{action: "line", x: "8", y: "h"},
				{action: "quadraticCurve", x1: "0", y1: "h", x: "0", y: "h-8"},
				{action: "close"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 1, lineColor: "169,169,169"},
			actions: [
				{action: "move", x: 0, y: "Math.round(h-40) + 0.5"},
				{action: "line", x: "w", y: "Math.round(h-40) + 0.5"},
				{action: "move", x: "Math.round(w/2) + 0.5", y: "Math.round(h-40)"},
				{action: "line", x: "Math.round(w/2) + 0.5", y: "h"}
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
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/alert.png", imageW: 30, imageH: 12, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Dropdown
 */
Schema.addShape({
	name: "ios7Dropdown",
	title: "<@i18n resource='schema.ios.elements.dropdown'/>",
	category: "ios_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 280,
		h: 140
	},
	anchors: [],
	fontStyle: {size: 16, color: "80,80,80"},
	fillStyle: {type: "solid", color: "237,237,237", alpha: 0.7},
	textBlock: [{
		position: {x: 0, y: "h*0.4", w: "w", h: "h/5"}, text: "<@i18n resource='schema.ios.elements.dropdown.option'/> 3", fontStyle: {bold: true, color: "0,0,0"}
	},{
		position: {x: 0, y: 0, w: "w", h: "h/5"}, text: "<@i18n resource='schema.ios.elements.dropdown.option'/> 1"
	},{
		position: {x: 0, y: "h*0.2", w: "w", h: "h/5"}, text: "<@i18n resource='schema.ios.elements.dropdown.option'/> 2"
	},{
		position: {x: 0, y: "h*0.6", w: "w", h: "h/5"}, text: "<@i18n resource='schema.ios.elements.dropdown.option'/> 4"
	},{
		position: {x: 0, y: "h*0.8", w: "w", h: "h/5"}, text: "<@i18n resource='schema.ios.elements.dropdown.option'/> 5"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 1, lineColor: "120,120,120"},
			actions: [
				{action: "move", x: 0, y: "Math.round(h*0.4) + 0.5"},
				{action: "line", x: "w", y: "Math.round(h*0.4) + 0.5"},
				{action: "move", x: 0, y: "Math.round(h*0.6) + 0.5"},
				{action: "line", x: "w", y: "Math.round(h*0.6) + 0.5"}
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
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/ios/thumb/dropdown.png", imageW: 30, imageH: 19, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});




