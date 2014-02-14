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
        timer = setInterval(function(){navigator.accelerometer.getCurrentAcceleration(onSuccess, onError)}, 500);
    };



    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = $("#mongo");
        var wankString = $("#wankString");
        var y = parseInt(acceleration.y);
        element.text(y);

        if (y > 20 || y < -20) {
            counter++;
            wankString.text(counter);
        }
        if (parseInt(counter) > 12) {
            clearInterval(timer);
            navigator.notification.vibrate(2500);   //iphone will ignore the 2500 ms value and vibrate for an unknown default value of time
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
