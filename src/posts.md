---
layout: page
title: Posts
permalink: /posts/
sitemap: false
---

<ul>
  {% for post in collections.posts.resources %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
  {% endfor %}
</ul>

If you have a lot of posts, you may want to consider adding [pagination](https://www.bridgetownrb.com/docs/content/pagination)!
