from django.urls import path, include
from api.views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'agriland', AgriLandViewSet)
router.register(r'canal', CanalViewSet)

urlpatterns = [
    path('v1/', include(router.urls)),
    path('v1/agriland/<str:village>', AgriLandByVillageViewSet.as_view()),
]
