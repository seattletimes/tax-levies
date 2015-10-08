// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular");

var app = angular.module("tax-levies", []);

var max = 0;

taxData.forEach(function(year) {
  var total = 0;
  for (var levy in year) {
    total += year[levy];
  }
  if (total > max) max = total;
});

app.controller("TaxController", ["$scope", function($scope) {
  $scope.data = taxData;
  console.log($scope.data)

  $scope.max = max;

  // $scope.levyLookup = [
  //   "1986 Low Income Housing",
  //   "Seattle Art Museum",
  //   "1990 Families/Ed Levy",
  //   "1991 Seattle Center/Comm Ctrs",
  //   "1995 Low Income Housing",
  //   "1997 Families/Ed Levy",
  //   "1999 Seattle Center/Comm Ctrs",
  //   "2000 Parks for All Levy",
  //   "2002 Low Income Housing",
  //   "Fire facilities levy",
  //   "2004 Families/Ed Levy",
  //   "Transportation",
  //   "Pike Place Market",
  //   "2008 Parks Levy",
  //   "2009 Housing Levy",
  //   "2011 Families/Ed Levy",
  //   "2012 Library",
  //   "2014 Preschool Levy"
  // ];
}]);