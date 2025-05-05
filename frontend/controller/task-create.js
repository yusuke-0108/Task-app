angular.module('taskApp')
    .controller('TaskCreateController', function($scope, $http, $location) {
        $scope.newTask = {
            title: '',
            detail: '',
            completed: false
        };

        $scope.createTask = function() {
            $http.post('http://localhost:8000/api/tasks/', $scope.newTask)
                .then(function(response) {
                    console.log('Task created:', response.data);
                    $location.path('/tasks'); // Redirect to task list after creation
                }, function(error) {
                    console.error('Error creating task:', error);
                    $scope.error = 'An error occurred while creating the task.';
                });
        };
    });