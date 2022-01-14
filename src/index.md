---
layout: home
title: ""
---

{% render "home/hero", site: site, page: page %}
{% render "home/about" %}
{% render "home/newsletter" %}
{% render "home/speakers", collections: collections %}
{% render "home/benefits", collections: collections %}
{% render "home/sponsors", collections: collections %}

{% rendercontent "home/info", title: "Additional info" %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cupiditates non Epicuri divisione finiebat, sed sua satietate. Illa videamus, quae a te de amicitia dicta sunt.

Quis Aristidem non mortuum diligit? At negat Epicurus-hoc enim vestrum lumen estquemquam, qui honeste non vivat, iucunde posse vivere. Duo Reges: constructio interrete. Quae duo sunt, unum facit.

<div>
  <a href="https://example.com" class="section__cta section__cta--teal">
    Example call to action
  </a>
</div>
{%- endrendercontent -%}

{% comment %}
<header>
  <div>
    <img width="1280" height="300" src="{% webpack_path images/euruko-glow.svg %}" alt="Euruko">
    <h1 class="neonText">13–14 Oct 2022</h1>
  </div>
</header>

In the meantime, you can watch the talks from Euruko 2021 on [YouTube](https://www.youtube.com/euruko) or follow [@euruko](https://twitter.com/euruko) on Twitter.
{% endcomment %}
