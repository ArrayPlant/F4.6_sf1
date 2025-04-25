from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from recipes import views as recipe_views

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Swagger/OpenAPI schema view
schema_view = get_schema_view(
    openapi.Info(
        title="API рецептов",
        default_version='v1',
        description="Документация API для приложения рецептов",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

# Configure routers for API endpoints
router = routers.DefaultRouter()
router.register(r'categories', recipe_views.CategoryViewSet, basename='category')
router.register(r'recipes', recipe_views.RecipeViewSet, basename='recipe')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='api-docs'),
]
