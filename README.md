## FreeCodeCamp- Microservices and APIs

# Request Header Parser Microservice

[![request-header-parser-screenshot](https://user-images.githubusercontent.com/57681651/99074980-9fc6a680-25b0-11eb-81ae-ef02cebf37d5.JPG)](https://request-header-parser-1.herokuapp.com/)

## User stories:

1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

## Example usage:

- [base_url]/api/whoami

## Example output:

- `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`

## Packages

This API is written in _Node.js_ with the help of _express_.

[Try the API!](https://request-header-parser-1.herokuapp.com/)
