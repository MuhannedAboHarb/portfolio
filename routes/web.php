<?php

use Illuminate\Support\Facades\Route;    
use App\Http\Controllers\ContactMessageController;

Route::get('/', function () {
        return view('layouts.master');
    });

Route::get('/admin/messages', [ContactMessageController::class, 'index'])->name('messages.index');

Route::post('/contact', [ContactMessageController::class, 'store'])->name('messages.store');
