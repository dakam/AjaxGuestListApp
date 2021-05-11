$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {


    console.log(data);
    var guestList = "ttt";
    $.each(data, function(index, value) {
        guestList = guestList  + "<br/> "+ value.first +" "+ value.last;
    });

    $("#guestList").html(guestList);
    
}