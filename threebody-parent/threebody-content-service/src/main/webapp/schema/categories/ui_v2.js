/**
 * 容器
 */
Schema.addCategory({
	name: "ui_v2",
	text: "<@i18n resource='schema.category.android.container'/>",
	dataAttributes: []
});

Schema.addShape({
	name: "uiBrowser_v2",
	title: "<@i18n resource='schema.ui.browser'/>",
	category: "ui_v2",
	attribute: {
		linkable: false,
		container: true
	},
	props: {
		w: 800,
		h: 500
	},
	lineStyle: {lineWidth: 2, lineColor: "222,225,230"},
	anchors: [],
	textBlock: [{
		position: {x: 60, y: 5, w: "w-70", h: "20"}, text: "https://www.processon.com", fontStyle: {textAlign: "left", color:"80,80,80"}
	}],
	path: [
		{
			actions: {ref: "roundRectangle"}
		},{
			//标题背景
			fillStyle: {color: "222,225,230"},
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
			fillStyle: {type: "solid", color: "197,204,224"},
			lineStyle: {lineWidth: 0},
			actions: [
				{action: "move", x: 10, y: 15},
			    {action: "curve", x1: 10, y1: 10, x2: 18, y2: 10, x: 18, y: 15},
			    {action: "curve", x1: 18, y1: 20, x2: 10, y2: 20, x: 10, y: 15},
			    {action: 'close'}
			]
		},{
			//第二个白点
			fillStyle: {type: "solid", color: "197,204,224"},
			lineStyle: {lineWidth: 0},
			actions: [
				{action: "move", x: 23, y: 15},
			    {action: "curve", x1: 23, y1: 10, x2: 31, y2: 10, x: 31, y: 15},
			    {action: "curve", x1: 31, y1: 20, x2: 23, y2: 20, x: 23, y: 15},
			    {action: 'close'}
			]
		},{
			//第三个白点
			fillStyle: {type: "solid", color: "197,204,224"},
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

/**
 * 组件
 */
Schema.addCategory({
	name: "ui_component_v2",
	text: "<@i18n resource='schema.uml.component.compt'/>",
	dataAttributes: []
});
/**
 * 矩形
 */
Schema.addShape({
	name: "ui_rectangle_v2",
	title: "<@i18n resource='schema.basic.rectangle'/>",
	category: "ui_component_v2",
	props: {
		w: 100,
		h: 70
	},
	lineStyle: {lineWidth: 1, lineColor: "222,225,230"},
	path: [
	    {
	    	actions: {ref: "rectangle"}
	    }
	]
});