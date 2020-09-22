---
title: "Preparation"
metaTitle: "How to prepare a text for processing"
metaDescription: "How to prepare a text for processing"
---

Processing a text into ICC2 is still somewhat laborious, though hopefully less
so than with ICC.

# Source

There are a variety of sources from which text can be sourced, and that will
largely depend on the project. For the purposes of anno.wiki, at least for the
time, we are focusing on open source text.

Gutenberg.org is a great resource, and most of our texts are sourced from there.
There are other resources, though; for instance, for Shakespeare in the first
iteration of ICC, I have used MIT's shakespeare.mit.edu because each ot he plays
were already conveniently separated. I scraped the site in an iPython session
and used BeautifulSoup4 to parse the html. If I recall it was not well
structured and I had to perform some basic reformatting to get the text looking
right.

With the Bible, I similarly scraped kingjamesbible.org and did my own formatting
to make sure the verses were distinct lines.


# Planning Your Attack

In order to properly format a text we have to add semantic data to the text.
It's therefore important to figure out what characters (or strings of
characters) are not used within the text, so that we can use them as delimiters
for processor directives.

The `info.py` script is written help with this. It provides a sorted list of all
characters used within the text. Pick a character not in that string to be used
as a delimiter like so:

```
<pre>
2020 sucks
here's to hoping that next year
2021 shines
</pre>
```
(the `<pre>` directive will be used to specify text in which the line formatting
should remain unchanged as in, for example, verse.)


# Typographical Styling


## Italic and Bold

Ensure that all italicized text is marked by underscores `like _this_` and all
bold text is marked by asterisks `like *this*`. The formatter will generate
typographical annotations for marking these spans.


## Punctuation

We prefer to use correct punctuation marks. For instance, em dashes (—) should
be actual em dashes rather than simple dashes (-). Often, writers and
transcribers will reach for the easy dash that's actually on the keyboard rather
than inserting the correct typographical mark. Sometimes they don't even know.

Likewise, we prefer to use smart quotes, like “so,” rather than dumb quotes like
"so." But, once again, unless you're using an editor that has handy commands to
type these things, or a text processor like Word, it is likely you do not
bother. It is worth the effort to search multiple sources for a good copy of a
text that uses these sorts of punctuation marks, but sometimes it is impossible.
(I am actually fairly lazy within this documentation in my use of proper
punctuation, as may have been noticed.)

In the first iteration of ICC, I would take the time to try to use regular
expressions and Python to correct bad punctuation, but this is error-prone.
Manual intervention may be worth it for short texts, like poems, but would be
difficult and time-consuming to do in a long text like the King James Bible.
This is permissible.


# Preformatted Lines & Special Block Text


As I specified earlier, once you have your delimiter (which can really be
anything, like with regular expressions where you could express `s/abc/ABC/g` as
`s@abc@ABC@g` if you so choose), you will have to use it to mark special
sections of text. This, itself, can be a time consuming process, for instance,
in a long play.

We will specify the delimiter in the metadata file.

## Pre

For blocks of text which have special line breaks, or spacing, we use the pre
tag. (Once again, you could write `@pre@` or even `|pre|`.)

For another example, in War & Peace, we would have this block of text:

```
<pre>
      a   b   c   d   e   f   g   h   i   k
      1   2   3   4   5   6   7   8   9   10
       l    m    n    o    p    q    r    s
      20   30   40   50   60   70   80   90
             t    u    v    w    x    y
            100  110  120  130  140  150
                        z
                       160
</pre>
```

## Blockquotes

There are often blockquotes in text which are offset from the margin to show
that a block of text is being quoted. In Markdown this is specified by
prepending `>` to each line. Project Gutenberg often delimits these simply with
multiple spaces prepended to each line. It is up to the formatter to recognize
these sections. Using a text search for multiple spaces can often reveal these
patterns. This formatting must be removed and replaced by a `<quote>` tag.

```
Julie wrote in French:

<quote>
Dear and precious Friend, How terrible and frightful a thing is
separation! Though I tell myself that half my life and half my happiness
...
calm, and penetrating, a look I loved so well and seem to see before me
as I write?
</quote>

Having read thus far, Princess Mary sighed and glanced into the mirror
which stood on her right. It reflected a weak, ungraceful figure and
...
face assumed a forced unnatural expression as soon as she looked in a
glass. She went on reading:

<quote>
All Moscow talks of nothing but war. One of my two brothers is already
abroad, the other is with the Guards, who are starting on their march
...
my respects to monsieur your father and my compliments to Mademoiselle
Bourienne. I embrace you as I love you.

JULIE

P.S. Let me have news of your brother and his charming little wife.
</quote>

The princess pondered awhile with a thoughtful smile and her luminous
eyes lit up so that her face was entirely...
```

However, it is often the case that a quote will be a preformatted bit of text,
like a quote of poetry. In that case, use `<quotepre>`:

```
<quotepre>
“It’s a long, long way.
To my native land...”
</quotepre>
```

This way, we can maintain the line breaks and still have the offset, without the
need for unnecessary indentation spaces.
