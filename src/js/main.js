// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular");

var app = angular.module("tax-levies", []);

var levyLookup = {
  "1986 Low Income Housing": '#008778',
  "Seattle Art Museum": '#e3a51d',
  "1990 Families/Ed Levy": '#f36f21',
  "1991 Seattle Center/Comm Ctrs": '#60489d',
  "1995 Low Income Housing": '#008778',
  "1997 Families/Ed Levy": '#f36f21',
  "1999 Seattle Center/Comm Ctrs": '#60489d',
  "2000 Parks for All Levy": '#da2128',
  "2002 Low Income Housing": '#008778',
  "Fire facilities levy": '#2a9964',
  "2004 Families/Ed Levy": '#f36f21',
  "Transportation": '#2384c6',
  "Pike Place Market": '#74517a',
  "2008 Parks Levy": '#da2128',
  "2009 Housing Levy": '#5cafc9',
  "2011 Families/Ed Levy": '#f36f21',
  "2012 Library": '#98a5d4',
  "2014 Preschool Levy": '#7b5aa6'
};

var max = 0;

taxData.forEach(function(year) {
  var total = 0;
  for (var levy in year) {
    total += year[levy];
  }
  if (total > max) max = total;
});

var data = {};

taxData.forEach(function(year) {
  data[year.year] = [];
  for (var levy in year) {
    if (levy !== 'year') {
      data[year.year].push({
        number: year[levy],
        percent: year[levy] / max * 100,
        color: levyLookup[levy]
      });
    }
  }
});

app.controller("TaxController", ["$scope", function($scope) {
  $scope.data = data;
  console.log($scope.data)

  $scope.max = max;

}]);