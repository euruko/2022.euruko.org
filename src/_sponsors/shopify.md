---
name: Shopify
level: ruby
url: https://www.shopify.com/
show_description: true
published: true
---

{% capture image %}{% webpack_path images/sponsors/shopify.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
Shopify is a platform built for independent business owners of all shapes and sizes to start, sell, market and manage their businesses online, in-store, and everywhere between.
{%- endrendercontent -%}
