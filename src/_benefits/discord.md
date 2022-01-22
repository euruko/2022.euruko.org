---
name: Discord
url: null
category: benefits
published: true
---

{% capture image %}{% webpack_path images/benefits/discord.svg %}{% endcapture %}
{%- rendercontent "cards/benefit", card: page.data, image: image -%}
Access to a Euruko Discord server where you can talk with fellow attendees, speakers, and sponsors.
{%- endrendercontent -%}
