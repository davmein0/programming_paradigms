from django.shortcuts import render
from .models import Post
from django.views.generic import ListView, DetailView

# Create your views here.
def index(request):
    context = {"Latest Posts": Post.objects.order_by("-pub_date")[:5]}
    return render(request, "blog/index.html", context)

class IndexView(ListView):
    template_name = "blog/index.html"
    context_object_name = "latest_posts"

    def get_queryset(self):
        """Return the last five posts."""
        return Post.objects.order_by("-pub_date")[:5]