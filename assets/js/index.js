
$("#add_user").submit(function(event){
    alert("Data inserted successfully");
})

$("#update_user").submit(function(event){
    event.preventDefault(); // means default behaviour is reload after submit and we prevent it from happening to simply to stop reload
    var data = {}
    var unindexed_array = $("#update_user").serializeArray();

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    console.log(data)
    // console.log(unindexed_array);

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data updated successfully")
    })

})

if(window.location.pathname == "/") {
    $onDelete = $(".table tbody td a.delete")
    $onDelete.click(function() {
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }

        if(confirm("Do you really want to delete record")) {
            $.ajax(request).done(function(response){
                alert("Data deleted successfully")
                location.reload()
            })
        }
    })
}