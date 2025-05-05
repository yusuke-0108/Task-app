angular.module('taskApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/tasks', {
        templateUrl: 'view/layout.html', // 一覧＋右にng-view
        controller: 'TaskListController'
      })
      .when('/tasks/:id', {
        templateUrl: 'view/layout.html', // 同じlayoutを再利用
        controller: 'TaskListController' // 同じコントローラー
      })
      .otherwise({
        redirectTo: '/tasks'
      });
  });
