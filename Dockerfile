FROM docker/whalesay:latest
LABEL Name=traefik Version=1.0.0
RUN apt-get -y update && apt-get install -y fortunes
CMD /usr/games/fortune -a | cowsay
