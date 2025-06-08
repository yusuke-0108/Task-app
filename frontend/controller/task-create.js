angular.module('taskApp')
    .controller('TaskCreateController', function(
        $scope,
        $http,
        $location,
        TaskUtilsService
    ) {
        $scope.newTask = {
            title: '',
            detail: '',
            place: '',
            due_date: '',
            completed: false
        };
        
        $scope.showFieldSelector = false;
        $scope.additionalFields = [];
        $scope.availableFields = [
            { key: 'place', label: '場所' },
            { key: 'due_date', label: '期限' },
            { key: 'detail', label: '詳細' }
        ];
        $scope.fieldDefinitions = {
            place: { label: '場所', type: 'text' },
            due_date: { label: '期限', type: 'date' },
            detail: { label: '詳細', type: 'text' }
        };

        $scope.createTask = function() {
            if ($scope.newTask.due_date instanceof Date) {
                $scope.newTask.due_date = TaskUtilsService.formatDateToUTC($scope.newTask.due_date);
            }
            $http.post('http://localhost:8000/api/tasks/', $scope.newTask)
                .then(function(response) {
                    console.log('Task created:', response.data);
                    $location.path('/tasks'); // Redirect to task list after creation
                }, function(error) {
                    console.error('Error creating task:', error);
                    $scope.error = 'An error occurred while creating the task.';
                });
        };

        $scope.toggleFieldSelector = function() {
            $scope.showFieldSelector = true;
        };

        $scope.addField = function(field_key) {
            console.log('Adding field:', field_key);
            if(!$scope.additionalFields.includes(field_key)) {
                $scope.additionalFields.push(field_key);
            }
            $scope.showFieldSelector = false;
        };
    });