from turtle import title
from urllib import response
from django.test import TestCase
from django.urls import reverse
from ..models import Task

class TaskListTest(TestCase):
    def test_get(self):
        """タスク一覧を取得するテスト"""
        response = self.client.get(reverse("task-list"))
        self.assertEqual(response.status_code, 200)
    
    def test_post_valid(self):
        """DBに保存出来た場合のテスト"""
        response = self.client.post(
            path=reverse("task-list"),
            data={"title": "test_title",
                  "detail": "test_detail"},
        )
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()["title"], "test_title")
        self.assertEqual(response.json()["detail"], "test_detail")
    
    def test_post_invalid(self):
        """DBに保存できなかった場合のテスト"""
        response = self.client.post(
            path=reverse("task-list"),
            data={"title": "",
                  "detail": "test_detail"},
        )
        self.assertNotEqual(response.status_code, 201)

class TaskDetailTest(TestCase):
    def setUp(self):
        self.task1 = Task.objects.create(title="test_1_title",
                                       detail="test_1_detail")
        self.task2 = Task.objects.create(title="test_2_title",
                                        detail="test_2_detail")
    
    def test_get_valid(self):
        """DBに存在するレコードにアクセス出来るかのテスト"""
        response = self.client.get(reverse("task-detail", args=[self.task1.id]))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["title"], self.task1.title)
        self.assertEqual(response.json()["detail"], self.task1.detail)
    
    def test_get_invalid(self):
        """DBに存在しないレコードにアクセス使用としたとき、正しいレスポンスを返すかのテスト"""
        response = self.client.get(reverse("task-detail", args=[999]))
        self.assertNotEqual(response.status_code, 200)
        self.assertEqual(response.status_code, 404)
        

        