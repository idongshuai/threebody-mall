/**
 * 
 */
Schema.addCategory({
	name: "andriod_devices",
	text: "<@i18n resource='schema.category.android.devices'/>",
	dataAttributes: []
});

Schema.addShape({
	name: "andriodBlackBg",
	title: "<@i18n resource='schema.category.android.devices'/>",
	category: "andriod_devices",
	attribute: {
		container: true,
		linkable: false
	},
	props: {
		w: 402,
		h: 797
	},
	resizeDir: [],
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/andriod_bg.png", imageW: 402, imageH: 797, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/andriod_bg.png", imageW: 15, imageH: 30, display: "stretch"},
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
 * 安卓 
 */
Schema.addShape({
	name: "andriodBlack1",
	title: "<@i18n resource='schema.category.android.devices.white'/>",
	category: "andriod_devices",
	attribute: {
		container: true,
		linkable: false
	},
	props: {
		w: 402,
		h: 797
	},
	resizeDir: [],
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/andriod_white.png", imageW: 402, imageH: 797, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/andriod_white.png", imageW: 15, imageH: 30, display: "stretch"},
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
 * 安卓 
 */
Schema.addShape({
	name: "andriodBlack",
	title: "<@i18n resource='schema.category.android.devices.black'/>",
	category: "andriod_devices",
	attribute: {
		container: true,
		linkable: false
	},
	props: {
		w: 402,
		h: 797
	},
	resizeDir: [],
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/andriod_black.png", imageW: 402, imageH: 797, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/andriod_black.png", imageW: 15, imageH: 30, display: "stretch"},
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
	name: "andriod5DefaultBg",
	title: "<@i18n resource='schema.category.android.devices.bg1'/>",
	category: "andriod_devices",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 602
	},
	resizeDir: [],
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/bg_default.jpg", imageW: 360, imageH: 600, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/bg_default.jpg", imageW: 26, imageH: 26, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: -3, y: 0},
					{action: "line", x: w+4, y: 0},
					{action: "line", x: w+4, y: h},
					{action: "line", x: -3, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "andriod5Bg1",
	title: "<@i18n resource='schema.category.android.devices.bg2'/>",
	category: "andriod_devices",
	attribute: {
		linkable: false
	},
	props: {
		w: 362,
		h: 602
	},
	resizeDir: [],
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/bg_1.jpg", imageW: 360, imageH: 600, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/bg_1.jpg", imageW: 26, imageH: 26, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: -3, y: 0},
					{action: "line", x: w+4, y: 0},
					{action: "line", x: w+4, y: h},
					{action: "line", x: -3, y: h},
					{action: "close"}
				]
			}
		];
	}
});
Schema.addShape({
	name: "andriod5Bg2",
	title: "<@i18n resource='schema.category.android.devices.bg3'/>",
	category: "andriod_devices",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 602
	},
	resizeDir: [],
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/andriod/bg_2.jpg", imageW: 360, imageH: 600, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		return [
			{
				fillStyle: {type: "image", fileId: "/images/designer/andriod/thumb/bg_2.jpg", imageW: 26, imageH: 26, display: "original"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: -3, y: 0},
					{action: "line", x: w+4, y: 0},
					{action: "line", x: w+4, y: h},
					{action: "line", x: -3, y: h},
					{action: "close"}
				]
			}
		];
	}
});
/**
 * 背景图
 */
Schema.addShape({
	name: "andriodGreyBg",
	title: "<@i18n resource='schema.category.android.devices.bg4'/>",
	category: "andriod_devices",
	attribute: {
		linkable: false
	},
	props: {
		w: 360,
		h: 602
	},
	resizeDir: [],
	anchors: [],
	textBlock: [],
	fillStyle: {type: "solid", color: "230,230,230"},
	path: [
		{
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var x = -3;
		w += 4;
		return [
			{
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: 0},
					{action: "line", x: w, y: 0},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		]
	}
});

