app.controller('ExpertiseCtrl', function($scope, $timeout) {
  $scope.images = [
  {'thumb': 'HTML_logo.png'},
  {'thumb': 'css3-logo.png'},
  {'thumb': 'JAVAScript-logo.png'},
  {'thumb': 'angular-logo.png'},
  {'thumb': 'jquerylogo320.png'},
  {'thumb': 'agile_icon.png'},
  {'thumb': 'Adobe_Photoshop_CS6_icon.png'},
  {'thumb': 'Adobe_premiere_logo.png'}]
  $scope.list1 = [];
  angular.forEach($scope.images, function(val, key) {
    $scope.list1.push({});
  });
  $scope.list2 = [
    { 'title': 'Agile', 'drag': true },
    { 'title': 'AngularJS', 'drag': true },
    { 'title': 'CSS', 'drag': true },
    { 'title': 'HTML', 'drag': true },
    { 'title': 'JavaScript', 'drag': true },
    { 'title': 'jQuery', 'drag': true },
    { 'title': 'Photoshop', 'drag': true },
    { 'title': 'Premiere', 'drag': true }
  ];
$scope.list3 = [
    { 'title': 'HTML', 'drag': true },
    { 'title': 'CSS', 'drag': true },
    { 'title': 'JavaSCript', 'drag': true },
    { 'title': 'AngularJS', 'drag': true },
    { 'title': 'jQuery', 'drag': true },
    { 'title': 'Agile', 'drag': true },
    { 'title': 'Photoshop', 'drag': true },
    { 'title': 'Premiere', 'drag': true }
  ];

  $scope.startCallback = function(event, ui, title) {
    console.log('You started draggin: ' + title.title);
    $scope.draggedTitle = title.title;
  };

  $scope.stopCallback = function(event, ui) {
    console.log('Why did you stop draggin me?');
  };

  $scope.dragCallback = function(event, ui) {
    console.log('hey, look I`m flying');
  };

  $scope.dropCallback = function(event, ui) {
    console.log('hey, you dumped me :-(' , $scope.draggedTitle);
  };

  $scope.overCallback = function(event, ui) {
    console.log('Look, I`m over you');
  };

  $scope.outCallback = function(event, ui) {
    console.log('I`m not, hehe');
  };
});