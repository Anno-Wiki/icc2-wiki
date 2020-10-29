---
title: "The Formatter Program"
metaTitle: "About the formatter program"
metaDescription: "About the formatter program"
---

```
python format.py 1-bible/
```

The formatter program, named `format.py`, is a script which takes in a directory
of specially prepared files (namely, `prepared.icc` and `metadata.yml`) and
outputs to the directory specially formatted json files (`text.json` and
`annotations.json`) which can then be inserted into the elasticsearch database.

`prepared.icc` should be formatted according to [the Preparation
documentation](/formatter/1-preparation) and `metadata.yml` should be formatted
according to [the Metadata documentation](/formatter/2-metadata).

The only flag the script takes is the directory where `prepared.icc` and
`metadata.yml` live. It _should_ be named according to the convention `n-slug`
where `n` is the `bookid` and `slug` is the book's slug title. See [the Library
documentation](/library) for more details.
