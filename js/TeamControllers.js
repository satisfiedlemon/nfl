app.controller('TeamController', ['$scope', function($scope) {
  $scope.teams = [
    {
      city: "Baltimore",
      name: "Ravens",
      division: "AFC North"
    },
    {
      city: "Cincinnati",
      name: "Bengals",
      division: "AFC North"
    },
    {
      city: "Chicago",
      name: "Bears",
      division: "AFC North"
    },
    {
      city: "Pittsburgh",
      name: "Steelers",
      division: "AFC North"
    },
  ]
}]);