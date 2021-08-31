//aws2019 groups
Schema.addCategory({
	name: "aws2019_groups",
	text: "AWS Groups",
	dataAttributes: []
});
AWS2019RenderGroups("aws2019_groups_cloud", "aws2019_groups", "AWS Cloud", "/assets/images/designer/network_aws2019/groups/AWS-Cloud-alt.svg", "/assets/images/designer/network_aws2019/groups/AWS-Cloud-alt_icon.svg");
AWS2019RenderGroups("aws2019_groups_cloud1", "aws2019_groups", "AWS Cloud", "/assets/images/designer/network_aws2019/groups/AWS-Cloud.svg", "/assets/images/designer/network_aws2019/groups/AWS-Cloud_icon.svg");
AWS2019RenderGroups("aws2019_groups_region", "aws2019_groups", "Region", "/assets/images/designer/network_aws2019/groups/Region.svg", "/assets/images/designer/network_aws2019/groups/Region_icon.svg");
AWS2019RenderGroups("aws2019_groups_vpc", "aws2019_groups", "Virtual Private Cloud", "/assets/images/designer/network_aws2019/groups/Virtual-private-cloud-VPC.svg", "/assets/images/designer/network_aws2019/groups/Virtual-private-cloud-VPC_icon.svg");
AWS2019RenderGroups("aws2019_groups_private", "aws2019_groups", "Private subnet", "/assets/images/designer/network_aws2019/groups/VPC-subnet-private.svg", "/assets/images/designer/network_aws2019/groups/VPC-subnet-private_icon.svg", {style:"solid", color:"230, 242, 248"}, {lineWidth:0});
AWS2019RenderGroups("aws2019_groups_public", "aws2019_groups", "Public Subnet", "/assets/images/designer/network_aws2019/groups/VPC-subnet-public.svg", "/assets/images/designer/network_aws2019/groups/VPC-subnet-public_icon.svg", {style:"solid", color:"233, 243, 230"}, {lineWidth:0});
AWS2019RenderGroups("aws2019_groups_server", "aws2019_groups", "Server contents", "/assets/images/designer/network_aws2019/groups/Server-contents.svg", "/assets/images/designer/network_aws2019/groups/Server-contents_icon.svg");
AWS2019RenderGroups("aws2019_groups_datacenter", "aws2019_groups", "Corporate data center", "/assets/images/designer/network_aws2019/groups/Corporate-data-center.svg", "/assets/images/designer/network_aws2019/groups/Corporate-data-center_icon.svg");
AWS2019RenderGroups("aws2019_groups_ebc", "aws2019_groups", "Elastic Beanstalk container", "/assets/images/designer/network_aws2019/groups/Elastic-Beanstalk-container.svg", "/assets/images/designer/network_aws2019/groups/Elastic-Beanstalk-container_icon.svg", null, {lineColor:"216, 102, 19",lineWidth:1});
AWS2019RenderGroups("aws2019_groups_eic", "aws2019_groups", "EC2 instance contents", "/assets/images/designer/network_aws2019/groups/EC2-instance-container.svg", "/assets/images/designer/network_aws2019/groups/EC2-instance-container_icon.svg", null, {lineColor:"216, 102, 19",lineWidth:1});
AWS2019RenderGroups("aws2019_groups_sf", "aws2019_groups", "Spot Fleet", "/assets/images/designer/network_aws2019/groups/Spot-fleet.svg", "/assets/images/designer/network_aws2019/groups/Spot-fleet_icon.svg", null, {lineColor:"216, 102, 19",lineWidth:1});
AWS2019RenderGroups("aws2019_groups_sfw", "aws2019_groups", "AWS Step Functions workflow", "/assets/images/designer/network_aws2019/groups/AWS-Step-Function.svg", "/assets/images/designer/network_aws2019/groups/AWS-Step-Function_icon.svg", null, {lineColor:"205, 34, 100",lineWidth:1});
AWS2019RenderGroupsNormal("aws2019_groups_az", "aws2019_groups", "Availability Zone", null, {lineStyle:"dashed", lineColor:"20,126,186", lineWidth:1}, "20,126,186");
AWS2019RenderGroupsNormal("aws2019_groups_sg", "aws2019_groups", "Security group", null, {lineColor:"221, 53, 34", lineWidth:1}, "221, 53, 34");
AWS2019RenderGroupsNormal("aws2019_groups_gg", "aws2019_groups", "Generic group", null, {lineStyle:"dashed", lineColor:"90, 108, 134", lineWidth:1}, "90, 108, 134");
AWS2019RenderGroupsNormal("aws2019_groups_gg1", "aws2019_groups", "Generic group", {type:"solid", color:"239, 240, 243"}, {lineWidth:0}, "35, 35, 35");

