package com.pms.service;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // You can load user from the database here. This is a simple hardcoded example.
        return new User("user", "$2a$10$Dow1Q/ohya4tEdz3vnXGleqE9R7Z6UOWI5ixxt/nKlz6IqF4vL2Fq", new ArrayList<>());
    }
}
