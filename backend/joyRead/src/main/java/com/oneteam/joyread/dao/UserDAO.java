package com.oneteam.joyread.dao;

import com.oneteam.joyread.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User,Integer> {
    //关键的地方在于方法的名字。findByPhone，是通过username字段查询到对应的行，并返回给User类
    User findByPhone(String phone);
    User findById(int id);
    User getByPhoneAndPassword(String phone, String password);
}
