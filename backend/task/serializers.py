from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'detail', 'completed', 'place', 'created_at', 'updated_at', 'due_date']
        read_only_fields = ['id', 'created_at']