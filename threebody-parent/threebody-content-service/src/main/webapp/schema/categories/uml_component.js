/**
 * UML Component 5 diagram
 * Component | Node | Start | Package | Node
 */
Schema.addCategory({
	name: "uml_component",
	text: "<@i18n resource='schema.category.uml.component'/>",
	dataAttributes: []
});

/**
 * 2. Component
 */
Schema.addShape({
	name: "component",
	title: "<@i18n resource='schema.uml.component.compt'/>",
	category: "uml_component",
	props: {
		w: 100,
		h: 70
	},
	textBlock: [{position: {x: "w*(1/8)+5", y: "0", w: "w-w*(1/8)-10", h: "h"}}],
	anchors: [{x: "w*0.5", y: "0"}, {x: "w", y: "h*0.5"},{x: "w*0.5", y: "h"},{x: "0", y: "h*(3/10)"},{x: "0", y: "h*(7/10)"}],
	path: [
		{
			actions:[
			    {action: "move", x: "w*(1/10)", y: "0"},
				{action: "line", x: "w", y: "0"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "w*(1/10)", y: "h"},								
				{action: "line", x: "w*(2/10)*0.5", y: "h*(8/10)"},
				{action: "line", x: "0", y: "h*(8/10)"},
				{action: "line", x: "0", y: "h*(6/10)"},
				{action: "line", x: "w*(2/10)*0.5", y: "h*(6/10)"},
				{action: "line", x: "w*(2/10)*0.5", y: "h*(4/10)"},
				{action: "line", x: "0", y: "h*(4/10)"},
				{action: "line", x: "0", y: "h*(2/10)"},
				{action: "line", x: "w*(2/10)*0.5", y: "h*(2/10)"},
				{action: "line", x: "w*(1/10)", y: "0"},
				{action:"close"}
			]
		},
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "w*(2/10)*0.5", y: "h*(8/10)"},
				{action: "line", x: "w*(2/10)", y: "h*(8/10)"},
				{action: "line", x: "w*(2/10)", y: "h*(6/10)"},
				{action: "line", x: "w*(2/10)*0.5", y: "h*(6/10)"},
				{action: "move", x: "w*(2/10)*0.5", y: "h*(4/10)"},
				{action: "line", x: "w*(2/10)", y: "h*(4/10)"},
				{action: "line", x: "w*(2/10)", y: "h*(2/10)"},
				{action: "line", x: "w*(2/10)*0.5", y: "h*(2/10)"}
			]
		},
		{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions:[
			    {action: "move", x: "w*(1/10)", y: "0"},
				{action: "line", x: "w", y: "0"},
				{action: "line", x: "w", y: "h"},
				{action: "line", x: "w*(1/10)", y: "h"},								
				{action: "line", x: "w*(2/10)*0.5", y: "h*(8/10)"},
				{action: "line", x: "0", y: "h*(8/10)"},
				{action: "line", x: "0", y: "h*(6/10)"},
				{action: "line", x: "w*(2/10)*0.5", y: "h*(6/10)"},
				{action: "line", x: "w*(2/10)*0.5", y: "h*(4/10)"},
				{action: "line", x: "0", y: "h*(4/10)"},
				{action: "line", x: "0", y: "h*(2/10)"},
				{action: "line", x: "w*(2/10)*0.5", y: "h*(2/10)"},
				{action: "line", x: "w*(1/10)", y: "0"},
				{action:"close"}
			]
		}
	]
});

/**
 * 3. Component Node Non Instance
 */
Schema.addShape({
	name: "componentNodeNonInstance",
	title: "<@i18n resource='schema.uml.component.node'/>",
	category: "uml_component",
	props: {
		w: 270,
		h: 270
	},
	textBlock: [{position: {x: "10", y: "h*(1/9)", w: "w*(8/9)-20", h: "h*(8/9)"}}],
	path: [
		{
			actions: [
				{action: "move", x: "0", y: "h*(1/9)"},
				{action: "line", x: "w*(8/9)", y: "h*(1/9)"},
				{action: "line", x: "w*(8/9)", y: "h"},
				{action: "line", x: "0", y: "h"},
				{action: "line", x: "0", y: "h*(1/9)"},
				{action:"close"}
			]
		},
		{
			lineStyle: {
				lineStyle:"solid",
				lineWidth: 2
			},
			fillStyle: {
				type: "solid",
				color:"r-25,g-25,b-25"
			},
			actions:[
				{action: "move", x: "0", y: "h*(1/9)"},
				{action: "line", x: "w*(1/9)", y: "0"},
				{action: "line", x: "w", y: "0"},
				{action: "line", x: "w", y: "h*(8/9)"},
				{action: "line", x: "w*(8/9)", y: "h"},
				{action: "line", x: "w*(8/9)", y: "h*(1/9)"},
				{action: "line", x: "0", y: "h*(1/9)"},
				{action:"close"},
				{action: "move", x: "w*(8/9)", y: "h*(1/9)"},
				{action: "line", x: "w", y: "0"}
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
 * 1. StartEvent
 */
Schema.addShape({
	name: "componentStart",
	title: "<@i18n resource='schema.uml.component.interface'/>",
	category: "uml_component",
	props: {
		w: 40,
		h: 40
	},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			lineStyle: {
				lineStyle: "solid"
			},
			actions: {ref: "round"}
		}
	]
});
