---
title: "Metadata"
metaTitle: "Managing metadata files"
metaDescription: "Managing metadata files"
---

Our formatter uses a yaml file to process the prepared text.

To process it you will need to install [PyYaml][0] and run the script from
within an environment that has access to it (it's fine if you want to use a
virtual environment, for example).


# Parameters


## bookid

The id for the book, a unique number, starting at 1 for the Bible and 2 for War
and Peace, which is assigned to the book.


## title

The title of the actual book, to be used and displayed on the page.


## slug

The slug to be used in links.


## delimiter

The delimiter used in processing the file. See [Preparation][1] for more detail.
There are four defaults:

- parens:     `(pre)text(/pre)`
- braces:     `{pre}text{/pre}`
- brackets:   `[pre]text[/pre]`
- angles:     `<pre>text</pre>`

All other delimiters are specified as a symbol or series of symbols:

```
delimiter: @
```

which must be used in the text as

```
@pre@text@/pre@
```

or

```
delimiter: %^&
```

which must be used in the text as:

```
%^&pre%^&text%^&/pre%^&
```

Series of symbols are kinda nasty, best only use them for books which absolutely
require it, and use the minimal sequence of symbols to be unique within the
text.


## toc

An ordered list of hierarchical toc names.

```
toc:
    - ~
    - Book
    - Chapter
    - Verse
```

The tilde, or a null, will mean the text of the toc header will be stored as the
toc name. So, in the above case, all Books of the Bible will be stored and
displayed as "Book", whereas the top level toc, the Old Testament, the
Apocrypha, and the New Testament, will be displayed thusly.


[0]: https://pypi.org/project/PyYAML/
[1]: 1-preparation
