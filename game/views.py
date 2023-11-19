from django.shortcuts import redirect, render

from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required

from game.forms import RegisterForm

@login_required
def home(request):
    return render(request, 'home.html')

@login_required
def about(request):
    return render(request, 'about.html')

@login_required
def game(request):
    return render(request, 'game.html')

@login_required
def tutorial(request):
    return render(request, 'tutorial.html')

@login_required
def profile(request):
    return render(request, 'profile.html')


def register(request):
    if request.POST:
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(user.password)
            user.save()
            request.session['message'] = "Registro bem-sucedido!"
            return redirect('/')
    else:
        form = RegisterForm()

    return render(request, 'register.html', {'form': form})



def user_login(request):
    user = None
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
    return render(request, 'login.html')

