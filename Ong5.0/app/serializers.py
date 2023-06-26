from rest_framework import serializers
from .models import Usuario,Categoria,Ong,Vaga

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id','nome','senha',)

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id','titulo',)

class OngSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ong
        fields = ('id','nome','website','senha',)

class VagaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vaga
        fields = ('id','nome','categoria','tarefas','requisito',)