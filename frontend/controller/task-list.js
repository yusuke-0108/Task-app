angular.module('taskApp')
  .controller('TaskListController', function($scope, $http, $routeParams, $location) {
    $scope.tasks = [];
    $scope.detailTemplateUrl = 'view/task-detail.html';
    $scope.editTemplateUrl = 'view/task-edit.html';
    $scope.mode = $location.path().endsWith('/edit') ? 'edit' : 'detail';

    $http.get('http://localhost:8000/api/tasks/')
      .then(function(response) {
        $scope.tasks = response.data;
        }, function(error) {
          console.error('Error fetching tasks:', error);
      }
    );
  });
