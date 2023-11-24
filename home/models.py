from django.contrib.gis.db import models
import uuid

# Create your models here.


class AgriLand(models.Model):
    id = models.UUIDField(primary_key=True, unique=True,
                          editable=False, default=uuid.uuid4)
    gutno = models.IntegerField()
    geom = models.MultiPolygonField()
    gut = models.TextField()
    crop = models.TextField()
    owner = models.TextField()
    remark = models.TextField()
    village = models.TextField()
    area = models.FloatField()
    gut_no = models.TextField()

    class Meta:
        managed = False
        db_table = "AgriLand"
