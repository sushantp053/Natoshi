from django.shortcuts import render
from .models import *
from django.core.serializers import serialize

# Create your views here.


def home(request):
    agriland = AgriLand.objects.all()
    d = serialize("geojson", AgriLand.objects.all())
    context = {"agriland": d}

    return render(request, "home.html", context=context)
