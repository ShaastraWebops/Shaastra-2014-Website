def site_url(request):
    from django.conf import settings
    return {'site_url': settings.BASE_URL}
