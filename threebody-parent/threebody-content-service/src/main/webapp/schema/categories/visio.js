/**
 * 
 */
Schema.addCategory({
	name: "visio",
	text: "Visio Shape",
	dataAttributes: []
});

Schema.addShape({
	name: "ovalCallout",
	title: "Oval Callout",
	category: "visio",
	props: {
		w: 120,
		h: 80
	},
	anchors:[],
	textBlock: [{position: {x: "w*0.1", y: "0", w: "w*0.8", h: "h-30"}}],
	path:[
		{actions: [
			{action: "move",x:"w*0.5",y:"h-30"},
			{action: "line",x:"w*0.25",y:"h"}	
		]},
		{actions: [
			{action: "move", x: "0", y: "(h-30)/2"},
    		{action: "curve", x1: "0", y1: "-(h-30)/6", x2: "w", y2: "-(h-30)/6", x: "w", y: "(h-30)/2"},
    		{action: "curve", x1: "w", y1: "(h-30)*(7/6)", x2: "0", y2: "(h-30)*(7/6)", x: "0", y: "(h-30)/2"},
    		{action: 'close'}
    		]
    	}
	] 
});
Schema.addShape({
	name: "boxCallout",
	title: "Box Callout",
	category: "visio",
	props: {
		w: 120,
		h: 80
	},
	anchors:[],
	textBlock: [{position: {x: "w*0.1", y: "0", w: "w*0.8", h: "h-30"}}],
	path:[
		{actions: [
			{action: "move",x:"w*0.5",y:"h-30"},
			{action: "line",x:"w*0.25",y:"h"}	
		]},
		{actions: [
			{action: "move", x: "0", y: "0"},
			{action: "line", x: "w", y: "0"},
			{action: "line", x: "w", y: "h-30"},
			{action: "line", x: "0", y: "h-30"},
			{action: "close"}
		]}
	] 
});
Schema.addShape({
	name: "bubblePair",
	title: "Bubble Pair",
	category: "visio",
	props: {
		w: 120,
		h: 80
	},
	anchors:[],
	textBlock: [{position: {x: "w*0.1", y: "0", w: "w*0.8", h: "h-30"}}],
	path:[
		{actions: [
			{action: "move",x:"w*0.5",y:"h-30"},
			{action: "line",x:"w*0.25",y:"h"}	
		]},
		{actions: [
				{action: "move", x: "Math.min(w,h-30)/3", y: "0"},
				{action: "line", x: "w-Math.min(w,h-30)/3", y: "0"},
				{action: "curve", x1: "w+Math.min(w,h-30)/3/3", y1: "0", x2: "w+Math.min(w,h-30)/3/3", y2: "h-30", x: "w-Math.min(w,h-30)/3", y: "h-30"},
				{action: "line", x: "Math.min(w,h-30)/3", y: "h-30"},
				{action: "curve", x1: "-Math.min(w,h-30)/3/3", y1: "h-30", x2: "-Math.min(w,h-30)/3/3", y2: "0", x: "Math.min(w,h-30)/3", y: "0"},
				{action: "close"}          
		]}
	] 
});
/**
*花括号left Brace
*/
Schema.addShape({
	name: "brace",
	title: "Brace",
	category: "visio",
	attribute: {
		linkable: false
	},
	props: {
		w: 110,
		h: 70
	},
	fillStyle: {
		type: "none"
	},
	textBlock: [{position: {x: "w*0.1*02", y: "0", w: "w*0.8", h: "h"}}],
	anchors: [{x: "w", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	path: [
		{
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
			lineStyle: {
				lineWidth: 0
			},
			fillStyle: {type: "none"},
			actions: {ref: "rectangle"}
		}
	]
});
/**
*花括号Reverse Brace
*/
Schema.addShape({
	name: "reverseBrace",
	title: "Reverse Brace",
	category: "visio",
	attribute: {
		linkable: false
	},
	props: {
		w: 110,
		h: 70
	},
	fillStyle: {
		type: "none"
	},
	textBlock: [{position: {x: "w*0.1", y: "0", w: "w*0.8", h: "h"}}],
	anchors: [{x: "w", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	path: [
		{
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
*圆括号Parenthesis
*/
Schema.addShape({
	name: "parenthesis",
	title: "Parenthesis",
	category: "visio",
	attribute: {
		linkable: false
	},
	props: {
		w: 110,
		h: 70
	},
	fillStyle: {
		type: "none"
	},
	anchors: [{x: "w", y: "h*0.5"}, {x: "0", y: "h*0.5"}],
	textBlock: [{position: {x: "w*.1", y: "0", w: "w*0.8", h: "h"}}],
	path: [
		{
			actions: [
				{action: "move", x: "w*0.1", y: "0"},
				{action: "line", x: "0", y: "h*0.1"},
				{action: "line", x: "0", y: "h*0.9"},
				{action: "line", x: "w*0.1", y: "h"}
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
*Reverse parenthesis
*/
Schema.addShape({
	name: "reverseBracket",
	title: "Reverse Bracket",
	category: "visio",
	attribute: {
		linkable: false
	},
	props: {
		w: 110,
		h: 70
	},
	fillStyle: {
		type: "none"
	},
	anchors: [{x: "w", y: "h*0.5"}],
	textBlock: [{position: {x: "w*.1", y: "0", w: "w*0.8", h: "h"}}],
	path: [
		{
			actions: [
				{action: "move", x: "w-w*0.1", y: "h"},
				{action: "line", x: "w", y: "h*0.9"},
				{action: "line", x: "w", y: "h*0.1"},
				{action: "line", x: "w-w*0.1", y: "0"}//右边结束
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

Schema.addShape({
	name: "wordBollon",
	title: "Word Bollon",
	category: "visio",
	props: {
		w: 120,
		h: 75
	},
	textBlock: [{position: {x: "w*0.1", y: "0", w: "w*0.8", h: "h*(2/3)"}}],
	path:[
		{
			actions: [
				{action: "move", x: "0", y: "0"},
				{action: "line", x: "w", y: "0"},
				{action: "line", x: "w", y: "h-20 "},
				{action: "line", x: "w/2", y: "h-20 "},
				{action: "line", x: "w/2-20", y: "h"},
				{action: "line", x: "w/2-20", y: "h-20"},
				{action: "line", x: "0", y: "h-20"},
				{action: "close"}
			]
		}
	] 
});
/**
 * callout
 */
Schema.addShape({
	name: "callout",
	title: "Callout",
	category: "visio",
	dataAttributes:[],
	props: {
		w: 100,
		h: 70
	},
	anchors: [],
	textBlock: [{position: {x: "40", y: "0", w: "(w-30)*0.8", h: "h"}}],
	path: [
		{
			actions: [
				{action: "move",x:"30",y:"h/2"},
				{action: "line",x:"0",y:"h"}	
			]
		},
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "40", y: "0"},
				{action: "line", x: "30", y: "0"},
				{action: "line", x: "30", y: "h"},
				{action: "line", x: "40", y: "h"}
			]
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {
				lineWidth: 0
			},
			actions: {ref: "rectangle"}
		}
	]
});
/**
 * callout pair
 */
Schema.addShape({
	name: "calloutPair",
	title: "Callout Pair",
	category: "visio",
	dataAttributes:[],
	props: {
		w: 100,
		h: 70
	},
	anchors: [],
	textBlock: [{position: {x: "40", y: "0", w: "(w-30)*0.8", h: "h"}}],
	path: [
		{
			actions: [
				{action: "move",x:"30",y:"h/2"},
				{action: "line",x:"0",y:"h"}	
			]
		},
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "40", y: "0"},
				{action: "line", x: "30", y: "0"},
				{action: "line", x: "30", y: "h"},
				{action: "line", x: "40", y: "h"}, // left callout
				{action: "move", x: "w-10", y: "0"},
				{action: "line", x: "w", y: "0"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "w-10", y: "h"},// left callout
			]
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {
				lineWidth: 0
			},
			actions: {ref: "rectangle"}
		}
	]
});
/**
 * line callout
 */
Schema.addShape({
	name: "lineCallout",
	title: "Line Callout",
	category: "visio",
	dataAttributes:[],
	props: {
		w: 100,
		h: 70
	},
	anchors: [],
	textBlock: [{position: {x: "40", y: "0", w: "(w-30)*0.8", h: "h"}}],
	path: [
		{
			actions: [
				{action: "move",x:"30",y:"h/2"},
				{action: "line",x:"0",y:"h"}	
			]
		},
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "30", y: "0"},
				{action: "line", x: "30", y: "h"},
			]
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {
				lineWidth: 0
			},
			actions: {ref: "rectangle"}
		}
	]
});
/**
 * line pair
 */
Schema.addShape({
	name: "linePair",
	title: "Line Pair",
	category: "visio",
	dataAttributes:[],
	props: {
		w: 100,
		h: 70
	},
	anchors: [],
	textBlock: [{position: {x: "30", y: "0", w: "(w-60)*0.8", h: "h"}}],
	path: [
		{
			actions: [
				{action: "move",x:"30",y:"h/2"},
				{action: "line",x:"0",y:"h"}	
			]
		},
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "30", y: "0"},
				{action: "line", x: "30", y: "h"}, //left line
				{action:"move",x:"w-30",y:"0"},
				{action:"line",x:"w-30",y:"h"}
			]
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {
				lineWidth: 0
			},
			actions: {ref: "rectangle"}
		}
	]
});
/**
 * Bend callout
 */
Schema.addShape({
	name: "bendCallout",
	title: "Bend Callout",
	category: "visio",
	dataAttributes:[],
	props: {
		w: 100,
		h: 70
	},
	anchors: [],
	textBlock: [{position: {x: "40", y: "0", w: "(w-30)*0.8", h: "h"}}],
	path: [
		{
			actions: [
				{action: "move",x:"30",y:"h/2"},				
				{action: "line",x:"15",y:"h/2"},	
				{action: "line",x:"0",y:"h"}	
			]
		},
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "30", y: "0"},
				{action: "line", x: "30", y: "h"},
			]
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {
				lineWidth: 0
			},
			actions: {ref: "rectangle"}
		}
	]
});
/**
 * Triangle callout
 */
Schema.addShape({
	name: "triangleCallout",
	title: "Triangle Callout",
	category: "visio",
	dataAttributes:[],
	props: {
		w: 100,
		h: 70
	},
	anchors: [],
	textBlock: [{position: {x: "w*0.1", y: "0", w: "w*0.8", h: "h-10"}}],
	path: [
		{
			actions: [
				{action: "move",x:"0",y:"h-10"},				
				{action: "line",x:"w",y:"h-10"},
				{action: "move",x:"w/2-10",y:"h-10"},	
				{action: "line",x:"w/2",y:"h"},	
				{action: "line",x:"w/2+10",y:"h-10"}	
			]
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {
				lineWidth: 0
			},
			actions: {ref: "rectangle"}
		}
	]
});
/**
 * Parenthesis Pair
 */
Schema.addShape({
	name: "parenthesisPair",
	title: "Parenthesis Pair",
	category: "visio",
	dataAttributes:[],
	props: {
		w: 100,
		h: 70
	},
	anchors: [],
	textBlock: [{position: {x: "w*0.1", y: "0", w: "w-2*(w*0.1)", h: "h"}}],
	path: [
		{
			actions: [
			{action: "move", x: "w*0.1", y: "0"},
			{action: "curve", x1: "0", y1: "h*(1/3)", x2: "0", y2: "h*(2/3)", x: "w*0.1", y: "h"},
			{action: "move", x: "w*0.9", y: "0"},			
			{action: "curve", x1: "w", y1: "h*(1/3)", x2: "w", y2: "h*(2/3)", x: "w*0.9", y: "h"}
			]
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {
				lineWidth: 0
			},
			actions: {ref: "rectangle"}
		}
	]
});
/**
 * Reverse parenthesis
 */
Schema.addShape({
	name: "reverseParenthesis",
	title: "Reverse Parenthesis",
	category: "visio",
	dataAttributes:[],
	props: {
		w: 100,
		h: 70
	},
	anchors: [],
	textBlock: [{position: {x: "w*0.1", y: "0", w: "w-2*(w*0.1)", h: "h"}}],
	path: [
		{
			actions: [
			{action: "move", x: "w*0.9", y: "0"},			
			{action: "curve", x1: "w", y1: "h*(1/3)", x2: "w", y2: "h*(2/3)", x: "w*0.9", y: "h"}
			]
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {
				lineWidth: 0
			},
			actions: {ref: "rectangle"}
		}
	]
});