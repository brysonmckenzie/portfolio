# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Message (models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    phone = models.CharField(max_length=30, null=True)
    message = models.CharField(max_length=125)


    
