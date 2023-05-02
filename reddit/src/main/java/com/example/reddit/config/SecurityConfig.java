package com.example.reddit.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    @Bean
    public void securityFilterChain(HttpSecurity httpSecurity) throws Exception {
                httpSecurity.csrf().disable()
                .authorizeHttpRequests()
                        .requestMatchers("/api/auth/**")
                        .permitAll()
                        .anyRequest()
                        .authenticated();
}

    @Bean
        PasswordEncoder passwordEncoder(){
            return new BCryptPasswordEncoder();
    }



}