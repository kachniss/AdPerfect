var log_external_url={init:function(){$(".ap_ad_wrap a").click(function(){var c=$(this).attr("href");if(typeof c!=="undefined"){var e=new RegExp("^(?:[a-z]+:)?//","i");var g=false;if(c.indexOf("d2zfowlldib7se")>-1||c.indexOf("d3fr9y15owcj08")>-1||c.indexOf("d1ldansk2in7nt")>-1){g=true;}var b=false;if(c.indexOf("jpg")>-1||c.indexOf("JPG")>-1||c.indexOf("jpeg")>-1||c.indexOf("JPEG")>-1||c.indexOf("png")>-1||c.indexOf("PNG")>-1||c.indexOf("gif")>-1||c.indexOf("GIF")>-1){b=true;}if(this.host!==location.host&&e.test(c)&&!g&&!b){var d=wp.pagetype;var a=$(this).closest(".ap_ad_wrap").attr("data-id");if(typeof a==="undefined"){return;}var f={link_clicked:c,page_type:d,ad_id:a};$.ajax({type:"POST",url:"/ajax/log_external_url",data:f,async:false});}}});}};$(document).ready(function(){$(log_external_url.init);});