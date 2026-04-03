from django.shortcuts import render
from .models import Post
from django.views.generic import ListView, DetailView

# Create your views here.
# IndexView shows a list of blog posts as bullets.
class IndexView(ListView):
    model = Post
    paginate_by = 5
    context_object_name = "latest_posts"
    template_name = "blog/index.html"
    # Sort posts by publication date, from newest to oldest
    ordering = ["-pub_date"] 

# Detailed view of each post
class PostDetailView(DetailView):
    model = Post
    template_name = "blog/view.html"
    context_object_name = "post"