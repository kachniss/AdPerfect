var mod_paginator={initialized:false,register_handlers:function(){mod_paginator.initialized=true;$(".ap_paginator_dropdown").filter(function(a,b){return !$(this).attr("data-no-default-handler");}).change(mod_paginator.default_change_handler);},default_change_handler:function(b){var a=parseInt($(this).val());if(a>0&&a!=mod.paginator.current_page){location.href=mod.paginator.paginator_url+a;}else{$(this).val("");}},set_dynamic_change_handler:function(a,c){var b=$(a).on("change",".ap_paginator_dropdown",c).find(".ap_paginator_dropdown").attr("data-no-default-handler",1);if(mod_paginator.initialized){b.off("change",mod_paginator.default_change_handler);}},remove_dynamic_change_handler:function(a,b){if(typeof b==="function"){$(a).off("change",".ap_paginator_dropdown",b);}else{$(a).off("change",".ap_paginator_dropdown");}}};$(document).ready(function(){mod_paginator.register_handlers();});