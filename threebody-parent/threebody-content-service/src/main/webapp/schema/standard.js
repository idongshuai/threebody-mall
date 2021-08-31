/** 添加Standard标准图形 */
Schema.addCategory({
	name: "standard",
	text: "Standard",
	dataAttributes: []
});

/**
 * Text
 */
Schema.addShape({
	name: "standardText",
	title: "",
	category: "standard",
	attribute: {
		linkable: false
	},
	props: {
		w: 160,
		h: 40
	},
	anchors: [],
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
	]
});
/**
 * 图片
 */
Schema.addShape({
	name: "standardImage",
	title: "",
	attribute: {
		linkable: false,
		visible: false
	},
	category: "standard",
	props: {
		w: 100,
		h: 70
	},
	textBlock: [],
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});
Schema.addShape({
	name: "standardRectangle",
	title: "",
	attribute: {
		visible: false
	},
	category: "standard",
	props: {
		w: 100,
		h: 70
	},
	textBlock: [
		{
			position: {x: 0, y: 0, w: "w", h: "h"},
			text: ""
		}
	],
	path: [
		{
			actions: {ref: "rectangle"}
		}
	]
});
