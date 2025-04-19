from django.test import TestCase
from task.models import Task

class TaskModelTests(TestCase):
    """初期状態では何も登録されていないことをテスト"""
    def test_is_empty(self):
        tasks = Task.objects.all()
        self.assertEqual(tasks.count(), 0)
    
    def test_is_count_one(self):
        """1つレコードを適当に作成すると、レコードが1つだけカウントされることをテスト"""
        task = Task(title="test_title",
                    detail="test_detail")
        task.save()
        tasks = Task.objects.all()
        self.assertEqual(tasks.count(), 1)
    
    def test_saving_and_retrieving_task(self):
        """内容を指定してデータを保存し、すぐに取り出した時に保存した時と同じ値が返されることをテスト"""
        task = Task(title="test_title",
                    detail="test_detail")
        task.save()
        
        saved_task = Task.objects.all()[0]
        
        self.assertEqual(saved_task.title, task.title)
        self.assertEqual(saved_task.detail, task.detail)
