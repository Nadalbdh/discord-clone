# Generated by Django 3.2.8 on 2021-10-28 08:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='textchannels',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='textchannels',
            name='topic',
            field=models.CharField(max_length=150),
        ),
    ]
