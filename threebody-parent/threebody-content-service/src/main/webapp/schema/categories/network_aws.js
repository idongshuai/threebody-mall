/**
 *
 */
Schema.addCategory({
	name: "aws_analytics",
	text: "AWS Analytics",
	dataAttributes: []
});

/**
 * Elastic Search Service
*/
Schema.addShape({
	name: "elastic search service",
	title: "Elastic Search Service",
	category: "aws_analytics",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonElasticsearchService.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonElasticsearchService.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * EMR
*/
Schema.addShape({
	name: "emr",
	title: "EMR",
	category: "aws_analytics",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * EMR cluster
*/
Schema.addShape({
	name: "emr cluster",
	title: "EMR Cluster",
	category: "aws_analytics",
	props: {
		w: 69,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_cluster.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_cluster.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * EMR Engine
*/
Schema.addShape({
	name: "emr engine",
	title: "EMR Engine",
	category: "aws_analytics",
	props: {
		w: 76,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_EMRengine.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_EMRengine.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * EMR_MAPRM3
*/
Schema.addShape({
	name: "emr_maprm3",
	title: "EMR_MAPRM3",
	category: "aws_analytics",
	props: {
		w: 76,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_EMRengineMapRM3.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_EMRengineMapRM3.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * EMR_MAPRM5
*/
Schema.addShape({
	name: "emr_maprm5",
	title: "EMR_MAPRM5",
	category: "aws_analytics",
	props: {
		w: 75,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_EMRengineMapRM5.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_EMRengineMapRM5.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * EMR_MAPRM7
*/
Schema.addShape({
	name: "emr_maprm7",
	title: "EMR_MAPRM7",
	category: "aws_analytics",
	props: {
		w: 76,
		h: 55
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_EMRengineMapRM7.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_EMRengineMapRM7.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * EMR_HDF
*/
Schema.addShape({
	name: "emr_hdf",
	title: "EMR_HDF",
	category: "aws_analytics",
	props: {
		w: 73,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_HDFScluster.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonEMR_HDFScluster.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Kinesis
*/
Schema.addShape({
	name: "kinesis",
	title: "Kinesis",
	category: "aws_analytics",
	props: {
		w: 64,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonKinesis.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonKinesis.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Kinesis Analytics
*/
Schema.addShape({
	name: "kinesisan alytics",
	title: "Kinesis Analytics",
	category: "aws_analytics",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonKinesis_AmazonKinesisAnalytics.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonKinesis_AmazonKinesisAnalytics.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Kinesis-enabled
*/
Schema.addShape({
	name: "kinesis-enabled",
	title: "Kinesis-enabled",
	category: "aws_analytics",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonKinesis_AmazonKinesis-enabledapp.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonKinesis_AmazonKinesis-enabledapp.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Kinesis Firehose
*/
Schema.addShape({
	name: "kinesis firehose",
	title: "Kinesis Firehose",
	category: "aws_analytics",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonKinesis_AmazonKinesisFirehose.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonKinesis_AmazonKinesisFirehose.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Kinesis Streams
*/
Schema.addShape({
	name: "kinesis streams",
	title: "Kinesis Streams",
	category: "aws_analytics",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonKinesis_AmazonKinesisStreams.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonKinesis_AmazonKinesisStreams.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Machine Learning
*/
Schema.addShape({
	name: "machine learning",
	title: "Machine Learning",
	category: "aws_analytics",
	props: {
		w: 63,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonMachineLearning.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonMachineLearning.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Quick Sight
*/
Schema.addShape({
	name: "quick sight",
	title: "Quick Sight",
	category: "aws_analytics",
	props: {
		w: 68,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonQuickSight.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AmazonQuickSight.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * AWS Data Pipeline
*/
Schema.addShape({
	name: "aws data pipeline",
	title: "AWS Data Pipeline",
	category: "aws_analytics",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AWSDataPipeline.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/analytics/Analytics_AWSDataPipeline.svg", imageW: 30, imageH: 30, display: "stretch"},
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
//////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_app_servers",
	text: "AWS App Servers",
	dataAttributes: []
});

/**
 * API Gateway
*/
Schema.addShape({
	name: "api gateway",
	title: "API Gateway",
	category: "aws_app_servers",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonAPIGateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonAPIGateway.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * App Stream
*/
Schema.addShape({
	name: "app stream",
	title: "App Stream",
	category: "aws_app_servers",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonAppStream.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonAppStream.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud Search
*/
Schema.addShape({
	name: "cloud search",
	title: "Cloud Search",
	category: "aws_app_servers",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonCloudSearch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonCloudSearch.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud Search Metadata
*/
Schema.addShape({
	name: "cloud search metadata",
	title: "Cloud Search Metadata",
	category: "aws_app_servers",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonCloudSearch_SDFmetadata.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonCloudSearch_SDFmetadata.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic Transcoder
*/
Schema.addShape({
	name: "elastic transcoder",
	title: "Elastic Transcoder",
	category: "aws_app_servers",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonElasticTranscoder.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonElasticTranscoder.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SES
*/
Schema.addShape({
	name: "ses",
	title: "SES",
	category: "aws_app_servers",
	props: {
		w: 66,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSES.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSES.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SES Email
*/
Schema.addShape({
	name: "ses email",
	title: "SES Email",
	category: "aws_app_servers",
	props: {
		w: 77,
		h: 58
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSES_email.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSES_email.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SQS
*/
Schema.addShape({
	name: "sqs",
	title: "SQS",
	category: "aws_app_servers",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSQS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSQS.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SQS Message
*/
Schema.addShape({
	name: "sqs message",
	title: "SQS Message",
	category: "aws_app_servers",
	props: {
		w: 67,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSQS_message.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSQS_message.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SQS Queue
*/
Schema.addShape({
	name: "sqs queue",
	title: "SQS Queue",
	category: "aws_app_servers",
	props: {
		w: 77,
		h: 50
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSQS_queue.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSQS_queue.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SWF
*/
Schema.addShape({
	name: "swf",
	title: "SWF",
	category: "aws_app_servers",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSWF.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSWF.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SWF Decider
*/
Schema.addShape({
	name: "swf decider",
	title: "SWF Decider",
	category: "aws_app_servers",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSWF_decider.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSWF_decider.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SWF Worker
*/
Schema.addShape({
	name: "swf worker",
	title: "SWF Worker",
	category: "aws_app_servers",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSWF_worker.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/applicationservers/Application-Services_AmazonSWF_worker.svg", imageW: 30, imageH: 30, display: "stretch"},
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
/////////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_compute",
	text: "AWS Compute",
	dataAttributes: []
});

/**
 * EC2
*/
Schema.addShape({
	name: "ec2",
	title: "EC2",
	category: "aws_compute",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * AMI
*/
Schema.addShape({
	name: "ami",
	title: "AMI",
	category: "aws_compute",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_AMI.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_AMI.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Auto Scaling
*/
Schema.addShape({
	name: "auto scaling",
	title: "Auto Scaling",
	category: "aws_compute",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_AutoScaling.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_AutoScaling.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * DB On Instance
*/
Schema.addShape({
	name: "db on instance",
	title: "DB On Instance",
	category: "aws_compute",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_DBoninstance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_DBoninstance.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic IP
*/
Schema.addShape({
	name: "elastic ip",
	title: "Elastic IP",
	category: "aws_compute",
	props: {
		w: 75,
		h: 21
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_ElasticIP.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_ElasticIP.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Instance
*/
Schema.addShape({
	name: "instance",
	title: "Instance",
	category: "aws_compute",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_instance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_instance.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Instances
*/
Schema.addShape({
	name: "instances",
	title: "Instances",
	category: "aws_compute",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_instances.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_instances.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Instance With CloudWatch
*/
Schema.addShape({
	name: "instance with cloudwatch",
	title: "Instance with CloudWatch",
	category: "aws_compute",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_instancewithCloudWatch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_instancewithCloudWatch.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Optimized Instance
*/
Schema.addShape({
	name: "optimized instance",
	title: "Optimized Instance",
	category: "aws_compute",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_optimizedinstance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_optimizedinstance.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Spot Fleet
*/
/*Schema.addShape({
	name: "spot fleet",
	title: "Spot Fleet",
	category: "aws_compute",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_Spotfleet.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_Spotfleet.svg", imageW: 30, imageH: 30, display: "stretch"},
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
});*/

/**
 * Spot Instance
*/
Schema.addShape({
	name: "spot instance",
	title: "Spot Instance",
	category: "aws_compute",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_Spotinstance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonEC2_Spotinstance.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * ECR
*/
Schema.addShape({
	name: "ecr",
	title: "ECR",
	category: "aws_compute",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonECR.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonECR.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * ECS
*/
Schema.addShape({
	name: "ecs",
	title: "ECS",
	category: "aws_compute",
	props: {
		w: 75,
		h: 70
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonECS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AmazonECS.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic Beanstalk
*/
Schema.addShape({
	name: "elastic beanstalk",
	title: "Elastic Beanstalk",
	category: "aws_compute",
	props: {
		w: 54,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AWSElasticBeanstalk.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AWSElasticBeanstalk.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic Beanstalk app
*/
Schema.addShape({
	name: "elastic beanstalk app",
	title: "Elastic Beanstalk App",
	category: "aws_compute",
	props: {
		w: 42,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AWSElasticBeanstalk_application.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AWSElasticBeanstalk_application.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic Beanstalk Deploy
*/
Schema.addShape({
	name: "elastic beanstalk deploy",
	title: "Elastic Beanstalk Deploy",
	category: "aws_compute",
	props: {
		w: 59,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AWSElasticBeanstalk_deployment.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AWSElasticBeanstalk_deployment.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Lambda
*/
Schema.addShape({
	name: "lambda",
	title: "Lambda",
	category: "aws_compute",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AWSLambda.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_AWSLambda.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic Load Balancing
*/
Schema.addShape({
	name: "elastic load balancing",
	title: "Elastic Load Balancing",
	category: "aws_compute",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_ElasticLoadBalancing.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/compute/Compute_ElasticLoadBalancing.svg", imageW: 30, imageH: 30, display: "stretch"},
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
////////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_database",
	text: "AWS Database",
	dataAttributes: []
});

/**
 * Dynamo DB
*/
Schema.addShape({
	name: "dynamo db",
	title: "Dynamo DB",
	category: "aws_database",
	props: {
		w: 69,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Dynamo DB Attribute
*/
Schema.addShape({
	name: "dynamo db attribute",
	title: "Dynamo DB Attribute",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_attribute.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_attribute.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Dynamo DB Attributes
*/
Schema.addShape({
	name: "dynamo db attributes",
	title: "Dynamo DB Attributes",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_attributes.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_attributes.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Global Secondary Index
*/
Schema.addShape({
	name: "global secondary index",
	title: "Global Secondary Index",
	category: "aws_database",
	props: {
		w: 75,
		h: 73
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_globalsecondaryindex.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_globalsecondaryindex.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Dynamo DB Items
*/
Schema.addShape({
	name: "dynamo db item",
	title: "Dynamo DB Item",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_item.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_item.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Dynamo DB Items
*/
Schema.addShape({
	name: "dynamo db items",
	title: "Dynamo DB Items",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_items.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_items.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Dynamo DB table
*/
Schema.addShape({
	name: "dynamo db table",
	title: "Dynamo DB table",
	category: "aws_database",
	props: {
		w: 75,
		h: 73
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_table.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonDynamoDB_table.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic Cache
*/
Schema.addShape({
	name: "elastic cache",
	title: "Elastic Cache",
	category: "aws_database",
	props: {
		w: 65,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonElasticCache.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonElasticCache.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic Cache Cachenode
*/
Schema.addShape({
	name: "elastic cache cachenode",
	title: "Elastic Cache Cachenode",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonElasticCache_cachenode.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonElasticCache_cachenode.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic Cache Memcached
*/
Schema.addShape({
	name: "elastic cache memcached",
	title: "Elastic Cache Memcached",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonElasticCache_Memcached.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonElasticCache_Memcached.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic Cache Redis
*/
Schema.addShape({
	name: "elastic cache redis",
	title: "Elastic Cache Redis",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonElasticCache_Redis.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonElasticCache_Redis.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * RDS
*/
Schema.addShape({
	name: "rds",
	title: "RDS",
	category: "aws_database",
	props: {
		w: 67,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * RDS MS SQL Instance
*/
Schema.addShape({
	name: "rds ms sql instance",
	title: "RDS MS SQL Instance",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_MSSQLinstance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_MSSQLinstance.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * RDS MS SQL Instance Lternate
*/
Schema.addShape({
	name: "rds ms sql instance lternate",
	title: "RDS MS SQL Instance Lternate",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_MSSQLinstancealternate.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_MSSQLinstancealternate.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * RDS MySQL DB Instance
*/
Schema.addShape({
	name: "rds mysql db instance",
	title: "RDS MySQL DB Instance",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_MySQLDBinstance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_MySQLDBinstance.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * RDS MySQL Instance Lternate
*/
Schema.addShape({
	name: "rds mysql instance lternate",
	title: "RDS MySQL Instance Lternate",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_MySQLinstancealternate.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_MySQLinstancealternate.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * RDS Oracle DB Instance
*/
Schema.addShape({
	name: "rds oracle db instance",
	title: "RDS Oracle DB Instance",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_OracleDBinstance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_OracleDBinstance.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * RDS Oracle DB Instance Alternate
*/
Schema.addShape({
	name: "rds oracle db instance alternate",
	title: "RDS Oracle DB Instance Alternate",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_OracleDBinstancealternate.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_OracleDBinstancealternate.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * PIOP
*/
Schema.addShape({
	name: "piop",
	title: "PIOP",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_PIOP.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_PIOP.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Postgre SQL Instance
*/
Schema.addShape({
	name: "postgre sql instance",
	title: "Postgre SQL Instance",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_PostgreSQLinstance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_PostgreSQLinstance.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * RDS DB Instance
*/
Schema.addShape({
	name: "rds db instance",
	title: "RDS DB Instance",
	category: "aws_database",
	props: {
		w: 60,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_RDSDBinstance.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_RDSDBinstance.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * RDS DB Instance Standby (multi-AZ)
*/
Schema.addShape({
	name: "rds db instance standby (multi-az)",
	title: "RDS DB Instance Standby (multi-AZ)",
	category: "aws_database",
	props: {
		w: 60,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_RDSDBinstancestandby.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_RDSDBinstancestandby.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * RDS DB Instance Read Replica
*/
Schema.addShape({
	name: "rds db instance read replica",
	title: "RDS DB Instance Read Replica",
	category: "aws_database",
	props: {
		w: 60,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_RDSDBinstancereadreplica.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_RDSDBinstancereadreplica.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SQL Master
*/
Schema.addShape({
	name: "sql master",
	title: "SQL Master",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_SQLmaster.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_SQLmaster.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SQL Slave
*/
Schema.addShape({
	name: "sql slave",
	title: "SQL Slave",
	category: "aws_database",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_SQLslave.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRDS_SQLslave.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Redshift
*/
Schema.addShape({
	name: "Redshift",
	title: "Redshift",
	category: "aws_database",
	props: {
		w: 70,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRedshift.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRedshift.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Dense Compute Node
*/
Schema.addShape({
	name: "dense compute node",
	title: "Dense Compute Node",
	category: "aws_database",
	props: {
		w: 69,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRedshift_densecomputenode.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRedshift_densecomputenode.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Dense Storage Node
*/
Schema.addShape({
	name: "dense storage node",
	title: "Dense Storage Node",
	category: "aws_database",
	props: {
		w: 69,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRedshift_densestoragenode.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AmazonRedshift_densestoragenode.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Migration Service
*/
Schema.addShape({
	name: "migration service",
	title: "Migration Service",
	category: "aws_database",
	props: {
		w: 67,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AWSDatabaseMigrationService.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/database/Database_AWSDatabaseMigrationService.svg", imageW: 30, imageH: 30, display: "stretch"},
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
//////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_devel_tools",
	text: "AWS Devel Tools",
	dataAttributes: []
});

/**
 * CodeCommit
*/
Schema.addShape({
	name: "codecommit",
	title: "CodeCommit",
	category: "aws_devel_tools",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/developertools/Developer-Tools_AWSCodeCommit.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/developertools/Developer-Tools_AWSCodeCommit.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * CodeDeploy
*/
Schema.addShape({
	name: "codedeploy",
	title: "CodeDeploy",
	category: "aws_devel_tools",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/developertools/Developer-Tools_AWSCodeDeploy.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/developertools/Developer-Tools_AWSCodeDeploy.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * CodePipeline
*/
Schema.addShape({
	name: "codepipeline",
	title: "CodePipeline",
	category: "aws_devel_tools",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/developertools/Developer-Tools_AWSCodePipeline.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/developertools/Developer-Tools_AWSCodePipeline.svg", imageW: 30, imageH: 30, display: "stretch"},
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
////////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_enterprise_apps",
	text: "AWS Enterprise Apps",
	dataAttributes: []
});

/**
 * Work Docs
*/
Schema.addShape({
	name: "work docs",
	title: "Work Docs",
	category: "aws_enterprise_apps",
	props: {
		w: 66,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/enterpriseapplications/Enterprise-Applications_AmazonWorkDocs.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/enterpriseapplications/Enterprise-Applications_AmazonWorkDocs.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Work Mail
*/
Schema.addShape({
	name: "work mail",
	title: "Work Mail",
	category: "aws_enterprise_apps",
	props: {
		w: 66,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/enterpriseapplications/Enterprise-Applications_AmazonWorkMail.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/enterpriseapplications/Enterprise-Applications_AmazonWorkMail.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Work Spaces
*/
Schema.addShape({
	name: "work spaces",
	title: "Work Spaces",
	category: "aws_enterprise_apps",
	props: {
		w: 67,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/enterpriseapplications/Enterprise-Applications_AmazonWorkSpaces.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/enterpriseapplications/Enterprise-Applications_AmazonWorkSpaces.svg", imageW: 30, imageH: 30, display: "stretch"},
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
//////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_general",
	text: "AWS General",
	dataAttributes: []
});

/**
 * AWS Cloud
*/
Schema.addShape({
	name: "aws cloud",
	title: "AWS Cloud",
	category: "aws_general",
	props: {
		w: 75,
		h: 49
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_AWScloud.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_AWScloud.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * AWS Management Console
*/
Schema.addShape({
	name: "aws management console",
	title: "AWS Management Console",
	category: "aws_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_AWSManagementConsole.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_AWSManagementConsole.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Forums
*/
Schema.addShape({
	name: "forums",
	title: "Forums",
	category: "aws_general",
	props: {
		w: 78,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_forums.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_forums.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Virtual Private Cloud
*/
Schema.addShape({
	name: "virtual private cloud",
	title: "Virtual Private Cloud",
	category: "aws_general",
	props: {
		w: 75,
		h: 49
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_virtualprivatecloud.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_virtualprivatecloud.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Client
*/
Schema.addShape({
	name: "client",
	title: "Client",
	category: "aws_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_client.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_client.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Internet
*/
Schema.addShape({
	name: "internet",
	title: "Internet",
	category: "aws_general",
	props: {
		w: 75,
		h: 49
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_Internet.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_Internet.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Mobile Client
*/
Schema.addShape({
	name: "mobile client",
	title: "Mobile Client",
	category: "aws_general",
	props: {
		w: 50,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_mobileclient.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_mobileclient.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Multimedia
*/
Schema.addShape({
	name: "multimedia",
	title: "Multimedia",
	category: "aws_general",
	props: {
		w: 75,
		h: 72
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_multimedia.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_multimedia.svg", imageW: 30, imageH: 30, display: "stretch"},
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
	name: "user",
	title: "User",
	category: "aws_general",
	props: {
		w: 54,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_user.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_user.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Users
*/
Schema.addShape({
	name: "users",
	title: "Users",
	category: "aws_general",
	props: {
		w: 75,
		h: 72
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_users.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_users.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Corporate Data Center
*/
Schema.addShape({
	name: "corporate data center",
	title: "Corporate Data Center",
	category: "aws_general",
	props: {
		w: 57,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_corporatedatacenter.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_corporatedatacenter.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Disk
*/
Schema.addShape({
	name: "disk",
	title: "Disk",
	category: "aws_general",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_disk.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_disk.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Generic Database
*/
Schema.addShape({
	name: "generic database",
	title: "Generic Database",
	category: "aws_general",
	props: {
		w: 58,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_genericdatabase.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_genericdatabase.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Tape Storage
*/
Schema.addShape({
	name: "tape storage",
	title: "Tape Storage",
	category: "aws_general",
	props: {
		w: 75,
		h: 38
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_tapestorage.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_tapestorage.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Traditional Server
*/
Schema.addShape({
	name: "traditional server",
	title: "Traditional Server",
	category: "aws_general",
	props: {
		w: 57,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_traditionalserver.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/general/General_traditionalserver.svg", imageW: 30, imageH: 30, display: "stretch"},
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
//////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_iot",
	text: "AWS Internet of Things",
	dataAttributes: []
});

/**
 * AWS IoT (Continued)
*/
Schema.addShape({
	name: "aws iot (continued)",
	title: "AWS IoT (Continued)",
	category: "aws_iot",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Action
*/
Schema.addShape({
	name: "iot action",
	title: "IoT Action",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_action.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_action.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Actuator
*/
Schema.addShape({
	name: "iot actuator",
	title: "IoT Actuator",
	category: "aws_iot",
	props: {
		w: 64,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_actuator.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_actuator.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Certificate
*/
Schema.addShape({
	name: "iot certificate",
	title: "IoT Certificate",
	category: "aws_iot",
	props: {
		w: 57,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_certificate.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_certificate.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Desired State
*/
Schema.addShape({
	name: "iot desired state",
	title: "IoT Desired State",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_desiredstate.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_desiredstate.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Hardware Board
*/
Schema.addShape({
	name: "iot hardware board",
	title: "IoT Hardware Board",
	category: "aws_iot",
	props: {
		w: 63,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_hardwareboard.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_hardwareboard.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT HTTP/2 Protocol
*/
Schema.addShape({
	name: "iot http/2 protocol",
	title: "IoT HTTP/2 Protocol",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_HTTPprotocol.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_HTTPprotocol.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT HTTP Protocol
*/
Schema.addShape({
	name: "iot http protocol",
	title: "IoT HTTP Protocol",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_HTTP2protocol.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_HTTP2protocol.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT MQTT Protocol
*/
Schema.addShape({
	name: "iot mqtt protocol",
	title: "IoT MQTT Protocol",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_MQTTprotocol.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_MQTTprotocol.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Policy
*/
Schema.addShape({
	name: "iot policy",
	title: "IoT Policy",
	category: "aws_iot",
	props: {
		w: 46,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_policy.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_policy.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Reported State
*/
Schema.addShape({
	name: "iot reported state",
	title: "IoT Reported State",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_reportedstate.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_reportedstate.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Rule
*/
Schema.addShape({
	name: "iot rule",
	title: "IoT Rule",
	category: "aws_iot",
	props: {
		w: 37,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_rule.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_rule.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Sensor
*/
Schema.addShape({
	name: "iot sensor",
	title: "IoT Sensor",
	category: "aws_iot",
	props: {
		w: 64,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_sensor.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_sensor.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Servo
*/
Schema.addShape({
	name: "iot servo",
	title: "IoT Servo",
	category: "aws_iot",
	props: {
		w: 75,
		h: 53
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_servo.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_servo.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Shadow
*/
Schema.addShape({
	name: "iot shadow",
	title: "IoT Shadow",
	category: "aws_iot",
	props: {
		w: 71,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_shadow.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_shadow.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Simulator
*/
Schema.addShape({
	name: "iot simulator",
	title: "IoT Simulator",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_simulator.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_simulator.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Topic
*/
Schema.addShape({
	name: "iot topic",
	title: "IoT Topic",
	category: "aws_iot",
	props: {
		w: 57,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_topic.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_topic.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Bank
*/
Schema.addShape({
	name: "iot thing bank",
	title: "IoT Thing Bank",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingbank.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingbank.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Bicycle
*/
Schema.addShape({
	name: "iot thing bicycle",
	title: "IoT Thing Bicycle",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingbicycle.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingbicycle.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Camera
*/
Schema.addShape({
	name: "iot thing camera",
	title: "IoT Thing Camera",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingcamera.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingcamera.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Car
*/
Schema.addShape({
	name: "iot thing car",
	title: "IoT Thing Car",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingcar.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingcar.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Cart
*/
Schema.addShape({
	name: "iot thing cart",
	title: "IoT Thing Cart",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingcart.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingcart.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Coffee Pot
*/
Schema.addShape({
	name: "iot thing coffee pot",
	title: "IoT Thing Coffee Pot",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingcoffeepot.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingcoffeepot.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Door Lock
*/
Schema.addShape({
	name: "iot thing door lock",
	title: "IoT Thing Door Lock",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingdoorlock.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingdoorlock.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Factory
*/
Schema.addShape({
	name: "iot thing factory",
	title: "IoT Thing Factory",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingfactory.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingfactory.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Generic
*/
Schema.addShape({
	name: "iot thing generic",
	title: "IoT Thing Generic",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thinggeneric.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thinggeneric.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing House
*/
Schema.addShape({
	name: "iot thing house",
	title: "IoT Thing House",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thinghouse.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thinghouse.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Lightbulb
*/
Schema.addShape({
	name: "iot thing lightbulb",
	title: "IoT Thing Lightbulb",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thinglightbulb.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thinglightbulb.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Medical Emergency
*/
Schema.addShape({
	name: "iot thing medical emergency",
	title: "IoT Thing Medical Emergency",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingmedicalemergency.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingmedicalemergency.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Police Emergency
*/
Schema.addShape({
	name: "iot thing police emergency",
	title: "IoT Thing Police Emergency",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingpoliceemergency.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingpoliceemergency.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Thermostat
*/
Schema.addShape({
	name: "iot thing thermostat",
	title: "IoT Thing Thermostat",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingthermostat.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingthermostat.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Travel
*/
Schema.addShape({
	name: "iot thing travel",
	title: "IoT Thing Travel",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingtravel.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingtravel.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Utility
*/
Schema.addShape({
	name: "iot thing utility",
	title: "IoT Thing Utility",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingutility.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingutility.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IoT Thing Windfarm
*/
Schema.addShape({
	name: "iot thing windfarm",
	title: "IoT Thing Windfarm",
	category: "aws_iot",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingwindfarm.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/iot/Internet-Of-Things_AWSIoT_thingwindfarm.svg", imageW: 30, imageH: 30, display: "stretch"},
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
////////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_mgmt_tools",
	text: "AWS Management Tools",
	dataAttributes: []
});

/**
 * Cloud Watch
*/
Schema.addShape({
	name: "cloud watch",
	title: "Cloud Watch",
	category: "aws_mgmt_tools",
	props: {
		w: 68,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AmazonCloudWatch.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AmazonCloudWatch.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud Watch Alarm
*/
Schema.addShape({
	name: "cloud watch alarm",
	title: "Cloud Watch Alarm",
	category: "aws_mgmt_tools",
	props: {
		w: 63,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AmazonCloudWatch_alarm.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AmazonCloudWatch_alarm.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud Formation
*/
Schema.addShape({
	name: "cloud formation",
	title: "Cloud Formation",
	category: "aws_mgmt_tools",
	props: {
		w: 64,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSCloudFormation.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSCloudFormation.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud Formation Stack
*/
Schema.addShape({
	name: "cloud formation stack",
	title: "Cloud Formation Stack",
	category: "aws_mgmt_tools",
	props: {
		w: 77,
		h: 62
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSCloudFormation_stack.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSCloudFormation_stack.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud Formation Template
*/
Schema.addShape({
	name: "cloud formation template",
	title: "Cloud Formation Template",
	category: "aws_mgmt_tools",
	props: {
		w: 66,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSCloudFormation_template.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSCloudFormation_template.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud Trail
*/
Schema.addShape({
	name: "cloud trail",
	title: "Cloud Trail",
	category: "aws_mgmt_tools",
	props: {
		w: 66,
		h: 72
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSCloudTrail.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSCloudTrail.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Config
*/
Schema.addShape({
	name: "config",
	title: "Config",
	category: "aws_mgmt_tools",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSConfig.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSConfig.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Ops Works
*/
Schema.addShape({
	name: "ops works",
	title: "Ops Works",
	category: "aws_mgmt_tools",
	props: {
		w: 63,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Ops Works Apps
*/
Schema.addShape({
	name: "ops works appss",
	title: "Ops Works Apps",
	category: "aws_mgmt_tools",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_apps.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_apps.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Ops Works Deployments
*/
Schema.addShape({
	name: "ops works deployments",
	title: "Ops Works Deployments",
	category: "aws_mgmt_tools",
	props: {
		w: 75,
		h: 71
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_deployments.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_deployments.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Ops Works Instances
*/
Schema.addShape({
	name: "ops works instances",
	title: "Ops Works Instances",
	category: "aws_mgmt_tools",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_instances.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_instances.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Ops Works Layers
*/
Schema.addShape({
	name: "ops works layers",
	title: "Ops Works Layers",
	category: "aws_mgmt_tools",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_layers.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_layers.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Ops Works Monitoring
*/
Schema.addShape({
	name: "ops works monitoring",
	title: "Ops Works Monitoring",
	category: "aws_mgmt_tools",
	props: {
		w: 75,
		h: 63
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_monitoring.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_monitoring.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Ops Works Permissions
*/
Schema.addShape({
	name: "ops works permissions",
	title: "Ops Works Permissions",
	category: "aws_mgmt_tools",
	props: {
		w: 65,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_permissions.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_permissions.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Ops Works Resources
*/
Schema.addShape({
	name: "ops works resources",
	title: "Ops Works Resources",
	category: "aws_mgmt_tools",
	props: {
		w: 64,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_resources.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_resources.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Ops Works Stack
*/
Schema.addShape({
	name: "ops works stack",
	title: "Ops Works Stack",
	category: "aws_mgmt_tools",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_stack.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSOpsWorks_stack.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Service Catalog
*/
Schema.addShape({
	name: "service catalog",
	title: "Service Catalog",
	category: "aws_mgmt_tools",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSServiceCatalog.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSServiceCatalog.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Trusted Advisor
*/
Schema.addShape({
	name: "trusted advisor",
	title: "Trusted Advisor",
	category: "aws_mgmt_tools",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSTrustedAdvisor.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/managementtools/Management-Tools_AWSTrustedAdvisor.svg", imageW: 30, imageH: 30, display: "stretch"},
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
///////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_mobile_servers",
	text: "AWS Mobile Servers",
	dataAttributes: []
});

/**
 * Cognito
*/
Schema.addShape({
	name: "cognito",
	title: "Cognito",
	category: "aws_mobile_servers",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonCognito.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonCognito.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Mobile Analytics
*/
Schema.addShape({
	name: "mobile analytics",
	title: "Mobile Analytics",
	category: "aws_mobile_servers",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonMobileAnalytics.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonMobileAnalytics.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SNS
*/
Schema.addShape({
	name: "sns",
	title: "SNS",
	category: "aws_mobile_servers",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonSNS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonSNS.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SNS Email Notification
*/
Schema.addShape({
	name: "sns email notification",
	title: "SNS Email Notification",
	category: "aws_mobile_servers",
	props: {
		w: 77,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonSNS_emailnotification.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonSNS_emailnotification.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SNS HTTP Notification
*/
Schema.addShape({
	name: "sns http notification",
	title: "SNS HTTP Notification",
	category: "aws_mobile_servers",
	props: {
		w: 77,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonSNS_HTTPnotification.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonSNS_HTTPnotification.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * SNS Topic
*/
Schema.addShape({
	name: "sns topic",
	title: "SNS Topic",
	category: "aws_mobile_servers",
	props: {
		w: 76,
		h: 48
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonSNS_topic.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AmazonSNS_topic.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Device Farm
*/
Schema.addShape({
	name: "device farm",
	title: "Device Farm",
	category: "aws_mobile_servers",
	props: {
		w: 65,
		h: 79
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AWSDeviceFarm.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AWSDeviceFarm.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Mobile Hub
*/
Schema.addShape({
	name: "mobile hub",
	title: "Mobile Hub",
	category: "aws_mobile_servers",
	props: {
		w: 69,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AWSMobileHub.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/mobileservers/Mobile-Services_AWSMobileHub.svg", imageW: 30, imageH: 30, display: "stretch"},
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
/////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_networking",
	text: "AWS Networking",
	dataAttributes: []
});

/**
 * VPC
*/
Schema.addShape({
	name: "vpc",
	title: "VPC",
	category: "aws_networking",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * VPC Customer Gateway
*/
Schema.addShape({
	name: "vpc customer gateway",
	title: "VPC Customer Gateway",
	category: "aws_networking",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_customergateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_customergateway.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * VPC Endpoints
*/
Schema.addShape({
	name: "vpc endpoints",
	title: "VPC Endpoints",
	category: "aws_networking",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_endpoints.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_endpoints.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * VPC Flow Logs
*/
Schema.addShape({
	name: "vpc flow logs",
	title: "VPC Flow Logs",
	category: "aws_networking",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_flowlogs.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_flowlogs.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * VPC Internet Gateway
*/
Schema.addShape({
	name: "vpc internet gateway",
	title: "VPC Internet Gateway",
	category: "aws_networking",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_internetgateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_internetgateway.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * VPC Router
*/
Schema.addShape({
	name: "vpc router",
	title: "VPC Router",
	category: "aws_networking",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_router.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_router.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * VPC NAT Gateway
*/
Schema.addShape({
	name: "vpc nat gateway",
	title: "VPC NAT Gateway",
	category: "aws_networking",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_VPCNATgateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_VPCNATgateway.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * VPN Connection
*/
Schema.addShape({
	name: "vpn connection",
	title: "VPN Connection",
	category: "aws_networking",
	props: {
		w: 78,
		h: 62
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_VPNconnection.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_VPNconnection.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * VPN Gateway
*/
Schema.addShape({
	name: "aws vpn gateway",
	title: "VPN Gateway",
	category: "aws_networking",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_VPNgateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_VPNgateway.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * VPN Peering
*/
Schema.addShape({
	name: "vpn peering",
	title: "VPN Peering",
	category: "aws_networking",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_VPNpeering.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonVPC_VPNpeering.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Route 53
*/
Schema.addShape({
	name: "route 53",
	title: "Route 53",
	category: "aws_networking",
	props: {
		w: 63,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonRoute53.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonRoute53.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Route 53 Hosted Zone
*/
Schema.addShape({
	name: "route 53 hosted zone",
	title: "Route 53 Hosted Zone",
	category: "aws_networking",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonRoute53_hostedzone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonRoute53_hostedzone.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Route 53 Route Table
*/
Schema.addShape({
	name: "route 53 route table",
	title: "Route 53 Route Table",
	category: "aws_networking",
	props: {
		w: 75,
		h: 69
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonRoute53_routetable.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AmazonRoute53_routetable.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Direct Connect
*/
Schema.addShape({
	name: "direct connect",
	title: "Direct Connect",
	category: "aws_networking",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AWSDirectConnect.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/networking/Networking_AWSDirectConnect.svg", imageW: 30, imageH: 30, display: "stretch"},
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
///////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_sdk",
	text: "AWS SDK",
	dataAttributes: []
});

/**
 * Android
*/
Schema.addShape({
	name: "android",
	title: "Android",
	category: "aws_sdk",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Android.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Android.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * iOS
*/
Schema.addShape({
	name: "ios",
	title: "iOS",
	category: "aws_sdk",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_iOS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_iOS.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Java
*/
Schema.addShape({
	name: "java",
	title: "Java",
	category: "aws_sdk",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Java.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Java.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * JavaScript
*/
Schema.addShape({
	name: "javaScript",
	title: "JavaScript",
	category: "aws_sdk",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_JavaScript.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_JavaScript.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * .NET
*/
Schema.addShape({
	name: ".net",
	title: ".NET",
	category: "aws_sdk",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Net.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Net.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Node.js
*/
Schema.addShape({
	name: "node.js",
	title: "Node.js",
	category: "aws_sdk",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Nodejs.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Nodejs.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * PHP
*/
Schema.addShape({
	name: "php",
	title: "PHP",
	category: "aws_sdk",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_PHP.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_PHP.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Python (boto)
*/
Schema.addShape({
	name: "python (boto)",
	title: "Python (boto)",
	category: "aws_sdk",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Python.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Python.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Ruby
*/
Schema.addShape({
	name: "ruby",
	title: "Ruby",
	category: "aws_sdk",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Ruby.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Ruby.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Xamarin
*/
Schema.addShape({
	name: "xamarin",
	title: "Xamarin",
	category: "aws_sdk",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Xamarin.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_Xamarin.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * AWS CLI
*/
Schema.addShape({
	name: "AWS CLI",
	title: "AWS CLI",
	category: "aws_sdk",
	props: {
		w: 70,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_AWSCLI.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_AWSCLI.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * AWS Toolkit for Eclipse
*/
Schema.addShape({
	name: "aws toolkit for eclipse",
	title: "AWS Toolkit for Eclipse",
	category: "aws_sdk",
	props: {
		w: 70,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_AWSToolkitForEclipse.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_AWSToolkitForEclipse.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * AWS Toolkit for Visual Studio
*/
Schema.addShape({
	name: "aws toolkit for visual studio",
	title: "AWS Toolkit for Visual Studio",
	category: "aws_sdk",
	props: {
		w: 70,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_AWSToolkitForVisualStudio.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_AWSToolkitForVisualStudio.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * AWS Toolkit for Windows PowerShell
*/
Schema.addShape({
	name: "aws toolkit for windows powerShell",
	title: "AWS Toolkit for Windows PowerShell",
	category: "aws_sdk",
	props: {
		w: 70,
		h: 80
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_AWSToolsForWindowsPowerShell.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/sdk/SDKs_AWSToolsForWindowsPowerShell.svg", imageW: 30, imageH: 30, display: "stretch"},
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
///////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_security_identity",
	text: "AWS Security & Identity",
	dataAttributes: []
});

/**
 * Inpector
*/
Schema.addShape({
	name: "inpector",
	title: "Inpector",
	category: "aws_security_identity",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AmazonInspector.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AmazonInspector.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud HSM
*/
Schema.addShape({
	name: "cloud hsm",
	title: "Cloud HSM",
	category: "aws_security_identity",
	props: {
		w: 63,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSCloudHSM.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSCloudHSM.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Directory Service
*/
Schema.addShape({
	name: "directory service",
	title: "Directory Service",
	category: "aws_security_identity",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSDirectoryService.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSDirectoryService.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM
*/
Schema.addShape({
	name: "iam",
	title: "IAM",
	category: "aws_security_identity",
	props: {
		w: 39,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM Add-on
*/
Schema.addShape({
	name: "iam add-on",
	title: "IAM Add-on",
	category: "aws_security_identity",
	props: {
		w: 75,
		h: 41
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_addon.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_addon.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM AWS STS
*/
Schema.addShape({
	name: "iam aws sts",
	title: "IAM AWS STS",
	category: "aws_security_identity",
	props: {
		w: 76,
		h: 43
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_AWSSTS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_AWSSTS.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM AWS STS (alternate)
*/
Schema.addShape({
	name: "iam aws sts (alternate)",
	title: "IAM AWS STS (alternate)",
	category: "aws_security_identity",
	props: {
		w: 58,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_AWSSTS-2.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_AWSSTS-2.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM Data Encryption Key
*/
Schema.addShape({
	name: "iam data encryption key",
	title: "IAM Data Encryption Key",
	category: "aws_security_identity",
	props: {
		w: 58,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_dataencryptionkey.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_dataencryptionkey.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM Encrypted Data
*/
Schema.addShape({
	name: "iam Encrypted Data",
	title: "IAM Encrypted Data",
	category: "aws_security_identity",
	props: {
		w: 59,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_encrypteddata.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_encrypteddata.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM Long Credential
*/
Schema.addShape({
	name: "iam long credential",
	title: "IAM Long Credential",
	category: "aws_security_identity",
	props: {
		w: 75,
		h: 60
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_long-termsecuritycredential.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_long-termsecuritycredential.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM MFA Token
*/
Schema.addShape({
	name: "iam mfa token",
	title: "IAM MFA Token",
	category: "aws_security_identity",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_MFAtoken.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_MFAtoken.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM Permissions
*/
Schema.addShape({
	name: "iam permissions",
	title: "IAM Permissions",
	category: "aws_security_identity",
	props: {
		w: 57,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_permissions.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_permissions.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM Role
*/
Schema.addShape({
	name: "iam role",
	title: "IAM Role",
	category: "aws_security_identity",
	props: {
		w: 75,
		h: 64
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_role.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_role.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * IAM Short Credential
*/
Schema.addShape({
	name: "iam short credential",
	title: "IAM Short Credential",
	category: "aws_security_identity",
	props: {
		w: 75,
		h: 67
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_temporarysecuritycredential.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSIAM_temporarysecuritycredential.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * KMS
*/
Schema.addShape({
	name: "kms",
	title: "KMS",
	category: "aws_security_identity",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSKMS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSKMS.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * WAF
*/
Schema.addShape({
	name: "waf",
	title: "WAF",
	category: "aws_security_identity",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSWAF.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/securityIdentity/Security-Identity_AWSWAF.svg", imageW: 30, imageH: 30, display: "stretch"},
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
//////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_storage",
	text: "AWS Storage & Content Delivery",
	dataAttributes: []
});

/**
 * Cloud Front
*/
Schema.addShape({
	name: "cloud front",
	title: "Cloud Front",
	category: "aws_storage",
	props: {
		w: 63,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonCloudFront.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonCloudFront.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud Front Download Distribution
*/
Schema.addShape({
	name: "cloud front download distribution",
	title: "Cloud Front Download Distribution",
	category: "aws_storage",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonCloudFront_downloaddistribution.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonCloudFront_downloaddistribution.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud Front Edge Location
*/
Schema.addShape({
	name: "cloud front edge location",
	title: "Cloud Front Edge Location",
	category: "aws_storage",
	props: {
		w: 69,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonCloudFront_edgelocation.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonCloudFront_edgelocation.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Cloud Front Streaming Distribution
*/
Schema.addShape({
	name: "cloud front streaming distribution",
	title: "Cloud Front Streaming Distribution",
	category: "aws_storage",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonCloudFront_streamingdistribution.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonCloudFront_streamingdistribution.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * EBS
*/
Schema.addShape({
	name: "ebs",
	title: "EBS",
	category: "aws_storage",
	props: {
		w: 54,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonEBS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonEBS.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * EFS
*/
Schema.addShape({
	name: "efs",
	title: "EFS",
	category: "aws_storage",
	props: {
		w: 63,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonEFS.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonEFS.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Glacier
*/
Schema.addShape({
	name: "glacier",
	title: "Glacier",
	category: "aws_storage",
	props: {
		w: 63,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonGlacier.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonGlacier.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Glacier Archive
*/
Schema.addShape({
	name: "glacier archive",
	title: "Glacier Archive",
	category: "aws_storage",
	props: {
		w: 59,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonGlacier_archive.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonGlacier_archive.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Glacier Vault
*/
Schema.addShape({
	name: "glacier vault",
	title: "Glacier Vault",
	category: "aws_storage",
	props: {
		w: 54,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonGlacier_vault.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonGlacier_vault.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * S3
*/
Schema.addShape({
	name: "s3",
	title: "S3",
	category: "aws_storage",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonS3.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonS3.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * S3 Bucket
*/
Schema.addShape({
	name: "s3 bucket",
	title: "S3 Bucket",
	category: "aws_storage",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonS3_bucket.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonS3_bucket.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * S3 Bucket with Objects
*/
Schema.addShape({
	name: "s3 bucket with objects",
	title: "S3 Bucket with Objects",
	category: "aws_storage",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonS3_bucketwithobjects.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonS3_bucketwithobjects.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * S3 Objects
*/
Schema.addShape({
	name: "s3 objects",
	title: "S3 Objects",
	category: "aws_storage",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonS3_object.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AmazonS3_object.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Import/Export Snowball
*/
Schema.addShape({
	name: "import/export snowball",
	title: "Import/Export Snowball",
	category: "aws_storage",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSImportExportSnowball.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSImportExportSnowball.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Import/Export Snowball Import/Export
*/
Schema.addShape({
	name: "import/export snowball import/export",
	title: "Import/Export Snowball Import/Export",
	category: "aws_storage",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSImportExportSnowball_importexport.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSImportExportSnowball_importexport.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Storage Gateway
*/
Schema.addShape({
	name: "storage gateway",
	title: "Storage Gateway",
	category: "aws_storage",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSStorageGateway.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSStorageGateway.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Storage Gateway Cached Volume
*/
Schema.addShape({
	name: "storage gateway cached volume",
	title: "Storage Gateway Cached Volume",
	category: "aws_storage",
	props: {
		w: 63,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSStorageGateway_cachedvolume.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSStorageGateway_cachedvolume.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Storage Gateway Non-cached Volume
*/
Schema.addShape({
	name: "storage gateway non-cached volume",
	title: "Storage Gateway Non-cached Volume",
	category: "aws_storage",
	props: {
		w: 63,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSStorageGateway_non-cachedvolume.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSStorageGateway_non-cachedvolume.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Storage Gateway Virtual Tape Library
*/
Schema.addShape({
	name: "storage gateway virtual tape library",
	title: "Storage Gateway Virtual Tape Library",
	category: "aws_storage",
	props: {
		w: 63,
		h: 78
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSStorageGateway_virtualtapelibrary.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_AWSStorageGateway_virtualtapelibrary.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Snapshot
*/
Schema.addShape({
	name: "snapshot",
	title: "Snapshot",
	category: "aws_storage",
	props: {
		w: 61,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_snapshot.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_snapshot.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Volume
*/
Schema.addShape({
	name: "volume",
	title: "Volume",
	category: "aws_storage",
	props: {
		w: 54,
		h: 76
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_volume.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/storageContentDelivery/Storage-Content-Delivery_volume.svg", imageW: 30, imageH: 30, display: "stretch"},
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
////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_workforce",
	text: "AWS On-demand Workforce",
	dataAttributes: []
});

/**
 * Mechanical Turk
*/
Schema.addShape({
	name: "mechanical turk",
	title: "Mechanical Turk",
	category: "aws_workforce",
	props: {
		w: 62,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/on-demandWorkforce/On-Demand-Workforce_AmazonMechanicalTurk.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/on-demandWorkforce/On-Demand-Workforce_AmazonMechanicalTurk.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Assignment/task
*/
Schema.addShape({
	name: "assignment/task",
	title: "Assignment/task",
	category: "aws_workforce",
	props: {
		w: 55,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/on-demandWorkforce/On-Demand-Workforce_AmazonMechanicalTurk_assignmenttask.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/on-demandWorkforce/On-Demand-Workforce_AmazonMechanicalTurk_assignmenttask.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Human Intelligence Tasks (HIT)
*/
Schema.addShape({
	name: "human intelligence tasks (hit)",
	title: "Human Intelligence Tasks (HIT)",
	category: "aws_workforce",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/on-demandWorkforce/On-Demand-Workforce_AmazonMechanicalTurk_humanintelligencetasks.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/on-demandWorkforce/On-Demand-Workforce_AmazonMechanicalTurk_humanintelligencetasks.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Requester
*/
Schema.addShape({
	name: "requester",
	title: "Requester",
	category: "aws_workforce",
	props: {
		w: 66,
		h: 77
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/on-demandWorkforce/On-Demand-Workforce_AmazonMechanicalTurk_requester.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/on-demandWorkforce/On-Demand-Workforce_AmazonMechanicalTurk_requester.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Workers
*/
Schema.addShape({
	name: "workers",
	title: "Workers",
	category: "aws_workforce",
	props: {
		w: 75,
		h: 75
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: "-20", y: "h", w: "w+40", h: "30"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/on-demandWorkforce/On-Demand-Workforce_AmazonMechanicalTurk_workers.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/on-demandWorkforce/On-Demand-Workforce_AmazonMechanicalTurk_workers.svg", imageW: 30, imageH: 30, display: "stretch"},
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
////////////////////
/**
 *
 */
Schema.addCategory({
	name: "aws_groups",
	text: "AWS Groups",
	dataAttributes: []
});

/**
 * Auto Scaling Container
*/
Schema.addShape({
	name: "auto scaling container",
	title: "Auto Scaling Container",
	category: "aws_groups",
	props: {
		w: 240,
		h: 240
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Auto_Scaling_Container.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Auto_Scaling_Container.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Availability Zone
*/
Schema.addShape({
	name: "availability zone",
	title: "Availability Zone",
	category: "aws_groups",
	props: {
		w: 240,
		h: 240
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Availability_Zone.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Availability_Zone.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Region Container
*/
Schema.addShape({
	name: "region container",
	title: "Region Container",
	category: "aws_groups",
	props: {
		w: 240,
		h: 240
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Region_Container.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Region_Container.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Security Group Container
*/
Schema.addShape({
	name: "security group container",
	title: "Security Group Container",
	category: "aws_groups",
	props: {
		w: 240,
		h: 240
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Security_Group_Container.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Security_Group_Container.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * AWS Cloud Container
*/
Schema.addShape({
	name: "aws cloud container",
	title: "AWS Cloud Container",
	category: "aws_groups",
	props: {
		w: 240,
		h: 265
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/AWS_Cloud_Container.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/AWS_Cloud_Container.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * EC2 Instance Container
*/
Schema.addShape({
	name: "ec2 instance container",
	title: "EC2 Instance Container",
	category: "aws_groups",
	props: {
		w: 240,
		h: 256
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/EC2_Instance_Container.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/EC2_Instance_Container.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Elastic Beanstalk Container
*/
Schema.addShape({
	name: "elastic beanstalk container",
	title: "Elastic Beanstalk Container",
	category: "aws_groups",
	props: {
		w: 240,
		h: 257
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Elastic_Beanstalk_Container.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Elastic_Beanstalk_Container.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * VPC Container
*/
Schema.addShape({
	name: "vpc container",
	title: "VPC Container",
	category: "aws_groups",
	props: {
		w: 240,
		h: 265
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/VPC_Container.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/VPC_Container.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Subnet Container
*/
Schema.addShape({
	name: "subnet container",
	title: "Subnet Container",
	category: "aws_groups",
	props: {
		w: 240,
		h: 254
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Subnet_Container.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Subnet_Container.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Corporate Data Center Container
*/
Schema.addShape({
	name: "corporate data center container",
	title: "Corporate Data Center Container",
	category: "aws_groups",
	props: {
		w: 240,
		h: 257
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Corporate_Data_Center_Container.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Corporate_Data_Center_Container.svg", imageW: 30, imageH: 30, display: "stretch"},
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
 * Server Contents
*/
Schema.addShape({
	name: "server contents",
	title: "Server Contents",
	category: "aws_groups",
	props: {
		w: 240,
		h: 240
	},
	lineStyle: {lineWidth: 0},
	textBlock: [{position: {x: 0, y: 0, w: "w", h: "h"}}],
	path: [
		{
			fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Server_Contents.svg",display: "stretch"},
			lineStyle: {lineWidth: 0},
			actions: {ref: "rectangle"}
		}
	],
	drawIcon: function(w, h){
		var y = 0;
		var x = 0;
		return [
			{
				fillStyle: {type: "image", fileId: "/assets/images/designer/network_aws/groups/Server_Contents.svg", imageW: 30, imageH: 30, display: "stretch"},
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