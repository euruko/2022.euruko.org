---
name: WNB.rb
level: travel
url: https://www.wnb-rb.dev
show_description: false
published: true
---

{% capture image %}{% webpack_path images/sponsors/wnb.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
A virtual community for women and non-binary Rubyists.
{%- endrendercontent -%}
