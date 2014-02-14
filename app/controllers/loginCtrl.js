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
        timer = setInterval(function(){navigator.accelerometer.getCurrentAcceleration(onSuccess, onError)}, 500);
    };



    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = $("#mongo");
        element.text('Acceleration X: ' + acceleration.x + '<br />' +
            'Acceleration Y: ' + acceleration.y + '<br />' +
            'Acceleration Z: ' + acceleration.z + '<br />' +
            'Timestamp: '      + acceleration.timestamp + '<br />');
        if (acceleration.y > 20 || acceleration.y < -20) {
            counter++;
        }
        wankString.text(counter);
        if (counter > 40) {
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
