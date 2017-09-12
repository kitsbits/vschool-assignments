$(document).ready(
    function() {
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var pubDate = new Date();
        var month = pubDate.getMonth();
        var day = pubDate.getDate();
        var year = pubDate.getFullYear();
        
        $(".pub-date").html("Published: " + monthNames[month] + " " + day + ", " + year);
        
        $(".read-more").click(function() {
            
            if ($(".read-more").is(".read-more")) {
                $(".post-content").css("height", "auto");
                $(".read-more").attr("class", "read-less").html("Read Less");
            } else {
                $(".post-content").css("height", "0px");
                $(".read-less").attr("class", "read-more").html("Read More");
            }
            
        });
    })   
    
