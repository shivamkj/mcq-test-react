echo "Functions deployment Started"

cd upload-test
gcloud functions deploy "upload-test" \
    --runtime=nodejs14 \
    --trigger-http \
    --entry-point=function \
    --region=asia-south1 \
    --allow-unauthenticated \
    --memory=128MB \
    --env-vars-file=../.env.yaml
cd ..

# cd send-result
# gcloud functions deploy "send-result" \
#     --runtime=nodejs14 \
#     --trigger-http \
#     --entry-point=function \
#     --region=asia-south1 \
#     --allow-unauthenticated \
#     --memory=128MB \
#     --env-vars-file=.env.yaml
# cd ..

# cd get-result
# gcloud functions deploy "get-result" \
#     --runtime=nodejs14 \
#     --trigger-http \
#     --entry-point=function \
#     --region=asia-south1 \
#     --allow-unauthenticated \
#     --memory=128MB \
#     --env-vars-file=.env.yaml
# cd ..

echo "Functions deployment Finished"

# Command to setup cors
# gsutil cors set cors.json gs://mcq-test
# gsutil cors get gs://mcq-test