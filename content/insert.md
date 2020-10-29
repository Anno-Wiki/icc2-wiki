---
title: "Insert Script"
metaTitle: "Introduction to the ICC insert script"
metaDescription: "Introduction to the ICC insert script"
---

```
docker exec icc2-backend_annowiki2_1 python insertdata.py icc2-library
```

`insertdata.py` is a script written to take in the full library, organized
according to [the Library documentation](/library), and insert it into the icc
elasticsearch database.

The above command, while the docker container is running, will try the
connection until the elasticsearch database is properly running, and then insert
all of the texts and annotations into the database.
