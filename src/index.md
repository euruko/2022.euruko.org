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
The closest hotel to the venue is the [Scandic Paasi](https://www.scandichotels.com/hotels/finland/helsinki/scandic-paasi) (the buildings are connected) but as the venue is very centrally located it should be easy to reach from a whole variety of hotels in Helsinki.

The easiest way to get to the venue (if your hotel isn't within walking distance) is probably by public transportation as the venue is reachable by metro, tram, or bus. Check the [HSL](https://www.hsl.fi/en) website for more information about public transportation in Helsinki.

<!-- <div>
  <a href="https://example.com" class="section__cta section__cta--teal">
    Example call to action
  </a>
</div> -->

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
