KindEditor.plugin("template",function(c){var n=this,r="template",a=(n.lang(r+"."),n.pluginsPath+r+"/html/");function o(e){return a+e+"?ver="+encodeURIComponent(c.DEBUG?c.TIME:c.VERSION)}n.clickToolbar(r,function(){var e=n.lang(r+"."),t=['<div style="padding:10px 20px;">','<div class="ke-header">','<div class="ke-left">',e.selectTemplate+" <select>"];c.each(e.fileList,function(e,a){t.push('<option value="'+e+'">'+a+"</option>")}),html=[t.join(""),"</select></div>",'<div class="ke-right">','<input type="checkbox" id="keReplaceFlag" name="replaceFlag" value="1" /> <label for="keReplaceFlag">'+e.replaceContent+"</label>","</div>",'<div class="ke-clearfix"></div>',"</div>",'<iframe class="ke-textarea" frameborder="0" style="width:458px;height:260px;background-color:#FFF;"></iframe>',"</div>"].join("");var a=n.createDialog({name:r,width:500,title:n.lang(r),body:html,yesBtn:{name:n.lang("yes"),click:function(){var e=c.iframeDoc(l);n[i[0].checked?"html":"insertHtml"](e.body.innerHTML).hideDialog().focus()}}}),e=c("select",a.div),i=c('[name="replaceFlag"]',a.div),l=c("iframe",a.div);i[0].checked=!0,l.attr("src",o(e.val())),e.change(function(){l.attr("src",o(this.value))})})});