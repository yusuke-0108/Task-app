angular.module('taskApp')
    .controller('TaskDetailController', function($scope, $http, $routeParams) {
        const taskId = $routeParams.id;

        if(taskId){
            console.log('Task ID:', taskId);
            
            $scope.task = null;
            $scope.error = null;
            
            $http.get(`http://localhost:8000/api/tasks/${taskId}/`)
                .then(function(response) {
                    $scope.task = response.data;
                }, function(error) {
                    console.error('Error fetching task:', error);
                }
            );
    }
    }
);