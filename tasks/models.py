from django.db import models

# Create your models here.
class Tasks(models.Model):
    PRIORITY_CHOICES =[
        (1,'High '),
        (2,'Medium'),
        (3,'Low'),
    ]
    STATUS_CHOICE=[
        ('to-do','To-Do'),
        ('in-progress','In-Progress'),
        ('done','Done'),
    ]
    title= models.CharField(max_length=255)
    status = models.CharField(max_length=20, choices=STATUS_CHOICE)
    priority = models.IntegerField(choices= PRIORITY_CHOICES ,default=2)
    created_at=models.DateTimeField(auto_now_add=True)
     
    class Meta:
        ordering=['priority','-created_at']
    
    def __str__(self):
        return self.title