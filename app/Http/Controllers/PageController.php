<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function show()
    {
        return Inertia::render('NewPage');
    }
    public function showBrandingPage()
    {
        return Inertia::render('BrandingPage');
    }

    public function showUniversityPage()
    {
        return Inertia::render('UniversityPage');
    }

    public function showInclusivePage()
    {
        return Inertia::render('InclusivePage');
    }

    public function showSportPage()
    {
        return Inertia::render('SportPage');
    }

    public function showEducationPage()
    {
        return Inertia::render('EducationPage');
    }

    public function showWorkPage()
    {
        return Inertia::render('WorkPage');
    }

    public function showEntrepreneurshipPage()
    {
        return Inertia::render('EntrepreneurshipPage');
    }

    public function showDonationPage()
    {
        return Inertia::render('DonationPage');
    }
    public function digitalExplore() {
        return Inertia::render('DigitalExplorePage');
    }

    public function creativeExplore() {
        return Inertia::render('CreativeExplorePage');
    }

    public function inclusivaExplore() {
        return Inertia::render('InclusivaExplorePage');
    }

}
