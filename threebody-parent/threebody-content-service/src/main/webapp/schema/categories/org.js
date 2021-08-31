/**
 * Organization shapes
 */

Schema.addCategory({
	name: "org",
	text: "<@i18n resource='schema.category.org'/>",
	dataAttributes: [
		{name: "<@i18n resource='schema.diagram.biz.no'/>", type:"number", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.name'/>", type:"string", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.owner'/>", type:"string", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.link'/>", type:"link", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.memo'/>", type:"string", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.cost'/>", type:"number", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.time'/>", type:"number", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.department'/>", type:"string", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.input'/>", type:"string", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.output'/>", type:"string", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.risk'/>", type:"string", value:"", category: "default"},
		{name: "<@i18n resource='schema.diagram.biz.remarks'/>", type:"string", value:"", category: "default"}
	]
});

/**
 * Organization
 */
Schema.addShape({
	name: "organization",
	title: "<@i18n resource='schema.org.organization'/>",
	category: "org",
	props: {
		w: 120,
		h: 70
	},
	lineStyle: {lineWidth: 2, lineColor: "220,87,18"},
	fillStyle: {
		type: "gradient",
		gradientType: "linear",
		beginColor: "245,236,186",
		endColor: "244,208,0",
		angle: Math.PI*0.5
	},
	textBlock: [{position: {x: "w*0.15", y: 10, w: "w*0.85-10", h: "h-20"}}],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "h*0.5"},
				{action: "curve", x1: "0", y1: "-h/6", x2: "w", y2: "-h/6", x: "w", y: "h*0.5"},
				{action: "curve", x1: "w", y1: "h+h/6", x2: "0", y2: "h+h/6", x: "0", y: "h*0.5"},
				{action: "move", x: "w*0.15", y: "h*0.13"},
				{action: "line", x: "w*0.15", y: "h*0.87"}          
			]
		}
	]
});

/**
 * Role
 */
Schema.addShape({
	name: "role",
	title: "<@i18n resource='schema.org.role'/>",
	category: "org",
	props: {
		w: 120,
		h: 70
	},
	lineStyle: {lineWidth: 2, lineColor: "220,87,18"},
	fillStyle: {
		type: "gradient",
		gradientType: "linear",
		beginColor: "245,236,186",
		endColor: "244,208,0",
		angle: Math.PI*0.5
	},
	textBlock: [{position: {x: "w/6", y: "0", w: "w/6*5-10", h: "h"}}],
	path: [
		{
			actions: {ref: "rectangle"}
		},
		{
			actions: [
			    {action: "move", x: "w/6", y: "0"},
				{action: "line", x: "w/6", y: "h"}            
			]
		},
		{
			lineStyle: {
				lineWidth: 0
			},
			fillStyle: {
				type: "none"
			},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * Employee
 */
Schema.addShape({
	name: "employee",
	title: "<@i18n resource='schema.org.employee'/>",
	category: "org",
	props: {
		w: 120,
		h: 70
	},
	lineStyle: {lineWidth: 2, lineColor: "220,87,18"},
	fillStyle: {
		type: "gradient",
		gradientType: "linear",
		beginColor: "245,236,186",
		endColor: "244,208,0",
		angle: Math.PI*0.5
	},
	path: [
		{
			actions: {ref: "rectangle"}
		}
	]
});