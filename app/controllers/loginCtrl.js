function loginCtrl($scope, $location){

    // Check if user has already logged in before
    // COD CODE CODE CODE CODE

    // If not register through facebook / gmail / ingame account
    // COD CODE CODE CODE CODE

    $scope.changeView = function(view){
        $location.path(view);
    }

    $scope.accel = function() {
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        //navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    };
    var counter;

    function onSuccess(acceleration) {
        counter ++;
        alert('Acceleration X: ' + acceleration.x + '\n' +
            'Acceleration Y: ' + acceleration.y + '\n' +
            'Acceleration Z: ' + acceleration.z + '\n' +
            'Timestamp: '      + acceleration.timestamp + '\n');
        console.log(counter);
    };

    function onError() {
        alert('onError!');
    };



}
