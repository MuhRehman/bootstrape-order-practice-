


var $test = $('.ani');
$test.waypoint(function () {
             if (direction == 'down') {
                $test.addClass('slide');
             }else {
                $test.removeClass('slide');
             };
              console.log("r");
              alert("e");
    //  $test.addClass('slide');
},{offset : '50%'});

$(".num").counterUp({delay:10,time:2000});