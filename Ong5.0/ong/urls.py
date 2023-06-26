from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from app import views

router = routers.DefaultRouter()
router.register(r"usuario",views.UsuarioViewSet)
router.register(r"ong",views.OngViewSet)
router.register(r"categoria",views.CategoriaViewSet)
router.register(r"vaga",views.VagaViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('app/', include(router.urls)),
    path('app/login/', views.LoginViewSet.as_view()),
]
