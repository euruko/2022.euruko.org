---
name: Shopify
level: travel
url: https://www.shopify.com/
show_description: false
published: true
---

{% capture image %}{% webpack_path images/sponsors/shopify.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
Shopify is a global commerce company powering millions of businesses worldwide, and we love Ruby! It's the foundational technology behind our success. Shopify is built on RoR, and with over 2.8 million lines of Ruby code, we have the oldest and largest Rails codebase in the world powering our core monolith. We're committed to the future of Ruby as a language. Learn more about Ruby at scale with Shopify.
{%- endrendercontent -%}
