---
name: AppTweak
level: silver
url: https://www.apptweak.com/en
show_description: false
published: true
---

{% capture image %}{% webpack_path images/sponsors/apptweak.svg %}{% endcapture %}
{%- rendercontent "cards/sponsor", sponsor: page.data, image: image -%}
AppTweak is the leading ASO tool driven by data science. AppTweak empowers +1,500 mobile leaders - such as Amazon, Jam City, Yelp and Adobe - to grow their apps and games with actionable insights in a simple interface.
{%- endrendercontent -%}
