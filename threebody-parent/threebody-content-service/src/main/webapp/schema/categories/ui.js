/**
 * 
 */
Schema.addCategory({
	name: "ui",
	text: "<@i18n resource='schema.category.ui.elements'/>",
	dataAttributes: []
});

Schema.addShape({
	name: "uiHeading",
	title: "<@i18n resource='schema.ui.heading'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 120,
		h: 30
	},
	anchors: [],
	fillStyle: {type: "none"},
	fontStyle: {size: 26},
	textBlock: [{
		position: {x: 0, y: 0, w: "w", h: "h"},
		text: "<@i18n resource='schema.ui.heading'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = -2;
		h += 2;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/heading.png", imageW: 30, imageH: 9, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiLabel",
	title: "<@i18n resource='schema.ui.label'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 80,
		h: 25
	},
	anchors: [],
	fillStyle: {type: "none"},
	fontStyle: {size: 14},
	textBlock: [{
		position: {x: 0, y: 0, w: "w", h: "h"},
		text: "<@i18n resource='schema.ui.label'/><@i18n resource='global.colon'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = 1;
		h += 4;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/label.png", imageW: 26, imageH: 9, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiParagraph",
	title: "<@i18n resource='schema.ui.paragraph'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 240,
		h: 100
	},
	anchors: [],
	fillStyle: {type: "none"},
	fontStyle: {textAlign: "left", vAlign: "top", size: 14},
	textBlock: [{
		position: {x: 0, y: 0, w: "w", h: "h"},
		text: "<@i18n resource='schema.ui.paragraph.content'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = -8;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/paragraph.png", imageW: 26, imageH: 26, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiLink",
	title: "<@i18n resource='schema.ui.link'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 80,
		h: 25
	},
	anchors: [],
	fillStyle: {type: "none"},
	fontStyle: {size: 14, underline: true, color: "65,131,196"},
	textBlock: [{
		position: {x: 0, y: 0, w: "w", h: "h"},
		text: "<@i18n resource='schema.ui.link'/>"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = -8;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/link.png", imageW: 26, imageH: 12, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * Note
 */
Schema.addShape({
	name: "uiNote",
	title: "<@i18n resource='schema.ui.note'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 80,
		h: 100
	},
	anchors: [],
	textBlock: [
		{position: {x: 10, y: 10, w: "w-20", h: "h-20"}}
	],
	fillStyle: {
		color: "255, 255, 170"
	},
	lineStyle: {lineWidth: 0},
	fontStyle: {size: 14},
	path: [
		{
			actions: [
			    {action: "move", x: "0", y: "0"},
				{action: "line", x: "w-16", y: "0"},
				{action: "line", x: "w", y: "16"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "0", y: "h"},
				{action: "line", x: "0", y: "0"},
				{action: "close"}
			]
		},
		{
			fillStyle: {type: "solid", color: "r-50,g-50,b-50"},
			actions: [
				{action: "move", x: "w-16", y: "0"},
				{action: "line", x: "w-16", y: "16"},
				{action: "line", x: "w", y: "16"},
				{action: "close"}
			]
		},
		{
			fillStyle: {
				type: "none"
			},
			actions: [
				{action: "move", x: "0", y: "0"},
				{action: "line", x: "w-16", y: "0"},
				{action: "line", x: "w", y: "16"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "0", y: "h"},
				{action: "line", x: "0", y: "0"},
				{action: "close"}
			]
		}
	],
	drawIcon: function(w, h){
		return [
			{
				actions: [
				    {action: "move", x: 0, y: 0},
					{action: "line", x: w*0.6, y: 0},
					{action: "line", x: w, y: h*0.24},
					{action: "line", x: w, y: h},
					{action: "line", x: 0, y: h},
					{action: "line", x: 0, y: 0},
					{action: "close"}
				]
			}
			,
			{
				lineStyle: {lineWidth: 0},
				fillStyle: {type: "solid", color: "205, 205, 120"},
				actions: [
					{action: "move", x: w*0.6, y: 0},
					{action: "line", x: w*0.6, y: h*0.24},
					{action: "line", x: w*0.93, y: h*0.24}
				]
			}
		];
	}
});

Schema.addShape({
	name: "uiBox",
	title: "<@i18n resource='schema.ui.box'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 240,
		h: 80
	},
	lineStyle: {lineWidth: 2, lineColor: "138,138,138"},
	fillStyle: {type: "solid", color: "235,235,235"},
	anchors: [],
	path: [
		{
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = 0.5;
		var y = -2.5;
		h = Math.round(h + 4) - 0.5;
		w = Math.round(w) - 0.5;
		return [
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiBrowser",
	title: "<@i18n resource='schema.ui.browser'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 800,
		h: 500
	},
	lineStyle: {lineWidth: 2, lineColor: "218,218,218"},
	anchors: [],
	textBlock: [{
		position: {x: 60, y: 5, w: "w-70", h: "20"}, text: "http://www.processon.com", fontStyle: {textAlign: "left"}
	}],
	path: [
		{
			actions: {ref: "roundRectangle"}
		},{
			//标题背景
			fillStyle: {color: "r-37,g-37,b-37"},
			actions: [
				{action: "move", x: 0, y: 30},
				{action: "line", x: 0, y: 4},
				{action: "quadraticCurve", x1: 0, y1: 0, x: 4, y: 0},
				{action: "line", x: "w-4", y: 0},
				{action: "quadraticCurve", x1: "w", y1: 0, x: "w", y: 4},
				{action: "line", x: "w", y: 30},
				{action: "close"}
			]
		},{
			//第一个白点
			fillStyle: {type: "solid", color: "255,255,255"},
			lineStyle: {lineWidth: 0},
			actions: [
				{action: "move", x: 10, y: 15},
			    {action: "curve", x1: 10, y1: 10, x2: 18, y2: 10, x: 18, y: 15},
			    {action: "curve", x1: 18, y1: 20, x2: 10, y2: 20, x: 10, y: 15},
			    {action: 'close'}
			]
		},{
			//第二个白点
			fillStyle: {type: "solid", color: "255,255,255"},
			lineStyle: {lineWidth: 0},
			actions: [
				{action: "move", x: 23, y: 15},
			    {action: "curve", x1: 23, y1: 10, x2: 31, y2: 10, x: 31, y: 15},
			    {action: "curve", x1: 31, y1: 20, x2: 23, y2: 20, x: 23, y: 15},
			    {action: 'close'}
			]
		},{
			//第三个白点
			fillStyle: {type: "solid", color: "255,255,255"},
			lineStyle: {lineWidth: 0},
			actions: [
				{action: "move", x: 36, y: 15},
			    {action: "curve", x1: 36, y1: 10, x2: 44, y2: 10, x: 44, y: 15},
			    {action: "curve", x1: 44, y1: 20, x2: 36, y2: 20, x: 36, y: 15},
			    {action: 'close'}
			]
		},{
			//地址栏
			fillStyle: {type: "solid", color: "255,255,255"},
			lineStyle: {lineWidth: 0},
			actions: [
			    {action: "move", x: 55, y: 9},
				{action: "quadraticCurve", x1: 55, y1: 5, x: 59, y: 5},
				{action: "line", x: "w-9", y: 5},
				{action: "quadraticCurve", x1: "w-5", y1: 5, x: "w-5", y: 9},
				{action: "line", x: "w-5", y: 21},
				{action: "quadraticCurve", x1: "w-5", y1: 25, x: "w-9", y: 25},
				{action: "line", x: "59", y: 25},
				{action: "quadraticCurve", x1: 55, y1: 25, x: 55, y: 21},
				{action: "close"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = -10;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/browser.png", imageW: 30, imageH: 24, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiDialog",
	title: "<@i18n resource='schema.ui.dialog'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 300,
		h: 160
	},
	lineStyle: {lineWidth: 2, lineColor: "136,136,136"},
	fontStyle: {textAlign: "left", size: 14},
	anchors: [],
	textBlock: [{
		position: {x: 10, y: 5, w: "w-40", h: 25}, text: "<@i18n resource='schema.ui.dialog.title'/>", fontStyle: {vAlign: "middle"}
	},{
		position: {x: 10, y: 45, w: "w-20", h: "h-55"}, text: "<@i18n resource='schema.ui.dialog.content'/>"
	}],
	path: [
		{
			actions: {ref: "rectangle"}
		},{
			fillStyle: {color: "r-20,g-20,b-20"},
			actions: [
				{action: "move", x: 0, y: 0},
				{action: "line", x: "w", y: 0},
				{action: "line", x: "w", y: 35},
				{action: "line", x: 0, y: 35},
				{action: "close"}
			]
		},{
			fillStyle: {type: "image", fileId: "/assets/images/designer/ui/close.png", imageX: "w-25", imageY: 8, imageW: 20, imageH: 20, display: "static"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = -10;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/dialog.png", imageW: 30, imageH: 30, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiTab",
	title: "<@i18n resource='schema.ui.tab'/>",
	category: "ui",
	attribute: {
		linkable: true
	},
	props: {
		w: 360,
		h: 40
	},
	lineStyle: {lineWidth: 2, lineColor: "136,136,136"},
	fontStyle: {size: 14},
	anchors: [],
	textBlock: [{
		position: {x: 5, y: 5, w: "w/3-10", h: "h-10"}, text: "Tab 1"
	},{
		position: {x: "w/3+5", y: 5, w: "w/3-10", h: "h-10"}, text: "Tab 2"
	},{
		position: {x: "w/3*2+5", y: 5, w: "w/3-10", h: "h-10"}, text: "Tab 3"
	}],
	path: [
		{
			fillStyle: {color: "r-20,g-20,b-20"},
			actions: [
				{action: "move", x: 0, y: "h"},
				{action: "line", x: 0, y: 7},
				{action: "quadraticCurve", x1: 0, y1: 0, x: 7, y: 0},
				{action: "line", x: "w/3-7", y: 0},
				{action: "quadraticCurve", x1: "w/3", y1: 0, x: "w/3", y: 7},
				{action: "line", x: "w/3", y: "h"},
				{action: "close"}
			]
		},{
			//Active Tab
			actions: [
				{action: "move", x: "w/3", y: "h"},
				{action: "line", x: "w/3", y: 7},
				{action: "quadraticCurve", x1: "w/3", y1: 0, x: "w/3+7", y: 0},
				{action: "line", x: "w/3*2-7", y: 0},
				{action: "quadraticCurve", x1: "w/3*2", y1: 0, x: "w/3*2", y: 7},
				{action: "line", x: "w/3*2", y: "h"}
			]
		},{
			//最后的Tab
			fillStyle: {color: "r-20,g-20,b-20"},
			actions: [
				{action: "move", x: "w/3*2", y: "h"},
				{action: "line", x: "w/3*2", y: 7},
				{action: "quadraticCurve", x1: "w/3*2", y1: 0, x: "w/3*2+7", y: 0},
				{action: "line", x: "w-7", y: 0},
				{action: "quadraticCurve", x1: "w", y1: 0, x: "w", y: 7},
				{action: "line", x: "w", y: "h"},
				{action: "close"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = -10;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/tab.png", imageW: 30, imageH: 16, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiGrid",
	title: "<@i18n resource='schema.ui.grid'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 150
	},
	lineStyle: {lineWidth: 2, lineColor: "138,138,138"},
	fontStyle: {size: 14},
	anchors: [],
	textBlock: [
		{position: {x: 5, y: 0, w: "w/3-10", h: "h/5"}, text: "<@i18n resource='schema.ui.grid.head'/> 1"},
		{position: {x: "w/3+5", y: 0, w: "w/3-10", h: "h/5"}, text: "<@i18n resource='schema.ui.grid.head'/> 2"},
		{position: {x: "w/3*2+5", y: 0, w: "w/3-10", h: "h/5"}, text: "<@i18n resource='schema.ui.grid.head'/> 3"},
		{position: {x: 5, y: "h*0.2", w: "w/3-10", h: "h/5"}},
		{position: {x: "w/3+5", y: "h*0.2", w: "w/3-10", h: "h/5"}},
		{position: {x: "w/3*2+5", y: "h*0.2", w: "w/3-10", h: "h/5"}},
		{position: {x: 5, y: "h*0.4", w: "w/3-10", h: "h/5"}},
		{position: {x: "w/3+5", y: "h*0.4", w: "w/3-10", h: "h/5"}},
		{position: {x: "w/3*2+5", y: "h*0.4", w: "w/3-10", h: "h/5"}},
		{position: {x: 5, y: "h*0.6", w: "w/3-10", h: "h/5"}},
		{position: {x: "w/3+5", y: "h*0.6", w: "w/3-10", h: "h/5"}},
		{position: {x: "w/3*2+5", y: "h*0.6", w: "w/3-10", h: "h/5"}},
		{position: {x: 5, y: "h*0.8", w: "w/3-10", h: "h/5"}},
		{position: {x: "w/3+5", y: "h*0.8", w: "w/3-10", h: "h/5"}},
		{position: {x: "w/3*2+5", y: "h*0.8", w: "w/3-10", h: "h/5"}}
	],
	path: [
		{
			//先绘制背景，不绘制边框
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},{
			//标题背景
			fillStyle: {color: "r-37,g-37,b-37"},
			lineStyle: {lineWidth: 0},
			actions: [
				{action: "move", x: 0, y: 0},
				{action: "line", x: "w", y: 0},
				{action: "line", x: "w", y: "h*0.2+0.5"},
				{action: "line", x: 0, y: "h*0.2+0.5"},
				{action: "close"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 1},
			actions: [
				//画横线
				{action: "move", x: 0, y: "Math.round(h*0.2)+0.5"},
				{action: "line", x: "w", y: "Math.round(h*0.2)+0.5"},
				{action: "move", x: 0, y: "Math.round(h*0.4)+0.5"},
				{action: "line", x: "w", y: "Math.round(h*0.4)+0.5"},
				{action: "move", x: 0, y: "Math.round(h*0.6)+0.5"},
				{action: "line", x: "w", y: "Math.round(h*0.6)+0.5"},
				{action: "move", x: 0, y: "Math.round(h*0.8)+0.5"},
				{action: "line", x: "w", y: "Math.round(h*0.8)+0.5"},
				//画竖线
				{action: "move", x: "Math.round(w/3)+0.5", y: 0},
				{action: "line", x: "Math.round(w/3)+0.5", y: "h"},
				{action: "move", x: "Math.round(w/3*2)+0.5", y: 0},
				{action: "line", x: "Math.round(w/3*2)+0.5", y: "h"}
			]
		},{
			//绘制响应区域，不绘制背景，只绘制边框
			fillStyle: {type: "none"},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -3;
		h += 3;
		return [
			{
				fillStyle: {type: "none"},
				lineStyle: {lineWidth: 1},
				actions: [
					//边框
					{action: "move", x: 0, y: y +0.5},
					{action: "line", x: w-0.5, y: y +0.5},
					{action: "line", x: w-0.5, y: h -0.5},
					{action: "line", x: 0.5, y: h -0.5},
					{action: "line", x: 0.5, y: y +0.5},
					//画横线
					{action: "move", x: 0, y: y + Math.round(h/3)+0.5},
					{action: "line", x: w, y: y + Math.round(h/3)+0.5},
					{action: "move", x: 0, y: y + Math.round(h/3*2)+0.5},
					{action: "line", x: w, y: y + Math.round(h/3*2)+0.5},
					//画竖线
					{action: "move", x: Math.round(w/3)+0.5, y: y},
					{action: "line", x: Math.round(w/3)+0.5, y: h},
					{action: "move", x: Math.round(w/3*2)+0.5, y: y},
					{action: "line", x: Math.round(w/3*2)+0.5, y: h}
				]
			}
		];
	}
});

Schema.addShape({
	name: "uiTooltip",
	title: "<@i18n resource='schema.ui.tooltip'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 140,
		h: 60
	},
	lineStyle: {lineWidth: 2, lineColor: "138,138,138"},
	anchors:[],
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
				lineStyle: {lineWidth: 1},
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

Schema.addShape({
	name: "uiImage",
	title: "<@i18n resource='schema.ui.image'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 256,
		h: 209
	},
	anchors:[],
	lineStyle: {lineColor: "138,138,138"},
	textBlock:[], 
	path: [
		{
			actions: {ref: "rectangle"}
		},
		{
			//圆点
			fillStyle: {type: "solid", color: "80,80,80"},
			lineStyle: {lineWidth: 1, lineColor: "80,80,80", lineStyle: "solid"},
			actions:[
				{action: "move", x: "w/1.3 - 10", y: "h/8 + 10"},
			    {action: "curve", x1: "w/1.3+5", y1: "h/8 + 10", x2: "w/1.3+5", y2: "h/8+32", x: "w/1.3-10", y: "h/8+32"},
			    {action: "curve", x1: "w/1.3-25", y1: "h/8+32", x2: "w/1.3-25", y2: "h/8+10", x: "w/1.3-10", y: "h/8 + 10"},
			    {action: 'close'}
			]
		},{
			//画山
			fillStyle: {type:"solid", color:"80,80,80"},
			lineStyle: {lineWidth: 0},
			actions:[
				{action: "move" ,x: 30, y: "h-30"},
				{action: "line", x: "w/3", y: "40"},
				{action: "line", x: "w/2", y: "h/2"},
				{action: "line", x: "w/1.6", y: "h/2.5"},
				{action: "line", x: "w-30", y: "h-30"},
				{action:"close"}
			]
		},{
			fillStyle:{type:"none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = -10;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/image.png", imageW: 30, imageH: 26, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiVideo",
	title: "<@i18n resource='schema.ui.video'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 320,
		h: 240
	},
	anchors:[],
	lineStyle: {lineColor: "138,138,138"},
	textBlock:[], 
	path: [
		{
			actions: {ref: "rectangle"}
		},{
			//喇叭
			fillStyle: {type:"solid", color:"80,80,80"},
			lineStyle: {lineWidth: 0},
			actions:[
				{action: "move" ,x: "w-10", y: "h-20"},
				{action: "line", x: "w-10", y: "h-5"},
				{action: "line", x: "w-15", y: "h-9"},
				{action: "line", x: "w-23", y: "h-9"},
				{action: "line", x: "w-23", y: "h-16"},
				{action: "line", x: "w-15", y: "h-16"},
				{action:"close"}
			]
		},{
			//播放
			fillStyle: {type:"solid", color:"80,80,80"},
			lineStyle: {lineWidth: 0},
			actions:[
				{action: "move" ,x: 10, y: "h-20"},
				{action: "line", x: 22, y: "h-12.5"},
				{action: "line", x: 10, y: "h-5"},
				{action:"close"}
			]
		},{
			//进度条
			fillStyle:{type: "none"},
			lineStyle: {lineWidth: 5, lineColor:"80,80,80"},
			actions:[
				{action:"move", x:"30", y:"h-12.5"},
				{action:"line", x:"w-35", y:"h-12.5"}
			]
		},{
			//圆点
			fillStyle: {type: "solid", color: "255,255,255"},
			lineStyle: {lineWidth: 1, lineColor: "80,80,80", lineStyle: "solid"},
			actions:[
				{action: "move", x: "w/2-12", y: "h-12.5"},
			    {action: "curve", x1: "w/2-12", y1: "h-20.2", x2: "w/2", y2: "h-20.2", x: "w/2", y: "h-12.5"},
			    {action: "curve", x1: "w/2", y1: "h-4.8", x2: "w/2-12", y2: "h-4.8", x: "w/2-12", y: "h-12.5"},
			    {action: 'close'}
			]
		},{
			fillStyle: {type: "none"},
			actions:[
				{action: "move", x: 0, y: "h-25"},
			    {action:"line", x:"w", y:"h-25"}
			]
		},{
			//中间的播放
			fillStyle: {type: "solid", color: "80,80,80"},
			lineStyle: {lineWidth: 4, lineColor: "80,80,80"},
			actions:[
				{action: "move" ,x: "w/2-18", y: "(h-25)/2-20"},
				{action: "line", x: "w/2+18", y: "(h-25)/2"},
				{action: "line", x: "w/2-18", y: "(h-25)/2+20"},
				{action:"close"}
			]
		},{
			fillStyle:{type:"none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = -10;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/video.png", imageW: 30, imageH: 26, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiVScroll",
	title: "<@i18n resource='schema.ui.vscroll'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 20,
		h: 160
	},
	lineStyle: {lineWidth: 1, lineColor: "184,184,184"},
	anchors: [],
	textBlock: [],
	resizeDir: ["t", "b"],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},{
			//上边背景
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "229,229,229"},
			actions: [
				{action: "move", x: 0, y: 0},
				{action: "line", x: "w", y: 0},
				{action: "line", x: "w", y: "w"},
				{action: "line", x: 0, y: "w"},
				{action: "close"}
			]
		},{
			//上边背景的线条
			lineStyle: {lineWidth: 1},
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: 0, y: "w-0.5"},
				{action: "line", x: "w", y: "w-0.5"}
			]
		},{
			//上边箭头
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "170,170,170"},
			actions: [
				{action: "move", x: "w*0.5", y: "w*0.35"},
				{action: "line", x: "w*0.8", y: "w*0.65"},
				{action: "line", x: "w*0.2", y: "w*0.65"},
				{action: "close"}
			]
		},{
			//下边背景
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "229,229,229"},
			actions: [
				{action: "move", x: 0, y: "h-w"},
				{action: "line", x: "w", y: "h-w"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: 0, y: "h"},
				{action: "close"}
			]
		},{
			//下边背景的线条
			lineStyle: {lineWidth: 1},
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: 0, y: "h-w+0.5"},
				{action: "line", x: "w", y: "h-w+0.5"}
			]
		},{
			//下边箭头
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "170,170,170"},
			actions: [
				{action: "move", x: "w*0.5", y: "h-w*0.35"},
				{action: "line", x: "w*0.8", y: "h-w*0.65"},
				{action: "line", x: "w*0.2", y: "h-w*0.65"},
				{action: "close"}
			]
		},{
			//滚动条
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "229,229,229"},
			actions: [
				{action: "move", x: 0, y: "h*0.25"},
				{action: "line", x: "w", y: "h*0.25"},
				{action: "line", x: "w", y: "h*0.55"},
				{action: "line", x: 0, y: "h*0.55"},
				{action: "close"}
			]
		},{
			//绘制响应区域
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 1},
			actions: [
				{action: "move", x: 0.5, y: 0.5},
				{action: "line", x: "w-0.5", y: 0.5},
				{action: "line", x: "w-0.5", y: "h-0.5"},
				{action: "line", x: 0.5, y: "h-0.5"},
				{action: "close"}
			]
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = -10;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/scrollbar_v.png", imageW: 10, imageH: 30, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiHScroll",
	title: "<@i18n resource='schema.ui.hscroll'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 160,
		h: 20
	},
	lineStyle: {lineWidth: 1, lineColor: "184,184,184"},
	anchors: [],
	textBlock: [],
	resizeDir: ["l", "r"],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},{
			//上边背景
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "229,229,229"},
			actions: [
				{action: "move", x: 0, y: 0},
				{action: "line", x: "h", y: 0},
				{action: "line", x: "h", y: "h"},
				{action: "line", x: 0, y: "h"},
				{action: "close"}
			]
		},{
			//上边背景的线条
			lineStyle: {lineWidth: 1},
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "h-0.5", y: 0},
				{action: "line", x: "h-0.5", y: "h"}
			]
		},{
			//上边箭头
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "170,170,170"},
			actions: [
				{action: "move", x: "h*0.35", y: "h*0.5"},
				{action: "line", x: "h*0.65", y: "h*0.8"},
				{action: "line", x: "h*0.65", y: "h*0.2"},
				{action: "close"}
			]
		},{
			//下边背景
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "229,229,229"},
			actions: [
				{action: "move", x: "w-h", y: 0},
				{action: "line", x: "w", y: 0},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "w-h", y: "h"},
				{action: "close"}
			]
		},{
			//下边背景的线条
			lineStyle: {lineWidth: 1},
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "w-h+0.5", y: 0},
				{action: "line", x: "w-h+0.5", y: "h"}
			]
		},{
			//下边箭头
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "170,170,170"},
			actions: [
				{action: "move", x: "w-h*0.35", y: "h*0.5"},
				{action: "line", x: "w-h*0.65", y: "h*0.8"},
				{action: "line", x: "w-h*0.65", y: "h*0.2"},
				{action: "close"}
			]
		},{
			//滚动条
			lineStyle: {lineWidth: 0},
			fillStyle: {type: "solid", color: "229,229,229"},
			actions: [
				{action: "move", x: "w*0.25", y: 0},
				{action: "line", x: "w*0.25", y: "h"},
				{action: "line", x: "w*0.55", y: "h"},
				{action: "line", x: "w*0.55", y: 0},
				{action: "close"}
			]
		},{
			//绘制响应区域
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 1},
			actions: [
				{action: "move", x: 0.5, y: 0.5},
				{action: "line", x: "w-0.5", y: 0.5},
				{action: "line", x: "w-0.5", y: "h-0.5"},
				{action: "line", x: 0.5, y: "h-0.5"},
				{action: "close"}
			]
		}
	],
	drawIcon: function(w, h){
		var x = -4;
		w += 4;
		var y = -10;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/ui/thumb/scrollbar_h.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
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
	name: "uiVLine",
	title: "<@i18n resource='schema.ui.vline'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 21,
		h: 240
	},
	lineStyle: {lineWidth: 1, lineColor: "136,136,136"},
	anchors: [],
	resizeDir: ["t", "b"],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "lineWidth%2==0 ? Math.round(w/2) : w/2", y: 0},
				{action: "line", x: "lineWidth%2==0 ? Math.round(w/2) : w/2", y: "h"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "uiHLine",
	title: "<@i18n resource='schema.ui.hline'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 240,
		h: 21
	},
	lineStyle: {lineWidth: 1, lineColor: "136,136,136"},
	anchors: [],
	resizeDir: ["l", "r"],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: 0, y: "lineWidth%2==0 ? Math.round(h/2) : h/2"},
				{action: "line", x: "w", y: "lineWidth%2==0 ? Math.round(h/2) : h/2"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * 线图
 */
Schema.addShape({
	name: "uiLineChart",
	title: "<@i18n resource='schema.ui.linechart'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 240,
		h: 160
	},
	lineStyle: {lineWidth: 2, lineColor: "136,136,136"},
	anchors: [],
	fontStyle: {size: 14},
	textBlock: [{
		position: {x: 10, y: -25, h: 25, w: "w-20"}, text: "<@i18n resource='schema.ui.linechart'/>"
	}],
	path: [
		{
			fillStyle: {type: "none"},
			actions: [
				//坐标系
				{action: "move", x: 0, y: 0},
				{action: "line", x: 0, y: "h"},
				{action: "line", x: "w", y: "h"},
				//第一条线
				{action: "move", x: 0, y: "h"},
				{action: "line", x: "w*0.2", y: "h*0.625"},
				{action: "line", x: "w*0.4", y: "h*0.7"},
				{action: "line", x: "w*0.6", y: "h*0.4"},
				{action: "line", x: "w*0.8", y: "h*0.5"},
				{action: "line", x: "w", y: "h*0.1"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineColor: "50,50,50"},
			actions: [
				//第二条线
				{action: "move", x: 0, y: "h"},
				{action: "line", x: "w*0.2", y: "h*0.4"},
				{action: "line", x: "w*0.4", y: "h*0.57"},
				{action: "line", x: "w*0.6", y: "h*0.5"},
				{action: "line", x: "w*0.8", y: "h*0.6"},
				{action: "line", x: "w", y: "h*0.52"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "none"},
				lineStyle: {lineWidth: 1},
				actions: [
					//坐标系
					{action: "move", x: -0.5, y: 0},
					{action: "line", x: -0.5, y: h},
					{action: "line", x: w, y: h},
					//第一条线
					{action: "move", x: 0, y: h},
					{action: "line", x: w*0.2, y: h*0.625},
					{action: "line", x: w*0.4, y: h*0.7},
					{action: "line", x: w*0.6, y: h*0.4},
					{action: "line", x: w*0.8, y: h*0.5},
					{action: "line", x: w, y: h*0.1}
				]
			},{
				fillStyle: {type: "none"},
				lineStyle: {lineColor: "50,50,50", lineWidth: 1},
				actions: [
					//第二条线
					{action: "move", x: 0, y: h},
					{action: "line", x: w*0.2, y: h*0.4},
					{action: "line", x: w*0.4, y: h*0.57},
					{action: "line", x: w*0.6, y: h*0.5},
					{action: "line", x: w*0.8, y: h*0.6},
					{action: "line", x: w, y: h*0.52}
				]
			}
		]
	}
});

/**
 * 饼图
 */
Schema.addShape({
	name: "uiPieChart",
	title: "<@i18n resource='schema.ui.piechart'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 160,
		h: 160
	},
	lineStyle: {lineWidth: 2, lineColor: "136,136,136"},
	anchors: [],
	fontStyle: {size: 14},
	textBlock: [{
		position: {x: 10, y: -35, h: 25, w: "w-20"}, text: "<@i18n resource='schema.ui.piechart'/>"
	}],
	path: [
		{
			actions: {ref: "round"}
		},{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "w/2", y: 0},
				{action: "line", x: "w/2", y: "h/2"},
				{action: "line", x: "w*0.98", y: "h*0.65"},
				{action: "move", x: "w/2", y: "h/2"},
				{action: "line", x: "w*0.98", y: "h*0.35"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "round"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "move", x: 0, y: h/2},
				    {action: "curve", x1: 0, y1: -h/6, x2: w, y2: -h/6, x: w, y: h/2},
				    {action: "curve", x1: w, y1: h+h/6, x2: 0, y2: h+h/6, x: 0, y: h/2},
				    {action: 'close'}
				]
			},{
				fillStyle: {type: "none"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "move", x: w/2, y: 0},
					{action: "line", x: w/2, y: h/2},
					{action: "line", x: w*0.98, y: h*0.65},
					{action: "move", x: w/2, y: h/2},
					{action: "line", x: w*0.98, y: h*0.35}
				]
			}
		]
	}
});

