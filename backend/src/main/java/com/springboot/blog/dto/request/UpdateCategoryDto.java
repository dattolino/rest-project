package com.springboot.blog.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdateCategoryDto extends CreateCategoryDto {
	@NotNull
    private Long id;
}
