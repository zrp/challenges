# -*- coding: utf-8 -*-

from django import forms
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.utils.translation import ugettext_lazy as _

from .models import Usuario

class UserLoginForm(forms.ModelForm):

    class Meta:
        model = Usuario
        fields = ('username', 'password')
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control line-input', 'placeholder': 'Nome de usuário'}),
            'password': forms.PasswordInput(attrs={'class': 'form-control line-input', 'placeholder': 'Senha'}),
        }
        labels = {
            'username': _(u'person'),
            'password': _(u'lock'),
        }
        #Funções para Validar e Autenticar campos de login do usuário.
        def clean(self):
            username = self.cleaned_data.get('username')
            password = self.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if not user or not user.is_active:
                raise form.ValidationError(u"Usuário ou senha inválidos")
            return self.cleaned_data

        def authenticate_user(self, username, password):
            user = authenticate(username=username, password=password)
            if not user or not user.is_active:
                raise form.ValidationError(u"Usuário ou senha inválidos")
            return user