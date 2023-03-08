# Config - Environmental variables
Config for the Image Engine can be provided by setting the following environmental variables:

### Environmental variables
| Variable               | Required | Description                                                                        |
|------------------------|----------|------------------------------------------------------------------------------------|
| AWS_ACCESS_KEY_ID      | yes      | AWS access key                                                                     |
| AWS_SECRET_ACCESS_KEY  | yes      | AWS secret key                                                                     |
| AWS_REGION             | yes      | AWS region                                                                         |
| AWS_S3_BUCKET          | yes      | AWS S3 Bucket, on which the generated images will be uploaded                      |
| AWS_ENDPOINT           | no       | Can be set to use other S3-compatible storages.                                    |
| METRIC_HEADERS_ENABLED | no       | Setting this variable to "true" will enable metric headers. Default is disabled.   |
| CRAWLER_TIMEOUT        | no       | How long (in seconds) the crawler will wait for the website. Default is 10 seconds |