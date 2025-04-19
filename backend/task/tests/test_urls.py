from django.test import SimpleTestCase
from django.urls import resolve, reverse
from task.views import TaskListView, TaskDetail

class TestUrls(SimpleTestCase):

    def test_task_list_url_resolves(self):
        url = reverse('task-list')
        resolved_view = resolve(url).func.view_class
        self.assertEqual(resolved_view, TaskListView)

    def test_task_detail_url_resolves(self):
        url = reverse('task-detail', args=[1])
        resolved_view = resolve(url).func.view_class
        self.assertEqual(resolved_view, TaskDetail)
