# FitnessTrackerApi.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersGet**](DefaultApi.md#apiUsersGet) | **GET** /api/users | Get User Profile
[**apiUsersPost**](DefaultApi.md#apiUsersPost) | **POST** /api/users | Login
[**apiUsersPut**](DefaultApi.md#apiUsersPut) | **PUT** /api/users | Update User Profile
[**apiWorkoutsGet**](DefaultApi.md#apiWorkoutsGet) | **GET** /api/workouts | Get Workouts by User
[**apiWorkoutsPost**](DefaultApi.md#apiWorkoutsPost) | **POST** /api/workouts | Log Workout
[**apiWorkoutsPut**](DefaultApi.md#apiWorkoutsPut) | **PUT** /api/workouts | Update Workout
[**apiWorkoutsWorkoutIdDelete**](DefaultApi.md#apiWorkoutsWorkoutIdDelete) | **DELETE** /api/workouts/{workoutId} | Delete Workout
[**apiWorkoutsWorkoutIdGet**](DefaultApi.md#apiWorkoutsWorkoutIdGet) | **GET** /api/workouts/{workoutId} | Get Workout by ID

<a name="apiUsersGet"></a>
# **apiUsersGet**
> apiUsersGet()

Get User Profile

Retrieves the profile information of the authenticated user.

### Example
```javascript
import {FitnessTrackerApi} from 'fitness_tracker_api';

let apiInstance = new FitnessTrackerApi.DefaultApi();
apiInstance.apiUsersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiUsersPost"></a>
# **apiUsersPost**
> apiUsersPost(body)

Login

Logs in an existing user.

### Example
```javascript
import {FitnessTrackerApi} from 'fitness_tracker_api';

let apiInstance = new FitnessTrackerApi.DefaultApi();
let body = new FitnessTrackerApi.UserLogin(); // UserLogin | 

apiInstance.apiUsersPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserLogin**](UserLogin.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="apiUsersPut"></a>
# **apiUsersPut**
> apiUsersPut(body)

Update User Profile

Updates the profile information of the authenticated user.

### Example
```javascript
import {FitnessTrackerApi} from 'fitness_tracker_api';

let apiInstance = new FitnessTrackerApi.DefaultApi();
let body = new FitnessTrackerApi.UserProfileUpdate(); // UserProfileUpdate | 

apiInstance.apiUsersPut(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserProfileUpdate**](UserProfileUpdate.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="apiWorkoutsGet"></a>
# **apiWorkoutsGet**
> apiWorkoutsGet()

Get Workouts by User

Retrieves the workouts logged by the authenticated user.

### Example
```javascript
import {FitnessTrackerApi} from 'fitness_tracker_api';

let apiInstance = new FitnessTrackerApi.DefaultApi();
apiInstance.apiWorkoutsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiWorkoutsPost"></a>
# **apiWorkoutsPost**
> apiWorkoutsPost(body)

Log Workout

Logs a new workout for the authenticated user.

### Example
```javascript
import {FitnessTrackerApi} from 'fitness_tracker_api';

let apiInstance = new FitnessTrackerApi.DefaultApi();
let body = new FitnessTrackerApi.WorkoutLog(); // WorkoutLog | 

apiInstance.apiWorkoutsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkoutLog**](WorkoutLog.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="apiWorkoutsPut"></a>
# **apiWorkoutsPut**
> apiWorkoutsPut(body, workoutId)

Update Workout

Updates the details of a workout logged by the authenticated user.

### Example
```javascript
import {FitnessTrackerApi} from 'fitness_tracker_api';

let apiInstance = new FitnessTrackerApi.DefaultApi();
let body = new FitnessTrackerApi.WorkoutUpdate(); // WorkoutUpdate | 
let workoutId = "workoutId_example"; // String | 

apiInstance.apiWorkoutsPut(body, workoutId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkoutUpdate**](WorkoutUpdate.md)|  | 
 **workoutId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="apiWorkoutsWorkoutIdDelete"></a>
# **apiWorkoutsWorkoutIdDelete**
> apiWorkoutsWorkoutIdDelete(workoutId)

Delete Workout

Deletes a workout logged by the authenticated user.

### Example
```javascript
import {FitnessTrackerApi} from 'fitness_tracker_api';

let apiInstance = new FitnessTrackerApi.DefaultApi();
let workoutId = "workoutId_example"; // String | 

apiInstance.apiWorkoutsWorkoutIdDelete(workoutId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workoutId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiWorkoutsWorkoutIdGet"></a>
# **apiWorkoutsWorkoutIdGet**
> apiWorkoutsWorkoutIdGet(workoutId)

Get Workout by ID

Retrieves a specific workout by its ID.

### Example
```javascript
import {FitnessTrackerApi} from 'fitness_tracker_api';

let apiInstance = new FitnessTrackerApi.DefaultApi();
let workoutId = "workoutId_example"; // String | 

apiInstance.apiWorkoutsWorkoutIdGet(workoutId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workoutId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