//aws2019 general
Schema.addCategory({
	name: "aws2019_general",
	text: "AWS General",
	dataAttributes: []
});
Schema.addShape({
	name: "aws2019-marketplace",
	title: "AWS-Marketplace",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS-Marketplace"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/AWS-Marketplace.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/AWS-Marketplace.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-client",
	title: "AWS-Client",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS-Client"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Client_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Client_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-datacenter",
	title: "AWS-DataCenter",
	category: "aws2019_general",
	props: {
		w: 52,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"Data Center"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Data_center.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Data_center.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-disk",
	title: "AWS General Disk",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Disk"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Disk_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Disk_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-forums",
	title: "AWS General Forums",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Disk"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Forums_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Forums_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-database",
	title: "AWS General Database",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Database"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Generic-database_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Generic-database_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-internet1",
	title: "AWS General Internet",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Internet Alt 1"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Internet-alt1_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Internet-alt1_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-internet2",
	title: "AWS General Internet",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Internet Alt 2"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Internet-alt2_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Internet-alt2_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-internet-gateway",
	title: "AWS General Internet Gateway",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Internet Gateway"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Internet-gateway_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Internet-gateway_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-mobile",
	title: "AWS General Mobile Client",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Mobile Client"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Mobile-client_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Mobile-client_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-multimedia",
	title: "AWS General Multimedia",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Multimedia"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Multimedia_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Multimedia_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-office",
	title: "AWS General Office Building",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Office Building"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Office-building.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Office-building.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-token",
	title: "AWS General SAML Token",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General SAML Token"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/SAML-token.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/SAML-token.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-sdk",
	title: "SDK",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"SDK"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/SDK_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/SDK_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-ssl",
	title: "AWS General SSL Padlock",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General SSL Padlock"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/SSL-padlock_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/SSL-padlock_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-tape",
	title: "AWS General Tape Storage",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Tape Storage"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Tape-storage.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Tape-storage.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-toolkit",
	title: "Toolkit",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"Toolkit"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Toolkit_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Toolkit_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-traditional",
	title: "AWS General Traditional Server",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Traditional Server"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Traditional-server_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Traditional-server_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});

Schema.addShape({
	name: "aws2019-user",
	title: "AWS General User",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General User"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/User_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/User_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
Schema.addShape({
	name: "aws2019-users",
	title: "AWS General Users",
	category: "aws2019_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:"AWS General Users"}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Users_light-bg.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws2019/general/Users_light-bg.svg", imageW: 30, imageH: 30, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: [
					{action: "move", x: x, y: y},
					{action: "line", x: w, y: y},
					{action: "line", x: w, y: h},
					{action: "line", x: x, y: h},
					{action: "close"}
				]
			}
		];
	}
});
//aws2019 Compute
Schema.addCategory({
	name: "aws2019_compute",
	text: "AWS Compute",
	dataAttributes: []
});
AWS2019Render("aws2019_compute_ec2", "aws2019_compute", "Amazon EC2", "/assets/images/designer/network_aws2019/compute/Amazon-EC2.svg");
AWS2019Render("aws2019_compute_scaling", "aws2019_compute", "Auto Scaling", "/assets/images/designer/network_aws2019/compute/Amazon-EC2-Auto-Scaling.svg");
AWS2019Render("aws2019_compute_registry", "aws2019_compute", "Container Registry", "/assets/images/designer/network_aws2019/compute/Amazon-EC2-Container-Registry.svg");
AWS2019Render("aws2019_compute_ecs", "aws2019_compute", "Elastic Container Service", "/assets/images/designer/network_aws2019/compute/Amazon-Elastic-Container-Service.svg");
AWS2019Render("aws2019_compute_ecsfk", "aws2019_compute", "Elastic Container Service for Kubernetes", "/assets/images/designer/network_aws2019/compute/Amazon-Elastic-Kubernetes-Service.svg");
AWS2019Render("aws2019_compute_lightsail", "aws2019_compute", "Lightsail", "/assets/images/designer/network_aws2019/compute/Amazon-Lightsail.svg");
AWS2019Render("aws2019_compute_batch", "aws2019_compute", "Batch", "/assets/images/designer/network_aws2019/compute/AWS-Batch.svg");
AWS2019Render("aws2019_compute_eb", "aws2019_compute", "Elastic-Beanstalk", "/assets/images/designer/network_aws2019/compute/AWS-Elastic-Beanstalk.svg");

AWS2019Render("aws2019_compute_fargate", "aws2019_compute", "Fargate", "/assets/images/designer/network_aws2019/compute/AWS-Fargate.svg");
AWS2019Render("aws2019_compute_lambda", "aws2019_compute", "Lambda", "/assets/images/designer/network_aws2019/compute/AWS-Lambda.svg");
AWS2019Render("aws2019_compute_outposts", "aws2019_compute", "Outposts", "/assets/images/designer/network_aws2019/compute/AWS-Outposts.svg");
AWS2019Render("aws2019_compute_sar", "aws2019_compute", "Serverless Application Repository", "/assets/images/designer/network_aws2019/compute/AWS-Serverless-Application-Repository.svg");
AWS2019Render("aws2019_compute_compute", "aws2019_compute", "Compute", "/assets/images/designer/network_aws2019/compute/Compute.svg");
AWS2019Render("aws2019_compute_vcoa", "aws2019_compute", "VMWare Cloud On AWS", "/assets/images/designer/network_aws2019/compute/VMware-Cloud-On-AWS.svg");

AWS2019Render("aws2019_compute_ami", "aws2019_compute", "AMI", "/assets/images/designer/network_aws2019/compute/Amazon-EC2_AMI.svg", 56, 56);
AWS2019Render("aws2019_compute_autoscaling", "aws2019_compute", "Auto-Scaling", "/assets/images/designer/network_aws2019/compute/Amazon-EC2_Auto-Scaling.svg", 56, 56);
AWS2019Render("aws2019_compute_eia", "aws2019_compute", "Elastic-IP-Address", "/assets/images/designer/network_aws2019/compute/Amazon-EC2_Elastic-IP-Address.svg", 56, 56);
AWS2019Render("aws2019_compute_aer", "aws2019_compute", "Rescue", "/assets/images/designer/network_aws2019/compute/Amazon-EC2_Rescue.svg", 56, 56);
AWS2019Render("aws2019_compute_ecrr", "aws2019_compute", "Registry", "/assets/images/designer/network_aws2019/compute/Amazon-EC2-Container-Registry_Registry.svg", 56, 56);
AWS2019Render("aws2019_compute_container1", "aws2019_compute", "Container", "/assets/images/designer/network_aws2019/compute/Amazon-Elastic-Container-Service_Container1.svg", 56, 56);
AWS2019Render("aws2019_compute_container2", "aws2019_compute", "Container", "/assets/images/designer/network_aws2019/compute/Amazon-Elastic-Container-Service_Container2.svg", 56, 56);
AWS2019Render("aws2019_compute_container3", "aws2019_compute", "Container", "/assets/images/designer/network_aws2019/compute/Amazon-Elastic-Container-Service_Container3.svg", 56, 56);
AWS2019Render("aws2019_compute_image", "aws2019_compute", "Image", "/assets/images/designer/network_aws2019/compute/Amazon-EC2-Container-Registry_Image.svg", 56, 56);
AWS2019Render("aws2019_compute_ecss", "aws2019_compute", "Service", "/assets/images/designer/network_aws2019/compute/Amazon-Elastic-Container-Service_Service.svg", 56, 56);

AWS2019Render("aws2019_compute_task", "aws2019_compute", "Task", "/assets/images/designer/network_aws2019/compute/Amazon-Elastic-Container-Service_Task.svg", 56, 56);
AWS2019Render("aws2019_compute_app", "aws2019_compute", "Application", "/assets/images/designer/network_aws2019/compute/AWS-Elastic-Beanstalk_Application.svg", 56, 56);
AWS2019Render("aws2019_compute_dep", "aws2019_compute", "Deployment", "/assets/images/designer/network_aws2019/compute/AWS-Elastic-Beanstalk_Deployment.svg", 56, 56);
AWS2019Render("aws2019_compute_lf", "aws2019_compute", "Lambda-Function", "/assets/images/designer/network_aws2019/compute/AWS-Lambda_Lambda-Function.svg", 56, 56);
//aws2019 Compute
Schema.addCategory({
	name: "aws2019_instance",
	text: "AWS EC2 Instance Types",
	dataAttributes: []
});
AWS2019Render("aws2019_instance_a1", "aws2019_instance", "A1-Instance", "/assets/images/designer/network_aws2019/instances/EC2_A1-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_c4", "aws2019_instance", "C4-Instance", "/assets/images/designer/network_aws2019/instances/EC2_C4-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_c5", "aws2019_instance", "C5-Instance", "/assets/images/designer/network_aws2019/instances/EC2_C5-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_c5n", "aws2019_instance", "C5n-Instance", "/assets/images/designer/network_aws2019/instances/EC2_C5n-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_d2", "aws2019_instance", "D2-Instance", "/assets/images/designer/network_aws2019/instances/EC2_D2-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_db", "aws2019_instance", "DB-Instance", "/assets/images/designer/network_aws2019/instances/EC2_DB-on-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_f1", "aws2019_instance", "F1-Instance", "/assets/images/designer/network_aws2019/instances/EC2_F1-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_g3", "aws2019_instance", "G2-Instance", "/assets/images/designer/network_aws2019/instances/EC2_G3-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_h1", "aws2019_instance", "H1-Instance", "/assets/images/designer/network_aws2019/instances/EC2_H1-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_hml", "aws2019_instance", "HMI-Instance", "/assets/images/designer/network_aws2019/instances/EC2_High-Memory-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_i3", "aws2019_instance", "I3-Instance", "/assets/images/designer/network_aws2019/instances/EC2_I3-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_ec2", "aws2019_instance", "Instance", "/assets/images/designer/network_aws2019/instances/EC2_Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_ec2s", "aws2019_instance", "Instances", "/assets/images/designer/network_aws2019/instances/EC2_Instances_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_iwc", "aws2019_instance", "Instance-with-CloudWatch", "/assets/images/designer/network_aws2019/instances/EC2_Instance-with-CloudWatch_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_m4", "aws2019_instance", "M4-Instance", "/assets/images/designer/network_aws2019/instances/EC2_M4-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_m5a", "aws2019_instance", "M5a-Instance", "/assets/images/designer/network_aws2019/instances/EC2_M5a-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_m5", "aws2019_instance", "M5-Instance", "/assets/images/designer/network_aws2019/instances/EC2_M5-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_oi", "aws2019_instance", "Optimized-Instanc", "/assets/images/designer/network_aws2019/instances/EC2_Optimized-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_p2", "aws2019_instance", "P2-Instance", "/assets/images/designer/network_aws2019/instances/EC2_P2-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_p3", "aws2019_instance", "P3-Instance", "/assets/images/designer/network_aws2019/instances/EC2_P3-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_r4", "aws2019_instance", "R4-Instance", "/assets/images/designer/network_aws2019/instances/EC2_R4-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_r5a", "aws2019_instance", "R5a-Instance", "/assets/images/designer/network_aws2019/instances/EC2_R5a-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_r5", "aws2019_instance", "R5-Instance", "/assets/images/designer/network_aws2019/instances/EC2_R5-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_spot", "aws2019_instance", "Spot-instance", "/assets/images/designer/network_aws2019/instances/EC2_Spot-instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_t2", "aws2019_instance", "T2-Instance", "/assets/images/designer/network_aws2019/instances/EC2_T2-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_t3a", "aws2019_instance", "T3a-Instance", "/assets/images/designer/network_aws2019/instances/EC2_T3a-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_t3", "aws2019_instance", "T3-Instance", "/assets/images/designer/network_aws2019/instances/EC2_T3-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_x1e", "aws2019_instance", "X1e-Instance", "/assets/images/designer/network_aws2019/instances/EC2_X1e-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_x1", "aws2019_instance", "X1-Instance", "/assets/images/designer/network_aws2019/instances/EC2_X1-Instance_light-bg.svg", 56, 56);
AWS2019Render("aws2019_instance_zld", "aws2019_instance", "zld-Instance", "/assets/images/designer/network_aws2019/instances/EC2_z1d-Instance_light-bg.svg", 56, 56);
Schema.addCategory({
	name: "aws2019_storage",
	text: "AWS Storage",
	dataAttributes: []
});
AWS2019Render("aws2019_storage_ebs", "aws2019_storage", "Elastic-Block-Store", "/assets/images/designer/network_aws2019/storage/Elastic-Block-Store-EBS.svg");
AWS2019Render("aws2019_storage_efs", "aws2019_storage", "Elastic-File-System", "/assets/images/designer/network_aws2019/storage/Elastic-File-System_EFS.svg");
AWS2019Render("aws2019_storage_fsx", "aws2019_storage", "FSx", "/assets/images/designer/network_aws2019/storage/FSx.svg");
AWS2019Render("aws2019_storage_fsxfl", "aws2019_storage", "FSx-for-Lustre", "/assets/images/designer/network_aws2019/storage/FSx-for-Lustre.svg");
AWS2019Render("aws2019_storage_fsxfwfs", "aws2019_storage", "FSx-for-Windows-File-Server", "/assets/images/designer/network_aws2019/storage/FSx-for-Windows-File-Server.svg");
AWS2019Render("aws2019_storage_s3g", "aws2019_storage", "S3-Glacier", "/assets/images/designer/network_aws2019/storage/S3-Glacier.svg");
AWS2019Render("aws2019_storage_sss", "aws2019_storage", "Simple-Storage-Service", "/assets/images/designer/network_aws2019/storage/Simple-_Storage-Service-S3.svg");
AWS2019Render("aws2019_storage_backup", "aws2019_storage", "Backup", "/assets/images/designer/network_aws2019/storage/AWS-Backup.svg");
AWS2019Render("aws2019_storage_snowball", "aws2019_storage", "Snowball", "/assets/images/designer/network_aws2019/storage/AWS-Snowball.svg");
AWS2019Render("aws2019_storage_se", "aws2019_storage", "Snowball-Edge", "/assets/images/designer/network_aws2019/storage/AWS-Snowball-Edge.svg");
AWS2019Render("aws2019_storage_snowmobile", "aws2019_storage", "Snowmobile", "/assets/images/designer/network_aws2019/storage/AWS-Snowmobile.svg");
AWS2019Render("aws2019_storage_sg", "aws2019_storage", "Storage-Gateway", "/assets/images/designer/network_aws2019/storage/AWS-Storage-Gateway.svg");
AWS2019Render("aws2019_storage_storage", "aws2019_storage", "Storage", "/assets/images/designer/network_aws2019/storage/Storage.svg");
AWS2019Render("aws2019_storage_snapshot", "aws2019_storage", "Snapshot", "/assets/images/designer/network_aws2019/storage/Elastic-Block-Store-EBS_Snapshot_light-bg.svg", 56, 56);
AWS2019Render("aws2019_storage_volume", "aws2019_storage", "Volume", "/assets/images/designer/network_aws2019/storage/Elastic-Block-Store-EBS_Volume.svg", 56, 56);
AWS2019Render("aws2019_storage_fs", "aws2019_storage", "File-system", "/assets/images/designer/network_aws2019/storage/Elastic-File-System_EFS_File-system.svg", 56, 56);
AWS2019Render("aws2019_storage_archive", "aws2019_storage", "Archive", "/assets/images/designer/network_aws2019/storage/S3-Glacier_Archive.svg", 56, 56);
AWS2019Render("aws2019_storage_vault", "aws2019_storage", "Vault", "/assets/images/designer/network_aws2019/storage/S3-Glacier_Vault.svg", 56, 56);
AWS2019Render("aws2019_storage_bucket", "aws2019_storage", "Bucket", "/assets/images/designer/network_aws2019/storage/Simple-Storage-Service-S3_Bucket.svg", 56, 56);
AWS2019Render("aws2019_storage_bwo", "aws2019_storage", "Bucket-with-Objects", "/assets/images/designer/network_aws2019/storage/Simple-Storage-Service-S3_Bucket-with-Objects.svg", 56, 56);
AWS2019Render("aws2019_storage_object", "aws2019_storage", "Object", "/assets/images/designer/network_aws2019/storage/Simple-Storage-Service-S3_Object.svg", 56, 56);
AWS2019Render("aws2019_storage_sie", "aws2019_storage", "Snowball-Import-Export", "/assets/images/designer/network_aws2019/storage/AWS-Snow-Family_Snowball-Import-Export_light-bg.svg", 56, 56);
AWS2019Render("aws2019_storage_cv", "aws2019_storage", "Cached-Volume", "/assets/images/designer/network_aws2019/storage/AWS-Storage-Gateway_Cached-Volume_light-bg.svg", 56, 56);
AWS2019Render("aws2019_storage_ncv", "aws2019_storage", "Non-Cached-Volume", "/assets/images/designer/network_aws2019/storage/AWS-Storage-Gateway_Non-Cached-Volume.svg", 56, 56);
AWS2019Render("aws2019_storage_vtl", "aws2019_storage", "Virtual-Tape-Library", "/assets/images/designer/network_aws2019/storage/AWS-Storage-Gateway_Virtual-Tape-Library.svg", 56, 56);
Schema.addCategory({
	name: "aws2019_database",
	text: "AWS Database",
	dataAttributes: []
});

AWS2019Render("aws2019_database_aurora", "aws2019_database", "Aurora", "/assets/images/designer/network_aws2019/database/Aurora.svg");
AWS2019Render("aws2019_database_wmc", "aws2019_database", "DocumentDB-(with-MongoDB-compatibility)", "/assets/images/designer/network_aws2019/database/DocumentDB-_with-MongoDB-compatibility.svg");
AWS2019Render("aws2019_database_dynamoDB", "aws2019_database", "DynamoDB", "/assets/images/designer/network_aws2019/database/DynamoDB.svg");
AWS2019Render("aws2019_database_ec", "aws2019_database", "ElastiCache", "/assets/images/designer/network_aws2019/database/ElastiCache.svg");
AWS2019Render("aws2019_database_neptune", "aws2019_database", "Neptune", "/assets/images/designer/network_aws2019/database/Neptune.svg");
AWS2019Render("aws2019_database_qld", "aws2019_database", "Quantum-Ledger-Database", "/assets/images/designer/network_aws2019/database/Quantum-Ledger-_Database_QLDB.svg");
AWS2019Render("aws2019_database_rds", "aws2019_database", "RDS", "/assets/images/designer/network_aws2019/database/RDS.svg");
AWS2019Render("aws2019_database_rov", "aws2019_database", "RDS-on-VMware", "/assets/images/designer/network_aws2019/database/RDS-on-VMware.svg");
AWS2019Render("aws2019_database_redshift", "aws2019_database", "Redshift", "/assets/images/designer/network_aws2019/database/Redshift.svg");
AWS2019Render("aws2019_database_timestream", "aws2019_database", "Timestream", "/assets/images/designer/network_aws2019/database/Timestream.svg");
AWS2019Render("aws2019_database_dms", "aws2019_database", "Database-Migration-Service", "/assets/images/designer/network_aws2019/database/AWS-Database-Migration-Service.svg");
AWS2019Render("aws2019_database_db", "aws2019_database", "Database", "/assets/images/designer/network_aws2019/database/Database.svg");
AWS2019Render("aws2019_database_attr", "aws2019_database", "Attribute", "/assets/images/designer/network_aws2019/database/DynamoDB_Attribute.svg", 56, 56);
AWS2019Render("aws2019_database_attrs", "aws2019_database", "Attributes", "/assets/images/designer/network_aws2019/database/DynamoDB_Attributes.svg", 56, 56);
AWS2019Render("aws2019_database_gsi", "aws2019_database", "Global-Secondary-Index", "/assets/images/designer/network_aws2019/database/DynamoDB_Global-Secondary-Index.svg", 56, 56);
AWS2019Render("aws2019_database_item", "aws2019_database", "Item", "/assets/images/designer/network_aws2019/database/DynamoDB_Item.svg", 56, 56);
AWS2019Render("aws2019_database_items", "aws2019_database", "Items", "/assets/images/designer/network_aws2019/database/DynamoDB_Items.svg", 56, 56);
AWS2019Render("aws2019_database_table", "aws2019_database", "Table", "/assets/images/designer/network_aws2019/database/DynamoDB_Table.svg", 56, 56);
AWS2019Render("aws2019_database_cn", "aws2019_database", "Cache-Node", "/assets/images/designer/network_aws2019/database/ElastiCache_Cache-Node.svg", 56, 56);
AWS2019Render("aws2019_database_efm", "aws2019_database", "ElastiCache-For-Memcached", "/assets/images/designer/network_aws2019/database/ElastiCache_For-Memcached.svg", 56, 56);
AWS2019Render("aws2019_database_efr", "aws2019_database", "ElastiCache-For-Redis", "/assets/images/designer/network_aws2019/database/ElastiCache_For-Redis.svg", 56, 56);
AWS2019Render("aws2019_database_dcn", "aws2019_database", "Dense-Compute-Node", "/assets/images/designer/network_aws2019/database/Redshift_Dense-Compute-Node.svg", 56, 56);
AWS2019Render("aws2019_database_dsn", "aws2019_database", "Dense-Storage-Node", "/assets/images/designer/network_aws2019/database/Redshift_Dense-Storage-Node.svg", 56, 56);
AWS2019Render("aws2019_database_dmw", "aws2019_database", "Database-Migration-Workflow", "/assets/images/designer/network_aws2019/database/AWS-Database-Migration-Service_Database-Migration-Workflow.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_ncd",
	text: "Networking & Content Delivery",
	dataAttributes: []
});
AWS2019Render("aws2019_ncd1", "aws2019_ncd", "API-Gateway", "/assets/images/designer/network_aws2019/ncd/API-Gateway.svg");
AWS2019Render("aws2019_ncd2", "aws2019_ncd", "CloudFront", "/assets/images/designer/network_aws2019/ncd/CloudFront.svg");
AWS2019Render("aws2019_ncd3", "aws2019_ncd", "Route-53", "/assets/images/designer/network_aws2019/ncd/Route-53.svg");
AWS2019Render("aws2019_ncd4", "aws2019_ncd", "AWS-PrivateLink", "/assets/images/designer/network_aws2019/ncd/AWS-PrivateLink.svg");
AWS2019Render("aws2019_ncd5", "aws2019_ncd", "VPC", "/assets/images/designer/network_aws2019/ncd/VPC.svg");
AWS2019Render("aws2019_ncd6", "aws2019_ncd", "App-Mesh", "/assets/images/designer/network_aws2019/ncd/AWS-App-Mesh.svg");
AWS2019Render("aws2019_ncd7", "aws2019_ncd", "Client-VPN", "/assets/images/designer/network_aws2019/ncd/AWS-Client-VPN.svg");
AWS2019Render("aws2019_ncd8", "aws2019_ncd", "Site-to-Site-VPN", "/assets/images/designer/network_aws2019/ncd/AWS-Site-to-Site-VPN.svg");
AWS2019Render("aws2019_ncd9", "aws2019_ncd", "Elastic-Load-Balancing", "/assets/images/designer/network_aws2019/ncd/Elastic-Load-Balancing.svg");
AWS2019Render("aws2019_ncd10", "aws2019_ncd", "Cloud-Map", "/assets/images/designer/network_aws2019/ncd/AWS-Cloud-Map.svg");
AWS2019Render("aws2019_ncd11", "aws2019_ncd", "Direct-Connect", "/assets/images/designer/network_aws2019/ncd/AWS-Direct-Connect.svg");
AWS2019Render("aws2019_ncd12", "aws2019_ncd", "Global-Accelerator", "/assets/images/designer/network_aws2019/ncd/AWS-Global-Accelerator.svg");
AWS2019Render("aws2019_ncd13", "aws2019_ncd", "Transit-Gateway", "/assets/images/designer/network_aws2019/ncd/AWS-Transit-Gateway.svg");
AWS2019Render("aws2019_ncd14", "aws2019_ncd", "Networking-and-Content-Delivery", "/assets/images/designer/network_aws2019/ncd/Networking-and-Content-Delivery.svg");

AWS2019Render("aws2019_ncd15", "aws2019_ncd", "Gateway-Endpoint", "/assets/images/designer/network_aws2019/ncd/API-Gateway_Endpoint.svg", 56, 56);
AWS2019Render("aws2019_ncd16", "aws2019_ncd", "Download-Distribution", "/assets/images/designer/network_aws2019/ncd/CloudFront_Download-Distribution.svg", 56, 56);
AWS2019Render("aws2019_ncd17", "aws2019_ncd", "Edge-Location", "/assets/images/designer/network_aws2019/ncd/CloudFront_Edge-Location.svg", 56, 56);
AWS2019Render("aws2019_ncd18", "aws2019_ncd", "Streaming-Distribution", "/assets/images/designer/network_aws2019/ncd/CloudFront_Streaming-Distribution.svg", 56, 56);
AWS2019Render("aws2019_ncd19", "aws2019_ncd", "Hosted-Zone", "/assets/images/designer/network_aws2019/ncd/Amazon-Route-53_Hosted-Zone_light-bg.svg", 56, 56);
AWS2019Render("aws2019_ncd20", "aws2019_ncd", "Route-Table", "/assets/images/designer/network_aws2019/ncd/Amazon-Route-53_Route-Table_light-bg.svg", 56, 56);
AWS2019Render("aws2019_ncd21", "aws2019_ncd", "Router", "/assets/images/designer/network_aws2019/ncd/VPC_Router.svg", 56, 56);
AWS2019Render("aws2019_ncd22", "aws2019_ncd", "Elastic-Network-Adapter", "/assets/images/designer/network_aws2019/ncd/VPC_Elastic-Network-Adapter.svg", 56, 56);
AWS2019Render("aws2019_ncd23", "aws2019_ncd", "Transit-Gateway", "/assets/images/designer/network_aws2019/ncd/VPC_Elastic-Network-Interface.svg", 56, 56);
AWS2019Render("aws2019_ncd24", "aws2019_ncd", "Endpoints", "/assets/images/designer/network_aws2019/ncd/VPC_Endpoints_light-bg.svg", 56, 56);
AWS2019Render("aws2019_ncd25", "aws2019_ncd", "Flow-Logs", "/assets/images/designer/network_aws2019/ncd/VPC_Flow-Logs_light-bg.svg", 56, 56);
AWS2019Render("aws2019_ncd26", "aws2019_ncd", "Internet-Gateway", "/assets/images/designer/network_aws2019/ncd/VPC_Internet-Gateway.svg", 56, 56);
AWS2019Render("aws2019_ncd27", "aws2019_ncd", "NAT-Gateway", "/assets/images/designer/network_aws2019/ncd/VPC_NAT-Gateway.svg", 56, 56);
AWS2019Render("aws2019_ncd28", "aws2019_ncd", "Network-Access-Control-List", "/assets/images/designer/network_aws2019/ncd/VPC_Network-Access-Control-List.svg", 56, 56);
AWS2019Render("aws2019_ncd29", "aws2019_ncd", "Peering", "/assets/images/designer/network_aws2019/ncd/VPC_Peering.svg", 56, 56);
AWS2019Render("aws2019_ncd30", "aws2019_ncd", "Application-load-balancer", "/assets/images/designer/network_aws2019/ncd/Elastic-Load-Balancing-ELB_Application-load-balancer.svg", 56, 56);
AWS2019Render("aws2019_ncd31", "aws2019_ncd", "Classic-load-balancer", "/assets/images/designer/network_aws2019/ncd/Elastic-Load-Balancing_Classic-load-balancer.svg", 56, 56);
AWS2019Render("aws2019_ncd32", "aws2019_ncd", "Network-load-balancer", "/assets/images/designer/network_aws2019/ncd/Elastic-Load-Balancing-ELB_Network-load-balancer.svg", 56, 56);
AWS2019Render("aws2019_ncd33", "aws2019_ncd", "Customer-Gateway", "/assets/images/designer/network_aws2019/ncd/VPC_Customer-Gateway_light-bg.svg", 56, 56);
AWS2019Render("aws2019_ncd34", "aws2019_ncd", "VPN-Connection", "/assets/images/designer/network_aws2019/ncd/VPC_VPN-Connection.svg", 56, 56);
AWS2019Render("aws2019_ncd35", "aws2019_ncd", "VPN-Gateway", "/assets/images/designer/network_aws2019/ncd/VPC_VPN-Gateway.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_mt",
	text: "Migration & Transfer",
	dataAttributes: []
});
AWS2019Render("aws2019_mt1", "aws2019_mt", "Application-Discovery-Service", "/assets/images/designer/network_aws2019/mt/AWS-Application-Discovery-Service.svg");
AWS2019Render("aws2019_mt2", "aws2019_mt", "Database-_Migration-Service", "/assets/images/designer/network_aws2019/mt/AWS-Database-_Migration-Service.svg");
AWS2019Render("aws2019_mt3", "aws2019_mt", "DataSync", "/assets/images/designer/network_aws2019/mt/AWS-DataSync.svg");
AWS2019Render("aws2019_mt4", "aws2019_mt", "Migration-Hub", "/assets/images/designer/network_aws2019/mt/AWS-Migration-Hub.svg");
AWS2019Render("aws2019_mt5", "aws2019_mt", "Service-Migration-Service", "/assets/images/designer/network_aws2019/mt/AWS-Server-Migration-Service.svg");
AWS2019Render("aws2019_mt6", "aws2019_mt", "Snowball", "/assets/images/designer/network_aws2019/mt/AWS-Snowball.svg");
AWS2019Render("aws2019_mt7", "aws2019_mt", "Snowball-Edge", "/assets/images/designer/network_aws2019/mt/AWS-Snowball-Edge.svg");
AWS2019Render("aws2019_mt8", "aws2019_mt", "Snowmobile", "/assets/images/designer/network_aws2019/mt/AWS-Snowmobile.svg");
AWS2019Render("aws2019_mt9", "aws2019_mt", "Transfer-for-SFTP", "/assets/images/designer/network_aws2019/mt/AWS-Transfer-for-SFTP.svg");
AWS2019Render("aws2019_mt10", "aws2019_mt", "Migration-and-Transfer", "/assets/images/designer/network_aws2019/mt/Migration-and-Transfer.svg");
AWS2019Render("aws2019_mt11", "aws2019_mt", "Agent", "/assets/images/designer/network_aws2019/mt/AWS-DataSync_Agent_light-bg.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_dt",
	text: "Developer Tools",
	dataAttributes: []
});
AWS2019Render("aws2019_dt1", "aws2019_dt", "Developer-Tools", "/assets/images/designer/network_aws2019/developer_tools/Developer-Tools.svg");
AWS2019Render("aws2019_dt2", "aws2019_dt", "Cloud9", "/assets/images/designer/network_aws2019/developer_tools/AWS-Cloud9.svg");
AWS2019Render("aws2019_dt3", "aws2019_dt", "CodeBuild", "/assets/images/designer/network_aws2019/developer_tools/AWS-CodeBuild.svg");
AWS2019Render("aws2019_dt4", "aws2019_dt", "CodeCommit", "/assets/images/designer/network_aws2019/developer_tools/AWS-CodeCommit.svg");
AWS2019Render("aws2019_dt5", "aws2019_dt", "CodeDeploy", "/assets/images/designer/network_aws2019/developer_tools/AWS-CodeDeploy.svg");
AWS2019Render("aws2019_dt6", "aws2019_dt", "CodePipeline", "/assets/images/designer/network_aws2019/developer_tools/AWS-CodePipeline.svg");
AWS2019Render("aws2019_dt7", "aws2019_dt", "CodeStar", "/assets/images/designer/network_aws2019/developer_tools/AWS-CodeStar.svg");
AWS2019Render("aws2019_dt8", "aws2019_dt", "Command-Line-Interface", "/assets/images/designer/network_aws2019/developer_tools/AWS-Command-Line-Interface.svg");
AWS2019Render("aws2019_dt9", "aws2019_dt", "Tools-And-SDKs", "/assets/images/designer/network_aws2019/developer_tools/AWS-Tools-And-SDKs.svg");
AWS2019Render("aws2019_dt10", "aws2019_dt", "X-Ray", "/assets/images/designer/network_aws2019/developer_tools/AWS-X-Ray.svg");

