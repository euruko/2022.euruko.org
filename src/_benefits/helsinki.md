---
name: Helsinki
category: benefits
color: orange
published: true
---

{% capture image %}{% webpack_path images/benefits/TU-181227-ala-oodi-018.jpg %}{% endcapture %}
{%- rendercontent "cards/benefit", card: page.data, image: image -%}
You get to visit Helsinki, the capital of the happiest country in the world.
{%- endrendercontent -%}
