from django.contrib.auth.models import User
from django.db.models import Q
from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework import filters, generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from server.models import Server

from .models import Notification
from .serializers import NotificationSerializer


class ResponsePagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 10


class NotificationAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        obj = get_object_or_404(Notification, pk=pk)

        return obj

    def get(self, request, formt=None):
        notifications = Notification.objects.filter(to_user=request.user)
        serializer = NotificationSerializer(notifications, many=True)

        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = NotificationSerializer(data=request.data)
        to_user = User.objects.get(username=request.data['to_user'])
        to_server = Server.objects.get(pk=request.data['to_server'])

        if serializer.is_valid():
            serializer.save(to_user=to_user, to_server=to_server,
                            from_user=request.user)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        notification = self.get_object(pk=pk)

        if request.user == notification.to_user:
            notification.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def accept_invitation(request, pk):
    notification = Notification.objects.get(id=pk)
    server = Server.objects.get(pk=notification.to_server.id)
    if request.user == notification.to_user:
        if notification.notification_type == 1:
            server.members.add(notification.to_user)
            server.save()
            notification.delete()
        else:
            server.members.add(notification.from_user)
            server.save()
            notification.delete()
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def request_to_join_server(request):
    serializer = NotificationSerializer(data=request.data)
    to_server = Server.objects.get(pk=request.data['to_server'])
    to_user = User.objects.get(pk=to_server.user.id)
    if serializer.is_valid(raise_exception=True):
        serializer.save(to_user=to_user, to_server=to_server,
                        from_user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
