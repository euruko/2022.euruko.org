---
name: Clark
level: bronze
url: https://www.clark.de/
show_description: false
published: true
---

{% capture image %}{% webpack_path images/sponsors/clark.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
More insight into your insurance
{%- endrendercontent -%}
