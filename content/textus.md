---
title: "About Textus"
metaTitle: "About Textus"
metaDescription: "Descriptions and mirrored documentation on The Textus Project"
---
# About
In the first iteration of ICC I stumbled on a dead project called Textus by
[OKFN](http://okfnlabs.org/) and funded by Jisc. The project is essentially
exactly what I was producing, and they deployed it to
[openliterature.net](https://openliterature.net) (still up) and
openphilosophy.org (now gone). I cannot say if the software ever really worked,
since it is completely broken now. It was built with Node, Elasticsearch, and
JQuery.

I did not spend much time researching the project on my first ICC runthrough,
mostly because I had already committed myself to the architecture I was pursuing
and didn't want to try and rewrite the whole thing.

As I began to think about doing a rewrite I started investigating their
documentation a bit more and found that they have a much better strategy for
dealing with formatting and storage. They use elasticsearch to store raw text
blocks and formatting "annotations" that specify blocks of text by offsets. Then
a processor runs through the formatting annotations to reapply the formatting in
html.

I, on the other hand, stored everything like a complete donkey. First, to store
the text, I broke it up into lines, where each line was a row in a master
MariaDB table. Then, I had metadata stored in other tables. Formatting was
actually split: some formatting was stored in the database as "semantic" data,
like that a line was a title, and would be applied at the last minute by the
templating system. Other formatting, like italics, was stored as markdown
underscores which would be processed line by line in the Flask python route,
replacing them with `<em>` tags. Needless to say, this is crap architecture.

So, in this second rewrite, we will be hewing much closer to the Textus
architecture. In the interest of preservation, I am here in this subsection of
the documentation mirroring documentation from the original Textus Project
website, at [okfnlabs.org/textus](http://okfnlabs.org/textus/).
