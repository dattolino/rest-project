package com.springboot.blog.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.blog.dto.request.CreateCategoryDto;
import com.springboot.blog.dto.request.UpdateCategoryDto;
import com.springboot.blog.dto.response.CategoryDto;
import com.springboot.blog.service.CategoryService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/categories")
public class CategoryController {

    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // Build Add Category REST API
    @PostMapping
    //@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CategoryDto> addCategory(@RequestBody @Valid CreateCategoryDto categoryDto){
        CategoryDto savedCategory = categoryService.addCategory(categoryDto);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    // Build Get Category REST API
    @GetMapping("{id}")
    public ResponseEntity<CategoryDto> getCategory(@PathVariable("id") Long categoryId){
         CategoryDto categoryDto = categoryService.getCategory(categoryId);
         return ResponseEntity.ok(categoryDto);
    }

    // Build Get All Categories REST API
    @GetMapping
    public ResponseEntity<List<CategoryDto>> getCategories(){
        return ResponseEntity.ok(categoryService.getAllCategories());
    }

    // Build Update Category REST API
    //@PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<CategoryDto> updateCategory(@RequestBody @Valid UpdateCategoryDto categoryDto,
                                                      @PathVariable("id") Long categoryId){
        return ResponseEntity.ok(categoryService.updateCategory(categoryDto, categoryId));
    }

    // Build Delete Category REST API
    //@PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable("id") Long categoryId){
        categoryService.deleteCategory(categoryId);
        return ResponseEntity.ok().build();
    }
}
