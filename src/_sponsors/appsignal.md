---
name: AppSignal
level: travel
url: https://www.appsignal.com
show_description: false
published: true
---

{% capture image %}{% webpack_path images/sponsors/appsignal.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
APM for Ruby, Elixir & Node.js
{%- endrendercontent -%}
