---
name: CoverageBook
level: travel
url: https://coveragebook.com/
show_description: false
published: true
---

{% capture image %}{% webpack_path images/sponsors/coveragebook.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
Make coverage reports, faster
{%- endrendercontent -%}
