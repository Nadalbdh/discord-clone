from django.urls import path
from . import views

urlpatterns = [
    path('server/getservers/', views.ServerAPI.as_view()),
    path('server/createserver/', views.ServerAPI.as_view()),
    path('server/getserverdetail/<uuid:pk>/', views.server_detail_api),
    path('server/getcategories/', views.server_categories_api),
    path('server/getserverscategory/<int:pk>/', views.ServersInCategoryAPI.as_view()),
    path('server/searchserver/', views.ServerSearch.as_view()),
    path('server/createcategorychannel/', views.category_channels_create),
    path('server/createtextchannel/', views.text_channels_create),
    path('server/ban/<int:pk>/<uuid:server_id>/', views.ban_api),
    path('server/leaveserver/<uuid:server_id>/', views.leave_server_api)
]