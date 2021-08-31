/**
 * 
 */
Schema.addCategory({
	name: "ios_icons",
	text: "<@i18n resource='schema.category.ios.icons'/>",
	dataAttributes: []
});


/**
 * Add Icons
 */
Schema.addShape({
	name: "ios7AddBlack",
	title: "<@i18n resource='schema.ios.icons.add'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/add_black.svg", imageW: "25", imageH: "25", display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7AddBlackLight",
	title: "<@i18n resource='schema.ios.icons.add'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/add_black_light.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7AddGreen",
	title: "<@i18n resource='schema.ios.icons.add'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/add_green.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7AddNormal",
	title: "<@i18n resource='schema.ios.icons.add'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/add.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * Remove Icons
 */
Schema.addShape({
	name: "ios7RemoveBlack",
	title: "<@i18n resource='schema.ios.icons.delete'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/remove_black.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7RemoveBlackLight",
	title: "<@i18n resource='schema.ios.icons.delete'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/remove_black_light.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7RemoveRed",
	title: "<@i18n resource='schema.ios.icons.delete'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/remove_red.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7AddSmall",
	title: "<@i18n resource='schema.ios.icons.add'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 19,
		h: 19
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/add_small.svg", imageW: 19, imageH: 19, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * Close Icons
 */
Schema.addShape({
	name: "ios7Close1",
	title: "<@i18n resource='schema.ios.icons.close'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 30,
		h: 30
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/close1.svg", imageW: 20, imageH: 20, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Close2",
	title: "<@i18n resource='schema.ios.icons.close'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 22
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/close2.svg", imageW: 26, imageH: 22, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Close3",
	title: "<@i18n resource='schema.ios.icons.close'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 23
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/close3.svg", imageW: 26, imageH: 23, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Close4",
	title: "<@i18n resource='schema.ios.icons.close'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 23
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/close4.svg", imageW: 26, imageH: 23, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Refresh",
	title: "<@i18n resource='schema.ios.icons.refresh'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 30,
		h: 30
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/refresh.svg", imageW: 15, imageH: 17, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7SearchIcon",
	title: "<@i18n resource='schema.ios.icons.search'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 30,
		h: 30
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/search.svg", imageW: 16, imageH: 16, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7SearchBig",
	title: "<@i18n resource='schema.ios.icons.search'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 24
	},
	anchors: [],
	textBlock: [],
	
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/search_big.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7MenuIcon",
	title: "<@i18n resource='schema.ios.icons.menu'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 18,
		h: 16
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: 0, y: "lineWidth/2"},
				{action: "line", x: "w", y: "lineWidth/2"},
				{action: "move", x: 0, y: "h/2-lineWidth/2"},
				{action: "line", x: "w", y: "h/2-lineWidth/2"},
				{action: "move", x: 0, y: "h-lineWidth/2"},
				{action: "line", x: "w", y: "h-lineWidth/2"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * Arrows
 */
Schema.addShape({
	name: "ios7ArrowUp",
	title: "<@i18n resource='schema.ios.icons.up'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 23,
		h: 10
	},
	anchors: [],
	textBlock: [],
	lineStyle: {lineColor: "27,124,250"},
	path: [
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: 0, y: "h"},
				{action: "line", x: "w/2", y: 0},
				{action: "line", x: "w", y: "h"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7ArrowDown",
	title: "<@i18n resource='schema.ios.icons.down'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 23,
		h: 10
	},
	anchors: [],
	textBlock: [],
	lineStyle: {lineColor: "27,124,250"},
	path: [
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: 0, y: 0},
				{action: "line", x: "w/2", y: "h"},
				{action: "line", x: "w", y: 0}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7ArrowLeft",
	title: "<@i18n resource='schema.ios.icons.left'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 10,
		h: 23
	},
	anchors: [],
	textBlock: [],
	lineStyle: {lineColor: "27,124,250"},
	path: [
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: "w", y: 0},
				{action: "line", x: 0, y: "h/2"},
				{action: "line", x: "w", y: "h"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7ArrowRight",
	title: "<@i18n resource='schema.ios.icons.right'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 10,
		h: 23
	},
	anchors: [],
	textBlock: [],
	lineStyle: {lineColor: "27,124,250"},
	path: [
		{
			fillStyle: {type: "none"},
			actions: [
				{action: "move", x: 0, y: 0},
				{action: "line", x: "w", y: "h/2"},
				{action: "line", x: 0, y: "h"}
			]
		},{
			fillStyle: {type: "none"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * Info Icons
 */
Schema.addShape({
	name: "ios7Info1",
	title: "<@i18n resource='schema.ios.icons.info'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/info1.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Info2",
	title: "<@i18n resource='schema.ios.icons.info'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/info2.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Info3",
	title: "<@i18n resource='schema.ios.icons.info'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/info3.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * Check Icons
 */
Schema.addShape({
	name: "ios7Check1",
	title: "<@i18n resource='schema.ios.icons.check'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/check1.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Check2",
	title: "<@i18n resource='schema.ios.icons.check'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/check2.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Check3",
	title: "<@i18n resource='schema.ios.icons.check'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/check3.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Check4",
	title: "<@i18n resource='schema.ios.icons.check'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/check4.svg", imageW: 14, imageH: 16, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Check5",
	title: "<@i18n resource='schema.ios.icons.check'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/check5.svg", imageW: 14, imageH: 16, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Play1",
	title: "<@i18n resource='schema.ios.icons.play'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/play1.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Play2",
	title: "<@i18n resource='schema.ios.icons.play'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/play2.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Pause1",
	title: "<@i18n resource='schema.ios.icons.pause'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/pause1.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Pause2",
	title: "<@i18n resource='schema.ios.icons.pause'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/pause2.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Stop2",
	title: "<@i18n resource='schema.ios.icons.stop'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/stop2.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Stop3",
	title: "<@i18n resource='schema.ios.icons.stop'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/stop3.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * Play Icons
 */
Schema.addShape({
	name: "ios7Stop1",
	title: "<@i18n resource='schema.ios.icons.pause'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/stop1.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

/**
 * Favourite
 */
Schema.addShape({
	name: "ios7Favourite",
	title: "<@i18n resource='schema.ios.icons.favourite'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 30,
		h: 30
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/favourite.svg", imageW: 18, imageH: 18, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Favourite1",
	title: "<@i18n resource='schema.ios.icons.favourite'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/favourite1.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Heart",
	title: "<@i18n resource='schema.ios.icons.heart'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 24
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/heart.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Bookmark",
	title: "<@i18n resource='schema.ios.icons.bookmark'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 30,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/bookmark.svg", imageW: 30, imageH: 26, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Profile",
	title: "<@i18n resource='schema.ios.icons.profile'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 28,
		h: 28
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/profile.svg", imageW: 28, imageH: 28, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Copy",
	title: "<@i18n resource='schema.ios.icons.copy'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 28,
		h: 28
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/copy.svg", imageW: 28, imageH: 28, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Upload",
	title: "<@i18n resource='schema.ios.icons.upload'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 20,
		h: 28
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/action.svg", imageW: 20, imageH: 28, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});


Schema.addShape({
	name: "ios7Wifi",
	title: "Wifi",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 24
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/wifi.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Bluetooth",
	title: "<@i18n resource='schema.ios.icons.bluetooth'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 24
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/bluetooth.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Battery",
	title: "<@i18n resource='schema.ios.icons.battery'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 28,
		h: 14
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/battery.svg", imageW: 28, imageH: 14, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Lock",
	title: "<@i18n resource='schema.ios.icons.lock'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 24
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/lock.svg", imageW: 26, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Camera",
	title: "<@i18n resource='schema.ios.icons.camera'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 25,
		h: 25
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/camera.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Sound",
	title: "<@i18n resource='schema.ios.icons.sound'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 24
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/sound.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Download",
	title: "<@i18n resource='schema.ios.icons.download'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 28
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/download.svg", imageW: 23, imageH: 27, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Video",
	title: "<@i18n resource='schema.ios.icons.video'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 29,
		h: 18
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/face.svg", imageW: 29, imageH: 17, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7ListIcon",
	title: "<@i18n resource='schema.ios.icons.list'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 15
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/list.svg", imageW: 24, imageH: 15, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Locate",
	title: "<@i18n resource='schema.ios.icons.locate'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 18,
		h: 18
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/locate.svg", imageW: 18, imageH: 18, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Trash",
	title: "<@i18n resource='schema.ios.icons.trash'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 24
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/trash.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Help",
	title: "<@i18n resource='schema.ios.icons.help'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/help.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7AlertIcon",
	title: "<@i18n resource='schema.ios.icons.alert'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 26,
		h: 26
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/alert.svg", imageW: 25, imageH: 25, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Clock",
	title: "<@i18n resource='schema.ios.icons.clock'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 24
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/clock.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Phone",
	title: "<@i18n resource='schema.ios.icons.phone'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 24
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/phone.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Message",
	title: "<@i18n resource='schema.ios.icons.message'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 24
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/message.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});

Schema.addShape({
	name: "ios7Mail",
	title: "<@i18n resource='schema.ios.icons.mail'/>",
	category: "ios_icons",
	attribute: {
		linkable: false
	},
	props: {
		w: 24,
		h: 24
	},
	anchors: [],
	textBlock: [],
	path: [
		{
			fillStyle: {type: "image", fileId: "/images/designer/ios_icons/svg/mail.svg", imageW: 24, imageH: 24, display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	]
});
