/**
 * Basic shapes
 */

Schema.addCategory({
	name: "grid",
	text: "<@i18n resource='schema.category.grid'/>"
});
Schema.addShape({
	name: "grid",
	title: "<@i18n resource='schema.category.grid'/>",
	category: "grid",
	attribute: {
		linkable: true,
		rotatable: false
	},
	anchors: [
	      {x: "0", y: "h/2"},
	      {x: "w/2", y: "0"},
	      {x: "w", y: "h/2"},
	      {x: "w/2", y: "h"}
	],
	props: {
		w: 360,
		h: 200
	},
	fontStyle: {size: 16},
	lineStyle: {lineWidth: 1, lineColor: "102, 102, 102"},
	theme:{},
	textBlock: [
		{position: {x: 0, y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.8", w: "w/3", h: "h/5"}}
	],
	path: [
			[
				{
					actions: [
						{action: "rect", x: 0, y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: 0, w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				}
			]
	],
	drawIcon: function(w, h){
		var y = -3;
		h += 3;
		return [
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3 * 2, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: 0, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3 * 2, w: w / 3, h: h/3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			}
		];
	}
});


Schema.addShape({
	name: "grid1",
	title: "<@i18n resource='schema.category.grid'/>",
	category: "grid",
	attribute: {
		linkable: true,
		rotatable: false
	},
	props: {
		w: 360,
		h: 200
	},
	fontStyle: {size: 16},
	lineStyle: {lineWidth: 1, lineColor: "102, 102, 102"},
	textBlock: [{position: {x: 10, y: 0, w: "w-20", h: 40}}],
	anchors: [
	      {x: "0", y: "h/2"},
	      {x: "w/2", y: "0"},
	      {x: "w", y: "h/2"},
	      {x: "w/2", y: "h"}
	],
	theme:{
		name: "header",
		row: [
			{fillStyle:{}},
			{fillStyle:{type:"solid", color: "255,255,255"}}
		]
	},
	textBlock: [
		{position: {x: 0, y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.8", w: "w/3", h: "h/5"}}
	],
	path: [
			[
				{
					actions: [
						{action: "rect", x: 0, y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: 0, w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				}
			]
	],
	drawIcon: function(w, h){
		var y = -3;
		h += 3;
		return [
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3 * 2, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: 0, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3 * 2, w: w / 3, h: h/3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			}
		];
	}
});
Schema.addShape({
	name: "grid2",
	title: "<@i18n resource='schema.category.grid'/>",
	category: "grid",
	attribute: {
		linkable: true,
		rotatable: false
	},
	props: {
		w: 360,
		h: 200
	},
	fontStyle: {size: 16},
	lineStyle: {lineWidth: 1, lineColor: "102, 102, 102"},
	textBlock: [{position: {x: 10, y: 0, w: "w-20", h: 40}}],
	anchors: [
	      {x: "0", y: "h/2"},
	      {x: "w/2", y: "0"},
	      {x: "w", y: "h/2"},
	      {x: "w/2", y: "h"}
	],
	theme:{
		name: "striping",
		row: [
			{fillStyle:{}},
			{fillStyle:{type:"solid", color: "255,255,255"}}
		]
	},
	textBlock: [
		{position: {x: 0, y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.8", w: "w/3", h: "h/5"}}
	],
	path: [
			[
				{
					actions: [
						{action: "rect", x: 0, y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: 0, w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				}
			]
	],
	drawIcon: function(w, h){
		var y = -3;
		h += 3;
		return [
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3 * 2, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: 0, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3 * 2, w: w / 3, h: h/3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			}
		];
	}
});
Schema.addShape({
	name: "grid3",
	title: "<@i18n resource='schema.category.grid'/>",
	category: "grid",
	attribute: {
		linkable: true,
		rotatable: false
	},
	props: {
		w: 360,
		h: 200
	},
	fontStyle: {size: 16},
	lineStyle: {lineWidth: 1, lineColor: "102, 102, 102"},
	textBlock: [{position: {x: 10, y: 0, w: "w-20", h: 40}}],
	anchors: [
	      {x: "0", y: "h/2"},
	      {x: "w/2", y: "0"},
	      {x: "w", y: "h/2"},
	      {x: "w/2", y: "h"}
	],
	theme:{
		name: "striping",
		column: [
			{fillStyle:{}},
			{fillStyle:{type:"solid", color: "255,255,255"}}
		]
	},
	textBlock: [
		{position: {x: 0, y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.8", w: "w/3", h: "h/5"}}
	],
	path: [
			[
				{
					actions: [
						{action: "rect", x: 0, y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: 0, w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				}
			]
	],
	drawIcon: function(w, h){
		var y = -3;
		h += 3;
		return [
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3 * 2, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: 0, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3 * 2, w: w / 3, h: h/3}
				]
			},
			{
				fillStyle: {type: "solid", color:"240, 240, 240"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			}
		];
	}
});
Schema.addShape({
	name: "grid4",
	title: "<@i18n resource='schema.category.grid'/>",
	category: "grid",
	attribute: {
		linkable: true,
		rotatable: false
	},
	props: {
		w: 360,
		h: 200
	},
	fontStyle: {size: 16},
	lineStyle: {lineWidth: 1, lineColor: "201,208,227"},
	textBlock: [{position: {x: 10, y: 0, w: "w-20", h: 40}}],
	anchors: [
	      {x: "0", y: "h/2"},
	      {x: "w/2", y: "0"},
	      {x: "w", y: "h/2"},
	      {x: "w/2", y: "h"}
	],
	theme:{
		name: "header",
		row: [
			{fillStyle:{type:"solid", color: "245,247,251"}},
			{fillStyle:{type:"solid", color: "255,255,255"}}
		]
	},
	textBlock: [
		{position: {x: 0, y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.8", w: "w/3", h: "h/5"}}
	],
	path: [
			[
				{	
					actions: [
						{action: "rect", x: 0, y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: 0, w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				}
			]
	],
	drawIcon: function(w, h){
		var y = -3;
		h += 3;
		return [
			{
				fillStyle: {type: "solid", color:"245,247,251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: 0, w: w / 3, h: h / 3}
				]
			},
			{	
				fillStyle: {type: "solid", color:"245,247,251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"245,247,251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3 * 2, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: 0, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3 * 2, w: w / 3, h: h/3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			}
		];
	}
});
Schema.addShape({
	name: "grid5",
	title: "<@i18n resource='schema.category.grid'/>",
	category: "grid",
	attribute: {
		linkable: true,
		rotatable: false
	},
	props: {
		w: 360,
		h: 200
	},
	fontStyle: {size: 16},
	lineStyle: {lineWidth: 1, lineColor: "197,204,224"},
	textBlock: [{position: {x: 10, y: 0, w: "w-20", h: 40}}],
	anchors: [
	      {x: "0", y: "h/2"},
	      {x: "w/2", y: "0"},
	      {x: "w", y: "h/2"},
	      {x: "w/2", y: "h"}
	],
	theme:{
		name: "striping",
		row: [
			{fillStyle:{type:"solid", color: "245,247,251"}},
			{fillStyle:{type:"solid", color: "255,255,255"}}
		]
	},
	textBlock: [
		{position: {x: 0, y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.8", w: "w/3", h: "h/5"}}
	],
	path: [
			[
				{
					actions: [
						{action: "rect", x: 0, y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: 0, w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				}
			]
	],
	drawIcon: function(w, h){
		var y = -3;
		h += 3;
		return [
			{
				fillStyle: {type: "solid", color:"245, 247, 251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"245, 247, 251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"245, 247, 251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3 * 2, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"245, 247, 251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: 0, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			},
			{	
				fillStyle: {type: "solid", color:"245, 247, 251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3 * 2, w: w / 3, h: h/3}
				]
			},
			{
				fillStyle: {type: "solid", color:"245, 247, 251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			}
		];
	}
});
Schema.addShape({
	name: "grid6",
	title: "<@i18n resource='schema.category.grid'/>",
	category: "grid",
	attribute: {
		linkable: true,
		rotatable: false
	},
	props: {
		w: 360,
		h: 200
	},
	fontStyle: {size: 16},
	lineStyle: {lineWidth: 1, lineColor: "197,204,224"},
	textBlock: [{position: {x: 10, y: 0, w: "w-20", h: 40}}],
	anchors: [
	      {x: "0", y: "h/2"},
	      {x: "w/2", y: "0"},
	      {x: "w", y: "h/2"},
	      {x: "w/2", y: "h"}
	],
	theme:{
		name: "striping",
		column: [
			{fillStyle:{type:"solid", color: "245,247,251"}},
			{fillStyle:{type:"solid", color: "255,255,255"}}
		]
	},
	textBlock: [
		{position: {x: 0, y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.8", w: "w/3", h: "h/5"}}
	],
	path: [
			[
				{
					actions: [
						{action: "rect", x: 0, y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: 0, w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				}
			]
	],
	drawIcon: function(w, h){
		var y = -3;
		h += 3;
		return [
			{
				fillStyle: {type: "solid", color:"245,247,251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"245,247,251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"245,247,251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"245,247,251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3 * 2, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"245,247,251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: 0, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3 * 2, w: w / 3, h: h/3}
				]
			},
			{
				fillStyle: {type: "solid", color:"245,247,251"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			}
		];
	}
});
Schema.addShape({
	name: "grid7",
	title: "<@i18n resource='schema.category.grid'/>",
	category: "grid",
	attribute: {
		linkable: true,
		rotatable: false
	},
	props: {
		w: 360,
		h: 200
	},
	fontStyle: {size: 16},
	lineStyle: {lineWidth: 1, lineColor: "225, 222, 222"},
	textBlock: [{position: {x: 10, y: 0, w: "w-20", h: 40}}],
	anchors: [
	      {x: "0", y: "h/2"},
	      {x: "w/2", y: "0"},
	      {x: "w", y: "h/2"},
	      {x: "w/2", y: "h"}
	],
	theme:{
		name: "striping",
		row: [
			{fillStyle:{type:"solid", color: "255, 246, 245"}},
			{fillStyle:{type:"solid", color: "255,255,255"}}
		]
	},
	textBlock: [
		{position: {x: 0, y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: 0, w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.2", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.4", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.6", w: "w/3", h: "h/5"}},
		{position: {x: 0, y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3", y: "h*0.8", w: "w/3", h: "h/5"}},
		{position: {x: "w/3*2", y: "h*0.8", w: "w/3", h: "h/5"}}
	],
	path: [
			[
				{
					actions: [
						{action: "rect", x: 0, y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: 0, w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: 0, w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.2", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.4", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.6", w:"w/3", h: "h*0.2"}
					]
				}
			],
			[
				{
					actions: [
						{action: "rect", x: 0, y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				},
				{
					actions: [
						{action: "rect", x: "w/3*2", y: "h*0.8", w:"w/3", h: "h*0.2"}
					]
				}
			]
	],
	drawIcon: function(w, h){
		var y = -3;
		h += 3;
		return [
			{
				fillStyle: {type: "solid", color:"255, 246, 245"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"255, 246, 245"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"255, 246, 245"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: 0, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:0, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3 * 2, y: h / 3, w: w / 3, h: h / 3}
				]
			},
			{
				fillStyle: {type: "solid", color:"255, 246, 245"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: 0, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			},
			{	
				fillStyle: {type: "solid", color:"255, 246, 245"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x: w / 3, y: h / 3 * 2, w: w / 3, h: h/3}
				]
			},
			{
				fillStyle: {type: "solid", color:"255, 246, 245"},
				lineStyle: {lineWidth: 1},
				actions: [
					{action: "rect", x:w / 3 * 2, y: h / 3 * 2, w: w / 3, h: h / 3}
				]
			}
		];
	}
});







