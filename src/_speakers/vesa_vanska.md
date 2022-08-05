---
name: Vesa Vänskä
category: normal
url: http://vesavanska.com/
published: true
---

{% capture image %}{% webpack_path images/speakers/vesa_vanska.jpg %}{% endcapture %}
{%- rendercontent "cards/speaker", speaker: page.data, image: image -%}
From massive pull requests to trunk-based development with Ruby
{%- endrendercontent -%}
