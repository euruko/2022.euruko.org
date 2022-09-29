---
name: Sakeus
level: community
url: https://sakeus.fi/
show_description: false
published: true
---

{% capture image %}{% webpack_path images/sponsors/sakeus.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
Sakeus is a design company offering development of new digital services for people. We are a team of experienced designers and developers specialising in creating new user-centric applications.
{%- endrendercontent -%}
