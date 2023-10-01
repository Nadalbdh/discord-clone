from django.urls import path

from . import views

urlpatterns = [
    path('notification/getnotifications/', views.NotificationAPI.as_view()),
    path('notification/createinvitation/', views.NotificationAPI.as_view()),
    path('notification/deletenotification/<int:pk/',
         views.NotificationAPI.as_view()),
    path('notification/invitation/<int:pk>/', views.accept_invitation),
    path('notification/invitation/request/', views.request_to_join_server)
]
