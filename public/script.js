$("#main").mouseenter(function() {
    if($("#profileImage").hasClass("mouseEntered")==false){
        console.log("mouseEntered class has been added");
        $("#profileImage").addClass(
            "mouseEntered"
        );
        // console.log("hover works!");
        // $("#profileImage").fadeOut(1000, function() {
        //     $("#profileImage").css({
        //         filter: 'blur(0px)'
        //     });
        // });
        
        // $("#profileImage").fadeIn(2000);
        
        $("#profileImage").fadeOut(2000, function() {
            $("#profileImage").attr('src', './images/johnDoe.jpg');
            $("#profileImage").css({
                opacity: '0.9',
                filter: 'brightness(100%) grayscale(80%)'
            });
        });

        $("#profileImage").fadeIn(2000);

    }else{
        console.log("mouseEntered class already exists")
    }
});