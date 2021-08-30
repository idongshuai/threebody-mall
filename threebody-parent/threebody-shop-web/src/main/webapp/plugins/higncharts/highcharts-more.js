var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(a){var s,e,n,o,r,l,p=a.each,h=a.extend,d=a.merge,c=a.map,u=a.pick,g=a.pInt,t=a.getOptions().plotOptions,f=a.seriesTypes,y=a.Series,i=function(){},b=a.Axis.prototype,x=a.Tick.prototype,m={redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:i,setCategories:i,setTitle:i},P={isRadial:!0,defaultRadialGaugeOptions:{center:["50%","50%"],labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,plotBands:[],size:["90%"],tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{center:["50%","50%"],labels:{align:"center",distance:15,x:0,y:null},maxPadding:0,minPadding:0,size:["90%"]},defaultRadialYOptions:{center:["50%","50%"],labels:{align:"left",x:3,y:-2},size:["90%"],title:{x:-4,text:null}},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:Number.MIN_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"},setOptions:function(t){var i,e=this;e.options=i=d(e.defaultOptions,e.isXAxis?{}:e.defaultYAxisOptions,e.defaultRadialOptions,t),p([].concat(a.splat(t.background||{})).reverse(),function(t){(t=d(e.defaultBackgroundOptions,t)).color=t.backgroundColor,i.plotBands.unshift(t)})},getOffset:function(){b.getOffset.call(this),this.chart.axisOffset[this.side]=0,this.center=f.pie.prototype.getCenter.call(this)},getLinePath:function(t){var i=this.center,t=u(t,i[2]/2-this.offset);return this.chart.renderer.symbols.arc(this.left+i[0],this.top+i[1],t,t,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){b.setAxisTranslation.call(this),this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min+(this.closestPointRange||0)||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.transA*((this.pointRange||0)/2))},setAxisSize:function(){b.setAxisSize.call(this),this.center&&(this.len=this.width=this.height=this.isCircular?this.center[2]*(this.endAngleRad-this.startAngleRad)/2:this.center[2]/2)},getPosition:function(t,i){return this.isCircular||(i=this.translate(t),t=this.min),this.postTranslate(this.translate(t),u(i,this.center[2]/2)-this.offset)},postTranslate:function(t,i){var e=this.chart,a=this.center,t=this.startAngleRad+t;return{x:e.plotLeft+a[0]+Math.cos(t)*i,y:e.plotTop+a[1]+Math.sin(t)*i}},getPlotBandPath:function(t,i,e){var a,s=this.center,n=this.startAngleRad,o=s[2]/2,r=[u(e.outerRadius,"100%"),e.innerRadius,u(e.thickness,10)],l=/%$/,r=c(r,function(t){return l.test(t)&&(t=g(t,10)*o/100),t});return"circle"===e.shape?(t=-Math.PI/2,i=1.5*Math.PI,a=!0):(t=n+this.translate(t),i=n+this.translate(i)),this.chart.renderer.symbols.arc(this.left+s[0],this.top+s[1],r[0],r[0],{start:t,end:i,innerR:u(r[1],r[0]-r[2]),open:a})},getPlotLinePath:function(t){var i=this.center,e=this.chart,a=this.getPosition(t);return this.isCircular?["M",i[0]+e.plotLeft,i[1]+e.plotTop,"L",a.x,a.y]:P.getLinePath.call(this,this.translate(t))},getTitlePosition:function(){var t=this.center,i=this.chart,e=this.options.title;return{x:i.plotLeft+t[0]+(e.x||0),y:i.plotTop+t[1]-{high:.5,middle:.25,low:0}[this.options.title.align]*t[2]+(e.y||0)}}};b.init=(s=b.init,function(t,i){var e,a=t.angular,t=t.polar,i=i.isX;a?(h(this,i?m:P),(e=!i)&&(this.defaultRadialOptions=this.defaultGaugeOptions)):t&&(h(this,P),this.defaultRadialOptions=(e=i)?this.defaultRadialXOptions:this.defaultRadialYOptions),s.apply(this,arguments),(a||t)&&(a=this.options,this.startAngleRad=(a.startAngle-90)*Math.PI/180,this.endAngleRad=(a.endAngle-90)*Math.PI/180,this.offset=a.offset||0,this.isCircular=e)}),x.getPosition=(e=x.getPosition,function(){var t=this.axis,i=arguments;return t.getPosition?t.getPosition(i[1]):e.apply(this,i)}),x.getLabelPosition=(n=x.getLabelPosition,function(){var t,i=this.axis,e=i.options.labels,a=this.label,s=e.y;return i.isRadial?(t=i.getPosition(this.pos,i.center[2]/2+u(e.distance,-25)),"auto"===e.rotation?a.attr({rotation:(i.translate(this.pos)+i.startAngleRad+Math.PI/2)/Math.PI*180}):null===s&&(s=.9*g(a.styles.lineHeight)-a.getBBox().height/2),t.x+=e.x,t.y+=s):t=n.apply(this,arguments),t}),x.getMarkPath=(o=x.getMarkPath,function(t,i,e){var a=this.axis;return a=a.isRadial?["M",t,i,"L",(a=a.getPosition(this.pos,a.center[2]/2+e)).x,a.y]:o.apply(this,arguments)}),t.arearange=d(t.area,{lineWidth:0,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: {point.low} - {point.high}'},trackByArea:!0,dataLabels:{yHigh:-6,yLow:16}}),x=a.extendClass(a.Point,{applyOptions:function(t){var i=this.series,e=0;return"object"===(void 0===t?"undefined":_typeof(t))&&"number"!=typeof t.length?(h(this,t),this.options=t):t.length&&(3===t.length&&("string"==typeof t[0]?this.name=t[0]:"number"==typeof t[0]&&(this.x=t[0]),e++),this.low=t[e++],this.high=t[e++]),null===this.high&&(this.low=null),this.y=this.low,void 0===this.x&&i&&(this.x=i.autoIncrement()),this},toYData:function(){return[this.low,this.high]}}),f.arearange=a.extendClass(f.area,{type:"arearange",valueCount:2,pointClass:x,translate:function(){var i=this.yAxis;f.area.prototype.translate.apply(this),p(this.points,function(t){null!==t.y&&(t.plotLow=t.plotY,t.plotHigh=i.translate(t.high,0,1,0,1))})},getSegmentPath:function(t){for(var i,e=[],a=t.length,s=y.prototype.getSegmentPath;a--;)i=t[a],e.push({plotX:i.plotX,plotY:i.plotHigh});return t=s.call(this,t),s=s.call(this,e),e=[].concat(t,s),s[0]="L",this.areaPath=this.areaPath.concat(t,s),e},drawDataLabels:function(){for(var t,i=this.points,e=i.length,a=[],s=y.prototype.drawDataLabels,n=this.options.dataLabels,o=e;o--;)(t=i[o]).y=t.high,t.plotY=t.plotHigh,a[o]=t.dataLabel,t.dataLabel=t.dataLabelUpper,n.y=n.yHigh;for(s.apply(this,arguments),o=e;o--;)(t=i[o]).dataLabelUpper=t.dataLabel,t.dataLabel=a[o],t.y=t.low,t.plotY=t.plotLow,n.y=n.yLow;s.apply(this,arguments)},drawPoints:i}),t.gauge=d(t.line,{dataLabels:{enabled:!0,y:30,borderWidth:1,borderColor:"silver",borderRadius:3,style:{fontWeight:"bold"}},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1}),t={type:"gauge",pointClass:a.extendClass(a.Point,{setState:function(t){this.state=t}}),angular:!0,translate:function(){var r=this,l=r.yAxis,h=l.center;r.generatePoints(),p(r.points,function(t){var i=d(r.options.dial,t.dial),e=g(u(i.radius,80))*h[2]/200,a=g(u(i.baseLength,70))*e/100,s=g(u(i.rearLength,10))*e/100,n=i.baseWidth||3,o=i.topWidth||1;t.shapeType="path",t.shapeArgs={d:i.path||["M",-s,-n/2,"L",a,-n/2,e,-o/2,e,o/2,a,n/2,-s,n/2],translateX:h[0],translateY:h[1],rotation:180*(l.startAngleRad+l.translate(t.y))/Math.PI},t.plotX=h[0],t.plotY=h[1]})},drawPoints:function(){var s=this,t=s.yAxis.center,i=s.pivot,e=s.options,a=e.pivot,n=e.dial;p(s.points,function(t){var i=t.graphic,e=t.shapeArgs,a=e.d;i?(i.animate(e),e.d=a):t.graphic=s.chart.renderer[t.shapeType](e).attr({stroke:n.borderColor||"none","stroke-width":n.borderWidth||0,fill:n.backgroundColor||"black"}).add(s.group)}),i?i.animate({cx:t[0],cy:t[1]}):s.pivot=s.chart.renderer.circle(t[0],t[1],u(a.radius,5)).attr({"stroke-width":a.borderWidth||0,stroke:a.borderColor||"silver",fill:a.backgroundColor||"black"}).add(s.group)},animate:function(){var e=this;p(e.points,function(t){var i=t.graphic;i&&(i.attr({rotation:180*e.yAxis.startAngleRad/Math.PI}),i.animate({rotation:t.shapeArgs.rotation},e.options.animation))}),e.animate=null},render:function(){this.createGroup(),f.pie.prototype.render.call(this)},setData:f.pie.prototype.setData,drawTracker:f.column.prototype.drawTracker},f.gauge=a.extendClass(f.line,t),t=y.prototype,i=f.column.prototype,t.toXY=function(t){var i,e=this.chart;t.rectPlotX=t.plotX,t.rectPlotY=t.plotY,i=this.xAxis.postTranslate(t.plotX,this.yAxis.len-t.plotY),t.plotX=t.polarPlotX=i.x-e.plotLeft,t.plotY=t.polarPlotY=i.y-e.plotTop},t.translate=(r=t.translate,function(){if(r.apply(this,arguments),this.xAxis.getPosition&&"column"!==this.type)for(var t=this.points,i=t.length;i--;)this.toXY(t[i])}),i.translate=(l=i.translate,function(){var t,i,e=this.xAxis,a=this.yAxis.len,s=e.center,n=e.startAngleRad,o=this.chart.renderer;if(l.apply(this,arguments),e.isRadial)for(i=(e=this.points).length;i--;)(t=e[i]).shapeType="path",t.shapeArgs={d:o.symbols.arc(s[0],s[1],a-t.plotY,null,{start:n+t.barX,end:n+t.barX+t.pointWidth,innerR:a-t.yBottom})},this.toXY(t)})}(Highcharts);