from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(default='', blank=True)
    place = models.CharField(max_length=200, default='', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    due_date = models.DateTimeField(null=True, blank=True)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title