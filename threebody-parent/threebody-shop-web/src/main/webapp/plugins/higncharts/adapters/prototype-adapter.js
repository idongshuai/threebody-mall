var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},HighchartsAdapter=function(){var r="undefined"!=typeof Effect;return{init:function(h){r&&(Effect.HighchartsTransition=Class.create(Effect.Base,{initialize:function(t,e,n,i){var r;this.element=t,this.key=e,r=t.attr?t.attr(e):$(t).getStyle(e),"d"===e&&(this.paths=h.init(t,t.d,n),this.toD=n,r=0,n=1),this.start(Object.extend(i||{},{from:r,to:n,attribute:e}))},setup:function(){HighchartsAdapter._extend(this.element),this.element._highchart_animation||(this.element._highchart_animation={}),this.element._highchart_animation[this.key]=this},update:function(t){var e=this.paths,n=this.element;e&&(t=h.step(e[0],e[1],t,this.toD)),n.attr?n.attr(this.options.attribute,t):((e={})[this.options.attribute]=t,$(n).setStyle(e))},finish:function(){delete this.element._highchart_animation[this.key]}}))},adapterRun:function(t,e){return parseInt($(t).getStyle(e),10)},getScript:function(t,e){var n=$$("head")[0];n&&n.appendChild(new Element("script",{type:"text/javascript",src:t}).observe("load",e))},addNS:function(t){return/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/.test(t)||/^(?:click|mouse(?:down|up|over|move|out))$/.test(t)?t:"h:"+t},addEvent:function(t,e,n){t.addEventListener||t.attachEvent?Event.observe($(t),HighchartsAdapter.addNS(e),n):(HighchartsAdapter._extend(t),t._highcharts_observe(e,n))},animate:function(t,e,n){if((n=n||{}).delay=0,n.duration=(n.duration||500)/1e3,n.afterFinish=n.complete,r)for(var i in e)new Effect.HighchartsTransition($(t),i,e[i],n);else{if(t.attr)for(i in e)t.attr(i,e[i]);n.complete&&n.complete()}t.attr||$(t).setStyle(e)},stop:function(t){if(t._highcharts_extended&&t._highchart_animation)for(var e in t._highchart_animation)t._highchart_animation[e].cancel()},each:function(t,e){$A(t).each(e)},offset:function(t){return $(t).cumulativeOffset()},fireEvent:function(t,e,n,i){t.fire?t.fire(HighchartsAdapter.addNS(e),n):t._highcharts_extended&&(n=n||{},t._highcharts_fire(e,n)),n&&n.defaultPrevented&&(i=null),i&&i(n)},removeEvent:function(t,e,n){$(t).stopObserving&&(e=e&&HighchartsAdapter.addNS(e),$(t).stopObserving(e,n)),window===t?Event.stopObserving(t,e,n):(HighchartsAdapter._extend(t),t._highcharts_stop_observing(e,n))},washMouseEvent:function(t){return t},grep:function(t,e){return t.findAll(e)},map:function(t,e){return t.map(e)},merge:function(){return function(){for(var t=arguments,e={},n=0;n<t.length;n++)e=function t(e,n){var i,r;for(r in n)i=n[r],e[r]=i&&"object"===(void 0===i?"undefined":_typeof(i))&&i.constructor!==Array&&"number"!=typeof i.nodeType?t(e[r]||{},i):n[r];return e}(e,t[n]);return e}.apply(this,arguments)},_extend:function(t){t._highcharts_extended||Object.extend(t,{_highchart_events:{},_highchart_animation:null,_highcharts_extended:!0,_highcharts_observe:function(t,e){this._highchart_events[t]=[this._highchart_events[t],e].compact().flatten()},_highcharts_stop_observing:function(t,e){t?e?this._highchart_events[t]=[this._highchart_events[t]].compact().flatten().without(e):delete this._highchart_events[t]:this._highchart_events={}},_highcharts_fire:function(t,e){(this._highchart_events[t]||[]).each(function(t){e.stopped||!(e.preventDefault=function(){e.defaultPrevented=!0})===t.bind(this)(e)&&e.preventDefault()}.bind(this))}})}}}();