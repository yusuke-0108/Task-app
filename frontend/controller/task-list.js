angular.module('taskApp')
  .controller('TaskListController', function($scope, $http, $routeParams) {
    $scope.tasks = [];
    $scope.detailTemplateUrl = '';
    $scope.mode = 'detail';

    $http.get('http://localhost:8000/api/tasks/')
      .then(function(response) {
        $scope.tasks = response.data;
        }, function(error) {
          console.error('Error fetching tasks:', error);
      }
    );

    if ($routeParams.id) {
      $scope.detailTemplateUrl = 'view/task-detail.html';
      $scope.taskId = $routeParams.id;
    } else {
      $scope.detailTemplateUrl = ''; 
    }

    $scope.editTask = function() {
      $scope.mode = 'edit';
      $scope.editTemplateUrl = 'view/task-edit.html';
      console.log('editTask called');
    }
  });
