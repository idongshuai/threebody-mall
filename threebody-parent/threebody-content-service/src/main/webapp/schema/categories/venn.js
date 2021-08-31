/**
 * Venn shapes
 */
Schema.addCategory({
	name: "venn",
	text: "<@i18n resource='schema.category.venn'/>",
	dataAttributes: []
});

/**
 * GreenGradientVenn
 */
Schema.addShape({
	name: "greenGradientVennCircle",
	title: "Green Gradient Venn",
	category: "venn",
	props: {
		w: 200,
		h: 200
	},
	lineStyle: {lineWidth: 0, lineColor: "0,255,0", lineStyle: "none"},
	fillStyle: {
		type: "gradient",
		gradientType: "radial",
		beginColor: "255,255,255",
		endColor: "0,255,0",
		radius: 0.6,
		alpha: 0.35
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});

/**
 * RedGradientVenn
 */
Schema.addShape({
	name: "redGradientVennCircle",
	title: "Red Gradient Venn",
	category: "venn",
	props: {
		w: 200,
		h: 200
	},
	lineStyle: {lineWidth: 0, lineColor: "255,0,0", lineStyle: "none"},
	fillStyle: {
		type: "gradient",
		gradientType: "radial",
		beginColor: "255,255,255",
		endColor: "255,0,0",
		radius: 0.6,
		alpha: 0.35
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});

/**
 * BlueGradientVenn
 */
Schema.addShape({
	name: "blueGradientVennCircle",
	title: "Blue Gradient Venn",
	category: "venn",
	props: {
		w: 200,
		h: 200
	},
	lineStyle: {lineWidth: 0, lineColor: "0,0,255", lineStyle: "none"},
	fillStyle: {
		type: "gradient",
		gradientType: "radial",
		beginColor: "255,255,255",
		endColor: "0,0,255",
		radius: 0.6,
		alpha: 0.35
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});

/**
 * GreenVenn
 */
Schema.addShape({
	name: "greenVenn",
	title: "Green Venn",
	category: "venn",
	props: {
		w: 200,
		h: 200
	},
	lineStyle: {lineWidth: 0, lineColor: "160,191,124", lineStyle: "none"},
	fillStyle: {
		color: "160,191,124",
		alpha: 0.5
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});

/**
 * RedVenn
 */
Schema.addShape({
	name: "redVenn",
	title: "Red Venn",
	category: "venn",
	props: {
		w: 200,
		h: 200
	},
	lineStyle: {lineWidth: 0, lineColor: "247,68,97", lineStyle: "none"},
	fillStyle: {
		color: "247,68,97",
		alpha: 0.5
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});

/**
 * BlueVenn
 */
Schema.addShape({
	name: "blueVenn",
	title: "Blue Venn",
	category: "venn",
	props: {
		w: 200,
		h: 200
	},
	lineStyle: {lineWidth: 0, lineColor: "36,118,192", lineStyle: "none"},
	fillStyle: {
		color: "36,118,192",
		alpha: 0.5
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});

/**
 * GreenVennCircle
 */
Schema.addShape({
	name: "greenVennCircle",
	title: "Green Venn Circle",
	category: "venn",
	props: {
		w: 200,
		h: 200
	},
	lineStyle: {lineWidth: 2, lineColor: "121,148,90"},
	fillStyle: {
		color: "160,191,124",
		alpha: 0.5
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});

/**
 * RedVennCircle
 */
Schema.addShape({
	name: "redVennCircle",
	title: "Red Venn Circle",
	category: "venn",
	props: {
		w: 200,
		h: 200
	},
	lineStyle: {lineWidth: 2, lineColor: "166,70,86"},
	fillStyle: {
		color: "247,68,97",
		alpha: 0.5
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});

/**
 * BlueVennCircle
 */
Schema.addShape({
	name: "blueVennCircle",
	title: "Blue Venn Circle",
	category: "venn",
	props: {
		w: 200,
		h: 200
	},
	lineStyle: {lineWidth: 2, lineColor: "41,102,157"},
	fillStyle: {
		color: "36,118,192",
		alpha: 0.5
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});

/**
 * BlackVennCircle
 */
Schema.addShape({
	name: "blackVennCircle",
	title: "Black Venn Circle",
	category: "venn",
	props: {
		w: 200,
		h: 200
	},
	lineStyle: {lineWidth: 2, lineColor: "48,50,51"},
	fillStyle: {
		type: "none"
	},
	path: [
		{
			actions: {ref: "round"}
		}
	]
});