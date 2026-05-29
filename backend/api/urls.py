from django.urls import path

from .views import site_data


urlpatterns = [
    path("site/", site_data, name="site-data"),
]
