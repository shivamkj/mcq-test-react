echo "Functions deployment Started"


FUNCTION1="upload-test"
cd $FUNCTION1
gcloud functions deploy $FUNCTION1 \
    --runtime=nodejs14 \
    --trigger-http \
    --entry-point=function \
    --region=asia-south1 \
    --allow-unauthenticated \
    --memory=128MB \
    --env-vars-file=../.env.yaml
cd ..

# FUNCTION2="send-result"
# cd "send-result"
# gcloud functions deploy "send-result" \
#     --runtime=nodejs14 \
#     --trigger-http \
#     --entry-point=function \
#     --region=asia-south1 \
#     --allow-unauthenticated \
#     --memory=128MB \
# cd ..

# FUNCTION3="get-result"
# cd $FUNCTION3
# gcloud functions deploy $FUNCTION3 \
#     --runtime=nodejs14 \
#     --trigger-http \
#     --entry-point=function \
#     --region=asia-south1 \
#     --allow-unauthenticated \
#     --memory=128MB \
#     --env-vars-file=../.env.yaml
# cd ..

echo "Functions deployment Finished"

# Command to setup cors
# gsutil cors set cors.json gs://mcq-test
# gsutil cors get gs://mcq-test