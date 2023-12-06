from django.shortcuts import render
from .models import *
from django.core.serializers import serialize

# Create your views here.


def home(request):
    agriland = AgriLand.objects.all()
    d = serialize("geojson", AgriLand.objects.all())
    data = {"data": d}
    v = AgriLand.objects.distinct("village").all()
    c = AgriLand.objects.distinct("crop").all()

    return render(request, "home.html", context={"data": data, "villages": v, "crops": c})
