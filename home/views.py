from django.shortcuts import render
from .models import *

# Create your views here.


def home(request):
    agriland = AgriLand.objects.all()
    context = {"agriland": agriland}

    return render(request, "home.html", context=context)
