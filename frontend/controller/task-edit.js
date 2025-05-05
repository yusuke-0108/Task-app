angular.module('taskApp')
    .controller('TaskUpdateController', function($scope, $http, $location, $routeParams) {
        $scope.task = null;
        const taskId = $routeParams.id;

        console.log('TaskUpdateController initialized with taskId:', taskId);
        $http.get(`http://localhost:8000/api/tasks/${taskId}/`)
            .then(function(response) {
                $scope.task = response.data;
                console.log('Task fetched:', $scope.task);
            }, function(error) {
                console.error('Error fetching task:', error);
            }
        );

        $scope.updateTask = function(){
            $http.put(`http://localhost:8000/api/tasks/${taskId}/`, $scope.task)
                .then(function(response) {
                    console.log('Task updated:', response.data);
                    $location.path('/tasks'); // Redirect to task list after update
                }, function(error) {
                    console.error('Error updating task:', error);
                    $scope.error = 'An error occurred while updating the task.';
                });
        };
});