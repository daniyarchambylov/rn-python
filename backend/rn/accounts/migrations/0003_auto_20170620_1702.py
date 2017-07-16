# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-20 11:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20170531_1454'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_approved',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('user', 'Пользователь'), ('storehouse', 'Склад'), ('store', 'Торговая точка')], default='user', max_length=50),
        ),
    ]