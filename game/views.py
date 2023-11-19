from django.shortcuts import render

from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def tutorial(request):
    return render(request, 'tutorial.html')

