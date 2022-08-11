---
title: Implementing Object Shapes in CRuby
group: Day 1
start_time: 2022-10-13T13:50:00+0300
end_time: 2022-10-13T14:30:00+0300
speaker: jemma_issroff
published: true
linkable: true
ics: true
summary: Object Shapes are a technique for representing objects' properties that can increase cache hits in instance variable lookups, decrease runtime checks, and improve JIT performance. In this talk, we'll learn how they work, why implement them, and interesting implementation details.
social_image: /images/talks/jemma_issroff.png
---

Object Shapes are a technique for representing objects' properties that can increase cache hits in instance variable lookups, decrease runtime checks, and improve JIT performance. In this talk, we'll learn how they work, why implement them, and interesting implementation details.

The intended audience is anyone interested in Ruby internals. The intended outcome is for you to learn all about object shapes, and why we implemented them in CRuby.

Talk outline:

- Intro to Object Shapes
- Why use object shapes?
- Interesting implementation details of shapes
