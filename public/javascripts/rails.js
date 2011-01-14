// https://github.com/rails/jquery-ujs
(function(e){function d(k,h,j){var i=new e.Event(h);k.trigger(i,j);return i.result!==false}function a(k){var m,i,l,h=k.attr("data-type")||(e.ajaxSettings&&e.ajaxSettings.dataType);if(k.is("form")){m=k.attr("method");i=k.attr("action");l=k.serializeArray();var j=k.data("ujs:submit-button");if(j){l.push(j);k.data("ujs:submit-button",null)}}else{m=k.attr("data-method");i=k.attr("href");l=null}e.ajax({url:i,type:m||"GET",data:l,dataType:h,beforeSend:function(o,n){if(n.dataType===undefined){o.setRequestHeader("accept","*/*;q=0.5, "+n.accepts.script)}return d(k,"ajax:beforeSend",[o,n])},success:function(o,n,p){k.trigger("ajax:success",[o,n,p])},complete:function(o,n){k.trigger("ajax:complete",[o,n])},error:function(p,n,o){k.trigger("ajax:error",[p,n,o])}})}function b(l){var i=l.attr("href"),n=l.attr("data-method"),j=e("meta[name=csrf-token]").attr("content"),m=e("meta[name=csrf-param]").attr("content"),k=e('<form method="post" action="'+i+'"></form>'),h='<input name="_method" value="'+n+'" type="hidden" />';if(m!==undefined&&j!==undefined){h+='<input name="'+m+'" value="'+j+'" type="hidden" />'}k.hide().append(h).appendTo("body");k.submit()}function c(h){h.find("input[data-disable-with]").each(function(){var i=e(this);i.data("ujs:enable-with",i.val()).val(i.attr("data-disable-with")).attr("disabled","disabled")})}function g(h){h.find("input[data-disable-with]").each(function(){var i=e(this);i.val(i.data("ujs:enable-with")).removeAttr("disabled")})}function f(h){var i=h.attr("data-confirm");return !i||(d(h,"confirm")&&confirm(i))}e("a[data-confirm], a[data-method], a[data-remote]").live("click.rails",function(i){var h=e(this);if(!f(h)){return false}if(h.attr("data-remote")){a(h);return false}else{if(h.attr("data-method")){b(h);return false}}});e("form").live("submit.rails",function(i){var h=e(this);if(!f(h)){return false}if(h.attr("data-remote")){a(h);return false}else{c(h)}});e("form input[type=submit], form button[type=submit], form button:not([type])").live("click.rails",function(){var i=e(this);if(!f(i)){return false}var h=i.attr("name"),j=h?{name:h,value:i.val()}:null;i.closest("form").data("ujs:submit-button",j)});e("form").live("ajax:beforeSend.rails",function(h){if(this==h.target){c(e(this))}});e("form").live("ajax:complete.rails",function(h){if(this==h.target){g(e(this))}})})(jQuery);