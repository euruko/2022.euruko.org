---
name: Hive
level: gold
url: https://www.hive.app/
show_description: true
published: true
---

{% capture image %}{% webpack_path images/sponsors/hive.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
Hive enables D2C brands run their operations on autopilot, enabling them to offer an outstanding customer experience and give them access to an at-scale cost structure. Our mission is to build the technology stack to automate and optimize the entire operational value chain from sourcing to final delivery and beyond.
{%- endrendercontent -%}
