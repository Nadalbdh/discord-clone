from authy.serializers import UserSerializer
from rest_framework import serializers
from server.serializers import ServerSerializer

from .models import Notification


class NotificationSerializer(serializers.ModelSerializer):
    to_user = UserSerializer(read_only=True)
    from_user = UserSerializer(read_only=True)
    to_server = ServerSerializer(read_only=True)

    class Meta:
        model = Notification
        fields = '__all__'
        depth = 1
