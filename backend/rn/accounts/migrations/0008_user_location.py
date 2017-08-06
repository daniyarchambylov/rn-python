# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-04 09:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0001_initial'),
        ('accounts', '0007_auto_20170730_1659'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='location',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='locations.Location'),
        ),
    ]
