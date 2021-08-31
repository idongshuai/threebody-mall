/**
 * Basic shapes
 */

Schema.addCategory({
	name: "basic",
	text: "<@i18n resource='schema.category.basic'/>",
	dataAttributes: [
		{name: "<@i18n resource='schema.diagram.biz.no'/>", type:"number", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.name'/>", type:"string", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.owner'/>", type:"string", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.link'/>", type:"link", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.memo'/>", type:"string", value:"", category: "default"}
	]
});
/**
 * Text
 */
Schema.addShape({
	name: "text",
	title: "<@i18n resource='schema.basic.text'/>",
	category: "basic",
	props: {
		w: 120,
		h: 40
	},
	textBlock: [
		{
			position: {x: 0, y: 0, w: "w", h: "h"},
			text: "<@i18n resource='schema.basic.text'/>"
		}
	],
	path: [
		{
			lineStyle: {lineWidth: 0},
			fillStyle: {
				type: "none"
			},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = 0;
		var y = -10;
		var translateX = 5;
		h = h + 20;
		w = w - 10;
		return [
			{
				lineStyle: {lineWidth: 2},
				fillStyle: {
					type: "solid",
					color: "50, 50, 50"
				},
				actions: [
				    {action: "move", x: translateX+x, y: y},
					{action: "line", x: translateX+w, y: y},
					{action: "line", x: translateX+w, y: y+h*0.2},
					{action: "line", x: translateX+w*0.9, y: y+h*0.12},
					{action: "line", x: translateX+w*0.55, y: y+h*0.12},
					{action: "line", x: translateX+w*0.55, y: y+h*0.85},
					{action: "line", x: translateX+w*0.63, y: y+h},
					{action: "line", x: translateX+w*0.37, y: y+h},
					{action: "line", x: translateX+w*0.45, y: y+h*0.85},
					{action: "line", x: translateX+w*0.45, y: y+h*0.12},
					{action: "line", x: translateX+w*0.1, y: y+h*0.12},
					{action: "line", x: translateX, y: y+h*0.20},
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
	name: "note",
	title: "<@i18n resource='schema.basic.note'/>",
	category: "basic",
	props: {
		w: 80,
		h: 100
	},
	textBlock: [
		{position: {x: 10, y: 10, w: "w-20", h: "h-20"}}
	],
	fillStyle: {
		color: "255, 255, 170"
	},
	lineStyle: {lineWidth: 0},
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
/**
 * 直线
 */
Schema.addShape({
	name: "linker_shape_solid",
	title: "<@i18n resource='schema.basic.line'/>",
	category: "basic",
	attribute: {linkable: false},
	props: {
		w: 100,
		h: 100
	},
	textBlock: [],
	fillStyle: {
		color: "0, 0, 0"
	},
	lineStyle: {lineWidth: 2},
	path: [
		{
			actions: [
				{action: "move", x: "4", y: "h-4"},
				{action: "line", x: "w-6", y: "6"},
				{action: "close"}
			]
		},
		{
			lineStyle:{
				lineWidth: 0
			},
			actions: [
				{action: "move", x: "w-4", y: "4"},
				{action: "line", x: "w-20", y: "12"},
				{action: "line", x: "w-12", y: "20"},
				{action: "close"}
			]
		}
	],
	//文件定义
	element:{
		name:'linker',
		boxPos:{x:0, y:0, w:160, h:0},
		props:{x:0, y:0, w:160, h:0},
		dataAttributes:[],
		from:{x:0, y:0},
		to:{x:160, y:0},
		group:'',
		id:'',
		lineStyle:{},
		linkerType:'broken',
		locked:false,
		points:[{x:80,y:0},{x:80,y:0}],
		text:''
	}
});
/**
 * 图片
 */
Schema.addShape({
	name: "image",
	title: "Image",
	attribute: {
		linkable: false,
		visible: false
	},
	category: "basic",
	textBlock: [],
	props: {
		w: 98,
		h: 72
	},
	path: [
	    {
	    	actions: {ref: "rectangle"}
	    }
	]
});
/**
 * 圆
 */
Schema.addShape({
	name: "round",
	title: "<@i18n resource='schema.basic.round'/>",
	category: "basic",
	props: {
		w: 70,
		h: 70
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});

/**
 * 矩形
 */
Schema.addShape({
	name: "rectangle",
	title: "<@i18n resource='schema.basic.rectangle'/>",
	category: "basic",
	props: {
		w: 100,
		h: 70
	},
	path: [
	    {
	    	actions: {ref: "rectangle"}
	    }
	]
});

/**
 * 圆角矩形
 */
Schema.addShape({
	name: "roundRectangle",
	title: "<@i18n resource='schema.basic.roundrectangle'/>",
	category: "basic",
	props: {
		w: 100,
		h: 70
	},
	path: [
		{
			actions: {ref: "roundRectangle"}
		}
	]
});	

/**
 * 三角形
 */
Schema.addShape({
	name: "triangle",
	title: "<@i18n resource='schema.basic.triangle'/>",
	category: "basic",
	props: {
		w: 80,
		h: 70
	},
	textBlock: [
		{position: {x: "10", y: "h*0.25", w: "w-20", h: "h*0.75"}}
	],
	anchors: [
	      {x: "w/2", y: "0"},
	      {x: "w/2", y: "h"},
	      {x: "w*0.25", y: "h/2"},
	      {x: "w*0.75", y: "h/2"}
	],
	path: [
		{
			actions: [
				{action: "move", x: "w/2", y: "0"},
			    {action: "line", x: "w", y: "h"},
			    {action: "line", x: "0", y: "h"},
			    {action: 'close'}
			]
		}
	]
});

/**
 * 菱形
 */
Schema.addShape({
	name: "diamond",
	title: "<@i18n resource='schema.basic.diamond'/>",
	category: "basic",
	props: {
		w: 120,
		h: 80
	},
	textBlock: [
		{position: {x: "10", y: "h*0.13", w: "w-20", h: "h*0.75"}}
	],
	anchors: [
	      {x: "0", y: "h/2"},
	      {x: "w/2", y: "0"},
	      {x: "w", y: "h/2"},
	      {x: "w/2", y: "h"}
	],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "h/2"},
			    {action: "line", x: "w/2", y: "0"},
			    {action: "line", x: "w", y: "h/2"},
			    {action: "line", x: "w/2", y: "h"},
			    {action: 'close'}
			]
		}
	]
});

/**
 * 五边形
 */
Schema.addShape({
	name: "polygon",
	title: "<@i18n resource='schema.basic.polygon'/>",
	category: "basic",
	props: {
		w: 74,
		h: 70
	},
	textBlock: [
		{position: {x: "10", y: "h*0.15", w: "w-20", h: "h*0.85"}}
	],
	anchors: [
	      {x: "w/2", y: "0"},
	      {x: "w/2", y: "h"},
	      {x: "0", y: "h*0.39"},
	      {x: "w", y: "h*0.39"}
	],
	path: [
		{
			actions: [
		       {action: "move", x: "w/2", y: "0"},
			   {action: "line", x: "0", y: "h*0.39"},
			   {action: "line", x: "w*0.18", y: "h"},
			   {action: "line", x: "w*0.82", y: "h"},
			   {action: "line", x: "w", y: "h*0.39"},
			   {action: 'close'}
			]
		}
	]
});

/**
 * 六边形
 */
Schema.addShape({
	name: "hexagon",
	title: "<@i18n resource='schema.basic.hexagon'/>",
	category: "basic",
	props: {
		w: 84,
		h: 70
	},
	path: [
		{
			actions: [
		       {action: "move", x: "Math.min(w,h)*0.21", y: "0"},
			   {action: "line", x: "w-Math.min(w,h)*0.21", y: "0"},
			   {action: "line", x: "w", y: "h * 0.5"},
			   {action: "line", x: "w-Math.min(w,h)*0.21", y: "h"},
			   {action: "line", x: "Math.min(w,h)*0.21", y: "h"},
			   {action: "line", x: "0", y: "h * 0.5"},
			   {action: "line", x: "Math.min(w,h)*0.21", y: "0"},
			   {action: 'close'}
			]
		}
	]
});

/**
 * 八边型
 */
Schema.addShape({
	name: "octagon",
	title: "<@i18n resource='schema.basic.octagon'/>",
	category: "basic",
	props: {
		w: 70,
		h: 70
	},
	textBlock: [{position: {x: "10", y: "10", w: "w-20", h: "h-20"}}],
	path: [
		{
			actions: [
		       {action: "move", x: "Math.min(w,h)*0.29", y: "0"},
			   {action: "line", x: "w-Math.min(w,h)*0.29", y: "0"},
			   {action: "line", x: "w", y: "h*0.29"},
			   {action: "line", x: "w", y: "h*0.71"},
			   {action: "line", x: "w-Math.min(w,h)*0.29", y: "h"},
			   {action: "line", x: "Math.min(w,h)*0.29", y: "h"},
			   {action: "line", x: "0", y: "h*0.71"},
			   {action: "line", x: "0", y: "h*0.29"},
			   {action: "close"}
			]
		}
	]
});

/**
*五角星
*/
Schema.addShape({
	name: "pentagon",
	title: "<@i18n resource='schema.basic.pentagon'/>",
	category: "basic",
	props: {
		w: 70,
		h: 70
	},
	textBlock: [{position: {x: "w*0.15", y: "h*0.20", w: "w*0.70", h: "h*0.65"}}],
	anchors: [{x: "w*0.5", y: "0"}, {x: "0", y: "h*0.38"}, {x: "w*0.5", y: "h*0.76"}, {x: "w", y: "h*0.38"}],
	path: [
		{
			actions: [
			       {action: "move", x: "w*0.62", y: "h*0.38"},
				   {action: "line", x: "w*0.5", y: "0"},
				   {action: "line", x: "w*0.38", y: "h*0.38"},
				   {action: "line", x: "0", y: "h*0.38"},
				   {action: "line", x: "w*0.3", y: "h*0.62"},
				   {action: "line", x: "w*0.18", y: "h"},
				   {action: "line", x: "w*0.5", y: "h*0.76"},
				   {action: "line", x: "w*0.82", y: "h"},
				   {action: "line", x: "w*0.7", y: "h*0.62"},
				   {action: "line", x: "w", y: "h*0.38"},
				   {action: "close"}
			]
		}
	]
});
/**
 * 扇形
 */
Schema.addShape({
	name: "sector",
	title: "<@i18n resource='schema.basic.sector'/>",
	category: "basic",
	props: {
		w: 80,
		h: 80
	},
	anchors: [
		      {x: "0", y: "0.134*h"},
		      {x: "w/2", y: "0"},
		      {x: "w", y: "0.134*h"},
		      {x: "w/2", y: "h"}
		],
	path: [
			{
				actions: [
					{action: "move", x: "w/2", y: "h"},
					{action: "line", x: "0", y: "0.134*h"},
				    {action: "quadraticCurve", x1: "w/2", y1: "-0.134*h", x: "w", y: "h*0.134"},
				    {action: 'close'}
				]
			}
	]
});
/**
 * 扇形2
 */
Schema.addShape({
	name: "sector2",
	title: "<@i18n resource='schema.basic.sector'/>",
	category: "basic",
	props: {
		w: 80,
		h: 45
	},
	anchors: [
		      {x: "0", y: "0.238*h"},
		      {x: "w/2", y: "0"},
		      {x: "w", y: "0.238*h"},
		      {x: "w/2", y: "h"}
		],
	path: [
			{
				actions: [
					{action: "move", x: "w*0.25", y: "h"},
					{action: "line", x: "0", y: "0.238*h"},
				    {action: "quadraticCurve", x1: "w/2", y1: "-0.238*h", x: "w", y: "h*0.238"},
				    {action: "line", x: "w*0.75", y: "h"},
				    {action: "quadraticCurve", x1: "w/2", y1: "0.8*h", x: "w*0.25", y: "h"},
				    {action: 'close'}
				]
			}
	]
});
/**
 * 十字架
 */
Schema.addShape({
	name: "cross",
	title: "<@i18n resource='schema.basic.cross'/>",
	category: "basic",
	props:{
		w: 70,
		h: 70
	},
	textBlock: [{position: {x: "0", y: "h*0.5-Math.min(w,h)/8", w: "w", h: "Math.min(w,h)*2/8"}}],
	path: [
		{
			actions: [
		        {action: "move", x: "w*0.5-Math.min(w,h)/8", y: "0"},
				{action: "line", x: "w*0.5+Math.min(w,h)/8", y: "0"},
				{action: "line", x: "w*0.5+Math.min(w,h)/8", y: "h*0.5-Math.min(w,h)/8"},
				{action: "line", x: "w", y: "h*0.5-Math.min(w,h)/8"},
				{action: "line", x: "w", y: "h*0.5+Math.min(w,h)/8"},
				{action: "line", x: "w*0.5+Math.min(w,h)/8", y: "h*0.5+Math.min(w,h)/8"},
				{action: "line", x: "w*0.5+Math.min(w,h)/8", y: "h"},
				{action: "line", x: "w*0.5-Math.min(w,h)/8", y: "h"},
				{action: "line", x: "w*0.5-Math.min(w,h)/8", y: "h*0.5+Math.min(w,h)/8"},
				{action: "line", x: "0", y: "h*0.5+Math.min(w,h)/8"},
				{action: "line", x: "0", y: "h*0.5-Math.min(w,h)/8"},
				{action: "line", x: "w*0.5-Math.min(w,h)/8", y: "h*0.5-Math.min(w,h)/8"},
				{action: "close"}
			]
		}
	]
});

/**
*云图
*/
Schema.addShape({
	name: "cloud",
	title: "<@i18n resource='schema.basic.cloud'/>",
	category: "basic",
	props: {
		w: 90,
		h: 70
	},
	textBlock: [{position: {x: 10, y: 10, w: "w-20", h: "h-20"}}],
	anchors: [{x: "0", y: "h*0.5"}, {x: "w*0.19", y: "h*0.9"}, {x: "w*0.57", y: "h"}, {x: "w*0.962", y: "h*0.8"}, {x: "w*0.9543", y: "h*0.23"}, {x: "w*0.6", y: "h*0.01"}, {x: "w*0.17", y: "h*0.09"}],
	path: [
		{
			actions: [
				{action: "move", x: "0.12*w", y: "0.7*h"},
				{action: "curve", x1: "-0.1*w", y1: "0.5*h", x2: "0.04*w", y2: "0.35*h", x: "0.09*w", y: "0.3*h"},
				{action: "curve", x1: "0.07*w", y1: "0.05*h", x2: "0.32*w", y2: "0.0*h", x: "0.42*w", y: "0.1*h"},
				{action: "curve", x1: "0.50*w", y1: "-0.05*h", x2: "0.75*w", y2: "0.0*h", x: "0.75*w", y: "0.15*h"},
				{action: "curve", x1: "0.95*w", y1: "0.1*h", x2: "1.03*w", y2: "0.3*h", x: "0.95*w", y: "0.55*h"},
				{action: "curve", x1: "1.02*w", y1: "0.75*h", x2: "0.95*w", y2: "1.0*h", x: "0.72*w", y: "0.9*h"},
				{action: "curve", x1: "0.67*w", y1: "1.03*h", x2: "0.47*w", y2: "1.03*h", x: "0.42*w", y: "0.9*h"},
				{action: "curve", x1: "0.32*w", y1: "1.0*h", x2: "0.12*w", y2: "0.95*h", x: "0.12*w", y: "0.7*h"},
				{action: "close"}
			]
		}
	]
});

/**
 * 评论
 */
Schema.addShape({
	name: "comment",
	title: "<@i18n resource='schema.basic.comment'/>",
	category: "basic",
	props: {
		w: 90,
		h: 70
	},
	anchors: [{x: "w", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	path: [
	       {
	    	   actions: [
					{action: "move", x: "0", y: "h/2"},
					{action: "curve", x1: "0", y1: "-h/6", x2: "w", y2: "-h/6", x: "w", y: "h/2"},
					{action: "quadraticCurve", x1: "w*0.98", y1: "h*0.98", x: "w/2", y: "h"},
					{action: "quadraticCurve", x1: "w/3", y1: "h", x: "w/6", y: "h*0.9"},
					{action: "line", x: "0",y: "h"},
					{action: "line", x: "w*0.117",y: "h*0.857"},
					{action: "quadraticCurve", x1: "0", y1: "0.7*h", x: "0", y: "h/2"}
	    	   ]
	       }
	]
});

/**
*花括号
*/
Schema.addShape({
	name: "braces",
	title: "<@i18n resource='schema.basic.braces'/>",
	category: "basic",
	attribute: {
		linkable: false
	},
	props: {
		w: 200,
		h: 140
	},
	fillStyle: {
		type: "none"
	},
	anchors: [{x: "w", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	path: [
		{
			fillStyle: {
				type: "none"
			},
			actions: [
				{action: "move", x: "Math.min(w*0.2,18)", y: "0"},
				{action: "quadraticCurve", x1: "Math.min(w*0.1,9)", y1: "0", x: "Math.min(w*0.1,9)", y: "Math.min(h*0.1,9)"},
				{action: "line", x: "Math.min(w*0.1,9)", y: "h*0.5-Math.min(h*0.1,9)"},
				{action: "quadraticCurve", x1: "Math.min(w*0.1,9)", y1: "h*0.5", x: "0", y: "h*0.5"},
				{action: "quadraticCurve", x1: "Math.min(w*0.1,9)", y1: "h*0.5", x: "Math.min(w*0.1,9)", y: "h*0.5+Math.min(h*0.1,9)"},
				{action: "line", x: "Math.min(w*0.1,9)", y: "h-Math.min(h*0.1,9)"},
				{action: "quadraticCurve", x1: "Math.min(w*0.1,9)", y1: "h", x: "Math.min(w*0.2,18)", y: "h"}//左边结束
			]
		},
		{
			fillStyle: {
				type: "none"
			},
			actions: [
				{action: "move", x: "w-Math.min(w*0.2,18)", y: "h"},
				{action: "quadraticCurve", x1: "w-Math.min(w*0.1,9)", y1: "h", x: "w-Math.min(w*0.1,9)", y: "h-Math.min(h*0.1,9)"},
				{action: "line", x: "w-Math.min(w*0.1,9)", y: "h*0.5+Math.min(h*0.1,9)"},
				{action: "quadraticCurve", x1: "w-Math.min(w*0.1,9)", y1: "h*0.5", x: "w", y: "h*0.5"},
				{action: "quadraticCurve", x1: "w-Math.min(w*0.1,9)", y1: "h*0.5", x: "w-Math.min(w*0.1,9)", y: "h*0.5-Math.min(h*0.1,9)"},
				{action: "line", x: "w-Math.min(w*0.1,9)", y: "Math.min(h*0.1,9)"},
				{action: "quadraticCurve", x1: "w-Math.min(w*0.1,9)", y1: "0", x: "w-Math.min(w*0.2,18)", y: "0"}//右边结束
			]
		},
		{
			lineStyle: {
				lineWidth: 0
			},
			fillStyle: {type: "none"},
			actions: {ref: "rectangle"}
		}
	]
});

/**
*中括号
*/
Schema.addShape({
	name: "parentheses",
	title: "<@i18n resource='schema.basic.parentheses'/>",
	category: "basic",
	attribute: {
		linkable: false
	},
	props: {
		w: 200,
		h: 140
	},
	fillStyle: {
		type: "none"
	},
	anchors: [{x: "w", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	path: [
		{
			actions: [
				{action: "move", x: "Math.min(w*0.1,18)", y: "0"},
				{action: "line", x: "0", y: "Math.min(h*0.1,15)"},
				{action: "line", x: "0", y: "h-Math.min(h*0.1,15)"},
				{action: "line", x: "Math.min(w*0.1,18)", y: "h"},//左边结束
				{action: "move", x: "w-Math.min(w*0.1,18)", y: "h"},
				{action: "line", x: "w", y: "h-Math.min(h*0.1,15)"},
				{action: "line", x: "w", y: "Math.min(h*0.1,15)"},
				{action: "line", x: "w-Math.min(w*0.1,18)", y: "0"}//右边结束
			]
		},
		{
			lineStyle: {
				lineWidth: 0
			},
			fillStyle: {type: "none"},
			actions: {ref: "rectangle"}
		}
	]
});
/**
*花括号right Brace
*/
Schema.addShape({
	name: "rightBrace",
	title: "<@i18n resource='schema.basic.note'/>",
	category: "basic",
	attribute: {
		linkable: false
	},
	props: {
		w: 100,
		h: 140
	},
	fontStyle: {
		textAlign: "left"
	},
	fillStyle: {
		type: "none"
	},
	textBlock: [{position: {x: "27", y: "0", w: "w-27", h: "h"}}],
	anchors: [],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "h"},
				{action: "quadraticCurve", x1: "Math.min(w*0.1,9)", y1: "h", x: "Math.min(w*0.1,9)", y: "h-Math.min(h*0.1,9)"},
				{action: "line", x: "Math.min(w*0.1,9)", y: "h*0.5+Math.min(h*0.1,9)"},
				{action: "quadraticCurve", x1: "Math.min(w*0.1,9)", y1: "h*0.5", x: "22", y: "h*0.5"},
				{action: "quadraticCurve", x1: "Math.min(w*0.1,9)", y1: "h*0.5", x: "Math.min(w*0.1,9)", y: "h*0.5-Math.min(h*0.1,9)"},
				{action: "line", x: "Math.min(w*0.1,9)", y: "Math.min(h*0.1,9)"},
				{action: "quadraticCurve", x1: "Math.min(w*0.1,9)", y1: "0", x: "0", y: "0"}//右边结束
			]
		},
		{
			lineStyle: {
				lineWidth: 0
			},
			fillStyle: {type: "none"},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = 10;
		return [
			{
				actions: [
					{action: "move", x: x+0, y: h},
					{action: "quadraticCurve", x1: x+Math.min(w*0.1,9), y1: h, x: x+Math.min(w*0.1,9), y: h-Math.min(h*0.1,9)},
					{action: "line", x: x+Math.min(w*0.1,9), y: h*0.5+Math.min(h*0.1,9)},
					{action: "quadraticCurve", x1: x+Math.min(w*0.1,9), y1: h*0.5, x: x+w*0.2, y: h*0.5},
					{action: "quadraticCurve", x1: x+Math.min(w*0.1,9), y1: h*0.5, x: x+Math.min(w*0.1,9), y: h*0.5-Math.min(h*0.1,9)},
					{action: "line", x: x+Math.min(w*0.1,9), y: Math.min(h*0.1,9)},
					{action: "quadraticCurve", x1: x+Math.min(w*0.1,9), y1: 0, x:x+ 0, y: 0}//右边结束
				]
			}
		];
	}
});
/**
*花括号left Brace
*/
Schema.addShape({
	name: "leftBrace",
	title: "<@i18n resource='schema.basic.note'/>",
	category: "basic",
	attribute: {
		linkable: false
	},
	props: {
		w: 100,
		h: 140
	},
	fontStyle: {
		textAlign: "right"
	},
	fillStyle: {
		type: "none"
	},
	textBlock: [{position: {x: "0", y: "0", w: "w-27", h: "h"}}],
	anchors: [],
	path: [
		{
			actions: [
				{action: "move", x: "w", y: "0"},
				{action: "quadraticCurve", x1: "w-Math.min(w*0.1,9)", y1: "0", x: "w-Math.min(w*0.1,9)", y: "Math.min(h*0.1,9)"},
				{action: "line", x: "w-Math.min(w*0.1,9)", y: "h*0.5-Math.min(h*0.1,9)"},
				{action: "quadraticCurve", x1: "w-Math.min(w*0.1,9)", y1: "h*0.5", x: "w-22", y: "h*0.5"},
				{action: "quadraticCurve", x1: "w-Math.min(w*0.1,9)", y1: "h*0.5", x: "w-Math.min(w*0.1,9)", y: "h*0.5+Math.min(h*0.1,9)"},
				{action: "line", x: "w-Math.min(w*0.1,9)", y: "h-Math.min(h*0.1,9)"},
				{action: "quadraticCurve", x1: "w-Math.min(w*0.1,9)", y1: "h", x: "w", y: "h"}
			]
		},
		{
			lineStyle: {
				lineWidth: 0
			},
			fillStyle: {type: "none"},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = 12;
		return [
			{
				actions: [
					{action: "move", x: w - x, y: 0},
					{action: "quadraticCurve", x1: w-Math.min(w*0.1,9) - x, y1: 0, x: w-Math.min(w*0.1,9) - x, y: Math.min(h*0.1,9)},
					{action: "line", x: w-Math.min(w*0.1,9) - x, y: h*0.5-Math.min(h*0.1,9)},
					{action: "quadraticCurve", x1: w-Math.min(w*0.1,9) - x, y1: h*0.5, x: w-w*0.2 - x, y: h*0.5},
					{action: "quadraticCurve", x1: w-Math.min(w*0.1,9) - x, y1: h*0.5, x: w-Math.min(w*0.1,9) - x, y: h*0.5+Math.min(h*0.1,9)},
					{action: "line", x: w-Math.min(w*0.1,9) - x, y: h-Math.min(h*0.1,9)},
					{action: "quadraticCurve", x1: w-Math.min(w*0.1,9) - x, y1: h, x: w - x, y: h}
				]
			}
		];
	}
});


/**
* APQC
*/
Schema.addShape({
	name: "apqc",
	title: "<@i18n resource='schema.basic.apqc'/>",
	category: "basic",
	props:{
		w: 200,
		h: 150
	},
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "h/8"},
				{action: "quadraticCurve", x1: "w*0.5", y1: "-h/8", x: "w", y: "h/8"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "0", y: "h"},
				{action: "line", x: "0", y: "h/8"},
				{action: "close"}       
			]
		}
	]
});

/**
*泪珠：Teardrop
*/
Schema.addShape({
	name: "teardrop",
	title: "<@i18n resource='schema.basic.teardrop'/>",
	category: "basic",
	props: {
		w: 70,
		h: 70
	},
	path: [
		{
			actions: [
				{action: "move", x: "w", y: "0"},
			   {action: "line", x: "w", y: "h/2"},
			   {action: "curve", x1: "w", y1: "h+h/6", x2: "0", y2: "h+h/6", x: "0", y: "h*0.5"},
			   {action: "quadraticCurve", x1: "0", y1: "0", x: "w/2", y: "0"},
			   {action: "line", x: "w/2", y: "0"},
			   {action: "line", x: "w", y: "0"},
			   {action: "close"}          
			]
		}
	]
});

/**
*左箭头
*/
Schema.addShape({
	name: "singleLeftArrow",
	title: "<@i18n resource='schema.basic.singleleftarrow'/>",
	category: "basic",
	props: {
		w: 90,
		h: 60
	},
	anchors: [{x: "w", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	textBlock: [{position: {x: "0", y: "h*0.33", w: "w", h: "h*0.34"}}],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "h/2"},
				{action: "line", x: "Math.min(0.5*h,0.45*w)", y: "0"},
				{action: "line", x: "Math.min(0.5*h,0.45*w)", y: "h*0.33"},
				{action: "line", x: "w", y: "h*0.33"},
				{action: "line", x: "w", y: "h*0.67"},
				{action: "line", x: "Math.min(0.5*h,0.45*w)", y: "h*0.67"},
				{action: "line", x: "Math.min(0.5*h,0.45*w)", y: "h"},
				{action: "line", x: "0", y: "h/2"},
				{action: "close"}          
			]
		}
	]
});

/**
*右箭头
*/
Schema.addShape({
	name: "singleRightArrow",
	title: "<@i18n resource='schema.basic.singlerightarrow'/>",
	category: "basic",
	props: {
		w: 90,
		h: 60
	},
	anchors: [{x: "w", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	textBlock: [{position: {x: "0", y: "h*0.33", w: "w", h: "h*0.34"}}],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "h*0.33"},
				{action: "line", x: "w-Math.min(h*0.5,w*0.45)", y: "h*0.33"},
				{action: "line", x: "w-Math.min(h*0.5,w*0.45)", y: "0"},
				{action: "line", x: "w", y: "h*0.5"},
				{action: "line", x: "w-Math.min(h*0.5,w*0.45)", y: "h"},
				{action: "line", x: "w-Math.min(h*0.5,w*0.45)", y: "h*0.67"},
				{action: "line", x: "0", y: "h*0.67"},
				{action: "line", x: "0", y: "h*0.33"},
				{action: "close"}          
			]
		}
	]
});

/**
*左右箭头
*/
Schema.addShape({
	name: "doubleHorizontalArrow",
	title: "<@i18n resource='schema.basic.doublehorizontalarrow'/>",
	category: "basic",
	props: {
		w: 90,
		h: 60
	},
	anchors: [{x: "w", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	textBlock: [{position: {x: "0", y: "h*0.33", w: "w", h: "h*0.34"}}],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "h*0.5"},
				{action: "line", x: "Math.min(h*0.5,w*0.45)", y: "0"},
				{action: "line", x: "Math.min(h*0.5,w*0.45)", y: "h*0.33"},
				{action: "line", x: "w-Math.min(h*0.5,w*0.45)", y: "h*0.33"},
				{action: "line", x: "w-Math.min(h*0.5,w*0.45)", y: "0"},
				{action: "line", x: "w", y: "h*0.5"},
				{action: "line", x: "w-Math.min(h*0.5,w*0.45)", y: "h"},
				{action: "line", x: "w-Math.min(h*0.5,w*0.45)", y: "h*0.67"},
				{action: "line", x: "Math.min(h*0.5,w*0.45)", y: "h*0.67"},
				{action: "line", x: "Math.min(h*0.5,w*0.45)", y: "h"},
				{action: "line", x: "0", y: "h*0.5"},
				{action: "close"}
			]
		}
	]
});

