app.controller("OverseasCtrl", function($scope, $location) {
    $scope.highwayDate = false;
    $scope.highwayDescription = false;
    $scope.highwayName = "Overseas Highway";

    $scope.showDate = () => {
    	$scope.highwayDate = true;
    }
    $scope.showDescription = () => {
    	$scope.highwayDescription = true;
    }
    $scope.goHome = () => {
    	$location.url("/hwyhome");
    }
});