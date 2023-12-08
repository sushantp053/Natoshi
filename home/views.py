from django.shortcuts import render
from .models import *
from django.core.serializers import serialize

# Create your views here.


def home(request):
    d = serialize("geojson", AgriLand.objects.all())
    data = {"data": d}
    v = AgriLand.objects.distinct("village").all()
    c = AgriLand.objects.distinct("crop").all()

    return render(request, "home.html", context={"data": data, "villages": v, "crops": c})


def homeMin(request):
    d = serialize("geojson", AgriLand.objects.all())
    data = {"data": d}
    v = AgriLand.objects.distinct("village").all()
    c = AgriLand.objects.distinct("crop").all()

    return render(request, "homemin.html", context={"data": data, "villages": v, "crops": c})
