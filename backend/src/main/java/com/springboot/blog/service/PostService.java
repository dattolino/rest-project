package com.springboot.blog.service;

import com.springboot.blog.dto.response.PostDto;
import com.springboot.blog.dto.response.PostResponse;
import com.springboot.blog.entity.Post;

import java.util.List;

import org.springframework.data.domain.Page;

public interface PostService {
    PostDto createPost(PostDto postDto);

    PostResponse getAllPosts(int pageNo, int pageSize, String sortBy, String sortDir);

    PostDto getPostById(long id);

    PostDto updatePost(PostDto postDto, long id);

    void deletePostById(long id);

    List<PostDto> getPostsByCategory(Long categoryId);
}
