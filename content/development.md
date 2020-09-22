---
title: "Development"
metaTitle: "How to set up a development environment"
metaDescription: "How to set up a development environment"
---

Our development environment uses docker-compose, so install Docker however you
do it with your system. I use Arch Linux, so I install docker and docker-compose
as two separate packages. Ethan uses Windows, so he installed Docker Desktop.

# Backend

The backend uses Postgresql, Elasticsearch, and Python. Elasticsearch is
finnicky with Docker. It uses more virtual memory than is provided by default.
So this has to be modified.

For Linux, this is fairly easy. Add the following line to `/etc/sysctl.conf`:

`
vm.max_map_count=262144
`

And then run

`sysctl -p`

to reload.

Windows is considerably more difficult.

If you're running Docker Desktop with the WSL 2 backend, you have to make sure
you have WSL 2 enabled and a WSL 2 distro installed (Ethan uses Ubuntu). Then
enable Ubuntu in Docker Desktop settings>resources. Next, open a command prompt
and type

`
wsl -d docker-desktop
sysctl -w vm.max_map_count=262144
`

I do not know if that is persistent. If you are not using the WSL 2 backend type

`
docker-machine ssh
sudo syctl -w vm.max_map_count=262144
`

I also do not know if that is persistent.

If any of this doesn't work, please refer to [the Docker guide on
elastic.co][0].

# Frontend

The frontend is far easier to get started. It is a react project set up using
Yarn. Just clone it, install it, and start it.


[0]: https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html
