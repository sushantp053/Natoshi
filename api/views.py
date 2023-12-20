from django.shortcuts import render
from api.serializers import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from home.models import *

# Create your views here.


class AgriLandViewSet(viewsets.ModelViewSet):

    queryset = AgriLand.objects.all()
    serializer_class = AgriLandSerializer

class CanalViewSet(viewsets.ModelViewSet):

    queryset = Canal.objects.all()
    serializer_class = CanalSerializer


class AgriLandByVillageViewSet(APIView):

    def get(self, request, village):
        data = AgriLand.objects.filter(village=village)
        serializer = AgriLandSerializer(data, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        data = request.data
        village = data.get("village")   
        data = AgriLand.objects.filter(village=village)
        serializer = AgriLandSerializer(data, many=True)
        return Response(serializer.data)
