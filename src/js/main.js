// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular");

var app = angular.module("tax-levies", []);

var housing = '#008778';
var families = '#f36f21';
var seattleCenter = '#60489d';
var parks = '#da2128';
var transportation = "#3887ba";
var other ='#e3a51d';

var levyLookup = {
  "1986 Low Income Housing": housing,
  "Seattle Art Museum": other,
  "1990 Families/Ed Levy": families,
  "1991 Seattle Center/Comm Ctrs": seattleCenter,
  "1995 Low Income Housing": housing,
  "1997 Families/Ed Levy": families,
  "1999 Seattle Center/Comm Ctrs": seattleCenter,
  "2000 Parks for All Levy": parks,
  "2002 Low Income Housing": housing,
  "Fire facilities levy": other,
  "2004 Families/Ed Levy": families,
  "Transportation": transportation,
  "Pike Place Market": other,
  "2008 Parks Levy": parks,
  "2009 Housing Levy": housing,
  "2011 Families/Ed Levy": families,
  "2012 Library": other,
  "2014 Preschool Levy": families
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