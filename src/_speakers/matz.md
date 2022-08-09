---
name: Matz
category: keynote
url: https://twitter.com/yukihiro_matz
talks:
  - 03_keynote
published: true
---

{% capture image %}{% webpack_path images/speakers/yukihiro_matsumoto.jpg %}{% endcapture %}
{%- rendercontent "cards/speaker", speaker: page.data, image: image -%}{%- endrendercontent -%}
