package com.oneteam.joyread.controller;

import com.oneteam.joyread.dto.LoginDTO;
import com.oneteam.joyread.entity.User;
import com.oneteam.joyread.service.implementation.UserServiceImpl;
import com.oneteam.joyread.utils.JWTUtil;
import org.apache.shiro.authz.UnauthenticatedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @CrossOrigin
    @PostMapping(value="/login")
    public ResponseEntity<LoginDTO> login(@RequestParam("phone")String phone, @RequestParam("password")String password) {
        try {
            User user = userService.get(phone, password);
            if(user == null) {
                throw new UnauthenticatedException("phone or password incorrect!");
            } else {
                LoginDTO loginDTO = new LoginDTO(user);
                loginDTO.setAuthorization(JWTUtil.sign(phone, password));
                return new ResponseEntity<>(loginDTO, HttpStatus.OK);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        }
    }

    @CrossOrigin
    @GetMapping(value="/verification/{phone}")
    public ResponseEntity<String> getVerificationCode(@PathVariable("phone")String phone) {
        try {
            return new ResponseEntity<>("123456", HttpStatus.OK);
            //return new ResponseEntity<>(userService.getVerifyCode(phone), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        }
    }
}
