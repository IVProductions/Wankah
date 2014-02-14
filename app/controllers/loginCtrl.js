function loginCtrl($scope, $location){

    // Check if user has already logged in before
    // COD CODE CODE CODE CODE

    // If not register through facebook / gmail / ingame account
    // COD CODE CODE CODE CODE

    $scope.changeView = function(view){
        $location.path(view);
    }

    var timer;
    var counter = 0;
    $scope.accel = function() {
        $("#wankString").text(counter);
        timer = setInterval(function(){navigator.accelerometer.getCurrentAcceleration(onSuccess, onError)}, 500);
    };



    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = $("#mongo");
        element.text("Acceleration X: " + acceleration.x + "\n" +
            "Acceleration Y: " + acceleration.y + "\n" +
            "Acceleration Z: " + acceleration.z + "\n" +
            "Timestamp: "      + acceleration.timestamp + "\n");
        if (acceleration.y > 20 || acceleration.y < -20) {
            counter++;
        }
        wankString.text(counter);
        if (counter > 20) {
            clearInterval(timer);
        }
    }

    function stopWatch() {
        navigator.accelerometer.clearWatch(watchID);
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }



}
