# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.myIndex, name='index'),
# ]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.HelloApiView.as_view(), name='index'),
]