---
title: "Metadata"
metaTitle: "Managing metadata files"
metaDescription: "Managing metadata files"
---

Our formatter uses a yaml file to process the prepared text.

To process it you will need to install [PyYaml][0] and run the script from
within an environment that has access to it (it's fine if you want to use a
virtual environment, for example).

Please note: the name of the metadata file should be `metadata.yml` and should
live in the directory named following the conventions detailed in [the Library
documentation](/library)

# Example Template

I will be using the Bible's `metadata.yml` as an example template in this
document:

```
bookid: 1
title: Authorized King James Version Holy Bible
slug: bible
delimiter: angles
noshow:
    - 3
linkable:
    - 2
toc:
    - ~
    - Book
    - Chapter
    - Verse
```


# Parameters


## bookid

The id for the book, a unique number, starting at 1 for the Bible and 2 for War
and Peace, which is assigned to the book. Also used in the name of the directory
where the text's files live.


## title

The title of the actual book, to be used and displayed on the page.


## slug

The slug to be used in links. Also used for the name of the directory where the
text's files live.


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

Remember, this is a 0-index array, so the numbers come out like this:

```
~: 0
Book: 1
Chapter: 2
Verse: 3
```


## noshow

This is a list of numbers which correspond to the 0-indexed tocs (see #toc
above) to be used for excessively large tocs. For example, in the bible toc list
above, we include Verse as a toc level. Since there are so many verses in the
bible it would flat break the table of contents page, we choose not to show it
when querying the database. So for the Bible's `metadata.yml` file the `noshow`
variable looks like this:

```
noshow:
    - 3
```

In cases where there are no tocs which are too numerous to show on the table of
contents page, use an empty array:

```
noshow: []
```


## linkable

This is another list of numbers which correspond to the 0-indexed tocs. In this
case, this list determins whether a given toc-level is to be linked to for
reading on the table of contents. Because a Testament is so long, we choose not
to make it linkable. Special consideration is required for the length of a Bible
book because they are, likewise, very long.

The Bible's `linkable` variable looks like this:

```
linkable:
    - 2
```

2, of course, corresponds to a Bible chapter.



[0]: https://pypi.org/project/PyYAML/
[1]: 1-preparation
