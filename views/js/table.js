function draw_table(){
    $("#results").empty();
    $.getHTMLuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
            }
        });

    };
    $.getHTMLuncached("/get/html");
}

function append(){

    $.ajax({
        url: "/post/json",
        type: "POST",
        dataType: 'application/json',
        data: '{"sec_n": "' + $("#section").val() + '", "item":"' + $("#item").val() + '", "price":"' + $("#price").val() + '"}',
        cache: false,
        success: draw_tablesetTimeout(draw_table, 1000)
    })
};

function selec_row(){
    $("#menuTable tbody tr[id]").click(function(){
        $(".selected").removeclass("selected");
        $(this).addclass("selected");
        var section = $(this).prevAll("tr").children("rdcoolspan= '3'").length -1;
        var entry = $(this).attr("id") - 1;
        delete_row(section, entry);
    })
};

$(document).ready(function(){
    draw_table();
})