package com.springboot.blog.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateCategoryDto {
	@NotNull
    private String name;
    private String description;
}
