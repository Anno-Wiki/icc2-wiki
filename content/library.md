---
title: "Library"
metaTitle: "Managing libary directories"
metaDescription: "Managing library directories"
---

Our library is a large collection of directories named according to the
following convention: `n-slug` where `n` is the bookid (e.g., `1` for the Bible,
`2` for War and Peace, etc.) and `slug` is the book's slug, a lowercased name
with no spaces that designates the text (e.g., `bible` for the Bible,
`warandpeace` for War and Peace).

This is currently the tree for our git-managed library repository
(`icc2-formatter` is a submodule).

```
├── 1-bible
│   ├── annotations.json
│   ├── metadata.yml
│   ├── prepared.icc
│   ├── raw.txt
│   └── text.json
├── 2-warandpeace
│   ├── annotations.json
│   ├── metadata.yml
│   ├── prepared.icc
│   └── text.json
├── icc2-formatter
│   ├── format.py
│   ├── info.py
│   ├── LICENSE
│   └── underscorestoitags.py
└── LICENSE
```

You can see it here: https://github.com/Anno-Wiki/icc2-library
