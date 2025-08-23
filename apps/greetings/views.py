from inertia import InertiaResponse
from ninja import Router
from ninja.security import django_auth

router = Router(
    auth=django_auth,
)


@router.get("/")
def index(request):
    return InertiaResponse(
        request,
        "page",
        props={"greeting": "Hello"},
    )
