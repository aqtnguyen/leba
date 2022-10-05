package com.leba.leba.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    private String id;
    private String postText;
    private String username;
    private String image;
    private String file;
    private String userImg;
    private String timeStamp;
    private String imageName;
}
