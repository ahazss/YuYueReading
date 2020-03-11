package com.oneteam.joyread.service;

import com.oneteam.joyread.entity.Record;

import java.util.List;

public interface RecordService {

    //获取用户某图书的所有图书记录
    public List<Record> getAllUserbookRecords(int userId, String isbn);

    //添加或修改阅读记录
    public Integer addOrUpdate(Record record);
}
