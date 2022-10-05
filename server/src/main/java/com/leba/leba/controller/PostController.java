package com.leba.leba.controller;

import com.leba.leba.model.Post;
import com.leba.leba.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin(value =  "http://localhost:3000")
@RestController
@RequestMapping("/api/post")
public class PostController {

    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public Post addPost(@RequestParam Map<String, String> requestParams) throws Exception {
        String postText = requestParams.get("postText");
        String username = requestParams.get("username");
        String file = requestParams.get("file");
        String userImg = requestParams.get("userImg");

        Post post = Post.builder()
                .file(file)
                .username(username)
                .postText(postText)
                .userImg(userImg)
                .timeStamp(new Date().toString())
                .build();

        post = postService.addPost(post);
        return post;
    }

    @GetMapping
    public List<Post> getPost() {
        return postService.getPost();
    }
}
