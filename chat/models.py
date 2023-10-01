import os

from django.contrib.auth.models import User
from django.db import models
from server.models import TextChannels


def user_directory_path(instance, filename):
    return f'user_{instance.user.id}/{filename}'


class Message(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='server_message_user')
    body = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
    file = models.FileField(
        upload_to=user_directory_path, blank=True, null=True)
    channel = models.ForeignKey(
        TextChannels, on_delete=models.CASCADE, related_name='msg_channel')
    is_read = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f'{self.body}'
