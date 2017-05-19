app.controller("LincolnCtrl", function($scope, $location) {
    $scope.highwayDescription = false;
    $scope.highwayName = "Lincoln Highway";

    $scope.showDescription = () => {
    	$scope.highwayDescription = true;
    }
    $scope.goHome = () => {
    	$location.url("/hwyhome");
    }

});