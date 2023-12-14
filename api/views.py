from django.shortcuts import render
from api.serializers import *
from rest_framework import viewsets

from home.models import *

# Create your views here.


class AgriLandViewSet(viewsets.ModelViewSet):

    queryset = AgriLand.objects.all()
    serializer_class = AgriLandSerializer

class CanalViewSet(viewsets.ModelViewSet):

    queryset = Canal.objects.all()
    serializer_class = CanalSerializer


class AgriLandByVillageViewSet(viewsets.ModelViewSet):

    queryset = AgriLand.objects.all()
    serializer_class = AgriLandSerializer
