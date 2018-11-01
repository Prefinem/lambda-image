#!/usr/bin/env bash

# https://stackoverflow.com/a/44850245

mkdir -p ~/.aws

cat > ~/.aws/credentials << EOL
[william]
aws_access_key_id = ${AWS_ACCESS_KEY_ID}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}
EOL

cat > ~/.aws/config << EOL
[profile william]
region = us-east-1
output = json
EOL