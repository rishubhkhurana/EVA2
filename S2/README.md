# EVA2 Phase2 Session2

## Project Title -- Transfer learning and edge deployment

### Project Goal -- Collect images of varying types of quadcopters along with flying birds. Train a classifier to distinguish images into 4 classes: 1. Flying Birds, 2. Large QuadCopters, 3. Small QuadCopters, 4. Winged Drones

### Approach -- 

This was a collaborative projects where image collection was divided into multiple teams. Each team was assigned to collect 1000 images to one of the categories mentioned above. Our team was assigned to collect images of Small QuadCopters. We manage to collect around 1000 images. Since images were collected using different methods by different teams, we found that there was huge discrepancy in the kind of images that we supposed to be collected and the kind of images that all of us ended up collecting. So, with discussion within our team and also following the discussion happening in telegram group across teams, we created a cleaned dataset, roughly containing around 15000 images with following statistics:
1. Flying Birds --
2. Large QuadCopters --
3. Small QuadCopters --
4. Winged Drones -- 

Once we had cleaned dataset, we started working on model. But before building our model, we had to come up with a strategy to preprocess our images since the collected images had wide variety of sizes. We followed a simple approach to preprocess our image consisting of following steps:
1. Figure out the largest dimension of the image. 
2. Determine how each dimension should be scaled maintaining the aspect ratio. 
3. Resize the image to the dimensions computed in step 2.
4. In order to make images square, apply padding if needed to make image 256x256. Padding used is reflection padding
5. Crop the image from centre to 224x224
6. Convert the image to torch tensor 
7. Normalize the image using mean and standard deviation computed from all images. 

The code used for this is shown below

![preprocess image](https://github.com/rishubhkhurana/EVA2/blob/master/S2/Images/preprocess.png?raw=true)

#### Model 

We used MobileNet model with only the last classifier layer changed to predict 4 classes instead of 1000 it was trained on. We fixed the weights of all layers except for last classifier layer. To achieve this, we built a custom model using following code




