# Generated by Django 3.2.8 on 2021-11-25 13:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authy', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='location',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='url',
        ),
    ]