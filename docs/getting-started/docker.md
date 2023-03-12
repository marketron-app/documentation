# Docker
The easiest way to start Marketron service is by using Docker.

Use the following `docker-compose` file to startup the Marketron Image Engine:

```yml
version: '3'
services:
    imageengine:
        image: 'tavsec/marketron-image-engine:v1.2.0'
        expose:
            - 3000
        ports:
            -   "3000:3000"
        environment:
            AWS_ACCESS_KEY_ID: '${AWS_ACCESS_KEY_ID}'
            AWS_SECRET_ACCESS_KEY: '${AWS_SECRET_ACCESS_KEY}'
            AWS_REGION: '${AWS_DEFAULT_REGION}'
            AWS_S3_BUCKET: '${AWS_BUCKET}'
```
This will run the service on port 3000.