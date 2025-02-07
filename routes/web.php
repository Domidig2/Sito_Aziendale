<?php



use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\FormController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebhookController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\WorkPositionController;
use App\Http\Controllers\MindsetResultController;
use App\Http\Controllers\EducationTitleController;
use App\Http\Controllers\PersonalDataController;

// Pagina di benvenuto
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

// Pagina "Chi Siamo"
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');


// Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Rotte per la gestione del profilo
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])
    ->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])
    ->name('profile.update');

    Route::patch('/update-personal-data', [PersonalDataController::class, 'updateProfile'])
    ->name('dataProfile.update');


Route::patch('/work-position/update', [WorkPositionController::class, 'updateWorkPosition'])
->name('work-position.update');
Route::patch('/certificate/update', [CertificateController::class, 'updateCertificate'])
->name('certificate.update');
Route::patch('/education-title/update', [EducationTitleController::class, 'updateEducationTitle'])
->name('education-title.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//? Rotte per il checkout
Route::group(['middleware' => 'auth'], function () {
    Route::post('/Family/Checkout', [StripeController::class, 'familyCheckout'])->name('family.Checkout');
    Route::post('/Agency/Checkout', [StripeController::class, 'agencyCheckout'])->name('agency.Checkout');
    Route::post('/School/Checkout', [StripeController::class, 'schoolCheckout'])->name('school.Checkout');

});

Route::post('/webhook', [WebhookController::class, 'webhook'])
->name('webhook');

Route::get('/success' , [StripeController::class, 'success'])
->name('success');

Route::get('/error', [StripeController::class, 'error'])
->name('error');

Route::post('/contact-submit', [FormController::class, 'form_submit'])
->name('contact.submit');



// Rotta Mindset funzionante, non toccare che ti ammazzo
Route::post('/api/mindset-results', [MindsetResultController::class, 'saveCluster'])
->middleware('auth')
->name('mindset-results.store');

//Rotta blocco Test Mindset, tocca non ti ammazzo
Route::get('api/can-take-test', [MindsetResultController::class, 'canTakeTest'])
->middleware('auth')
->name('blocktest');

// ? Controllo delle pagine
Route::controller(PageController::class)->group(function () {
    Route::get('/new-page', 'show')
    ->name('new-page');
    Route::get('/investitori', 'showBrandingPage')
    ->name('branding.page');
    Route::get('/university', 'showUniversityPage')
    ->name('university.page');
    Route::get('/mondo-inclusivo', 'showInclusivePage')
    ->name('inclusive.page');
    Route::get('/mondo-sport', 'showSportPage')
    ->name('sport.page');
    Route::get('/mondo-educazione', 'showEducationPage')
    ->name('education.page');
    Route::get('/mondo-lavoro', 'showWorkPage')
    ->name('work.page');
    Route::get('/mondo-imprenditoria', 'showEntrepreneurshipPage')
    ->name('entrepreneurship.page');
    Route::get('/donazioni', 'showDonationPage')
    ->name('export.page');
    Route::get('/explore-digital', 'digitalExplore')
    ->name('explore-digital');
    Route::get('/explore-creative', 'creativeExplore')
    ->name('explore-creative');
    Route::get('/explore-inclusiva', 'inclusivaExplore')
    ->name('explore-inclusiva');
});

require __DIR__.'/auth.php';
