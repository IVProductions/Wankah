function loginCtrl($scope, $location){

    // Check if user has already logged in before
    // COD CODE CODE CODE CODE

    // If not register through facebook / gmail / ingame account
    // COD CODE CODE CODE CODE

    $scope.changeView = function(view){
        $location.path(view);
    }

    $scope.accel = function() {
        //navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        var options = { frequency: 500 };   //has to be between 40 ms and 1000 ms on iphone
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError, options);
    };
    var counter = 0;


    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = $("#mongo");
        counter++;
        element.text('Acceleration X: ' + acceleration.x + '<br />' +
            'Acceleration Y: ' + acceleration.y + '<br />' +
            'Acceleration Z: ' + acceleration.z + '<br />' +
            'Timestamp: '      + acceleration.timestamp + '<br />');
        if (counter > 10) {
            stopWatch();
        }
    }

    function stopWatch() {
        //if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
          //  watchID = null;
        //}
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }



}
