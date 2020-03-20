from django.urls import path

from .views import *


urlpatterns = [
    path('', home, name='home'),
    path('cadastrar_hero', cadastrar_hero, name='cadastrar_hero'),
    path('logar_hero', logar_hero, name='logar_hero'),    
    path('atualizar_senha', atualizar_senha, name='atualizar_senha'),
    path('deslogar_hero', deslogar_hero, name='deslogar_hero'),
    path('cria_hero', cria_hero, name='cria_hero'),
    path('edita_hero', edita_hero, name='edita_hero'),
]