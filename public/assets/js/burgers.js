$(function(){
    $("#addBurger").on("click",(event)=>{
        event.preventDefault();
        const newBurger = {burger_name: $("#newBurger").val().trim()};

        $.ajax({
            url: '/api/burgers',
            method: 'POST',
            data: newBurger
        }).then(()=>{
            location.reload();
        })
        
    });

    $(".devoured").on("click", function (event) {
        event.preventDefault();
        alert("CLicked");        
        let id = $(this).data("id");
        console.log("id", id)
        $.ajax({
            url: `/api/burgers/${id}`,
            method:"PUT"
        }).then(()=>{
            location.reload();
        })
    })
});