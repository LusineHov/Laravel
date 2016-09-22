<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Contracts\Auth\Guard;

class AboutController extends Controller
{
	/**
     * Create a new controller instance.
     *
     * @return void
     */
	public function __construct()
    {
        //$this->middleware('auth');
    }
    
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
     public function index(Guard $auth)
    {
        $user = $auth->user();
        if(is_null($user)) {
            return response()->json([], 401);
        }
        return response()->json(['message' => 'Success!'],200);
     	//return view('about.index');
    }
}