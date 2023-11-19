from django.urls import path
from .views import about, register,tutorial,user_login,home

urlpatterns = [
    path('', user_login, name='user_login'),
    path('about', about, name='about'),
    path('tutorial', tutorial, name='tutorial'),
    path('home', home, name='home'),
    path('register', register, name='register'),
]
