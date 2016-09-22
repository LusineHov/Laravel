<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

//Route::get('asd', 'PostController@index');

//Route::group(['middleware' => ['api']], function () {
    // Here comes your routes
	Auth::routes();

	Route::resource('home', 'HomeController');

	Route::resource('about', 'AboutController');

	Route::resource('posts', 'PostController');

	Route::get('settings/edit', 'SettingController@edit');
	Route::patch('settings', 'SettingController@update');
	Route::get('settings', 'SettingController@index');
	Route::delete('settings', 'SettingController@destroy');
//});

// Response for AngularJS
	// Route::get("/",function(){
 //  	return View::make("base");
	// });
