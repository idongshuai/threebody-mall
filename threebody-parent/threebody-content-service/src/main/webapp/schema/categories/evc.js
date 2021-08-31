/**
 * EVC shapes
 */

Schema.addCategory({
	name: "evc",
	text: "<@i18n resource='schema.category.evc'/>",
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
 * ValueChain1
 */
Schema.addShape({
	name: "valueChain1",
	title: "<@i18n resource='schema.evc.valuechain1'/>",
	category: "evc",
	props: {
		w: 150,
		h: 70
	},
	textBlock: [{position: {x: "Math.min(h/2,w/6)", y: "0", w: "w-Math.min(h/2,w/6)*2", h: "h"}}],
	anchors: [{x: "w*0.5", y: "0"}, {x: "w", y: "h*0.5"}, {x: "w*0.5", y: "h"}, {x: "Math.min(h/2,w/6)", y: "h*0.5"}],
	path: [
		{
			actions: [
				{action: "move", x: "Math.min(h/2,w/6)", y: "h*0.5"},
				{action: "line", x: "0", y: "0"},
				{action: "line", x: "w-Math.min(h/2,w/6)", y: "0"},
				{action: "line", x: "w", y: "h*0.5"},
				{action: "line", x: "w-Math.min(h/2,w/6)", y: "h"},
				{action: "line", x: "0", y: "h"},
				{action: "line", x: "Math.min(h/2,w/6)", y: "h*0.5"},
				{action: "close"}          
			]
		}
	]
});

/**
 * ValueChain2
 */
Schema.addShape({
	name: "valueChain2",
	title: "<@i18n resource='schema.evc.valuechain2'/>",
	category: "evc",
	props: {
		w: 150,
		h: 70
	},
	textBlock: [{position: {x: "Math.min(h/2,w/6)", y: "0", w: "w-Math.min(h/2,w/6)*2", h: "h"}}],
	anchors: [{x: "w*0.5", y: "0"}, {x: "w-Math.min(h/2,w/6)", y: "h*0.5"}, {x: "w*0.5", y: "h"}, {x: "0", y: "h*0.5"}],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "h*0.5"},
				{action: "line", x: "Math.min(h/2,w/6)", y: "0"},
				{action: "line", x: "w", y: "0"},
				{action: "line", x: "w-Math.min(h/2,w/6)", y: "h*0.5"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "Math.min(h/2,w/6)", y: "h"},
				{action: "line", x: "0", y: "h*0.5"},
				{action: "close"}          
			]
		}
	]
});

/**
 *ValueChain3 
 */
Schema.addShape({
	name: "valueChain3",
	title: "<@i18n resource='schema.evc.valuechain3'/>",
	category: "evc",
	props: {
		w: 150,
		h: 70
	},
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "0"},
				{action: "line", x: "w-Math.min(h/2,w/6)", y: "0"},
				{action: "line", x: "w", y: "h*0.5"},
				{action: "line", x: "w-Math.min(h/2,w/6)", y: "h"},
				{action: "line", x: "0", y: "h"},
				{action: "line", x: "0", y: "0"},
				{action: "close"}          
			]
		}
	]
});

/**
 * ValueChain4
 */
Schema.addShape({
	name: "valueChain4",
	title: "<@i18n resource='schema.evc.valuechain4'/>",
	category: "evc",
	props: {
		w: 150,
		h: 70
	},
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "h*0.5"},
				{action: "line", x: "Math.min(h/2,w/6)", y: "0"},
				{action: "line", x: "w", y: "0"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "Math.min(h/2,w/6)", y: "h"},
				{action: "line", x: "0", y: "h*0.5"},
				{action: "close"}          
			]
		}
	]
});

/**
 * ValueChain5
 */
Schema.addShape({
	name: "valueChain5",
	title: "<@i18n resource='schema.evc.valuechain5'/>",
	category: "evc",
	props: {
		w: 150,
		h: 70
	},
	textBlock: [{position: {x: "0", y: "Math.min(h/2,w/6)", w: "w", h: "h-Math.min(h/2,w/6)"}}],
	path: [
		{
			actions: [
				{action: "move", x: "w*0.5", y: "0"},
				{action: "line", x: "w", y: "Math.min(h/2,w/6)"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "0", y: "h"},
				{action: "line", x: "0", y: "Math.min(h/2,w/6)"},
				{action: "line", x: "w*0.5", y: "0"},
				{action: "close"}          
			]
		}
	]
});

/**
 * ValueChain6
 */
Schema.addShape({
	name: "valueChain6",
	title: "<@i18n resource='schema.evc.valuechain6'/>",
	category: "evc",
	props: {
		w: 150,
		h: 70
	},
	textBlock: [{position: {x: "0", y: "0", w: "w", h: "h-Math.min(h/2,w/6)"}}],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "0"},
				{action: "line", x: "w", y: "0"},
				{action: "line", x: "w", y: "h-Math.min(h/2,w/6)"},
				{action: "line", x: "w*0.5", y: "h"},
				{action: "line", x: "0", y: "h-Math.min(h/2,w/6)"},
				{action: "line", x: "0", y: "0"},
				{action: "close"}          
			]
		}
	]
});