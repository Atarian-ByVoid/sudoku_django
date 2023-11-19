from django.urls import path
from .views import about, register,tutorial,user_login,home,game,profile, user_logout_view

urlpatterns = [
    path('', user_login, name='user_login'),
    path('about', about, name='about'),
    path('tutorial', tutorial, name='tutorial'),
    path('home', home, name='home'),
    path('game', game, name='game'),
    path('profile', profile, name='profile'),
    path('register', register, name='register'),
    path('logout', user_logout_view, name='logout'),

]
