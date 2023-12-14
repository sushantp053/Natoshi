from django.shortcuts import render
from api.serializers import AgriLandSerializer
from rest_framework import viewsets

from home.models import AgriLand

# Create your views here.


class AgriLandViewSet(viewsets.ModelViewSet):

    queryset = AgriLand.objects.filter(village="Dhavade")
    serializer_class = AgriLandSerializer