/**
 * 柱状图
 */
Schema.addShape({
	name: "uiColumnChart",
	title: "<@i18n resource='schema.ui.columnchart'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 250,
		h: 175
	},
	lineStyle: {lineWidth: 2, lineColor: "136,136,136"},
	anchors: [],
	fontStyle: {size: 14},
	textBlock: [{
		position: {x: 10, y: -25, h: 25, w: "w-20"}, text: "<@i18n resource='schema.ui.columnchart'/>"
	}],
	path: [
		{
			fillStyle: {type: "none"},
			actions: [
				//坐标系
				{action: "move", x: 0, y: 0},
				{action: "line", x: 0, y: "h"},
				{action: "line", x: "w", y: "h"}
			]
		},{
			actions: [
				{action: "move", x: "w*0.1", y: "h*0.4"},
				{action: "line", x: "w*0.2", y: "h*0.4"},
				{action: "line", x: "w*0.2", y: "h"},
				{action: "line", x: "w*0.1", y: "h"},
				{action: "close"}
			]
		},{
			fillStyle: {color: "r-40,g-40,b-40"},
			actions: [
				{action: "move", x: "w*0.2", y: "h*0.2"},
				{action: "line", x: "w*0.3", y: "h*0.2"},
				{action: "line", x: "w*0.3", y: "h"},
				{action: "line", x: "w*0.2", y: "h"},
				{action: "close"}
			]
		},{
			actions: [
				{action: "move", x: "w*0.4", y: "h*0.32"},
				{action: "line", x: "w*0.5", y: "h*0.32"},
				{action: "line", x: "w*0.5", y: "h"},
				{action: "line", x: "w*0.4", y: "h"},
				{action: "close"}
			]
		},{
			fillStyle: {color: "r-40,g-40,b-40"},
			actions: [
				{action: "move", x: "w*0.5", y: "h*0.12"},
				{action: "line", x: "w*0.6", y: "h*0.12"},
				{action: "line", x: "w*0.6", y: "h"},
				{action: "line", x: "w*0.5", y: "h"},
				{action: "close"}
			]
		},{
			actions: [
				{action: "move", x: "w*0.7", y: "h*0.48"},
				{action: "line", x: "w*0.8", y: "h*0.48"},
				{action: "line", x: "w*0.8", y: "h"},
				{action: "line", x: "w*0.7", y: "h"},
				{action: "close"}
			]
		},{
			fillStyle: {color: "r-40,g-40,b-40"},
			actions: [
				{action: "move", x: "w*0.8", y: "h*0.52"},
				{action: "line", x: "w*0.9", y: "h*0.52"},
				{action: "line", x: "w*0.9", y: "h"},
				{action: "line", x: "w*0.8", y: "h"},
				{action: "close"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				lineStyle: {lineWidth: 1},
				fillStyle: {type: "none"},
				actions: [
					//坐标系
					{action: "move", x: 0.5, y: 0},
					{action: "line", x: 0.5, y: h+0.5},
					{action: "line", x: w, y: h+0.5},
					{action: "move", x: Math.round(w*0.2)-0.5, y: h},
					{action: "line", x: Math.round(w*0.2)-0.5, y: 3.5},
					{action: "line", x: w*0.3, y: 3.5},
					{action: "move", x: Math.round(w*0.3)+0.5, y: h},
					{action: "line", x: Math.round(w*0.3)+0.5, y: 1.5},
					{action: "line", x: Math.round(w*0.45)+0.5, y: 1.5},
					{action: "line", x: Math.round(w*0.45)+0.5, y: h},
					
					{action: "move", x: Math.round(w*0.6)+0.5, y: h},
					{action: "line", x: Math.round(w*0.6)+0.5, y: 7.5},
					{action: "line", x: Math.round(w*0.75)+0.5, y: 7.5},
					{action: "move", x: Math.round(w*0.75)+0.5, y: h},
					{action: "line", x: Math.round(w*0.75)+0.5, y: 4.5},
					{action: "line", x: Math.round(w*0.95)-0.5, y: 4.5},
					{action: "line", x: Math.round(w*0.95)-0.5, y: h}
				]
			}
		];
	}
});

