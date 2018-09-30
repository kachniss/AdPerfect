var mod_results={result_ads:null,toggle_on:null,toggle_off:null,enable_waterfall:null,current_ads_count:null,waterfall_container:null,list_container:null,init:function(){mod_results.toggle_on=$("#ap-waterfall-toggle-on");mod_results.toggle_off=$("#ap-waterfall-toggle-off");mod_results.waterfall_container=$("#ap_waterfall_container");mod_results.list_container=$("#ap_ads");mod_results.enable_waterfall=mod.results.params.Waterfall;mod_results.current_ads_count={"0":0,"1":0};mod_results.current_ads_count[mod_results.enable_waterfall]=mod.results.params.current_ads_count;},register_handlers:function(){mod_results.toggle_on.click(mod_results.handle_toggle_waterfall);mod_results.toggle_off.click(mod_results.handle_toggle_waterfall);$("#ap-viewmore-paginator-btn").on("click",mod_results.handle_viewmore_ads);$("#ap-state-select").on("submit",mod_results.handle_state_select);},handle_state_select:function(l){l.preventDefault();var k=$(this).find("input");var b={};var o=null;$.each(k,function(q,e){if($(this).is(":checked")){var r=$(this).val();b[r]=true;}if(o===null){var p=$(this).attr("id").split("_");if(!$.isEmptyObject(p)){o=p[0];}}});var m=$.base64Encode(JSON.stringify(b));var f=location.href.split("?");if(f.length===1){location.href=location.href+"?"+o+"="+m;}else{var c=f[1].split("&");var a=false;var h=[];for(var g=0;g<c.length;g++){var n=c[g];if(n.indexOf(o)!==-1){if(!$.isEmptyObject(b)){var d=n.split("=");d[1]=m;h.push(d.join("="));a=true;}}else{if(n.split("=")[0]!=="city"&&n.split("=")[0]!=="state"){h.push(n);}}}var j=f[0]+"?"+h.join("&");if(!a&&!$.isEmptyObject(b)){j+="&"+o+"="+m;}location.href=j;}},handle_viewmore_ads:function(b){b.preventDefault();if(mod.results.params.current_ads_count<mod.results.params.total_ads_count){$("#ap-viewmore-paginator-btn").attr("disabled","disabled");var a={action_type:"viewmore",mod_results:"",params:mod.results.params,viewmoresize:mod.results.viewmoresize};a=mod_results.set_data_search_params(a);$.ajaxQueue({dataType:"json",url:"/ajax/post_form/",data:a,type:"POST",success:function(c){if(c!==null){if(c.type=="ap_success"&&c.message.length==2){var e=c.message[0];if(e&&mod.results.params.total_ads_count>=e.current_ads_count){$(".ap_last").removeClass("ap_last");mod.results.params=e;var d=$(c.message[1]);if(e.Waterfall==="1"){mod_masonry.append_item(d);}else{mod_results.list_container.append(d);}mod_results.current_ads_count[e.Waterfall]+=e.result_count;$(document).trigger("mod_result.view_more_responsive");}if(mod.results.params.current_ads_count>=mod.results.params.total_ads_count){$("#ap-viewmore-paginator-btn").css("display","none");}}}$("#ap-viewmore-paginator-btn").removeAttr("disabled");mod_results.update_url({limit:e.current_ads_count});}});}},update_url:function(c){var b=get_search();$.extend(b,c);var d=compile_search(b);var a=location.protocol+"//"+location.hostname+location.pathname+d;if(a!=window.location&&window.history.replaceState){window.history.replaceState({path:a},"",a);}},handle_toggle_waterfall:function(){var c=$(this).attr("id");$("#ap-location-toggle").removeClass(mod.results.toggle_class);if(c=="ap-waterfall-toggle-on"){mod_results.enable_waterfall="1";mod_results.toggle_off.removeClass(mod.results.toggle_class);mod_results.toggle_on.addClass(mod.results.toggle_class);}else{mod_results.enable_waterfall="0";mod_results.toggle_on.removeClass(mod.results.toggle_class);mod_results.toggle_off.addClass(mod.results.toggle_class);}if(mod_results.enable_waterfall!==mod.results.params.Waterfall){var b=mod_results.current_ads_count[mod.results.params.Waterfall]-mod_results.current_ads_count[mod_results.enable_waterfall];if(b>0){var a={action_type:"viewmore",mod_results:"",params:mod.results.params,viewmoresize:b};a=mod_results.set_data_search_params(a);a.params["Waterfall"]=mod_results.enable_waterfall;a.params["current_ads_count"]=mod_results.current_ads_count[mod_results.enable_waterfall];$.ajaxQueue({dataType:"json",url:"/ajax/post_form/",data:a,type:"POST",success:function(d){if(d.type=="ap_success"&&d.message.length==2){var f=d.message[0];if(f){mod.results.params=f;mod_results.current_ads_count[f.Waterfall]+=f.result_count;var e=$(d.message[1]);if(f.Waterfall==="1"){mod_results.waterfall_container.append(e);mod_results.rebuild_waterfall();mod_results.show_waterfall();}else{mod_results.list_container.append(e);mod_results.show_list();}}}}});}else{if(mod_results.enable_waterfall==="1"){mod_results.rebuild_waterfall();mod_results.update_cookie();mod_results.show_waterfall();}else{mod_results.update_cookie();mod_results.show_list();}}}},set_data_search_params:function(a){a.search_params=location.search.replace(/^(\?)/,"");return a;},rebuild_waterfall:function(){mod_results.waterfall_container.masonry("destroy");mod_masonry.load_waterfall();},update_cookie:function(){var a={action_type:"update_cookie",mod_results:"",params:mod.results.params};a.params["Waterfall"]=mod_results.enable_waterfall;$.ajaxQueue({dataType:"json",url:"/ajax/post_form/",data:a,type:"POST",success:function(b){}});},show_waterfall:function(){mod_results.list_container.css("display","none");mod_results.waterfall_container.css("display","");},show_list:function(){mod_results.waterfall_container.css("display","none");mod_results.list_container.css("display","");}};$(document).ready(function(){mod_results.init();mod_results.register_handlers();});