from inertia import share


class DataShareMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        share(request, auth=lambda: {"user": request.user})

        return self.get_response(request)
