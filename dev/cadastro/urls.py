from django.urls import path

from .views import *


urlpatterns = [
    path('', login, name='login'),
    path('home', home, name='home'),
    path('base', base, name='base'),
]