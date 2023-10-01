from django.urls import path
from . import views

urlpatterns = [
    path('chat/getchats/<int:pk>/', views.ChatAPIList.as_view()),
    path('chat/sendmessage/', views.ChatAPIList.as_view()),
    path('chat/deletemessage/<int:pk>/<uuid:server_id>/', views.delete_message_api)
]

