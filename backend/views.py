from backend import serialize
from backend.models import DetailsModel, AIcamModel, AIchatModel, MessageModel
from backend.serialize import DetailsSerializer, AIcamSerializer, AIchatSerializer, MessageSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.response import Response
import base64
from io import BytesIO
from PIL import Image
import os
import torch
from pathlib import Path
from decouple import config
import pandas as pd
from pprint import pprint
import requests
import re
import json
import openai
# Set up the API endpoint and headers
def chat_gpt(key):
    api_endpoint = "https://api.openai.com/v1/engines/davinci/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
    }
    # Set up the data for the API request
    data = {
        "prompt": key,
        "temperature": 0.5,
        "max_tokens": 100
    }
    # Send the request and receive the response
    response = requests.post(api_endpoint, headers=headers, json=data)
    # Print the response
    response_json = json.loads(response.text)
    # print(response_json)
    answer = response_json
    return answer

def chatopenai(key):
    openai.api_key = config('OPENAI_API_KEY')

    response = openai.Completion.create(model="text-davinci-003", prompt=key, temperature=0.5, max_tokens=100)
    answer = response['choices'][0]['text']
    answer = " ".join(answer.split()[0:])
    answer = '.'.join(answer.split('.')[0:-1])
    answer = answer+'.'
    return answer

@api_view(['POST'])
def Message(request):
    serializer = MessageSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    answer = 'Thank you for your message. Your message will be read by Me.'
    return Response({
        'answer': answer
    })

@api_view(['POST'])
def AIchat(request):
    serializer = AIchatSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    chat_data = serializer.data.get('chat')
    answer = chatopenai(chat_data)
    return Response({
        'answer': answer
    })
@api_view(['POST'])
def AIcam(request):
    serializer = AIcamSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    image_data = serializer.data.get('img')
    img_id = serializer.data.get('id_img')
    image_data = image_data.split("base64,")[1]
    image_bytes = base64.b64decode(image_data)
    image = Image.open(BytesIO(image_bytes))
    image_jpg = image.convert("RGB")
    img = "image{}.jpg".format(img_id)
    image_jpg.save(img)
    model = torch.hub.load('ultralytics/yolov5', 'yolov5l')
    results = model(img)
    df = results.pandas().xyxy[0]
    if df['name'][0] == "person":
        summarize = "You are {}, have a nice day!".format(df['name'][0])
    else:
        summarize = "Woah, what is that? It's {} right?".format(df['name'][0])
    results.ims
    results.render()
    for im in results.ims:
        buffered = BytesIO()
        im_base64 = Image.fromarray(im)
        im_base64.save(buffered, format="JPEG")
        img_data_result = base64.b64encode(buffered.getvalue()).decode('utf-8') 
        img_data_result = "data:image/jpeg;base64,{}".format(img_data_result)
    os.remove(img)
    return Response({
        'img': img_data_result,
        'summarize': summarize
    })
class DetailsTable(APIView):
    def get(self, request):
        detailsObj=DetailsModel.objects.all()
        dlSerializeObj = DetailsSerializer(detailsObj,many=True)
        return Response(dlSerializeObj.data)
    def post(self, request):
        serializeObj = DetailsSerializer(data=request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)

class DetailsUpdate(APIView):
    def post(self,request,pk):
        try:
            detailObj=DetailsModel.objects.get(pk=pk)
        except:
            return Response("Data not found")
        serializeObj = DetailsSerializer(detailObj,data=request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)

class DetailsDelete(APIView):
    def post(self,request,pk):
        try:
            detailObj=DetailsModel.objects.get(pk=pk)
        except:
            return Response("Data not found")
        detailObj.delete()
        return Response(200)

