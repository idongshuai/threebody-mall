var welcome={init:function(){welcome.renderCon(),setTimeout(function(){$.mask(),welcome.showWelcome()},1500)},renderCon:function(){var n=$(".guide-con");if(0==n.length){n=$("<div class='guide-con'><canvas id='welcome-canvas'></canvas></div>").appendTo("body");var i=[];i.push('<h1 style="margin-top:-20px;">欢迎体验全新的ProcessOn</h1>'),i.push("<div>我们重新思考了用户的使用习惯，实现和优化了之前版本的诸多需求和问题</div>"),i.push("<div>现在，我们将新版奉献给你！</div>"),i.push("<div>感谢您一直以来对ProcessOn的支持，</div>"),i.push("<div>在这个新的起点，我们会一如既往的奋斗，继续给您带来尖叫的体验和服务！</div>"),i.push('<div style="margin-top:35px;"><span class="icons heighlight">&#xe69a;</span></div><section id="guide-coupons"></section>'),n.append(i.join("")).show(),this.renderBg(),this.initEvent()}},showWelcome:function(){var n=$(".guide-con"),i=n.find("h1");n.show().css({opacity:1,marginTop:-250}),i.css({marginTop:76}),n.children("div").show(),this.animate(function(){n.children().eq(2).show().css({opacity:1,marginTop:40})},500),this.animate(function(){n.children().eq(3).show().css({opacity:1,marginTop:20})},1600),this.animate(function(){n.children().eq(4).show().css({opacity:1,marginTop:20})},2600),this.animate(function(){n.children().eq(5).show().css({opacity:1,marginTop:20})},3600),this.animate(function(){n.children().eq(6).css({opacity:1}).fadeIn()},4600)},getCoupons:function(i){Util.ajax({url:"/coupon/sysgive",success:function(n){i(n)}})},animate:function(n,i){setTimeout(function(){n()},i)},initEvent:function(){var n=$(".guide-con"),o=n.find(".icons");o.on("click",function(){$(this).removeClass("heighlight");var i=n.find("#guide-coupons").siblings("div,h1"),s=n.find("#guide-coupons");i.addClass("disable"),o.parent().css({marginTop:-286}),o.css({fontSize:400}),welcome.getCoupons(function(n){setTimeout(function(){i.fadeOut(1e3).remove(),s.fadeIn()},200),welcome.renderCoupons(n)})})},renderCoupons:function(n){var i=$(".guide-con").find("#guide-coupons"),s=[];s.push('<h1 style="margin-top:72px;">恭喜您，这是我们献上的两张优惠码</h1>'),n.isVip&&s.push('<div style="font-size:16px;">只有打赏用户才会有8折优惠哦</div>');for(var o=[],e=n.coupons||[],t=0;t<e.length;t++){var c=n.coupons[t];o.push('<div class="coupon-item"><span class="coupon-item-left"><span class="discount-unit">折</span><span class="discount">'+10*c.discount+'</span><span class="discount-code">'+c.code+'</span></span><span class="coupon-item-right"><span>优</span><span>惠</span><span>码</span></span></div>')}s.push("<div>"+o.join("")+"</div>"),s.push('<div style="margin-top:38px;font-size:14px;letter-spacing: 1px;">您可在 "我的账户-我的优惠码" 查看</div>'),s.push('<div><span onclick="welcome.flushGuide()" class="button" style="padding:11px 24px;margin-top:32px;font-size:16px;width:auto;">立即体验</span></div>'),i.html(s.join(""))},renderBg:function(){$(".guide-con");var n=document.getElementById("welcome-canvas"),i=n.getContext("2d");n.width=800,n.height=500,i.strokeStyle="#f6f6f6",i.lineWidth=1,i.beginPath(),i.translate(.5,.5);for(var s=20;s<=500;s+=20)i.moveTo(0,s),i.lineTo(800,s);for(s=20;s<=800;s+=20)i.moveTo(s,0),i.lineTo(s,800);i.closePath(),i.stroke()},flushGuide:function(){pageContext.newerGuide2.init(),$.mask("close"),$(".guide-con").remove()}};