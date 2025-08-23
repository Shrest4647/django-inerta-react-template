from django.contrib import admin
from django.urls import path
from ninja import NinjaAPI

api = NinjaAPI()


@api.get("/healthcheck")
def healthcheck(request):
    return {"status": "ok"}
