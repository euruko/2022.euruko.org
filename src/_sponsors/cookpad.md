---
name: Cookpad
level: ruby
url: https://apply.workable.com/cookpad/
published: true
---

{% capture image %}{% webpack_path images/sponsors/cookpad.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
With around 100 million average monthly users in over 70 countries and 30+ languages, Cookpad operates at a unique scale as not only the largest recipe sharing community in the world but also one of the biggest Rails sites too. We're always looking for Rubyists to help us make everyday cooking fun!
{%- endrendercontent -%}
