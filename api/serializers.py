from rest_framework_gis.serializers import GeoFeatureModelSerializer

from home.models import *


class AgriLandSerializer(GeoFeatureModelSerializer):

    class Meta:
        model = AgriLand
        geo_field = 'geom'
        fields = '__all__'

class CanalSerializer(GeoFeatureModelSerializer):

    class Meta:
        model = Canal
        geo_field = 'geom'
        fields = '__all__'
