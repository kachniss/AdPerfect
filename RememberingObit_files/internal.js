var internal = {
    'init' : function() {
        if (typeof mod_int == 'undefined') {
            return;
        }
        
        if (typeof mod_int['active'] == 'undefined') {
            return;
        }

        if (!mod_int.active) {
            return;
        }

        $('#ap_clear_host').click(internal.clear_host);
        $('#ap_int_host_list').change(internal.switch_host);
        $('#ap_int_toggle').click(internal.toggle_panel);
        $('#ap_int_conf').click(internal.load_config);

        if (mod_int.open) {
            $('#ap_int_toggle').click();
        }
    },

    'set_host' : function(hostname) {
        var url = 'http://' + document.location.host + '/?hostname=' + hostname;
        document.location.href = url;
    },

    'clear_host' : function() {
        internal.set_host();
    },

    'switch_host' : function() {
        internal.set_host($(this).val());
    },
    
    'toggle_panel': function () {
        $('#ap_int_panel').toggleClass('ap_int_open_panel');
        $('#ap_int_toggle').toggleClass('ap_int_open_toggle');
        $('#ap_int_content').toggleClass('ap_int_open_content');
        $('body').toggleClass('ap_int_open_body');
    },
    
    'load_config' : function() {
        var curr_url = document.location.toString();
        curr_url = curr_url.replace(/&?whoami=[\d]+/ig, '');
        
        var enc_url = $.base64Encode(curr_url);
        if (typeof mod_int['whoami'] !== 'undefined') {
            enc_url += '&whoami=' + mod_int['whoami'];
        }
        document.location.href = '/testview/config/?from=' + enc_url;
    }
};

// $(internal.init);
internal.init();
