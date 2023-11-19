from django.urls import path
from .views import home,about,tutorial

urlpatterns = [
    path('', home, name='home'),
    path('about', about, name='about'),
    path('tutorial', tutorial, name='tutorial'),


]
