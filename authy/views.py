from django.core.exceptions import PermissionDenied
from rest_framework import permissions
from rest_framework.generics import (CreateAPIView, RetrieveAPIView,
                                     UpdateAPIView)
from rest_framework.response import Response
from rest_framework.views import APIView

from authy.models import Profile

from .serializers import ProfileSerializer, UserSerializer


class GetProfileAPI(RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ProfileSerializer

    def get_object(self):
        profile = self.request.user.profile
        return profile


class UpdateProfileAPI(UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def get_object(self):
        profile = self.request.user.profile
        return profile

    def perform_update(self, serializer):
        print('DATA', self.request.data)
        obj = self.get_object()

        if self.request.user != obj.user:
            raise PermissionDenied('Wrong object owner')

        if self.request.data.get('first_name'):
            self.request.user.first_name = self.request.data['first_name']
        if self.request.data.get('email'):
            self.request.user.email = self.request.data['email']
        self.request.user.save()
        serializer.save()
