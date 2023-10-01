from django.urls import path

from . import views

urlpatterns = [
    # path('profile/getprofile/', views.ProfileAPI.as_view()),
    # path('profile/createprofile', views.ProfileAPI.as_view()),
    path('profile/getprofile/', views.GetProfileAPI.as_view()),
    path('profile/updateprofile/', views.UpdateProfileAPI.as_view()),

]
