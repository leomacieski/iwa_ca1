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
        data: '{"sec_n": "' + $("#section").val() + '", "ingredients":"' + $("#ingredients").val() + '", "how2prepare":"' + $("#how2prepare").val() + '"}',
        cache: false,
        success: draw_tablesetTimeout(draw_table, 1000)
    })
};


$(document).ready(function(){
    draw_table();
})