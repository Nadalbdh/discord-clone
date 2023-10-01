from authy.serializers import UserSerializer
from django.db.models import fields
from rest_framework import serializers

from .models import Category, Server, ServerCategory, TextChannels


class ServerCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServerCategory
        fields = '__all__'


class ServerTextChannelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextChannels
        fields = '__all__'


class ServerChannelCategoriesSerializer(serializers.ModelSerializer):
    text_channels = ServerTextChannelsSerializer(many=True, required=False)

    class Meta:
        model = Category
        fields = '__all__'


class ServerSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    members = UserSerializer(many=True, required=False)
    moderators = UserSerializer(many=True, required=False)
    categories = ServerChannelCategoriesSerializer(many=True, required=False)
    server_category = ServerCategorySerializer(required=False)

    class Meta:
        model = Server
        fields = '__all__'


class ServerDetailSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    members = UserSerializer(many=True)
    moderators = UserSerializer(many=True)

    class Meta:
        model = Server
        fields = '__all__'
        depth = 2