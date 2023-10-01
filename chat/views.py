from django.shortcuts import get_object_or_404
from rest_framework import filters, generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView
from server.models import Server, TextChannels

from chat.serializers import ChatSerializer

from .models import Message


class ResponsePagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 10


class ChatAPIList(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        return get_object_or_404(TextChannels, id=pk)

    def get(self, request, pk, format=None):
        channel = self.get_object(pk)
        messages = Message.objects.filter(channel=channel).order_by('-date')

        paginator = ResponsePagination()
        results = paginator.paginate_queryset(messages, request)
        serializer = ChatSerializer(
            results, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        serializer = ChatSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_4OO_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([permissions.IsAuthenticated])
def delete_message_api(request, pk, server_id):
    server = Server.objects.get(id=server_id)
    if request.user in server.moderators.all() or request.user in server.user:
        Message.objects.get(id=pk).delete()

        return Response(status=status.HTTP_202_ACCEPTED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)
