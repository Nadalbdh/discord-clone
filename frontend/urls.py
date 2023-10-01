from django.urls import path

from .views import index

urlpatterns = [
    path('', index, name='index'),
    path('explore/', index, name='index'),
    path('notifications/', index, name='index'),
    path('profile/', index, name='index'),
]
