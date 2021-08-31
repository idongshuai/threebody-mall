/**
 *
 */
Schema.addCategory({
	name: "azure",
	text: "Azure",
	dataAttributes: []
});

/**
 * Add Ons
*/
Schema.addShape({
	name: "add ons",
	title: "Add Ons",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Add-Ons.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Add-Ons.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Alert
*/
Schema.addShape({
	name: "alert",
	title: "Alert",
	category: "azure",
	props: {
		w: 78,
		h: 67
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Alert.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Alert.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * API Management
*/
Schema.addShape({
	name: "api management",
	title: "API Management",
	category: "azure",
	props: {
		w: 76,
		h: 65
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/APIManagement.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/APIManagement.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Automation
*/
Schema.addShape({
	name: "automation",
	title: "Automation",
	category: "azure",
	props: {
		w: 75,
		h: 68
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Automation.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Automation.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Autoscale
*/
Schema.addShape({
	name: "autoscale",
	title: "Autoscale",
	category: "azure",
	props: {
		w: 76,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Autoscale.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Autoscale.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Active Directory
*/
Schema.addShape({
	name: "active directory",
	title: "Active Directory",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureActiveDirectory_AAD.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureActiveDirectory_AAD.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Access Control Services
*/
Schema.addShape({
	name: "access control services",
	title: "Access Control Services",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureActiveDirectoryAccessControlServices_ACS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureActiveDirectoryAccessControlServices_ACS.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Load Balancer
*/
Schema.addShape({
	name: "load balancer",
	title: "Load Balancer",
	category: "azure",
	props: {
		w: 75,
		h: 50
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureLoadBalancer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureLoadBalancer.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Marketplace
*/
Schema.addShape({
	name: "marketplace",
	title: "Marketplace",
	category: "azure",
	props: {
		w: 61,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureMarketplace.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureMarketplace.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * SDK
*/
Schema.addShape({
	name: "sdk",
	title: "SDK",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureSDK.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureSDK.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Subscription
*/
Schema.addShape({
	name: "subscription",
	title: "Subscription",
	category: "azure",
	props: {
		w: 77,
		h: 57
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureSubscription.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/AzureSubscription.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Backup Service
*/
Schema.addShape({
	name: "backup service",
	title: "Backup Service",
	category: "azure",
	props: {
		w: 75,
		h: 66
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/BackupService.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/BackupService.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Batch Services
*/
Schema.addShape({
	name: "batch services",
	title: "Batch Services",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/BatchServices.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/BatchServices.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * BitBucket
*/
Schema.addShape({
	name: "bitbucket",
	title: "BitBucket",
	category: "azure",
	props: {
		w: 66,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/BitBucket_CodeSource.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/BitBucket_CodeSource.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * BizTalk Services
*/
Schema.addShape({
	name: "biztalk services",
	title: "BizTalk Services",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/BizTalkServices.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/BizTalkServices.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Cache
*/
Schema.addShape({
	name: "cache",
	title: "Cache",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Cache.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Cache.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * CDN
*/
Schema.addShape({
	name: "cdn",
	title: "CDN",
	category: "azure",
	props: {
		w: 75,
		h: 51
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CDN.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CDN.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Certificate
*/
Schema.addShape({
	name: "certificate",
	title: "Certificate",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Certificate.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Certificate.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Cloud Service
*/
Schema.addShape({
	name: "cloud service",
	title: "Cloud Service",
	category: "azure",
	props: {
		w: 75,
		h: 63
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CloudService.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CloudService.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Azure Cloud
*/
Schema.addShape({
	name: "azure cloud",
	title: "Azure Cloud",
	category: "azure",
	props: {
		w: 76,
		h: 47
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Cloud.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Cloud.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Code File
*/
Schema.addShape({
	name: "code file",
	title: "Code File",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CodeFile.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CodeFile.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Codeplex
*/
Schema.addShape({
	name: "codeplex",
	title: "Codeplex",
	category: "azure",
	props: {
		w: 78,
		h: 59
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Codeplex_CodeSource.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Codeplex_CodeSource.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Computer
*/
Schema.addShape({
	name: "computer",
	title: "Computer",
	category: "azure",
	props: {
		w: 80,
		h: 74
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Computer.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Computer.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Cloud Service Configuration File
*/
Schema.addShape({
	name: "cloud service configuration file",
	title: "Cloud Service Configuration File",
	category: "azure",
	props: {
		w: 55,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CSCFG_CloudServiceConfiguration_File.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CSCFG_CloudServiceConfiguration_File.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Cloud Service Definition File
*/
Schema.addShape({
	name: "cloud service definition file",
	title: "Cloud Service Definition File",
	category: "azure",
	props: {
		w: 57,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CSDEF_CloudServiceDefinition_File.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CSDEF_CloudServiceDefinition_File.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Cloud Service Package
*/
Schema.addShape({
	name: "cloud service package",
	title: "Cloud Service Package",
	category: "azure",
	props: {
		w: 47,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CSPKG_CloudServicePackage.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/CSPKG_CloudServicePackage.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Database Generic
*/
Schema.addShape({
	name: "database generic",
	title: "Database Generic",
	category: "azure",
	props: {
		w: 58,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/DatabaseGeneric.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/DatabaseGeneric.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Dropbox
*/
Schema.addShape({
	name: "dropbox",
	title: "Dropbox",
	category: "azure",
	props: {
		w: 75,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Dropbox_CodeSource.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Dropbox_CodeSource.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Enterprise
*/
Schema.addShape({
	name: "enterprise",
	title: "Enterprise",
	category: "azure",
	props: {
		w: 47,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Enterprise.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Enterprise.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Event Hub
*/
Schema.addShape({
	name: "event hub",
	title: "Event Hub",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/EventHub.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/EventHub.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Express Route
*/
Schema.addShape({
	name: "express route",
	title: "Express Route",
	category: "azure",
	props: {
		w: 75,
		h: 46
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ExpressRoute.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ExpressRoute.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * File (Black)
*/
Schema.addShape({
	name: "file (black)",
	title: "File (Black)",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/File_Black.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/File_Black.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * File
*/
Schema.addShape({
	name: "file",
	title: "File",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/File.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/File.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Git Deployment
*/
Schema.addShape({
	name: "git deployment",
	title: "Git Deployment",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/GitDeployment.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/GitDeployment.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * GitHub
*/
Schema.addShape({
	name: "github",
	title: "GitHub",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/GitHub_CodeSource.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/GitHub_CodeSource.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * HDInsight OLD
*/
Schema.addShape({
	name: "hdinsight old",
	title: "HDInsight OLD",
	category: "azure",
	props: {
		w: 76,
		h: 58
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/HDInsightOLD.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/HDInsightOLD.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * HDInsight
*/
Schema.addShape({
	name: "HDInsight",
	title: "HDInsight",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/HDInsight.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/HDInsight.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Health Monitoring
*/
Schema.addShape({
	name: "health monitoring",
	title: "Health Monitoring",
	category: "azure",
	props: {
		w: 75,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/HealthMonitoring.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/HealthMonitoring.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Healthy
*/
Schema.addShape({
	name: "healthy",
	title: "Healthy",
	category: "azure",
	props: {
		w: 75,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Healthy.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Healthy.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Laptop
*/
Schema.addShape({
	name: "laptop",
	title: "Laptop",
	category: "azure",
	props: {
		w: 76,
		h: 46
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Laptop.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Laptop.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Load Balancer (Generic)
*/
Schema.addShape({
	name: "load balancer (generic)",
	title: "Load Balancer (Generic)",
	category: "azure",
	props: {
		w: 57,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/LoadBalancer_Generic.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/LoadBalancer_Generic.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Azure Machine Learning
*/
Schema.addShape({
	name: "azure machine learning",
	title: "Azure Machine Learning",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/MachineLearning.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/MachineLearning.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Management Service
*/
Schema.addShape({
	name: "management service",
	title: "Management Service",
	category: "azure",
	props: {
		w: 76,
		h: 57
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ManagementService.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ManagementService.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Media Services
*/
Schema.addShape({
	name: "media services",
	title: "Media Services",
	category: "azure",
	props: {
		w: 69,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/MediaServices.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/MediaServices.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Azure Message
*/
Schema.addShape({
	name: "azure message",
	title: "Azure Message",
	category: "azure",
	props: {
		w: 75,
		h: 58
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Message.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Message.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Microsoft Azure
*/
Schema.addShape({
	name: "microsoft azure",
	title: "Microsoft Azure",
	category: "azure",
	props: {
		w: 77,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/MicrosoftAzure.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/MicrosoftAzure.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Mobile Services
*/
Schema.addShape({
	name: "mobile services",
	title: "Mobile Services",
	category: "azure",
	props: {
		w: 52,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/MobileServices.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/MobileServices.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Mobile
*/
Schema.addShape({
	name: "mobile",
	title: "Mobile",
	category: "azure",
	props: {
		w: 51,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Mobile.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Mobile.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Multi factor Authentication
*/
Schema.addShape({
	name: "multi factor authentication",
	title: "Multi factor Authentication",
	category: "azure",
	props: {
		w: 38,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Multi-factorAuthentication_MFA.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Multi-factorAuthentication_MFA.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * MySQL Database
*/
Schema.addShape({
	name: "mysql database",
	title: "MySQL Database",
	category: "azure",
	props: {
		w: 57,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/MySQLDatabase.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/MySQLDatabase.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Network
*/
Schema.addShape({
	name: "network",
	title: "Network",
	category: "azure",
	props: {
		w: 76,
		h: 41
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Network.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Network.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Notification Hub
*/
Schema.addShape({
	name: "notification hub",
	title: "Notification Hub",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/NotificationHub.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/NotificationHub.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Notification Topic
*/
Schema.addShape({
	name: "notification topic",
	title: "Notification Topic",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/NotificationTopic.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/NotificationTopic.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Operating System Image
*/
Schema.addShape({
	name: "operating system image",
	title: "Operating System Image",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/OperatingSystemImage.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/OperatingSystemImage.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Operational Insights
*/
Schema.addShape({
	name: "operational insights",
	title: "Operational Insights",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/OperationalInsights.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/OperationalInsights.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * PowerShell File
*/
Schema.addShape({
	name: "powershell file",
	title: "PowerShell File",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/PowerShellFile.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/PowerShellFile.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Queue
*/
Schema.addShape({
	name: "queue",
	title: "Queue",
	category: "azure",
	props: {
		w: 75,
		h: 23
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Queue.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Queue.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * RDP (Remoteing File)
*/
Schema.addShape({
	name: "rdp (remoteing file)",
	title: "RDP (Remoteing File)",
	category: "azure",
	props: {
		w: 52,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/RDP_RemoteingFile.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/RDP_RemoteingFile.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Recovery Services
*/
Schema.addShape({
	name: "recovery services",
	title: "Recovery Services",
	category: "azure",
	props: {
		w: 77,
		h: 66
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/RecoveryServices.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/RecoveryServices.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * RemoteApp
*/
Schema.addShape({
	name: "remoteapp",
	title: "RemoteApp",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/RemoteApp.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/RemoteApp.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Scheduler
*/
Schema.addShape({
	name: "scheduler",
	title: "Scheduler",
	category: "azure",
	props: {
		w: 61,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Scheduler.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Scheduler.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Script File
*/
Schema.addShape({
	name: "script file",
	title: "Script File",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ScriptFIle.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ScriptFIle.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Server Rack
*/
Schema.addShape({
	name: "server rack",
	title: "Server Rack",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServerRack.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServerRack.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Azure Server
*/
Schema.addShape({
	name: "azure server",
	title: "Server",
	category: "azure",
	props: {
		w: 76,
		h: 24
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Server.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Server.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Service Bus Queues
*/
Schema.addShape({
	name: "service bus queues",
	title: "Service Bus Queues",
	category: "azure",
	props: {
		w: 65,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceBusQueues.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceBusQueues.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Service Bus Relay
*/
Schema.addShape({
	name: "service bus Relay",
	title: "Service Bus Relay",
	category: "azure",
	props: {
		w: 57,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceBusRelay.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceBusRelay.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Service Bus Topics and Subscriptions
*/
Schema.addShape({
	name: "service bus topics and subscriptions",
	title: "Service Bus Topics and Subscriptions",
	category: "azure",
	props: {
		w: 66,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceBusTopicsandSubscriptions.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceBusTopicsandSubscriptions.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Service Bus
*/
Schema.addShape({
	name: "service bus",
	title: "Service Bus",
	category: "azure",
	props: {
		w: 69,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceBus.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceBus.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Service Endpoint
*/
Schema.addShape({
	name: "service endpoint",
	title: "Service Endpoint",
	category: "azure",
	props: {
		w: 77,
		h: 28
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceEndpoint.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceEndpoint.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Service Fabric
*/
Schema.addShape({
	name: "service fabric",
	title: "Service Fabric",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceFabric.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/ServiceFabric.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * SQL Azure
*/
Schema.addShape({
	name: "sql azure",
	title: "SQL Azure",
	category: "azure",
	props: {
		w: 57,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/SQLAzure.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/SQLAzure.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * SQL Database (Generic)
*/
Schema.addShape({
	name: "sql database (Generic)",
	title: "SQL Database (Generic)",
	category: "azure",
	props: {
		w: 57,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/SQLDatabase_Generic.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/SQLDatabase_Generic.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * SQL Database (SQL Azure)
*/
Schema.addShape({
	name: "sql database (sql azure)",
	title: "SQL Database (SQL Azure)",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/SQLDatabase_SQLAzure.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/SQLDatabase_SQLAzure.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * SQL DataSync
*/
Schema.addShape({
	name: "sql datasync",
	title: "SQL DataSync",
	category: "azure",
	props: {
		w: 59,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/SQLDataSync.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/SQLDataSync.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * SQL Reporting
*/
Schema.addShape({
	name: "sql reporting",
	title: "SQL Reporting",
	category: "azure",
	props: {
		w: 60,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/SQLReporting.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/SQLReporting.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Startup File
*/
Schema.addShape({
	name: "startup file",
	title: "Startup File",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StartupFile.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StartupFile.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Storage Blob
*/
Schema.addShape({
	name: "storage blob",
	title: "Storage Blob",
	category: "azure",
	props: {
		w: 75,
		h: 67
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StorageBlob.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StorageBlob.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Storage Queue
*/
Schema.addShape({
	name: "storage queue",
	title: "Storage Queue",
	category: "azure",
	props: {
		w: 75,
		h: 67
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StorageQueue.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StorageQueue.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Storage Table
*/
Schema.addShape({
	name: "storage table",
	title: "Storage Table",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StorageTable.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StorageTable.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * StorSimple
*/
Schema.addShape({
	name: "storsimple",
	title: "StorSimple",
	category: "azure",
	props: {
		w: 78,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StorSimple.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StorSimple.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Stream Analytics
*/
Schema.addShape({
	name: "stream analytics",
	title: "Stream Analytics",
	category: "azure",
	props: {
		w: 76,
		h: 59
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StreamAnalytics.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/StreamAnalytics.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Table Storage
*/
Schema.addShape({
	name: "table storage",
	title: "Table Storage",
	category: "azure",
	props: {
		w: 76,
		h: 63
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/TableStorage.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/TableStorage.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Tablet
*/
Schema.addShape({
	name: "tablet",
	title: "Tablet",
	category: "azure",
	props: {
		w: 75,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Tablet.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Tablet.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Traffic Manager
*/
Schema.addShape({
	name: "traffic manager",
	title: "Traffic Manager",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/TrafficManager.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/TrafficManager.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Unidentified Code Object
*/
Schema.addShape({
	name: "unidentified code object",
	title: "Unidentified Code Object",
	category: "azure",
	props: {
		w: 75,
		h: 66
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/UnidentifiedCodeObject_UFO.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/UnidentifiedCodeObject_UFO.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * User
*/
Schema.addShape({
	name: "User",
	title: "User",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/User.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/User.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * VHD Data Disk
*/
Schema.addShape({
	name: "vhd data disk",
	title: "VHD Data Disk",
	category: "azure",
	props: {
		w: 57,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VHDDataDisk.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VHDDataDisk.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * VHD
*/
Schema.addShape({
	name: "vhd",
	title: "VHD",
	category: "azure",
	props: {
		w: 61,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VHD.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VHD.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Virtual Machine ElasticSearch
*/
Schema.addShape({
	name: "virtual machine elasticSearch",
	title: "Virtual Machine ElasticSearch",
	category: "azure",
	props: {
		w: 75,
		h: 68
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VirtualMachine-ElasticSearch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VirtualMachine-ElasticSearch.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Virtual Machine
*/
Schema.addShape({
	name: "virtual machine",
	title: "Virtual Machine",
	category: "azure",
	props: {
		w: 75,
		h: 60
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VirtualMachine.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VirtualMachine.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Virtual Machines
*/
Schema.addShape({
	name: "virtual machines",
	title: "Virtual Machines",
	category: "azure",
	props: {
		w: 75,
		h: 68
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VirtualMachines.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VirtualMachines.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Visual Studio
*/
Schema.addShape({
	name: "visual studio",
	title: "Visual Studio",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VisualStudio.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/VisualStudio.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * WAD (Diagnostics) Config (SDK 2.5)
*/
Schema.addShape({
	name: "wad (diagnostics) config (sdk 2.5)",
	title: "WAD (Diagnostics) Config (SDK 2.5)",
	category: "azure",
	props: {
		w: 55,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WAD_Diagnostics_Config_SDK2.5.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WAD_Diagnostics_Config_SDK2.5.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * WAD (Diagnostics) Config (SDK 2.6+)
*/
Schema.addShape({
	name: "wad (diagnostics) config (sdk 2.6+)",
	title: "WAD (Diagnostics) Config (SDK 2.6+)",
	category: "azure",
	props: {
		w: 56,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WAD_Diagnostics_Config_SDK2.6.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WAD_Diagnostics_Config_SDK2.6.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Web Role
*/
Schema.addShape({
	name: "web role",
	title: "Web Role",
	category: "azure",
	props: {
		w: 75,
		h: 61
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WebRole.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WebRole.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Web Roles
*/
Schema.addShape({
	name: "web roles",
	title: "Web Roles",
	category: "azure",
	props: {
		w: 77,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WebRoles.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WebRoles.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Web Sites
*/
Schema.addShape({
	name: "web sites",
	title: "Web Sites",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WebSites.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WebSites.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Website (Generic)
*/
Schema.addShape({
	name: "website (generic)",
	title: "Website (Generic)",
	category: "azure",
	props: {
		w: 78,
		h: 68
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Website_Generic.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/Website_Generic.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Windows Azure
*/
Schema.addShape({
	name: "windows azure",
	title: "Windows Azure",
	category: "azure",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WindowsAzure.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WindowsAzure.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Worker Role
*/
Schema.addShape({
	name: "worker role",
	title: "Worker Role",
	category: "azure",
	props: {
		w: 75,
		h: 61
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WorkerRole.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WorkerRole.svg", imageW: 30, imageH: 30, display: "stretch"},
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

/**
 * Worker Roles
*/
Schema.addShape({
	name: "worker roles",
	title: "Worker Roles",
	category: "azure",
	props: {
		w: 77,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WorkerRoles.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_azure/WorkerRoles.svg", imageW: 30, imageH: 30, display: "stretch"},
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