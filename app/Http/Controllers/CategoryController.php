<?php

// app/Http/Controllers/CategoryController.php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::latest()->get();
        return Inertia::render('Category/Index', ['categories' => $categories]);
    }

    public function create()
    {
        return Inertia::render('Category/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            
        ]);

        Category::create($data);

        return redirect()->route('category.index');
    }

    public function edit(Category $category)
    {
        return Inertia::render('Category/Edit', ['category' => $category]);
    }

    public function update(Request $request, Category $category)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            
        ]);

        $category->update($data);

        return redirect()->route('category.index');
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->route('category.index');
    }
}
