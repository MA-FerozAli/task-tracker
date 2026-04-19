from django.shortcuts import render
from rest_framework import viewsets,filters
from .serializers import TaskSerializer
from .models import Tasks               
# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class=TaskSerializer

    def get_queryset(self):
        queryset=Tasks.objects.all()
        status=self.request.query_params.get('status')
        if status:
            queryset=queryset.filter(status=status)
        return queryset    