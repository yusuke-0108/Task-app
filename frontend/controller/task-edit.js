angular.module('taskApp')
    .controller('TaskUpdateController', function(
        $scope,
        $http,
        $location,
        $routeParams,
        TaskUtilsService
    ) {
        $scope.task = null;
        const taskId = $routeParams.id;

        $http.get(`http://localhost:8000/api/tasks/${taskId}/`)
            .then(function(response) {
                $scope.task = response.data;
                $scope.task.notEmptyFieldsTask = TaskUtilsService.notEmptyFields($scope.task);
            }, function(error) {
                console.error('Error fetching task:', error);
            }
        );

        $scope.updateTask = function(){
            let taskForUpdateRequest = angular.copy($scope.task);
            if('notEmptyFieldsTask' in taskForUpdateRequest){
                delete taskForUpdateRequest.notEmptyFieldsTask;
            }
            if (taskForUpdateRequest.due_date instanceof Date) {
                taskForUpdateRequest.due_date = TaskUtilsService.formatDateToUTC(taskForUpdateRequest.due_date);
            }
            $http.put(`http://localhost:8000/api/tasks/${taskId}/`, taskForUpdateRequest)
                .then(function(response) {
                    $location.path(`/tasks/${taskId}`); // Redirect to task list after update
                }, function(error) {
                    console.error('Error updating task:', error);
                    $scope.error = 'An error occurred while updating the task.';
                });
        };
});