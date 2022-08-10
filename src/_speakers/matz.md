---
name: Matz
category: keynote
url: https://matz.rubyist.net
twitter: https://twitter.com/yukihiro_matz
github: https://github.com/matz
tagline: The creator of Ruby
bio: Yukihiro Matsumoto, also known as Matz, is a Japanese computer scientist and software programmer best known as the chief designer of the Ruby programming language and its original reference implementation, Matz's Ruby Interpreter.
talks:
  - 03_keynote_matz
published: true
---

{% capture image %}{% webpack_path images/speakers/yukihiro_matsumoto.jpg %}{% endcapture %}
{%- rendercontent "cards/speaker", speaker: page.data, image: image -%}
Opening keynote
{%- endrendercontent -%}
