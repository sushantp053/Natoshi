from django.contrib.gis.db import models
import uuid


class AgriLand(models.Model):
    id = models.AutoField(primary_key=True, unique=True,)
    gutno = models.IntegerField()
    geom = models.MultiPolygonField()
    gut = models.TextField()
    crop = models.TextField()
    owner = models.TextField()
    remark = models.TextField()
    village = models.TextField()
    area = models.FloatField()
    gut_no = models.TextField()

    def save(self, *args, **kwargs):
        if not AgriLand.objects.count():
            self.id = 1000
        else:
            self.id = AgriLand.objects.last().id + 1
        super(AgriLand, self).save(*args, **kwargs)

    class Meta:
        managed = False
        db_table = "AgriLand"

class Canal(models.Model):
    id = models.AutoField(primary_key=True, unique=True,)
    geom = models.MultiLineStringField()

    def save(self, *args, **kwargs):
        if not Canal.objects.count():
            self.id = 1000
        else:
            self.id = Canal.objects.last().id + 1
        super(Canal, self).save(*args, **kwargs)

    class Meta:
        managed = False
        db_table = "Canal"