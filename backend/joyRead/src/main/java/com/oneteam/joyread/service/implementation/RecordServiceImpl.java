package com.oneteam.joyread.service.implementation;

import com.oneteam.joyread.dao.RecordDAO;
import com.oneteam.joyread.entity.Record;
import com.oneteam.joyread.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordServiceImpl implements RecordService {
    @Autowired
    RecordDAO recordDAO;

    @Override
    public List<Record> getAllUserbookRecords(int userId, String isbn) {
        return recordDAO.getAllByUserIdAndIsbn(userId, isbn);
    }

    @Override
    public Integer addOrUpdate(Record record) {
        Record result = recordDAO.save(record);
        return result.getId();
    }
}
