# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-12-09 07:55
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='promotion',
            name='date_debut',
        ),
        migrations.RemoveField(
            model_name='promotion',
            name='date_validite',
        ),
    ]