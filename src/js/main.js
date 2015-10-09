// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular");

var app = angular.module("tax-levies", []);

var c1 = "#2F2933";
var c2 = "#53516E";
var c3 = "#7D7AA6";
var c4 = "#6578A6";
var c5 = "#5FBAD9";
var c6 = "#01A2A6";
var c7 = "#29D9C2";
var c8 = "#92F2B6";
var c9 = "#BDF271";
var c10 = "#FFE878";

var housing = c10;
var art = c9;
var families = c8;
var seattleCenter = c7;
var parks = c6;
var fire = c5;
var transportation = c4;
var market = c3;
var library = c2;
var preschool = c1;

var levyLookup = {
  "1986 Low Income Housing": housing,
  "1990 Seattle Art Museum": art,
  "1990 Families/Ed": families,
  "1991 Seattle Center/Comm Ctrs": seattleCenter,
  "1995 Low Income Housing": housing,
  "1997 Families/Ed": families,
  "1999 Seattle Center/Comm Ctrs": seattleCenter,
  "2000 Parks for All": parks,
  "2002 Low Income Housing": housing,
  "2004 Fire Facilities": fire,
  "2004 Families/Ed": families,
  "2006 Bridging the Gap Transportation": transportation,
  "2009 Pike Place Market": market,
  "2008 Parks": parks,
  "2009 Housing": housing,
  "2011 Families/Ed": families,
  "2012 Library": library,
  "2014 Preschool": preschool,
  "2016 Seattle Park District": parks,
  "2016 Move Seattle Transportation": transportation
};

// find maximum
var max = 0;
taxData.forEach(function(year) {
  var total = 0;
  for (var levy in year) {
    total += year[levy];
  }
  if (total > max) max = total;
});

// restructure data
var data = [];
taxData.forEach(function(year) {
  var yearObj = { year: year.year };
  yearObj.levies = [];
  for (var levy in year) {
    if (levy !== 'year') {
      var rounded = Math.round(year[levy]/100000)/10;

      yearObj.levies.push({
        name: levy,
        number: year[levy],
        percent: year[levy] / max * 100,
        color: levyLookup[levy],
        rounded: rounded
      });
    }
  }
  data.push(yearObj);
});

app.controller("TaxController", ["$scope", function($scope) {
  $scope.data = data;
  $scope.max = max;
  $scope.selected = $scope.data[0];

  $scope.showTooltip = function(obj) {
    $scope.selected = obj;
  }
}]);

