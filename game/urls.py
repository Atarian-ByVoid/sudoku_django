from django.urls import path
from .views import home,about, register,tutorial,user_login

urlpatterns = [
    path('', home, name='home'),
    path('about', about, name='about'),
    path('tutorial', tutorial, name='tutorial'),
    path('login', user_login, name='login'),
    path('register', register, name='register'),



]
