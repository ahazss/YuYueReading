package com.oneteam.joyread.dao;

import com.oneteam.joyread.entity.Record;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecordDAO extends JpaRepository<Record, Integer> {
    List<Record> getAllByUserIdAndIsbn(int userId, String isbn);
}
