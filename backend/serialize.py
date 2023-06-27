from rest_framework import serializers
from backend.models import DetailsModel, AIcamModel, AIchatModel, MessageModel

class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=DetailsModel
        fields="__all__"


class AIcamSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIcamModel
        fields = '__all__'
    
class AIchatSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIchatModel
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessageModel
        fields = '__all__'  