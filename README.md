# Ordering Ice Cream with gRPC and Protocol Buffers
This repository is the code generated from [this tutorial
video](https://www.youtube.com/watch?v=-Mcvbz5J9kQ).

## Trouble with installing `protoc_gen_grpc`
A workaround I found to resolve this was following these steps:
1. `npm install -g request`
1. `npm config set unsafe-perm true`
1. `npm install protoc-gen-grpc -g`

I am referencing `protoc-gen-grpc`'s package information from the npm 
website, found
[here](https://www.npmjs.com/package/protoc-gen-grpc/v/1.3.1#warn).

