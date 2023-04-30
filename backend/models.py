from django.db import models

class DetailsModel(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=40)
    desc=models.CharField(max_length=100)
    image=models.CharField(max_length=20)
    skill1=models.CharField(max_length=20)
    skill2=models.CharField(max_length=20)
    skill3=models.CharField(max_length=20)
    skill4=models.CharField(max_length=20)
    skill5=models.CharField(max_length=20)
    skill6=models.CharField(max_length=20)
    def __str__(self):
        return self.title or ''