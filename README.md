# object_detection
Build, and Object detection app using TensorFlow built with Node, React, Docker, MongoDB, RedisDB, Websockets

# run docker image
docker build -t object-detect --build-arg model_url=http://download.tensorflow.org/models/object_detection/ssd_resnet50_v1_fpn_shared_box_predictor_640x640_coco14_sync_2018_07_03.tar.gz .

docker run -p 8080:8080 -p 8081:8081 object-detect