/**
*上箭头
*/
Schema.addShape({
	name: "singleUpArrow",
	title: "<@i18n resource='schema.basic.singleuparrow'/>",
	category: "basic",
	props: {
		w: 60,
		h: 90
	},
	anchors: [{x: "w*0.5", y: "0"}, {x: "w*0.5", y: "h"}],
	textBlock: [{position: {x: "-w*0.2", y: "h*0.43", w: "w*1.4", h: "h*0.24"}}],
	path: [
		{
			actions: [
				{action: "move", x: "w*0.5", y: "0"},
				{action: "line", x: "w", y: "Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.67", y: "Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.67", y: "h"},
				{action: "line", x: "w*0.33", y: "h"},
				{action: "line", x: "w*0.33", y: "Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "0", y: "Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.5", y: "0"},
				{action: "close"}          
			]
		}
	]
});

/**
*下箭头
*/
Schema.addShape({
	name: "singleDownArrow",
	title: "<@i18n resource='schema.basic.singledownarrow'/>",
	category: "basic",
	props: {
		w: 60,
		h: 90
	},
	anchors: [{x: "w*0.5", y: "0"}, {x: "w*0.5", y: "h"}],
	textBlock: [{position: {x: "-w*0.2", y: "h*0.33", w: "w*1.4", h: "h*0.24"}}],
	path: [
		{
			actions: [
				{action: "move", x: "w*0.33", y: "0"},
				{action: "line", x: "w*0.67", y: "0"},
				{action: "line", x: "w*0.67", y: "h-Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w", y: "h-Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.5", y: "h"},
				{action: "line", x: "0", y: "h-Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.33", y: "h-Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.33", y: "0"},
				{action: "close"}          
			]
		}
	]
});

/**
*上下箭头
*/
Schema.addShape({
	name: "doubleVerticalArrow",
	title: "<@i18n resource='schema.basic.doubleverticalarrow'/>",
	category: "basic",
	props: {
		w: 60,
		h: 90
	},
	anchors: [{x: "w*0.5", y: "0"}, {x: "w*0.5", y: "h"}],
	textBlock: [{position: {x: "-w*0.2", y: "h*0.38", w: "w*1.4", h: "h*0.24"}}],
	path: [
		{
			actions: [
				{action: "move", x: "w*0.5", y: "0"},
				{action: "line", x: "w", y: "Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.67", y: "Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.67", y: "h-Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w", y: "h-Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.5", y: "h"},
				{action: "line", x: "0", y: "h-Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.33", y: "h-Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.33", y: "Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "0", y: "Math.min(w*0.5,h*0.45)"},
				{action: "line", x: "w*0.5", y: "0"},
				{action: "close"}          
			]
		}
	]
});

/**
*左返回箭头：BackArrow
*/
Schema.addShape({
	name: "backArrow",
	title: "<@i18n resource='schema.basic.leftbackarrow'/>",
	category: "basic",
	props: {
		w: 70,
		h: 70
	},
	anchors: [{x: "w-Math.min(w*0.12,20)", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	textBlock: [{position: {x: "0", y: "0", w: "w-10", h: "h"}}],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "Math.min(Math.min(w,h)*0.4,80)"},
				{action: "quadraticCurve", x1: "0", y1: "0", x: "Math.min(Math.min(w,h)*0.4,80)", y: "0"},
				{action: "line", x: "w-Math.min(w*0.12,20)-Math.min(Math.min(w,h)*0.4,80)", y: "0"},
				{action: "quadraticCurve", x1: "w-Math.min(w*0.12,20)", y1: "0", x: "w-Math.min(w*0.12,20)", y: "Math.min(Math.min(w,h)*0.4,80)"},
				{action: "line", x: "w-Math.min(w*0.12,20)", y: "h-h*0.1-Math.min(h*0.1,50)"},
				{action: "line", x: "w", y: "h-h*0.1-Math.min(h*0.1,50)"},
				{action: "line", x: "w-Math.min(w*0.12,20)-Math.min(Math.min(h,w)*0.25,50)/2", y: "h"},
				{action: "line", x: "w-Math.min(w*0.12,20)*2 - Math.min(Math.min(h,w)*0.25,50)", y: "h-h*0.1-Math.min(h*0.1,50)"},
				{action: "line", x: "w-Math.min(w*0.12,20) - Math.min(Math.min(h,w)*0.25,50)", y: "h-h*0.1-Math.min(h*0.1,50)"},
				{action: "line", x: "w-Math.min(w*0.12,20) - Math.min(Math.min(h,w)*0.25,50)", y: "Math.min(Math.min(h,w)*0.4,80)"},
				{action: "quadraticCurve", x1: "w-Math.min(w*0.12,20)-Math.min(Math.min(h,w)*0.25,50)", y1: "Math.min(Math.min(h,w)*0.25,50)", x: "w-Math.min(w*0.12,20)-Math.min(Math.min(h,w)*0.25,50)-Math.min(w*0.15,30)", y: "Math.min(Math.min(h,w)*0.25,50)"},
				{action: "line", x: "Math.min(Math.min(h,w)*0.25,50)+Math.min(w*0.15,30)", y: "Math.min(Math.min(h,w)*0.25,50)"},
				{action: "quadraticCurve", x1: "Math.min(Math.min(h,w)*0.25,50)", y1: "Math.min(Math.min(h,w)*0.25,50)", x: "Math.min(Math.min(h,w)*0.25,50)", y: "Math.min(Math.min(h,w)*0.4,80)"},
				{action: "line", x: "Math.min(Math.min(h,w)*0.25,50)", y: "h"},
				{action: "line", x: "0", y: "h"},
				{action: "line", x: "0", y: "Math.min(Math.min(h,w)*0.4,80)"},
				{action: "close"}     
				
			]
		},
		{
			lineStyle: {
				lineWidth: 0
			},
			fillStyle: {type: "none"},
			actions: {ref: "rectangle"}
		}
	]
});
/**
*右返回箭头：BackArrow
*/
Schema.addShape({
	name: "rightBackArrow",
	title: "<@i18n resource='schema.basic.rightbackarrow'/>",
	category: "basic",
	props: {
		w: 70,
		h: 70
	},
	anchors: [{x: "Math.min(w*0.12,20)", y: "h*0.5"}, {x: "w", y: "h*0.5"}],
	textBlock: [{position: {x: "10", y: "0", w: "w-10", h: "h"}}],
	path: [
		{
			actions: [
				{action: "move", x: "w", y: "Math.min(Math.min(w,h)*0.4,80)"},
				{action: "quadraticCurve", x1: "w", y1: "0", x: "w-Math.min(Math.min(w,h)*0.4,80)", y: "0"},
				{action: "line", x: "Math.min(w*0.12,20)+Math.min(Math.min(w,h)*0.4,80)", y: "0"},
				{action: "quadraticCurve", x1: "Math.min(w*0.12,20)", y1: "0", x: "Math.min(w*0.12,20)", y: "Math.min(Math.min(w,h)*0.4,80)"},
				{action: "line", x: "Math.min(w*0.12,20)", y: "h-h*0.1-Math.min(h*0.1,50)"},
				{action: "line", x: "0", y: "h-h*0.1-Math.min(h*0.1,50)"},
				{action: "line", x: "Math.min(w*0.12,20)+Math.min(Math.min(h,w)*0.25,50)/2", y: "h"},
				{action: "line", x: "Math.min(Math.min(h,w)*0.25,50)+Math.min(w*0.12,20)*2", y: "h-h*0.1-Math.min(h*0.1,50)"},
				{action: "line", x: "Math.min(Math.min(h,w)*0.25,50)+Math.min(w*0.12,20)", y: "h-h*0.1-Math.min(h*0.1,50)"},
				{action: "line", x: "Math.min(Math.min(h,w)*0.25,50)+Math.min(w*0.12,20)", y: "Math.min(Math.min(h,w)*0.4,80)"},
				{action: "quadraticCurve", x1: "Math.min(Math.min(h,w)*0.25,50)+Math.min(w*0.12,20)", y1: "Math.min(Math.min(h,w)*0.25,50)", x: "Math.min(Math.min(h,w)*0.25,50)+Math.min(w*0.12,20)+Math.min(w*0.15,30)", y: "Math.min(Math.min(h,w)*0.25,50)"},
				{action: "line", x: "w-Math.min(Math.min(h,w)*0.25,50)-Math.min(w*0.15,30)", y: "Math.min(Math.min(h,w)*0.25,50)"},
				{action: "quadraticCurve", x1: "w-Math.min(Math.min(h,w)*0.25,50)", y1: "Math.min(Math.min(h,w)*0.25,50)", x: "w-Math.min(Math.min(h,w)*0.25,50)", y: "Math.min(Math.min(h,w)*0.4,80)"},
				{action: "line", x: "w-Math.min(Math.min(h,w)*0.25,50)", y: "h"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "w", y: "Math.min(Math.min(h,w)*0.4,80)"},
				{action: "close"}    
			]
		},
		{
			lineStyle: {
				lineWidth: 0
			},
			fillStyle: {type: "none"},
			actions: {ref: "rectangle"}
		}
	]
});

/**
*拐角：Corner
*/
Schema.addShape({
	name: "corner",
	title: "<@i18n resource='schema.basic.corner'/>",
	category: "basic",
	props: {
		w: 70,
		h: 70
	},
	anchors: [{x: "w*0.5", y: "0"}, {x: "w*0.5", y: "0"}, {x: "0", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "0"},
			   {action: "line", x: "w", y: "0"},
			   {action: "line", x: "w-Math.min(w/6,30)", y: "Math.min(h/6,30)"},
			   {action: "line", x: "Math.min(w/6,30)", y: "Math.min(h/6,30)"},
			   {action: "line", x: "Math.min(w/6,30)", y: "h-Math.min(h/6,30)"},
			   {action: "line", x: "0", y: "h"},
			   {action: "line", x: "0", y: "0"},
			   {action: "close"}          
			]
		},
		{
			lineStyle: {
				lineWidth: 0
			},
			fillStyle: {type: "none"},
			actions: {ref: "rectangle"}
		}
	]
});


