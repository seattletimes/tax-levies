// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular");

var app = angular.module("tax-levies", []);

var housing = '#d94801';
var families = '#f16913';
var seattleCenter = '#fdae6b';
var parks = '#6a51a3';
var transportation = "#807dba";
var other ='#bcbddc';

var levyLookup = {
  "1986 Low Income Housing": housing,
  "1990 Seattle Art Museum": other,
  "1990 Families/Ed": families,
  "1991 Seattle Center/Comm Ctrs": seattleCenter,
  "1995 Low Income Housing": housing,
  "1997 Families/Ed": families,
  "1999 Seattle Center/Comm Ctrs": seattleCenter,
  "2000 Parks for All": parks,
  "2002 Low Income Housing": housing,
  "2004 Fire Facilities": other,
  "2004 Families/Ed": families,
  "2006 Bridging the Gap Transportation": transportation,
  "2009 Pike Place Market": other,
  "2008 Parks": parks,
  "2009 Housing": housing,
  "2011 Families/Ed": families,
  "2012 Library": other,
  "2014 Preschool": families
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
      yearObj.levies.push({
        name: levy,
        number: year[levy],
        percent: year[levy] / max * 100,
        color: levyLookup[levy]
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

