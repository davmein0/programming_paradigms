from django.urls import path

from . import views
app_name = "blog"

urlpatterns = [
    # ex: /blog/2
    path('<int:pk>/', views.PostDetailView.as_view(), name='view'),
    # ex: /blog/
    path('', views.IndexView.as_view(), name='index'),
]
