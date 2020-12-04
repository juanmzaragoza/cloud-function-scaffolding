# Google Cloud Function Project

The main idea of this project is to have a scaffolding to implement a cloud function easily.

## Deployment
1. Go to GCP console
2. Create a new cloud function
3. The most important part is the source configuration. 
    1. Set the **repository name** and the **folder** correctly.
    2. Set the **function name** identically to the name of the export function in the `index.js`.

## For Pub/Sub function    
### Testing on GCP console

Go to testing tab on the cloud function and in Triggering event paste:
```
{"data":"c3RhY2thYnVzZS5jb20="}
```

### Testing locally

In the console run
```
npm rum start:pubsub
```
and go to `http://localhost:8080/`