package com.oneteam.joyread.dao;

import com.oneteam.joyread.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookDAO extends JpaRepository<Book,Integer> {
    //关键的地方在于方法的名字。
    Book findByIsbn(String isbn);

    List<Book> findAllByNameLikeOrWriterLike(String keyword1, String keyword2);

    //获取推荐图书
    @Query(value = "select * from Book order by grade desc LIMIT 3", nativeQuery = true)
    List<Book> getRecommendedBooks();

}
