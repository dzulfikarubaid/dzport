from backend import serialize
from backend.models import DetailsModel
from backend.serialize import DetailsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

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