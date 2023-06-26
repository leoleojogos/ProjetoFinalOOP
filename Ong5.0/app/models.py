from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=100) 
    senha = models.CharField(max_length=100) 

class Ong(models.Model):
    nome = models.CharField(max_length=40)
    website = models.CharField(max_length=40)
    senha = models.CharField(max_length=40)

class Categoria(models.Model):
    titulo = models.CharField(max_length=40)

class Vaga(models.Model):
    nome = models.CharField(max_length=40)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL,null=True)
    tarefas = models.CharField(max_length=40)
    requisito = models.CharField(max_length=40)