Schema.addShape({
	name: "uiBarChart",
	title: "<@i18n resource='schema.ui.barchart'/>",
	category: "ui",
	attribute: {
		linkable: false
	},
	props: {
		w: 250,
		h: 175
	},
	lineStyle: {lineWidth: 2, lineColor: "136,136,136"},
	anchors: [],
	fontStyle: {size: 14},
	textBlock: [{
		position: {x: 10, y: -25, h: 25, w: "w-20"}, text: "<@i18n resource='schema.ui.barchart'/>"
	}],
	path: [
		{
			fillStyle: {type: "none"},
			actions: [
				//坐标系
				{action: "move", x: 0, y: 0},
				{action: "line", x: 0, y: "h"},
				{action: "line", x: "w", y: "h"}
			]
		},{
			actions: [
				{action: "move", x: 0, y: "h/7"},
				{action: "line", x: "w*0.7", y: "h/7"},
				{action: "line", x: "w*0.7", y: "h/7*2"},
				{action: "line", x: 0, y: "h/7*2"},
				{action: "close"}
			]
		},{
			fillStyle: {color: "r-40,g-40,b-40"},
			actions: [
				{action: "move", x: 0, y: "h/7*2"},
				{action: "line", x: "w*0.5", y: "h/7*2"},
				{action: "line", x: "w*0.5", y: "h/7*3"},
				{action: "line", x: 0, y: "h/7*3"},
				{action: "close"}
			]
		},{
			actions: [
				{action: "move", x: 0, y: "h/7*4"},
				{action: "line", x: "w*0.9", y: "h/7*4"},
				{action: "line", x: "w*0.9", y: "h/7*5"},
				{action: "line", x: 0, y: "h/7*5"},
				{action: "close"}
			]
		},{
			fillStyle: {color: "r-40,g-40,b-40"},
			actions: [
				{action: "move", x: 0, y: "h/7*5"},
				{action: "line", x: "w*0.6", y: "h/7*5"},
				{action: "line", x: "w*0.6", y: "h/7*6"},
				{action: "line", x: 0, y: "h/7*6"},
				{action: "close"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				lineStyle: {lineWidth: 1},
				fillStyle: {type: "none"},
				actions: [
					//坐标系
					{action: "move", x: 0.5, y: 0},
					{action: "line", x: 0.5, y: h+0.5},
					{action: "line", x: w, y: h+0.5},
					{action: "move", x: 0, y: Math.round(h*0.1)-0.5},
					{action: "line", x: 12.5, y: Math.round(h*0.1)-0.5},
					{action: "line", x: 12.5, y: Math.round(h*0.3)-0.5},
					
					{action: "move", x: 0, y: Math.round(h*0.3)-0.5},
					{action: "line", x: 20.5, y: Math.round(h*0.3)-0.5},
					{action: "line", x: 20.5, y: Math.round(h*0.4)+0.5},
					{action: "line", x: 0, y: Math.round(h*0.4)+0.5},
					
					{action: "move", x: 0, y: Math.round(h*0.6)-0.5},
					{action: "line", x: 16.5, y: Math.round(h*0.6)-0.5},
					{action: "line", x: 16.5, y: Math.round(h*0.7)+0.5},
					
					{action: "move", x: 0, y: Math.round(h*0.7)+0.5},
					{action: "line", x: 23.5, y: Math.round(h*0.7)+0.5},
					{action: "line", x: 23.5, y: Math.round(h*0.9)+0.5},
					{action: "line", x: 0, y: Math.round(h*0.9)+0.5}
					
				]
			}
		];
	}
});
