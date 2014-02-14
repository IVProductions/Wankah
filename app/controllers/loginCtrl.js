function loginCtrl($scope, $location){

    // Check if user has already logged in before
    // COD CODE CODE CODE CODE

    // If not register through facebook / gmail / ingame account
    // COD CODE CODE CODE CODE

    $scope.changeView = function(view){
        $location.path(view);
    }

    var timer;
    var counter;
    $scope.accel = function() {
        counter = 0;
        timer = setInterval(function(){navigator.accelerometer.getCurrentAcceleration(onSuccess, onError)}, 1000);
    };



    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = $("#mongo");
        var wankString = $("#wankString");
        var y = parseInt(acceleration.y);
        element.text(y);
        /*
        element.text("Acceleration X: " + acceleration.x + "\n" +
            "Acceleration Y: " + acceleration.y + "\n" +
            "Acceleration Z: " + acceleration.z + "\n" +
            "Timestamp: "      + acceleration.timestamp + "\n");
        */
        if (y > 10) {
            counter++;
            wankString.text(counter);
        }
        else {
            wankString.text("Nooooo");
        }
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
