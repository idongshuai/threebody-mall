
/**
 * UML Deployment 8 diagram
 * Node(3D) | Component | Object | Package | Node | Constraint | Node Instance | Component Instance
 */
Schema.addCategory({
	name: "uml_deployment",
	text: "<@i18n resource='schema.category.uml.deployment'/>",
	dataAttributes: []
});
/**
 * 2. Deployment Component Non Instance 
 */
Schema.addShape({
	name: "devComponentNonInstance",
	title: "<@i18n resource='schema.uml.deployment.component'/>",
	category: "uml_deployment",
	props: {
		w: 100,
		h: 70
	},
	fontStyle: {bold: true},
	textBlock: [{position: {x: "w*(1/8)+5", y: "0", w: "w-w*(1/8)-10", h: "h"}, text: "<@i18n resource='schema.uml.deployment.component'/>"}],
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
 * 2. Deployment Component Instance 
 */
Schema.addShape({
	name: "devComponent",
	title: "<@i18n resource='schema.uml.deployment.inscomponent'/>",
	category: "uml_deployment",
	props: {
		w: 100,
		h: 70
	},
	textBlock: [{position: {x: "w*(1/8)+5", y: "0", w: "w-w*(1/8)-10", h: "h"}, text: "<@i18n resource='schema.uml.deployment.inscomponent'/>"}],
	fontStyle:{
		underline:true
	},
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
 * 3. Deployment Non Instance Node
 */
Schema.addShape({
	name: "devNodeNonInstance",
	title: "<@i18n resource='schema.uml.deployment.node'/>",
	category: "uml_deployment",
	props: {
		w: 270,
		h: 270
	},
	fontStyle: {bold: true},
	textBlock: [{position: {x: "10", y: "h*(1/9)", w: "w*(8/9)-20", h: "h*(8/9)"}, text: "<@i18n resource='schema.uml.deployment.node'/>"}],
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
 * 4. Deployment Node Instance 
 */
Schema.addShape({
	name: "devNodeInstance",
	title: "<@i18n resource='schema.uml.deployment.insnode'/>",
	category: "uml_deployment",
	props: {
		w: 270,
		h: 270
	},
	textBlock: [{position: {x: "10", y: "h*(1/9)", w: "w*(8/9)-20", h: "h*(8/9)"}, text: "<@i18n resource='schema.uml.deployment.insnode'/>"}],
	fontStyle:{
		underline:true
	},
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
 * 5. UML Deployment Object
 */
Schema.addShape({
	name: "uml_deploymentObject",
	title: "<@i18n resource='schema.uml.deployment.object'/>",
	category: "uml_deployment",
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
*6. Deployment Constraint
*/
Schema.addShape({
	name: "uml_deploymentConstraint",
	title: "<@i18n resource='schema.uml.deployment.constraint'/>",
	category: "uml_deployment",
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