from django.urls import path
from .views import about, register,tutorial,user_login,home,game

urlpatterns = [
    path('', user_login, name='user_login'),
    path('about', about, name='about'),
    path('tutorial', tutorial, name='tutorial'),
    path('home', home, name='home'),
    path('game', game, name='game'),
    path('register', register, name='register'),
]
