/**
 * 
 */
Schema.addCategory({
	name: "andriod_elements",
	text: "<@i18n resource='schema.category.android.elements'/>",
	dataAttributes: []
});

/**
 * 状态栏
 */
Schema.addShape({
	name: "andriodStatusDark",
	title: "<@i18n resource='schema.ios.elements.statusbar.dark'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 24
	},
	anchors: [],
	resizeDir: [],
	fillStyle: {type: "none"},
	textBlock: [{
		position: {x: 0, y: 0, w: 80, h: 24}, text: "", fontStyle: {bold: false, size: 12, color: "255,255,255"}
	}],
	path: [
		{
			fillStyle: {alpha: 0.6},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/top.png", imageW: 360, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -12;
		h += 12;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/status.png", imageW: 30, imageH: 30, display: "original"},
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
 * Heading
 */
Schema.addShape({
	name: "andriodHeading1",
	title: "<@i18n resource='schema.ios.elements.heading'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 120,
		h: 30
	},
	anchors: [],
	fillStyle: {type: "none"},
	fontStyle: {bold: true, size: 15, color: "50,50,50"},
	textBlock: [{
		position: {x: 0, y: 0, w: "w", h: "h"},
		text: "标题"
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
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/heading.png", imageW: 30, imageH: 11, display: "original"},
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
	name: "andriodHeading2",
	title: "<@i18n resource='schema.ios.elements.heading'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 120,
		h: 30
	},
	anchors: [],
	fillStyle: {type: "none"},
	fontStyle: {bold: true, size: 15, color: "0,150,136"},
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
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/heading2.png", imageW: 30, imageH: 11, display: "original"},
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
	name: "andriodTextLabel",
	title: "<@i18n resource='schema.ios.elements.text'/>",
	category: "andriod_elements",
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
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/text.png", imageW: 30, imageH: 12, display: "stretch"},
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
 * title bar
 */

Schema.addShape({
	name: "andriodTitle1",
	title: "<@i18n resource='schema.category.android.title1'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	fillStyle: {type: "solid", color: "243,243,243"},
	anchors: [],
	path: [
		{
			actions: {ref: "rectangle"}
		}
	],
	textBlock: [{
		position: {x: 5, y: "h/4", w: "w-10", h: "h/2"},text: "Title", fontStyle: {bold: true, size: 14, color: "3,3,3"}
	}],
	drawIcon: function(w, h){
		var x = 0.5;
		var y = -6;
		h = Math.round(h + 4) + 4.5;
		w = Math.round(w) - 0.5;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/title_center.png", imageW: 30, imageH: 15, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * title bar
 */

Schema.addShape({
	name: "andriodTitle2",
	title: "<@i18n resource='schema.category.android.title2'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	fillStyle: {type: "solid", color: "243,243,243"},
	anchors: [],
	path: [
		{
			actions: {ref: "rectangle"}
		}
	],
	textBlock: [{
		position: {x: 12, y: "h/4", w: "w-10", h: "h/2"},text: "Title", fontStyle: {bold: true,textAlign: "left",size: 14, color: "3,3,3"}
	}],
	drawIcon: function(w, h){
		var x = 0.5;
		var y = -6;
		h = Math.round(h + 4) + 4.5;
		w = Math.round(w) - 0.5;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/title_left.png", imageW: 30, imageH: 15, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
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
	name: "andriodSearch1",
	title: "<@i18n resource='schema.category.android.title3'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 45
	},
	resizeDir: [],
	anchors: [],
	fillStyle: {type: "solid", color: "243,243,243"},
	fontStyle: {size: 16, textAlign: "left", color: "100,100,100"},
	textBlock: [{
		position: {x: 45, y: 13, w: 257, h: 21}, text: "Title",fontStyle: {bold: true}
	}],
	path: [
		{
			fillStyle: {alpha: 1},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/list.png", imageW: 18, imageH: 12, display: "static", imageX: "w*0.05", imageY: "h*0.36"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/search_ico.png", imageW: 16, imageH: 16, display: "static", imageX: "w*0.90", imageY: "h*0.29"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = -6;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/title_menu.png", imageW: 30, imageH: 24, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * back
 */
Schema.addShape({
	name: "andriodBack",
	title: "<@i18n resource='schema.category.android.title4'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 45
	},
	resizeDir: [],
	anchors: [],
	fillStyle: {type: "solid", color: "243,243,243"},
	fontStyle: {size: 16, textAlign: "left", color: "100,100,100"},
	textBlock: [{
		position: {x: 45, y: 13, w: 257, h: 21}, text: "Title",fontStyle: {bold: true}
	}],
	path: [
		{
			fillStyle: {alpha: 1},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/arrow_left.png", imageW: 18, imageH: 12, display: "static", imageX: "w*0.05", imageY: "h*0.36 - 1"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/search_ico.png", imageW: 16, imageH: 16, display: "static", imageX: "w*0.90", imageY: "h*0.29"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = -6;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/title.png", imageW: 30, imageH: 24, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * title bar
 */

Schema.addShape({
	name: "andriodTitle3",
	title: "<@i18n resource='schema.category.android.title5'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	fillStyle: {type: "solid", color: "243,243,243"},
	anchors: [],
	resizeDir: [],
	path: [
		{
			actions: {ref: "rectangle"}
		},
		{
			lineStyle: {lineWidth: 1, lineColor: "0,150,136"},
			actions: [
				{action: "move", x: 25, y: "47"},
				{action: "line", x: "110", y: "47"}
			]
		}
		,{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	textBlock: [{
		position: {x: 20, y: 0, w: 100, h: 48},text: "Menu A", fontStyle: {bold: true, size: 14, color: "0,150,136"}
	},
		{
		position: {x: 120, y: 0, w: 100, h: 48},text: "Menu B", fontStyle: {bold: true, size: 14, color: "120,120,120"}
	},
		{
		position: {x: 220, y: 0, w: 100, h: 48},text: "Menu C", fontStyle: {bold: true, size: 14, color: "120,120,120"}
	}],
	drawIcon: function(w, h){
		var x = 0.5;
		var y = -6;
		h = Math.round(h + 4) + 4.5;
		w = Math.round(w) - 0.5;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/menu.png", imageW: 30, imageH: 15, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
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
	name: "andriodSearch",
	title: "Search Bar",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 45
	},
	resizeDir: [],
	anchors: [],
	fillStyle: {type: "solid", color: "243,243,243"},
	fontStyle: {size: 16, textAlign: "left", color: "100,100,100"},
	textBlock: [{
		position: {x: 45, y: 12, w: 257, h: 21}, text: "Search",fontStyle: {bold: true}
	}],
	path: [
		{
			fillStyle: {alpha: 1},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "solid", color: "255,255,255"},
			lineStyle: {lineWidth: 0},
			actions: [
				{action: "move", x: "7", y: "12"},
				{action: "quadraticCurve", x1: "7", y1: "7", x: "12", y: "7"},
				{action: "line", x: "348", y: "7"},
				{action: "quadraticCurve", x1: "352", y1: "7", x: "352", y: "12"},
				{action: "line", x: "352", y: "h-12"},
				{action: "quadraticCurve", x1: "352", y1: "h-7", x: "348", y: "h-7"},
				{action: "line", x: "12", y: "h-7"},
				{action: "quadraticCurve", x1: "7", y1: "h-7", x: "7", y: "h-12"},
				{action: "close"}
			]
		},
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/search_ico.png", imageW: 18, imageH: 12, display: "static", imageX: "w*0.05", imageY: "h*0.28"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/search_say.png", imageW: 16, imageH: 16, display: "static", imageX: "w*0.90", imageY: "h*0.29"},
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
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/search.png", imageW: 28, imageH: 24, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
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
	name: "andriodListView1",
	title: "<@i18n resource='schema.category.android.list1'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 160
	},
	anchors: [],
	fillStyle: {type: "solid", color: "252,252,252"},
	fontStyle: {size: 14, textAlign: "left"},
	textBlock: [{
		position: {x: 15, y: "5", w: 265, h: "h/4-10"}, text: "Single line item"
	},{
		position: {x: 15, y: "h/4+5", w: 265, h: "h/4-10"}, text: "Single line item"
	},{
		position: {x: 15, y: "h/2+5", w: 265, h: "h/4-10"}, text: "Single line item"
	},{
		position: {x: 15, y: "h*0.75+5", w: 265, h: "h/4-10"}, text: "Single line item"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 1, lineColor: "220,220,220"},
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
 * List View
 */
Schema.addShape({
	name: "andriodListView2",
	title: "<@i18n resource='schema.category.android.list2'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 260
	},
	anchors: [],
	fillStyle: {type: "solid", color: "252,252,252"},
	fontStyle: {size: 14, textAlign: "left"},
	textBlock: [{
		position: {x: 15, y: "h/10 -16", w: 265, h: "25"},text: "Single line item",fontStyle: {size: 16, color: "113,113,113"}
	},
	{
		position: {x: 15, y: "h/10 + 9", w: 265, h: "20"}, text: "Single line item",fontStyle: {size: 13, color: "130,130,130"}
	}
	,{
		position: {x: 15, y: "h/4+10", w: 265, h: "25"}, text: "Single line item",fontStyle: {size: 16, color: "113,113,113"}
	},
	{
		position: {x: 15, y: "h/3 + 13", w: 265, h: "20"}, text: "Single line item",fontStyle: {size: 13, color: "130,130,130"}
	},
	{
		position: {x: 15, y: "h/2+8", w: 265, h: "25"}, text: "Single line item",fontStyle: {size: 16, color: "113,113,113"}
	},
	{
		position: {x: 15, y: "h/1.67 + 7", w: 265, h: "20"}, text: "Single line item",fontStyle: {size: 13, color: "130,130,130"}
	},	
	{
		position: {x: 15, y: "h*0.75+9", w: 265, h: "25"}, text: "Single line item",fontStyle: {size: 16, color: "113,113,113"}
	},
	{
		position: {x: 15, y: "h/1.18 + 8", w: 265, h: "20"}, text: "Single line item",fontStyle: {size: 13, color: "130,130,130"}
	}
	],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 1, lineColor: "220,220,220"},
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
		}
		,{
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
	name: "andriodListRow",
	title: "<@i18n resource='schema.category.android.list3'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 40
	},
	anchors: [],
	fillStyle: {type: "solid", color: "252,252,252"},
	fontStyle: {size: 14, textAlign: "left"},
	textBlock: [{
		position: {x: 15, y: 5, w: 265, h: "h-10"}, text: "Single line item"
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
 * list
 */
Schema.addShape({
	name: "andriodListView3",
	title: "<@i18n resource='schema.category.android.list4'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 250,
		h: 180
	},
	anchors: [],
	fillStyle: {type: "solid", color: "243,243,243"},
	fontStyle: {size: 14, textAlign: "left"},
	textBlock: [{
		position: {x: 15, y: "5", w: "w - 25", h: "h/4-10"}, text: "List Item"
	},{
		position: {x: 15, y: "h/4+5", w: "w - 25", h: "h/4-10"}, text: "List Item"
	},{
		position: {x: 15, y: "h/2+5", w: "w - 25", h: "h/4-10"}, text: "List Item"
	},{
		position: {x: 15, y: "h*0.75+5", w: "w - 25", h: "h/4-10"}, text: "List Item"
	}],
	path: [
		{
			lineStyle:{lineWidth:0},
			actions: {ref: "roundRectangle"}
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 1, lineColor: "220,220,220"},
			actions: [
				{action: "move", x: 15, y: "Math.round(h/4) + 0.5"},
				{action: "line", x: "w - 15", y: "Math.round(h/4) + 0.5"},
				{action: "move", x: 15, y: "Math.round(h/2) + 0.5"},
				{action: "line", x: "w - 15", y: "Math.round(h/2) + 0.5"},
				{action: "move", x: 15, y: "Math.round(h*0.75) + 0.5"},
				{action: "line", x: "w - 15", y: "Math.round(h*0.75) + 0.5"},
				{action: "move", x: 15, y: "h - 0.5"},
				{action: "line", x: "w - 15", y: "h - 0.5"}
			]
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -5;
		h += 5;
		var x = -8;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/list.png", imageW: 30, imageH: 30, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
/**
 * label
 */
Schema.addShape({
	name: "andriodTag",
	title: "<@i18n resource='schema.category.android.tag'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 65,
		h: 25
	},
	anchors: [],
	fillStyle: {type: "solid", color: "160,160,160"},
	fontStyle: {size: 13, textAlign: "center",color:"255,255,255"},
	textBlock: [{
		position: {x: 5, y: 5, w: "w-10", h: "h-10"}, text: "tag"
	}],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "roundRectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/tag.png", imageW: 30, imageH: 10, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
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
	name: "andriodTooltip",
	title: "<@i18n resource='schema.ios.elements.tooltip'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 130,
		h: 60
	},
	anchors: [],
	fillStyle: {type: "solid", color: "204,204,255"},
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
 * dialog
 */
Schema.addShape({
	name: "andriodDialog",
	title: "Dialog & Confirm",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 300,
		h: 180
	},
	anchors: [],
	fillStyle: {type: "solid", color: "243,243,243"},
	textBlock: [{
		position: {x: 15, y: 14, w: "w-24", h: "30"}, text: "This is a Dialog",fontStyle: {textAlign: "left",bold: true, size: 18, color: "60,60,60"}
	},
	{
		position: {x: 15, y: 45, w: "w-30", h: "h/2"}, text: "This is a Dialog, you can use it as a simple dialog, or a confirm window yet.",fontStyle: {textAlign: "left", size: 15, color: "80,80,80"}
	},
	{
		position: {x: "w-90", y: "h-35", w: "80", h: "25"}, text: "Save", fontStyle: {textAlign: "center", bold: true, size: 14, color: "0,150,136"}
	},
	{
		position: {x: "w-150", y: "h-35", w: "80", h: "25"}, text: "Cancel",fontStyle: {textAlign: "center", bold: false, size: 14, color: "0,150,136"}
	}],
	path: [
		{
			lineStyle:{lineWidth:0},
			actions: {ref: "roundRectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -5;
		h += 5;
		var x = -8;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/dialog.png", imageW: 30, imageH: 15, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

/**
 * dialog
 */
Schema.addShape({
	name: "andriodConfirm",
	title: "Confirm",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 300,
		h: 100
	},
	anchors: [],
	fillStyle: {type: "solid", color: "243,243,243"},
	textBlock: [
	{
		position: {x: 15, y: 5, w: "w-30", h: "h/2"}, text: "Are you sure to delete this messages?",fontStyle: {textAlign: "left", size: 15, color: "80,80,80"}
	},
	{
		position: {x: "w-90", y: "h-35", w: "80", h: "25"}, text: "Done", fontStyle: {textAlign: "center", bold: false, size: 14, color: "0,150,136"}
	},
	{
		position: {x: "w-150", y: "h-35", w: "80", h: "25"}, text: "Cancel",fontStyle: {textAlign: "center", bold: false, size: 14, color: "0,150,136"}
	}],
	path: [
		{
			lineStyle:{lineWidth:0},
			actions: {ref: "roundRectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -5;
		h += 5;
		var x = -8;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/confirm.png", imageW: 30, imageH: 15, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
/**
 * 输入法
 */
Schema.addShape({
	name: "andriodInput",
	title: "<@i18n resource='schema.category.android.shurufa'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 223
	},
	anchors: [],
	resizeDir: [],
	fillStyle: {type: "none"},
	textBlock: [{
		position: {x: 100, y: 100, w: 80, h: 24}, text: "", fontStyle: {bold: false, size: 12, color: "0,0,0"}
	}],
	path: [
		{
			fillStyle: {alpha: 0.6},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		},{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/input.jpg", imageW: 360, imageH: 223, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = -8;
		h += 8;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/input.png", imageW: 26, imageH: 20, display: "original"},
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
	name: "andriodCon",
	title: "<@i18n resource='schema.category.android.container'/>",
	category: "andriod_elements",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 100
	},
	lineStyle: {lineWidth: 0},
	fillStyle: {type: "solid", color: "255,255,255"},
	anchors: [],
	path: [
		{
			actions: {ref: "rectangle"}
		}
	],
	textBlock: [],
	drawIcon: function(w, h){
		var x = 0.5;
		var y = -6;
		h = Math.round(h + 4) + 4.5;
		w = Math.round(w) - 0.5;
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/container.png", imageW: 30, imageH: 15, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});