Schema.addCategory({
	name: "aws2019_mg",
	text: "Management-and-Governance",
	dataAttributes: []
});
AWS2019Render("aws2019_mg1", "aws2019_mg", "CloudWatch", "/assets/images/designer/network_aws2019/mg/CloudWatch.svg");
AWS2019Render("aws2019_mg2", "aws2019_mg", "Auto-Scaling", "/assets/images/designer/network_aws2019/mg/AWS-Auto-Scaling.svg");
AWS2019Render("aws2019_mg3", "aws2019_mg", "CloudFormation", "/assets/images/designer/network_aws2019/mg/AWS-CloudFormation.svg");
AWS2019Render("aws2019_mg4", "aws2019_mg", "CloudTrail", "/assets/images/designer/network_aws2019/mg/AWS-CloudTrail.svg");
AWS2019Render("aws2019_mg5", "aws2019_mg", "Command-Line-Interface", "/assets/images/designer/network_aws2019/mg/AWS-Command-Line-Interface.svg");
AWS2019Render("aws2019_mg6", "aws2019_mg", "Config", "/assets/images/designer/network_aws2019/mg/AWS-Config.svg");
AWS2019Render("aws2019_mg7", "aws2019_mg", "License-Manager", "/assets/images/designer/network_aws2019/mg/AWS-License-Manager.svg");
AWS2019Render("aws2019_mg8", "aws2019_mg", "Managed-Services", "/assets/images/designer/network_aws2019/mg/AWS-Managed-Services.svg");
AWS2019Render("aws2019_mg9", "aws2019_mg", "Management-Console", "/assets/images/designer/network_aws2019/mg/AWS-Management-Console.svg");
AWS2019Render("aws2019_mg10", "aws2019_mg", "OpsWorks", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks.svg");

AWS2019Render("aws2019_mg11", "aws2019_mg", "Health-Dashboard", "/assets/images/designer/network_aws2019/mg/AWS-Personal-Health-Dashboard.svg");
AWS2019Render("aws2019_mg12", "aws2019_mg", "Service-Catalog", "/assets/images/designer/network_aws2019/mg/AWS-Service-Catalog.svg");
AWS2019Render("aws2019_mg13", "aws2019_mg", "Systems-Manager", "/assets/images/designer/network_aws2019/mg/AWS-Systems-Manager.svg");
AWS2019Render("aws2019_mg14", "aws2019_mg", "Trusted-Advisor", "/assets/images/designer/network_aws2019/mg/AWS-Trusted-Advisor.svg");
AWS2019Render("aws2019_mg15", "aws2019_mg", "Well-Architected-Tool", "/assets/images/designer/network_aws2019/mg/AWS-Well-Architected-Tool.svg");
AWS2019Render("aws2019_mg16", "aws2019_mg", "Control-Tower", "/assets/images/designer/network_aws2019/mg/AWS-Control-Tower.svg");
AWS2019Render("aws2019_mg17", "aws2019_mg", "Management-and-Governance", "/assets/images/designer/network_aws2019/mg/Management-and-Governance.svg");
AWS2019Render("aws2019_mg18", "aws2019_mg", "Alarm", "/assets/images/designer/network_aws2019/mg/CloudWatch_Alarm_light-bg.svg", 56, 56);
AWS2019Render("aws2019_mg19", "aws2019_mg", "Event(Event-Based)", "/assets/images/designer/network_aws2019/mg/CloudWatch_Event-Event-Based.svg", 56, 56);
AWS2019Render("aws2019_mg20", "aws2019_mg", "Event(Time-Based)", "/assets/images/designer/network_aws2019/mg/CloudWatch_Event-Time-Based.svg", 56, 56);

AWS2019Render("aws2019_mg21", "aws2019_mg", "Rule", "/assets/images/designer/network_aws2019/mg/CloudWatch_Rule.svg", 56, 56);
AWS2019Render("aws2019_mg22", "aws2019_mg", "Change-Set", "/assets/images/designer/network_aws2019/mg/AWS-CloudFormation_Change-Set.svg", 56, 56);
AWS2019Render("aws2019_mg23", "aws2019_mg", "Stack", "/assets/images/designer/network_aws2019/mg/AWS-CloudFormation_Stack.svg", 56, 56);
AWS2019Render("aws2019_mg24", "aws2019_mg", "Template", "/assets/images/designer/network_aws2019/mg/AWS-CloudFormation_Template.svg", 56, 56);
AWS2019Render("aws2019_mg25", "aws2019_mg", "Apps", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks_Apps.svg", 56, 56);
AWS2019Render("aws2019_mg26", "aws2019_mg", "Deployments", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks_Deployments.svg", 56, 56);
AWS2019Render("aws2019_mg27", "aws2019_mg", "Instances", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks_Instances.svg", 56, 56);
AWS2019Render("aws2019_mg28", "aws2019_mg", "Layers", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks_Layers.svg", 56, 56);
AWS2019Render("aws2019_mg29", "aws2019_mg", "Monitoring", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks_Monitoring.svg", 56, 56);
AWS2019Render("aws2019_mg30", "aws2019_mg", "Permissions", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks_Permissions.svg", 56, 56);

AWS2019Render("aws2019_mg31", "aws2019_mg", "Resources", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks_Resources.svg", 56, 56);
AWS2019Render("aws2019_mg32", "aws2019_mg", "Stack2", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks_Stack2.svg", 56, 56);
AWS2019Render("aws2019_mg33", "aws2019_mg", "Account", "/assets/images/designer/network_aws2019/mg/AWS-Organizations_Account.svg", 56, 56);
AWS2019Render("aws2019_mg34", "aws2019_mg", "Organizational-unit", "/assets/images/designer/network_aws2019/mg/AWS-Organizations_Organizational-unit.svg", 56, 56);
AWS2019Render("aws2019_mg35", "aws2019_mg", "Automation", "/assets/images/designer/network_aws2019/mg/AWS-Systems-Manager_Automation.svg", 56, 56);
AWS2019Render("aws2019_mg36", "aws2019_mg", "Documents", "/assets/images/designer/network_aws2019/mg/AWS-Systems-Manager_Documents.svg", 56, 56);
AWS2019Render("aws2019_mg37", "aws2019_mg", "Inventory", "/assets/images/designer/network_aws2019/mg/AWS-Systems-Manager_Inventory.svg", 56, 56);
AWS2019Render("aws2019_mg38", "aws2019_mg", "Maintenance-Windows", "/assets/images/designer/network_aws2019/mg/AWS-Systems-Manager_Maintenance-Windows.svg", 56, 56);
AWS2019Render("aws2019_mg39", "aws2019_mg", "Parameter-Store", "/assets/images/designer/network_aws2019/mg/AWS-Systems-Manager_Parameter-Store.svg", 56, 56);
AWS2019Render("aws2019_mg40", "aws2019_mg", "Patch-Manager", "/assets/images/designer/network_aws2019/mg/AWS-Systems-Manager_Patch-Manager.svg", 56, 56);

AWS2019Render("aws2019_mg41", "aws2019_mg", "Run-Command", "/assets/images/designer/network_aws2019/mg/AWS-Systems-Manager_Run-Command.svg", 56, 56);
AWS2019Render("aws2019_mg42", "aws2019_mg", "State-Manager", "/assets/images/designer/network_aws2019/mg/AWS-Systems-Manager_State-Manager.svg", 56, 56);
AWS2019Render("aws2019_mg43", "aws2019_mg", "Checklist", "/assets/images/designer/network_aws2019/mg/AWS-Trusted-Advisor_Checklist.svg", 56, 56);
AWS2019Render("aws2019_mg44", "aws2019_mg", "Checklist-Cost", "/assets/images/designer/network_aws2019/mg/AWS-Trusted-Advisor_Checklist-Cost.svg", 56, 56);
AWS2019Render("aws2019_mg45", "aws2019_mg", "Checklist-Fault-Tolerant", "/assets/images/designer/network_aws2019/mg/AWS-Trusted-Advisor_Checklist-Fault-Tolerant.svg", 56, 56);
AWS2019Render("aws2019_mg46", "aws2019_mg", "Checklist-Performance", "/assets/images/designer/network_aws2019/mg/AWS-Trusted-Advisor_Checklist-Performance.svg", 56, 56);
AWS2019Render("aws2019_mg47", "aws2019_mg", "Checklist-Security", "/assets/images/designer/network_aws2019/mg/AWS-Trusted-Advisor_Checklist-Security.svg", 56, 56);
AWS2019Render("aws2019_mg48", "aws2019_mg", "OpsCenter", "/assets/images/designer/network_aws2019/mg/Systems-Manager_OpsCenter.svg", 56, 56);

//AWS2019Render("aws2019_mg31", "aws2019_mg", "Resources", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks_Resources.svg");
//AWS2019Render("aws2019_mg32", "aws2019_mg", "Stack", "/assets/images/designer/network_aws2019/mg/AWS-OpsWorks_Stack2.svg");
//AWS2019Render("aws2019_mg33", "aws2019_mg", "Organizations-Account", "/assets/images/designer/network_aws2019/mg/AWS-Organizations_Account.svg");
//AWS2019Render("aws2019_mg34", "aws2019_mg", "Organizational-unit", "/assets/images/designer/network_aws2019/mg/AWS-Organizations_Organizational-unit.svg");
//AWS2019Render("aws2019_mg35", "aws2019_mg", "CodeDeploy", "/assets/images/designer/network_aws2019/mg/AWS-CodeDeploy.svg");
//AWS2019Render("aws2019_mg36", "aws2019_mg", "CodePipeline", "/assets/images/designer/network_aws2019/mg/AWS-CodePipeline.svg");
//AWS2019Render("aws2019_mg37", "aws2019_mg", "CodeStar", "/assets/images/designer/network_aws2019/mg/AWS-CodeStar.svg");
//AWS2019Render("aws2019_mg38", "aws2019_mg", "Command-Line-Interface", "/assets/images/designer/network_aws2019/mg/AWS-Command-Line-Interface.svg");
//AWS2019Render("aws2019_mg39", "aws2019_mg", "Tools-And-SDKs", "/assets/images/designer/network_aws2019/mg/AWS-Tools-And-SDKs.svg");
//AWS2019Render("aws2019_mg40", "aws2019_mg", "X-Ray", "/assets/images/designer/network_aws2019/mg/AWS-X-Ray.svg");
//
//AWS2019Render("aws2019_mg1", "aws2019_mg", "Developer-Tools", "/assets/images/designer/network_aws2019/mg/Developer-Tools.svg");
//AWS2019Render("aws2019_mg2", "aws2019_mg", "Cloud9", "/assets/images/designer/network_aws2019/mg/AWS-Cloud9.svg");
//AWS2019Render("aws2019_mg3", "aws2019_mg", "CodeBuild", "/assets/images/designer/network_aws2019/mg/AWS-CodeBuild.svg");
//AWS2019Render("aws2019_mg4", "aws2019_mg", "CodeCommit", "/assets/images/designer/network_aws2019/mg/AWS-CodeCommit.svg");
//AWS2019Render("aws2019_mg5", "aws2019_mg", "CodeDeploy", "/assets/images/designer/network_aws2019/mg/AWS-CodeDeploy.svg");
//AWS2019Render("aws2019_mg6", "aws2019_mg", "CodePipeline", "/assets/images/designer/network_aws2019/mg/AWS-CodePipeline.svg");
//AWS2019Render("aws2019_mg7", "aws2019_mg", "CodeStar", "/assets/images/designer/network_aws2019/mg/AWS-CodeStar.svg");
//AWS2019Render("aws2019_mg8", "aws2019_mg", "Command-Line-Interface", "/assets/images/designer/network_aws2019/mg/AWS-Command-Line-Interface.svg");
//AWS2019Render("aws2019_mg9", "aws2019_mg", "Tools-And-SDKs", "/assets/images/designer/network_aws2019/mg/AWS-Tools-And-SDKs.svg");
//AWS2019Render("aws2019_mg10", "aws2019_mg", "X-Ray", "/assets/images/designer/network_aws2019/mg/AWS-X-Ray.svg");

Schema.addCategory({
	name: "aws2019_sic",
	text: "Security Identity& Compliance",
	dataAttributes: []
});
AWS2019Render("aws2019_sic1", "aws2019_sic", "Directory", "/assets/images/designer/network_aws2019/sic/Amazon-Cloud-Directory.svg");
AWS2019Render("aws2019_sic2", "aws2019_sic", "Cognito", "/assets/images/designer/network_aws2019/sic/Amazon-Cognito.svg");
AWS2019Render("aws2019_sic3", "aws2019_sic", "GuardDuty", "/assets/images/designer/network_aws2019/sic/Amazon-GuardDuty.svg");
AWS2019Render("aws2019_sic4", "aws2019_sic", "Inspector", "/assets/images/designer/network_aws2019/sic/Amazon-Inspector.svg");
AWS2019Render("aws2019_sic5", "aws2019_sic", "Macie", "/assets/images/designer/network_aws2019/sic/Amazon-Macie.svg");
AWS2019Render("aws2019_sic6", "aws2019_sic", "Artifact", "/assets/images/designer/network_aws2019/sic/AWS-Artifact.svg");
AWS2019Render("aws2019_sic7", "aws2019_sic", "Certificate-Manager", "/assets/images/designer/network_aws2019/sic/AWS-Certificate-Manager.svg");
AWS2019Render("aws2019_sic8", "aws2019_sic", "CloudHSM", "/assets/images/designer/network_aws2019/sic/AWS-CloudHSM.svg");
AWS2019Render("aws2019_sic9", "aws2019_sic", "Directory-Service", "/assets/images/designer/network_aws2019/sic/AWS-Directory-Service.svg");
AWS2019Render("aws2019_sic10", "aws2019_sic", "Firewall-Manager", "/assets/images/designer/network_aws2019/sic/AWS-Firewall-Manager.svg");

AWS2019Render("aws2019_sic11", "aws2019_sic", "Management_IAM", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management_IAM.svg");
AWS2019Render("aws2019_sic12", "aws2019_sic", "Management-Service", "/assets/images/designer/network_aws2019/sic/AWS-Key-Management-Service.svg");
AWS2019Render("aws2019_sic13", "aws2019_sic", "Access-Manager", "/assets/images/designer/network_aws2019/sic/AWS-Resource-Access-Manager.svg");
AWS2019Render("aws2019_sic14", "aws2019_sic", "Secrets-Manager", "/assets/images/designer/network_aws2019/sic/AWS-Secrets-Manager.svg");
AWS2019Render("aws2019_sic15", "aws2019_sic", "Security-Hub", "/assets/images/designer/network_aws2019/sic/AWS-Security-Hub.svg");
AWS2019Render("aws2019_sic16", "aws2019_sic", "Shield", "/assets/images/designer/network_aws2019/sic/AWS-Shield.svg");
AWS2019Render("aws2019_sic17", "aws2019_sic", "Single-Sign-On", "/assets/images/designer/network_aws2019/sic/AWS-Single-Sign-On.svg");
AWS2019Render("aws2019_sic18", "aws2019_sic", "WAF", "/assets/images/designer/network_aws2019/sic/AWS-WAF.svg");
AWS2019Render("aws2019_sic19", "aws2019_sic", "Security-Identity-and-Compliance", "/assets/images/designer/network_aws2019/sic/Security-Identity-and-Compliance.svg");
AWS2019Render("aws2019_sic20", "aws2019_sic", "AD-Connector", "/assets/images/designer/network_aws2019/sic/AD-Connector.svg", 56, 56);

AWS2019Render("aws2019_sic21", "aws2019_sic", "Agent", "/assets/images/designer/network_aws2019/sic/Amazon-Inspector_Agent.svg", 56, 56);
AWS2019Render("aws2019_sic22", "aws2019_sic", "Authority", "/assets/images/designer/network_aws2019/sic/AWS-Certificate-Authority.svg", 56, 56);
AWS2019Render("aws2019_sic23", "aws2019_sic", "Add-on", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management-IAM_Add-on.svg", 56, 56);
AWS2019Render("aws2019_sic24", "aws2019_sic", "AWS-STS", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management-IAM_AWS-STS.svg", 56, 56);
AWS2019Render("aws2019_sic25", "aws2019_sic", "AWS-STS-Alternate", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management-IAM_AWS-STS-Alternate.svg", 56, 56);
AWS2019Render("aws2019_sic26", "aws2019_sic", "Data-Encryption-Key", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management-IAM_Data-Encryption-Key.svg", 56, 56);
AWS2019Render("aws2019_sic27", "aws2019_sic", "Encrypted-Data", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management-IAM_Encrypted-Data.svg", 56, 56);
AWS2019Render("aws2019_sic28", "aws2019_sic", "Long-term-Security-Credential", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management-IAM_Long-term-Security-Credential.svg", 56, 56);
AWS2019Render("aws2019_sic29", "aws2019_sic", "MFA-Token", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management-IAM_MFA-Token.svg", 56, 56);
AWS2019Render("aws2019_sic30", "aws2019_sic", "Permissions", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management-IAM_Permissions.svg", 56, 56);

AWS2019Render("aws2019_sic31", "aws2019_sic", "Role", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management-IAM_Role.svg", 56, 56);
AWS2019Render("aws2019_sic32", "aws2019_sic", "Temporary-Security-Credential", "/assets/images/designer/network_aws2019/sic/AWS-Identity-and-Access-Management-IAM_Temporary-Security-Credential.svg", 56, 56);
AWS2019Render("aws2019_sic33", "aws2019_sic", "Managed-Microsoft-AD", "/assets/images/designer/network_aws2019/sic/AWS-Managed-Microsoft-AD.svg", 56, 56);
AWS2019Render("aws2019_sic34", "aws2019_sic", "Shield-Advanced", "/assets/images/designer/network_aws2019/sic/AWS-Shield_Shield-Advanced.svg", 56, 56);
AWS2019Render("aws2019_sic35", "aws2019_sic", "Filtering-rule", "/assets/images/designer/network_aws2019/sic/AWS-WAF_Filtering-rule.svg", 56, 56);
AWS2019Render("aws2019_sic36", "aws2019_sic", "Simple-AD", "/assets/images/designer/network_aws2019/sic/Simple-AD.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_analytics",
	text: "Analytics",
	dataAttributes: []
});
AWS2019Render("aws2019_analytics1", "aws2019_analytics", "Athena", "/assets/images/designer/network_aws2019/analytics/Amazon-Athena.svg");
AWS2019Render("aws2019_analytics2", "aws2019_analytics", "CloudSearch", "/assets/images/designer/network_aws2019/analytics/Amazon-CloudSearch.svg");
AWS2019Render("aws2019_analytics3", "aws2019_analytics", "Elasticsearch-Service", "/assets/images/designer/network_aws2019/analytics/Amazon-Elasticsearch-Service.svg");
AWS2019Render("aws2019_analytics4", "aws2019_analytics", "EMR", "/assets/images/designer/network_aws2019/analytics/Amazon-EMR.svg");
AWS2019Render("aws2019_analytics5", "aws2019_analytics", "Kinesis", "/assets/images/designer/network_aws2019/analytics/Amazon-Kinesis.svg");
AWS2019Render("aws2019_analytics6", "aws2019_analytics", "Analytics", "/assets/images/designer/network_aws2019/analytics/Amazon-Kinesis-Data-Analytics.svg");
AWS2019Render("aws2019_analytics7", "aws2019_analytics", "Firehose", "/assets/images/designer/network_aws2019/analytics/Amazon-Kinesis-Data-Firehose.svg");
AWS2019Render("aws2019_analytics8", "aws2019_analytics", "Data-Streams", "/assets/images/designer/network_aws2019/analytics/Amazon-Kinesis-Data-Streams.svg");
AWS2019Render("aws2019_analytics9", "aws2019_analytics", "Video-Streams", "/assets/images/designer/network_aws2019/analytics/Amazon-Kinesis-Video-Streams.svg");
AWS2019Render("aws2019_analytics10", "aws2019_analytics", "Quicksight", "/assets/images/designer/network_aws2019/analytics/Amazon-Quicksight.svg");

AWS2019Render("aws2019_analytics11", "aws2019_analytics", "Redshift", "/assets/images/designer/network_aws2019/analytics/Amazon-Redshift.svg");
AWS2019Render("aws2019_analytics12", "aws2019_analytics", "Analytics", "/assets/images/designer/network_aws2019/analytics/Analytics.svg");
AWS2019Render("aws2019_analytics13", "aws2019_analytics", "Data-Pipeline", "/assets/images/designer/network_aws2019/analytics/AWS-Data-Pipeline.svg");
AWS2019Render("aws2019_analytics14", "aws2019_analytics", "Streaming-for-Kafka", "/assets/images/designer/network_aws2019/analytics/Amazon-Managed-Streaming-for-Kafka.svg");
AWS2019Render("aws2019_analytics15", "aws2019_analytics", "Glue", "/assets/images/designer/network_aws2019/analytics/AWS-Glue.svg");
AWS2019Render("aws2019_analytics16", "aws2019_analytics", "Formation", "/assets/images/designer/network_aws2019/analytics/AWS-Lake-Formation.svg");
AWS2019Render("aws2019_analytics17", "aws2019_analytics", "Search-documents", "/assets/images/designer/network_aws2019/analytics/Amazon-CloudSearch_Search-documents.svg", 56, 56);
AWS2019Render("aws2019_analytics18", "aws2019_analytics", "Cluster", "/assets/images/designer/network_aws2019/analytics/Amazon-EMR_Cluster.svg", 56, 56);
AWS2019Render("aws2019_analytics19", "aws2019_analytics", "Resource-icon", "/assets/images/designer/network_aws2019/analytics/AWS-Data-lake_Resource-icon.svg", 56, 56);
AWS2019Render("aws2019_analytics20", "aws2019_analytics", "EMR-engine", "/assets/images/designer/network_aws2019/analytics/Amazon-EMR_EMR-engine.svg", 56, 56);

AWS2019Render("aws2019_analytics21", "aws2019_analytics", "EMR-engine-MapR-M3", "/assets/images/designer/network_aws2019/analytics/Amazon-EMR_EMR-engine-MapR-M3.svg", 56, 56);
AWS2019Render("aws2019_analytics22", "aws2019_analytics", "EMR-engine-MapR-M5", "/assets/images/designer/network_aws2019/analytics/Amazon-EMR_EMR-engine-MapR-M5.svg", 56, 56);
AWS2019Render("aws2019_analytics23", "aws2019_analytics", "EMR-engine-MapR-M7", "/assets/images/designer/network_aws2019/analytics/Amazon-EMR_EMR-engine-MapR-M7.svg", 56, 56);
AWS2019Render("aws2019_analytics24", "aws2019_analytics", "HDFS-cluster", "/assets/images/designer/network_aws2019/analytics/Amazon-EMR_HDFS-cluster.svg", 56, 56);
AWS2019Render("aws2019_analytics25", "aws2019_analytics", "Dense-compute-node", "/assets/images/designer/network_aws2019/analytics/Amazon-Redshift_Dense-compute-node.svg", 56, 56);
AWS2019Render("aws2019_analytics26", "aws2019_analytics", "Dense-storage-node", "/assets/images/designer/network_aws2019/analytics/Amazon-Redshift_Dense-storage-node.svg", 56, 56);
AWS2019Render("aws2019_analytics27", "aws2019_analytics", "Crawlers", "/assets/images/designer/network_aws2019/analytics/AWS-Glue_Crawlers.svg", 56, 56);
AWS2019Render("aws2019_analytics28", "aws2019_analytics", "Data-catalog", "/assets/images/designer/network_aws2019/analytics/AWS-Glue_Data-catalog.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_ml",
	text: "Machine Learning",
	dataAttributes: []
});
AWS2019Render("aws2019_ml1", "aws2019_ml", "Comprehend", "/assets/images/designer/network_aws2019/ml/Amazon-Comprehend.svg");
AWS2019Render("aws2019_ml2", "aws2019_ml", "Elastic-Inference", "/assets/images/designer/network_aws2019/ml/Amazon-Elastic-Inference.svg");
AWS2019Render("aws2019_ml3", "aws2019_ml", "Forecast", "/assets/images/designer/network_aws2019/ml/Amazon-Forecast.svg");
AWS2019Render("aws2019_ml4", "aws2019_ml", "Lex", "/assets/images/designer/network_aws2019/ml/Amazon-Lex.svg");
AWS2019Render("aws2019_ml5", "aws2019_ml", "Personalize", "/assets/images/designer/network_aws2019/ml/Amazon-Personalize.svg");
AWS2019Render("aws2019_ml6", "aws2019_ml", "Polly", "/assets/images/designer/network_aws2019/ml/Amazon-Polly.svg");
AWS2019Render("aws2019_ml7", "aws2019_ml", "Rekognition", "/assets/images/designer/network_aws2019/ml/Amazon-Rekognition.svg");
AWS2019Render("aws2019_ml8", "aws2019_ml", "SageMaker", "/assets/images/designer/network_aws2019/ml/Amazon-SageMaker.svg");
AWS2019Render("aws2019_ml9", "aws2019_ml", "Ground-Truth", "/assets/images/designer/network_aws2019/ml/Amazon-SageMaker-Ground-Truth.svg");
AWS2019Render("aws2019_ml10", "aws2019_ml", "Textract", "/assets/images/designer/network_aws2019/ml/Amazon-Textract.svg");

AWS2019Render("aws2019_ml11", "aws2019_ml", "Transcribe", "/assets/images/designer/network_aws2019/ml/Amazon-Transcribe.svg");
AWS2019Render("aws2019_ml12", "aws2019_ml", "Translate", "/assets/images/designer/network_aws2019/ml/Amazon-Translate.svg");
AWS2019Render("aws2019_ml13", "aws2019_ml", "MXNet-on-AWS", "/assets/images/designer/network_aws2019/ml/Apache-MXNet-on-AWS.svg");
AWS2019Render("aws2019_ml14", "aws2019_ml", "Deep-Learning-AMIs", "/assets/images/designer/network_aws2019/ml/AWS-Deep-Learning-AMIs.svg");
AWS2019Render("aws2019_ml15", "aws2019_ml", "DeepLens", "/assets/images/designer/network_aws2019/ml/AWS-DeepLens.svg");
AWS2019Render("aws2019_ml16", "aws2019_ml", "DeepRacer", "/assets/images/designer/network_aws2019/ml/AWS-DeepRacer.svg");
AWS2019Render("aws2019_ml17", "aws2019_ml", "Learning", "/assets/images/designer/network_aws2019/ml/Machine-Learning.svg");
AWS2019Render("aws2019_ml18", "aws2019_ml", "TensorFlow-on-AWS", "/assets/images/designer/network_aws2019/ml/TensorFlow-on-AWS.svg");
AWS2019Render("aws2019_ml19", "aws2019_ml", "Containers", "/assets/images/designer/network_aws2019/ml/AWS-Deep-Learning-Containers.svg");
AWS2019Render("aws2019_ml20", "aws2019_ml", "Rekognition_Image", "/assets/images/designer/network_aws2019/ml/Amazon-Rekognition_Image.svg", 56, 56);

AWS2019Render("aws2019_ml21", "aws2019_ml", "Video", "/assets/images/designer/network_aws2019/ml/Amazon-Rekognition_Video.svg", 56, 56);
AWS2019Render("aws2019_ml22", "aws2019_ml", "Model", "/assets/images/designer/network_aws2019/ml/Amazon-SageMaker_Model.svg", 56, 56);
AWS2019Render("aws2019_ml23", "aws2019_ml", "Notebook", "/assets/images/designer/network_aws2019/ml/Amazon-SageMaker_Notebook.svg", 56, 56);
AWS2019Render("aws2019_ml24", "aws2019_ml", "Train", "/assets/images/designer/network_aws2019/ml/Amazon-SageMaker_Train.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_robotics",
	text: "Robotics",
	dataAttributes: []
});
AWS2019Render("aws2019_robotics1", "aws2019_robotics", "Robotics", "/assets/images/designer/network_aws2019/robotics/Robotics.svg");
AWS2019Render("aws2019_robotics2", "aws2019_robotics", "RoboMaker", "/assets/images/designer/network_aws2019/robotics/AWS-RoboMaker.svg");
AWS2019Render("aws2019_robotics3", "aws2019_robotics", "Simulation", "/assets/images/designer/network_aws2019/robotics/AWS-RoboMaker_Simulation.svg", 56, 56);
AWS2019Render("aws2019_robotics4", "aws2019_robotics", "Fleet-Management", "/assets/images/designer/network_aws2019/robotics/AWS-RoboMaker_Fleet-Management.svg", 56, 56);
AWS2019Render("aws2019_robotics5", "aws2019_robotics", "Development-Environment", "/assets/images/designer/network_aws2019/robotics/AWS-RoboMaker_Development-Environment.svg", 56, 56);
AWS2019Render("aws2019_robotics6", "aws2019_robotics", "Cloud-Extension-ROS", "/assets/images/designer/network_aws2019/robotics/AWS-RoboMaker_Cloud-Extension-ROS.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_mobile",
	text: "Mobile",
	dataAttributes: []
});
AWS2019Render("aws2019_mobile1", "aws2019_mobile", "Gateway", "/assets/images/designer/network_aws2019/mobile/Amazon-API-Gateway.svg");
AWS2019Render("aws2019_mobile2", "aws2019_mobile", "Pinpoint", "/assets/images/designer/network_aws2019/mobile/Amazon-Pinpoint.svg");
AWS2019Render("aws2019_mobile3", "aws2019_mobile", "Amplify", "/assets/images/designer/network_aws2019/mobile/AWS-Amplify.svg");
AWS2019Render("aws2019_mobile4", "aws2019_mobile", "AppSync", "/assets/images/designer/network_aws2019/mobile/AWS-AppSync.svg");
AWS2019Render("aws2019_mobile5", "aws2019_mobile", "Device-Farm", "/assets/images/designer/network_aws2019/mobile/AWS-Device-Farm.svg");
AWS2019Render("aws2019_mobile6", "aws2019_mobile", "Mobile", "/assets/images/designer/network_aws2019/mobile/Mobile.svg");
AWS2019Render("aws2019_mobile7", "aws2019_mobile", "Endpoint", "/assets/images/designer/network_aws2019/mobile/Amazon-API-Gateway_Endpoint.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_ai",
	text: "Application Integration",
	dataAttributes: []
});
AWS2019Render("aws2019_ai1", "aws2019_ai", "MQ", "/assets/images/designer/network_aws2019/ai/Amazon-MQ.svg");
AWS2019Render("aws2019_ai2", "aws2019_ai", "Service-SNS", "/assets/images/designer/network_aws2019/ai/Amazon-Simple-Notification-Service-SNS.svg");
AWS2019Render("aws2019_ai3", "aws2019_ai", "Service-SQS", "/assets/images/designer/network_aws2019/ai/Amazon-Simple-Queue-Service-SQS.svg");
AWS2019Render("aws2019_ai4", "aws2019_ai", "Integration", "/assets/images/designer/network_aws2019/ai/Application-Integration.svg");
AWS2019Render("aws2019_ai5", "aws2019_ai", "AppSync", "/assets/images/designer/network_aws2019/ai/Amazon-AppSync.svg");
AWS2019Render("aws2019_ai6", "aws2019_ai", "EventBridge", "/assets/images/designer/network_aws2019/ai/Amazon-EventBridge.svg");
AWS2019Render("aws2019_ai7", "aws2019_ai", "Step-Functions", "/assets/images/designer/network_aws2019/ai/AWS-Step-Functions.svg");
AWS2019Render("aws2019_ai8", "aws2019_ai", "Email-Notification", "/assets/images/designer/network_aws2019/ai/Amazon-Simple-Notification-Service-SNS_Email-Notification.svg", 56, 56);
AWS2019Render("aws2019_ai9", "aws2019_ai", "HTTP-Notification", "/assets/images/designer/network_aws2019/ai/Amazon-Simple-Notification-Service-SNS_HTTP-Notification.svg", 56, 56);
AWS2019Render("aws2019_ai10", "aws2019_ai", "Topic", "/assets/images/designer/network_aws2019/ai/Amazon-Simple-Notification-Service-SNS_Topic.svg", 56, 56);

AWS2019Render("aws2019_ai11", "aws2019_ai", "Message", "/assets/images/designer/network_aws2019/ai/Amazon-Simple-Queue-Service-SQS_Message.svg", 56, 56);
AWS2019Render("aws2019_ai12", "aws2019_ai", "Queue", "/assets/images/designer/network_aws2019/ai/Amazon-Simple-Queue-Service-SQS_Queue.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_ms",
	text: "Media Services",
	dataAttributes: []
});
AWS2019Render("aws2019_ms1", "aws2019_ms", "Elastic-Transcoder", "/assets/images/designer/network_aws2019/ms/Amazon-Elastic-Transcoder.svg");
AWS2019Render("aws2019_ms2", "aws2019_ms", "Video-Streams", "/assets/images/designer/network_aws2019/ms/Amazon-Kinesis-Video-Streams.svg");
AWS2019Render("aws2019_ms3", "aws2019_ms", "MediaConnect", "/assets/images/designer/network_aws2019/ms/AWS-Elemental-MediaConnect.svg");
AWS2019Render("aws2019_ms4", "aws2019_ms", "MediaConvert", "/assets/images/designer/network_aws2019/ms/AWS-Elemental-MediaConvert.svg");
AWS2019Render("aws2019_ms5", "aws2019_ms", "MediaLive", "/assets/images/designer/network_aws2019/ms/AWS-Elemental-MediaLive.svg");
AWS2019Render("aws2019_ms6", "aws2019_ms", "MediaPackage", "/assets/images/designer/network_aws2019/ms/AWS-Elemental-MediaPackage.svg");
AWS2019Render("aws2019_ms7", "aws2019_ms", "MediaStore", "/assets/images/designer/network_aws2019/ms/AWS-Elemental-MediaStore.svg");
AWS2019Render("aws2019_ms8", "aws2019_ms", "MediaTailor", "/assets/images/designer/network_aws2019/ms/AWS-Elemental-MediaTailor.svg");
AWS2019Render("aws2019_ms9", "aws2019_ms", "Elemental-Conductor", "/assets/images/designer/network_aws2019/ms/AWS-Elemental-Conductor.svg");
AWS2019Render("aws2019_ms10", "aws2019_ms", "Media-Services", "/assets/images/designer/network_aws2019/ms/Media-Services.svg");

Schema.addCategory({
	name: "aws2019_ba",
	text: "Business Applications",
	dataAttributes: []
});
AWS2019Render("aws2019_ba1", "aws2019_ba", "Business", "/assets/images/designer/network_aws2019/ba/Alexa-For-Business.svg");
AWS2019Render("aws2019_ba2", "aws2019_ba", "Chime", "/assets/images/designer/network_aws2019/ba/Amazon-Chime.svg");
AWS2019Render("aws2019_ba3", "aws2019_ba", "WorkMail", "/assets/images/designer/network_aws2019/ba/Amazon-WorkMail.svg");
AWS2019Render("aws2019_ba4", "aws2019_ba", "Applications", "/assets/images/designer/network_aws2019/ba/Business-Applications.svg");

Schema.addCategory({
	name: "aws2019_euc",
	text: "End User Computing",
	dataAttributes: []
});
AWS2019Render("aws2019_euc1", "aws2019_euc", "Appstream-2.0", "/assets/images/designer/network_aws2019/euc/Amazon-Appstream-2.0.svg");
AWS2019Render("aws2019_euc2", "aws2019_euc", "Workspaces", "/assets/images/designer/network_aws2019/euc/Amazon-Workspaces.svg");
AWS2019Render("aws2019_euc3", "aws2019_euc", "WorkLink", "/assets/images/designer/network_aws2019/euc/Amazon-WorkLink.svg");
AWS2019Render("aws2019_euc4", "aws2019_euc", "WorkDocs", "/assets/images/designer/network_aws2019/euc/Amazon-WorkDocs.svg");
AWS2019Render("aws2019_euc5", "aws2019_euc", "User-Computing", "/assets/images/designer/network_aws2019/euc/End-User-Computing.svg");

Schema.addCategory({
	name: "aws2019_iot",
	text: "Internet of Things",
	dataAttributes: []
});
AWS2019Render("aws2019_iot1", "aws2019_iot", "FreeRTOS", "/assets/images/designer/network_aws2019/iot/Amazon-FreeRTOS.svg");
AWS2019Render("aws2019_iot2", "aws2019_iot", "1-Click", "/assets/images/designer/network_aws2019/iot/AWS-IoT-1-Click.svg");
AWS2019Render("aws2019_iot3", "aws2019_iot", "Analytics", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Analytics.svg");
AWS2019Render("aws2019_iot4", "aws2019_iot", "Button", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Button.svg");
AWS2019Render("aws2019_iot5", "aws2019_iot", "Core", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Core.svg");
AWS2019Render("aws2019_iot6", "aws2019_iot", "Device-Defender", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Device-Defender.svg");
AWS2019Render("aws2019_iot7", "aws2019_iot", "Device-Management", "/assets/images/designer/network_aws2019/iot/AWS-Iot-device-Management.svg");
AWS2019Render("aws2019_iot8", "aws2019_iot", "Events", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Events.svg");
AWS2019Render("aws2019_iot9", "aws2019_iot", "Greengrass", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Greengrass.svg");
AWS2019Render("aws2019_iot10", "aws2019_iot", "SiteWise", "/assets/images/designer/network_aws2019/iot/AWS-IoT-SiteWise.svg");

AWS2019Render("aws2019_iot11", "aws2019_iot", "Things-Graph", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Things-Graph.svg");
AWS2019Render("aws2019_iot12", "aws2019_iot", "Internet-of-Things", "/assets/images/designer/network_aws2019/iot/Internet-of-Things.svg");
AWS2019Render("aws2019_iot13", "aws2019_iot", "Channel", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Analytics_Channel.svg", 56, 56);
AWS2019Render("aws2019_iot14", "aws2019_iot", "Data-Set", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Analytics_Data-Set.svg", 56, 56);
AWS2019Render("aws2019_iot15", "aws2019_iot", "Data-Store", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Analytics_Data-Store.svg", 56, 56);
AWS2019Render("aws2019_iot16", "aws2019_iot", "Pipeline", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Analytics_Pipeline.svg", 56, 56);
AWS2019Render("aws2019_iot17", "aws2019_iot", "Notebook", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Analytics_Notebook.svg", 56, 56);
AWS2019Render("aws2019_iot18", "aws2019_iot", "Connector", "/assets/images/designer/network_aws2019/iot/AWS-IoT-Greengrass_Connector.svg", 56, 56);
AWS2019Render("aws2019_iot19", "aws2019_iot", "Action", "/assets/images/designer/network_aws2019/iot/IoT_Action.svg", 56, 56);
AWS2019Render("aws2019_iot20", "aws2019_iot", "Actuator", "/assets/images/designer/network_aws2019/iot/IoT_Actuator.svg", 56, 56);

AWS2019Render("aws2019_iot21", "aws2019_iot", "Alexa-enabled-device", "/assets/images/designer/network_aws2019/iot/IoT_Alexa-enabled-device.svg", 56, 56);
AWS2019Render("aws2019_iot22", "aws2019_iot", "Alexa-skill", "/assets/images/designer/network_aws2019/iot/IoT_Alexa-skill.svg", 56, 56);
AWS2019Render("aws2019_iot23", "aws2019_iot", "Alexa-voice-service", "/assets/images/designer/network_aws2019/iot/IoT_Alexa-voice-service.svg", 56, 56);
AWS2019Render("aws2019_iot24", "aws2019_iot", "Bank", "/assets/images/designer/network_aws2019/iot/IoT_Bank.svg", 56, 56);
AWS2019Render("aws2019_iot25", "aws2019_iot", "Bicycle", "/assets/images/designer/network_aws2019/iot/IoT_Bicycle.svg", 56, 56);
AWS2019Render("aws2019_iot26", "aws2019_iot", "Camera", "/assets/images/designer/network_aws2019/iot/IoT_Camera.svg", 56, 56);
AWS2019Render("aws2019_iot27", "aws2019_iot", "Car", "/assets/images/designer/network_aws2019/iot/IoT_Car.svg", 56, 56);
AWS2019Render("aws2019_iot28", "aws2019_iot", "Cart", "/assets/images/designer/network_aws2019/iot/IoT_Cart.svg", 56, 56);
AWS2019Render("aws2019_iot29", "aws2019_iot", "Certificate-manager", "/assets/images/designer/network_aws2019/iot/IoT_Certificate-manager.svg", 56, 56);
AWS2019Render("aws2019_iot30", "aws2019_iot", "Coffee-pot", "/assets/images/designer/network_aws2019/iot/IoT_Coffee-pot.svg", 56, 56);

AWS2019Render("aws2019_iot31", "aws2019_iot", "Desired-state", "/assets/images/designer/network_aws2019/iot/IoT_Desired-state.svg", 56, 56);
AWS2019Render("aws2019_iot32", "aws2019_iot", "Device-gateway", "/assets/images/designer/network_aws2019/iot/IoT_Device-gateway.svg", 56, 56);
AWS2019Render("aws2019_iot33", "aws2019_iot", "Door-lock", "/assets/images/designer/network_aws2019/iot/IoT_Door-lock.svg", 56, 56);
AWS2019Render("aws2019_iot34", "aws2019_iot", "Echo", "/assets/images/designer/network_aws2019/iot/IoT_Echo.svg", 56, 56);
AWS2019Render("aws2019_iot35", "aws2019_iot", "Factory", "/assets/images/designer/network_aws2019/iot/IoT_Factory.svg", 56, 56);
AWS2019Render("aws2019_iot36", "aws2019_iot", "Fire-TV", "/assets/images/designer/network_aws2019/iot/IoT_Fire-TV.svg", 56, 56);
AWS2019Render("aws2019_iot37", "aws2019_iot", "Generic", "/assets/images/designer/network_aws2019/iot/IoT_Generic.svg", 56, 56);
AWS2019Render("aws2019_iot38", "aws2019_iot", "Hardware-board", "/assets/images/designer/network_aws2019/iot/IoT_Hardware-board.svg", 56, 56);
AWS2019Render("aws2019_iot39", "aws2019_iot", "House", "/assets/images/designer/network_aws2019/iot/IoT_House.svg", 56, 56);
AWS2019Render("aws2019_iot40", "aws2019_iot", "HTTP-2-protocol", "/assets/images/designer/network_aws2019/iot/IoT_HTTP-2-protocol.svg", 56, 56);

AWS2019Render("aws2019_iot41", "aws2019_iot", "HTTP-protocol", "/assets/images/designer/network_aws2019/iot/IoT_HTTP-protocol.svg", 56, 56);
AWS2019Render("aws2019_iot42", "aws2019_iot", "Lambda-function", "/assets/images/designer/network_aws2019/iot/IoT_Lambda-function.svg", 56, 56);
AWS2019Render("aws2019_iot43", "aws2019_iot", "Lightbulb", "/assets/images/designer/network_aws2019/iot/IoT_Lightbulb.svg", 56, 56);
AWS2019Render("aws2019_iot44", "aws2019_iot", "Medical-emergency", "/assets/images/designer/network_aws2019/iot/IoT_Medical-emergency.svg", 56, 56);
AWS2019Render("aws2019_iot45", "aws2019_iot", "MQTT-protocol", "/assets/images/designer/network_aws2019/iot/IoT_MQTT-protocol.svg", 56, 56);
AWS2019Render("aws2019_iot46", "aws2019_iot", "Over-the-air-update", "/assets/images/designer/network_aws2019/iot/IoT_Over-the-air-update.svg", 56, 56);
AWS2019Render("aws2019_iot47", "aws2019_iot", "Police-emergency", "/assets/images/designer/network_aws2019/iot/IoT_Police-emergency.svg", 56, 56);
AWS2019Render("aws2019_iot48", "aws2019_iot", "Policy", "/assets/images/designer/network_aws2019/iot/IoT_Policy.svg", 56, 56);
AWS2019Render("aws2019_iot49", "aws2019_iot", "Reported-state", "/assets/images/designer/network_aws2019/iot/IoT_Reported-state.svg", 56, 56);
AWS2019Render("aws2019_iot50", "aws2019_iot", "Rule", "/assets/images/designer/network_aws2019/iot/IoT_Rule.svg", 56, 56);

AWS2019Render("aws2019_iot51", "aws2019_iot", "Sensor", "/assets/images/designer/network_aws2019/iot/IoT_Sensor.svg", 56, 56);
AWS2019Render("aws2019_iot52", "aws2019_iot", "Servo", "/assets/images/designer/network_aws2019/iot/IoT_Servo.svg", 56, 56);
AWS2019Render("aws2019_iot53", "aws2019_iot", "Shadow", "/assets/images/designer/network_aws2019/iot/IoT_Shadow.svg", 56, 56);
AWS2019Render("aws2019_iot54", "aws2019_iot", "Simulator", "/assets/images/designer/network_aws2019/iot/IoT_Simulator.svg", 56, 56);
AWS2019Render("aws2019_iot55", "aws2019_iot", "Thermostat", "/assets/images/designer/network_aws2019/iot/IoT_Thermostat.svg", 56, 56);
AWS2019Render("aws2019_iot56", "aws2019_iot", "Topic", "/assets/images/designer/network_aws2019/iot/IoT_Topic.svg", 56, 56);
AWS2019Render("aws2019_iot57", "aws2019_iot", "Travel", "/assets/images/designer/network_aws2019/iot/IoT_Travel.svg", 56, 56);
AWS2019Render("aws2019_iot58", "aws2019_iot", "Utility", "/assets/images/designer/network_aws2019/iot/IoT_Utility.svg", 56, 56);
AWS2019Render("aws2019_iot59", "aws2019_iot", "Windfarm", "/assets/images/designer/network_aws2019/iot/IoT_Windfarm.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_gt",
	text: "Game Tech",
	dataAttributes: []
});
AWS2019Render("aws2019_gt1", "aws2019_gt", "GameLift", "/assets/images/designer/network_aws2019/gt/Amazon-GameLift.svg");
AWS2019Render("aws2019_gt2", "aws2019_gt", "Tech", "/assets/images/designer/network_aws2019/gt/Game-Tech.svg");

Schema.addCategory({
	name: "aws2019_av",
	text: "AR & VR",
	dataAttributes: []
});
AWS2019Render("aws2019_av1", "aws2019_av", "Sumerian", "/assets/images/designer/network_aws2019/av/Amazon-Sumerian.svg");
AWS2019Render("aws2019_av2", "aws2019_av", "AR-VR", "/assets/images/designer/network_aws2019/av/AR-VR.svg");

Schema.addCategory({
	name: "aws2019_acm",
	text: "AWS Cost Management",
	dataAttributes: []
});
AWS2019Render("aws2019_acm1", "aws2019_acm", "Budgets", "/assets/images/designer/network_aws2019/acm/AWS-Budgets.svg");
AWS2019Render("aws2019_acm2", "aws2019_acm", "Cost-and-Usage-Report", "/assets/images/designer/network_aws2019/acm/AWS-Cost-and-Usage-Report.svg");
AWS2019Render("aws2019_acm3", "aws2019_acm", "Cost-Explorer", "/assets/images/designer/network_aws2019/acm/AWS-Cost-Explorer.svg");
AWS2019Render("aws2019_acm4", "aws2019_acm", "Cost-Management", "/assets/images/designer/network_aws2019/acm/AWS-Cost-Management.svg");
AWS2019Render("aws2019_acm5", "aws2019_acm", "Reserved-Instance-Reporting", "/assets/images/designer/network_aws2019/acm/Reserved-Instance-Reporting.svg");

Schema.addCategory({
	name: "aws2019_blockchain",
	text: "Blockchain",
	dataAttributes: []
});
AWS2019Render("aws2019_blockchain1", "aws2019_blockchain", "Managed-Blockchain", "/assets/images/designer/network_aws2019/blockchain/Amazon-Managed-Blockchain.svg");
AWS2019Render("aws2019_blockchain2", "aws2019_blockchain", "Quantum-Ledger-Database-QLDB", "/assets/images/designer/network_aws2019/blockchain/Amazon-Quantum-Ledger-Database-QLDB.svg");
AWS2019Render("aws2019_blockchain3", "aws2019_blockchain", "Blockchain", "/assets/images/designer/network_aws2019/blockchain/Blockchain.svg");

Schema.addCategory({
	name: "aws2019_ce",
	text: "Customer Engagement",
	dataAttributes: []
});
AWS2019Render("aws2019_ce1", "aws2019_ce", "Connect", "/assets/images/designer/network_aws2019/ce/Amazon-Connect.svg");
AWS2019Render("aws2019_ce2", "aws2019_ce", "Pinpoint", "/assets/images/designer/network_aws2019/ce/Amazon-Pinpoint.svg");
AWS2019Render("aws2019_ce3", "aws2019_ce", "Simple-Email-Service-SES", "/assets/images/designer/network_aws2019/ce/Amazon-Simple-Email-Service-SES.svg");
AWS2019Render("aws2019_ce4", "aws2019_ce", "Customer-Engagement", "/assets/images/designer/network_aws2019/ce/Customer-Engagement.svg");
AWS2019Render("aws2019_ce5", "aws2019_ce", "Simple-Email-Service-SES_Email", "/assets/images/designer/network_aws2019/ce/Amazon-Simple-Email-Service-SES_Email.svg", 56, 56);

Schema.addCategory({
	name: "aws2019_satellite",
	text: "Satellite",
	dataAttributes: []
});
AWS2019Render("aws2019_satellite1", "aws2019_satellite", "Satellite", "/assets/images/designer/network_aws2019/satellite/Satellite.svg");
AWS2019Render("aws2019_satellite2", "aws2019_satellite", "Ground-Station", "/assets/images/designer/network_aws2019/satellite/AWS-Ground-Station.svg");

function AWS2019Render(name, category, title, image, shapeW, shapeH){
	Schema.addShape({
		name: name,
		title: title,
		category: category,
		props: {
			w: shapeW || 75,
			h: shapeH || 75
		},
		lineStyle: {lineWidth: 0},
		textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}, text:title}],
		path: [
			{
				fillStyle: {type: "image", fileId: image, display: "stretch"},
				lineStyle: {lineWidth: 0},
				actions: {ref: "rectangle"}
			}
		],
		drawIcon: function(w, h){
			var y = 0;
			var x = 0;
			return [
				{
					fillStyle: {type: "image", fileId: image, imageW: 30, imageH: 30, display: "stretch"},
					lineStyle: {lineWidth: 0},
					actions: [
						{action: "move", x: x, y: y},
						{action: "line", x: w, y: y},
						{action: "line", x: w, y: h},
						{action: "line", x: x, y: h},
						{action: "close"}
					]
				}
			];
		}
	});
}
function AWS2019RenderGroupsNormal(name, category, title, fillStyle, lineStyle, fontColor){
	Schema.addShape({
		name: name,
		title: title,
		category: category,
		attribute: {
			container: true
		},
		props: {
			w: 250,
			h: 280
		},
		anchors: [],
		lineStyle: lineStyle || {lineWidth: 1, lineColor: "138,138,138"},
		fillStyle: fillStyle || {},
		fontStyle: {size: 13, textAlign: 'center', color:fontColor || "138,138,138"},
		textBlock: [{position: {x: "0", y: "6", w: "w", h: "25"}, text:title}],
		path: [
			{
				actions: {ref: "rectangle"}
			}
		]
	});
}

function AWS2019RenderGroups(name, category, title, image, icon, fillStyle, lineStyle){
	Schema.addShape({
		name: name,
		title: title,
		category: category,
		attribute: {
			container: true
		},
		props: {
			w: 300,
			h: 180
		},
		anchors: [],
		lineStyle: lineStyle || {lineWidth: 1, lineColor: "138,138,138"},
		fillStyle: fillStyle || {},
		fontStyle: {size: 13, textAlign: 'left', bold:true},
		textBlock: [{position: {x: "42", y: "0", w: "w-56", h: "35"}, text:title}],
		path: [
			{
				actions: {ref: "rectangle"}
			},{
				lineStyle: {lineWidth: 0},
				fillStyle: {type: "image", fileId: image, imageX: 0, imageY: 0, imageW: 35, imageH: 35, display: "static"},
				actions: {ref: "rectangle"}
			}
		],
		drawIcon: function(w, h){
			var x = -4;
			w += 4;
			var y = -10;
			h += 8;
			return [
				{
					lineStyle: {lineWidth: 0},
					fillStyle: {type: "image", fileId: icon, imageW: 30, imageH: 30, display: "orignal"},
					actions: [
						{action: "move", x: x, y: y},
						{action: "line", x: w, y: y},
						{action: "line", x: w, y: h},
						{action: "line", x: x, y: h},
						{action: "close"}
					]
				}
			];
		}
	});
}