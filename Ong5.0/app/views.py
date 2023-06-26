from rest_framework.viewsets import ModelViewSet
from .models import Usuario,Ong,Categoria,Vaga
from rest_framework import generics,status
from rest_framework.response import Response
from .serializers import VagaSerializer,UsuarioSerializer,CategoriaSerializer,OngSerializer

class UsuarioViewSet(ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class OngViewSet(ModelViewSet):
    queryset = Ong.objects.all()
    serializer_class = OngSerializer

class CategoriaViewSet(ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class VagaViewSet(ModelViewSet):
    queryset = Vaga.objects.all()
    serializer_class = VagaSerializer

class LoginViewSet(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

    def create(self, request, *args, **kwargs):
        nome = request.data["nome"]
        senha = request.data["senha"]

        if(self.queryset.filter(nome = nome, senha = senha).first() is not None):
            return Response(status = status.HTTP_200_OK)
        else:
            return Response(status = status.HTTP_404_NOT_FOUND,data={"mensagem":"usuario ou senha incorretos"})
            