var script_url ="";
    function insert_value() {
        var id1 = $("#id").val();
        var name = $("#name").val();
        var email = $("#email").val();
        var city = $("#city option:selected").val();
        var multiselect = $("#multiselect option:selected").val();
        var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&email=" + email + "&city=" + city +"&multiselect=" + multiselect + "&action=insert";
        var request = jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "jsonp"
        });
        $("#resetForm").reset();
    }
    function ctrlq(e) {
        alert('Congrats! Registered Successfully')
    }

// })(jQuery,document,window);