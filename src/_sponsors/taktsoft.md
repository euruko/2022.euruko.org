---
name: Taktsoft
level: silver
url: https://www.taktsoft.com
show_description: false
published: true
---

{% capture image %}{% webpack_path images/sponsors/taktsoft.svg %}{% endcapture %}
{%- render "cards/sponsor", sponsor: page.data, image: image %}
