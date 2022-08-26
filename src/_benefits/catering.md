---
name: Catering
url: null
category: benefits
color: green
published: true
---

{% capture image %}{% webpack_path images/benefits/DALL·E 2022-08-26 15.21.29 - photo of delicious nordic food and coffee shown against a forest backdrop.png %}{% endcapture %}
{%- rendercontent "cards/benefit", card: page.data, image: image -%}
All in-person attendees get complimentary breakfast, lunch, and afternoon coffee/tea.
{%- endrendercontent -%}
