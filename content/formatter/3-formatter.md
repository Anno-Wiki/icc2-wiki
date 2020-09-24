---
title: "The Formatter Program API"
metaTitle: "About the formatter program"
metaDescription: "About the formatter program"
---

I want to document all of the functions in format.py. This is more for me than
you, and describes how the functions work, not just what they do.


# Constants


## DELIMITERS

The `DELIMITERS` dictionary stores the default delimiters. If the `delimiters`
parameter in `metadata.yml` is set to `parens`, `braces`, `brackets`, or
`angles`, this is used to set them.


## TAGS

The global tag space that matches opening tags to the proper payload for the
annotation. Uses `preparetags()`.


## CLOSERS

Matches opening tags to their closers, to search for the closing tag, and to
remove it.


## CHUNKSIZE

Defines the size of a text chunk in the database. I do not want to change this.
Default is 100,000 characters.


# Functions


## main(fin, metadatain)

The main entry for the program, when called from command line.


## process(text, metadata)

The conductor function. Establishes the delimiters, prepares the tags, calls
`annotation()`, `strip()`, and `split()`.

Returns annotations and text


## preparetags(toc, delimiter)

Prepares the `TAGS` global dict by prepending and postfixing the toc and
predefined style tags with the delimiter, and creating their payloads.


## annotate(text)

The star of the show. The function is to produce a list of
dict's—annotations—which specify offsets for styling and tocs.

@TODO Rewrite annotate to deal with nested styling. Needs to use a stack.


## strip(text)

Strips the text of markup. Returns the naked text.


## split(text)

Splits the text into chunks, returns a list of dicts containing the sequence,
the offset, and the text chunk.
