import os
import uuid

from django.conf import settings
from django.contrib.auth.models import User
from django.db import models


def user_directory_path_banner(instance, filename):
    banner_pic_name = f'user_{instance.user.id}/server_{instance.id}/server/banner.jpg'
    full_path = os.path.join(settings.MEDIA_ROOT, banner_pic_name)

    if os.path.exists(full_path):
        os.remove(full_path)

    return banner_pic_name


def user_directory_path_picture(instance, filename):
    picture_pic_name = f'user_{instance.user.id}/server_{instance.id}/server/picture.jpg'
    full_path = os.path.join(settings.MEDIA_ROOT, picture_pic_name)

    if os.path.exists(full_path):
        os.remove(full_path)

    return picture_pic_name


class ServerCategory(models.Model):
    title = models.CharField(max_length=25)
    icon = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.title


class TextChannels(models.Model):
    title = models.CharField(max_length=100)
    topic = models.CharField(max_length=150)

    def __str__(self) -> str:
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=144)
    text_channels = models.ManyToManyField(TextChannels)

    def __str__(self) -> str:
        return self.title


class Server(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    picture = models.ImageField(
        upload_to=user_directory_path_picture, null=False)
    banner = models.ImageField(
        upload_to=user_directory_path_banner, null=False)
    title = models.CharField(max_length=144)
    description = models.CharField(max_length=255, null=False)
    date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='server_owner')
    members = models.ManyToManyField(User, related_name='server_members')
    moderators = models.ManyToManyField(User, related_name='server_moderators')
    categories = models.ManyToManyField(Category)
    server_category = models.ForeignKey(ServerCategory, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title