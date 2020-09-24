---
title: "Formatter"
metaTitle: "Introduction to the ICC formatter"
metaDescription: "Introduction to the ICC formatter"
---

The formatter for ICC2 is the entry point. It formats specially marked files
into json files composed of

1. A "text" file, an array of dictionaries containing a block of text and meta
   information like offset, index, etc.
2. A format file, an array of formatting annotations for reproducing the text on
   the page with proper formatting.
3. A semantics file, with semantic annotations containing information about
   chapter headings, sections, etc.
4. An optional annotations file, which contains commentary annotations for the
   annotation system, by the original author or translator, like Constance
   Garnett's annotations in War & Peace.

The formatter consists of multiple scripts.

It is my hope that one day it will be sophisticated enough for an interface on
the actual web page, so that users can add their own texts.
