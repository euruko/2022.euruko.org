---
name: Brella
level: gold
url: https://www.brella.io/
show_description: true
published: true
---

{% capture image %}{% webpack_path images/sponsors/brella.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
Events are perfect environments for collaboration, growth, and new opportunities. But these opportunities need facilitation. Gathering many people into one area isn’t enough - they need a simple way to connect with each other.
<br/> <br/>
Enter Brella. We exist to empower people with access to meaningful connections and knowledge.
{%- endrendercontent -%}
