from rest_framework import serializers
from .models import Tasks

class TaskSerializer(serializers.ModelSerializer):
    priority_label =serializers.CharField(
        source='get_priority_display',read_only=True
    )
    status_label=serializers.CharField(
        source='get_status_display',read_only=True
    )
    class Meta:
        model =Tasks
        fields=[  'id','title' ,'status','status_label','priority',
                   'priority_label','created_at'
        ]