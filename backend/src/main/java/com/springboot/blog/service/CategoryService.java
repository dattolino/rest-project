package com.springboot.blog.service;

import java.util.List;

import com.springboot.blog.dto.request.CreateCategoryDto;
import com.springboot.blog.dto.request.UpdateCategoryDto;
import com.springboot.blog.dto.response.CategoryDto;

public interface CategoryService {
    CategoryDto addCategory(CreateCategoryDto categoryDto);

    CategoryDto getCategory(Long categoryId);

    List<CategoryDto> getAllCategories();

    CategoryDto updateCategory(UpdateCategoryDto categoryDto, Long categoryId);

    void deleteCategory(Long categoryId);
}
