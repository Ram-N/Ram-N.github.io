---
layout: default
title: Today I Learned (TIL)
---

# Today I Learned

Just an assortment of (mostly) Tech-related things I learn, figure out or try for the first time. Sometimes, it is just to admire something!

{% assign sorted_tils = site.til | sort: 'date' | reverse %}

{% for til in sorted_tils %}
## [{{ til.title }}]({{ til.url }})
*{{ til.date | date: "%Y-%m-%d, %a" }}*

{{ til.content | strip_html | truncate: 200 }}

{% if til.tags and til.tags.size > 0 %}
{% for tag in til.tags %}#{{ tag }} {% endfor %}
{% endif %}

---
{% endfor %}

{% if site.til.size == 0 %}
*No TIL entries yet. Check back soon!*
{% endif %}