package com.oneteam.joyread.service;

import com.oneteam.joyread.entity.User;

public interface UserService {
    User getByPhone(String phone);

    User getById(int id);

    User get(String phone, String password);

    String getVerifyCode(String id);
}
