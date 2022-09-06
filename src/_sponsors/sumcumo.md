---
name: sum.cumo Sapiens
level: bronze
url: https://www.sumcumo.com/en
show_description: false
published: true
---

{% capture image %}{% webpack_path images/sponsors/sumcumo.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
The product and service range from sum.cumo Sapiens enables digital transformation and the development of new, innovative business models.
{%- endrendercontent -%}
