# -*- coding: utf-8 -*-

from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, PasswordChangeForm
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib import messages


def home(request):
    return render(request, 'home.html')


def cadastrar_hero(request):
    if request.method == 'POST':
        form_cadastro = UserCreationForm(request.POST)
        if form_cadastro.is_valid():
            user = form_cadastro.save()
            return redirect('logar_hero')
    else:
        form_cadastro = UserCreationForm()
    return render(request, 'cadastrar.html', {"form_cadastro":form_cadastro})


def logar_hero(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        form_login = authenticate(request, username=username, password=password)
        if form_login is not None:
            login(request, form_login)
            return redirect('home')
        else:
            messages.error(request, 'Desculpe, isso não funcionou!')
            messages.error(request, 'Por gentileza tente novamente.')
            return redirect('logar_hero')
    else:
        form_login = AuthenticationForm()
    return render(request, 'login.html', {"form_login":form_login})


def atualizar_senha(request):
    if request.method == "POST":
        form_senha = PasswordChangeForm(request.user, request.POST)
        if form_senha.is_valid():
            user = form_senha.save()            
            update_session_auth_hash(request, user)
            return redirect('home')
            messages.success(request, 'Senha atualizada com sucesso!')
            
        else:
            messages.error(request, 'Desculpe, isso não funcionou!')
            messages.error(request, 'Por gentileza tente novamente.')
            return redirect('atualizar_senha')
    else:
        form_senha = PasswordChangeForm(request.user)
    return render(request, 'reset_senha.html', {"form_senha":form_senha})


def deslogar_hero(request):
    logout(request)
    return redirect('home')