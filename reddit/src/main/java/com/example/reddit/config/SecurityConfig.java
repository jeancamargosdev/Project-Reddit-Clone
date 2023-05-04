package com.example.reddit.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
         httpSecurity
                        .httpBasic()
                        .and()
                        .authorizeHttpRequests()
                        .requestMatchers("/api/auth/**")
                        .permitAll().anyRequest()
                        .authenticated()
                        .and()
                        .csrf().disable();
                return httpSecurity.build();
}    @Bean
        PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}

//Deprecated:
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter{
//    @Override
//    public void configure (HttpSecurity httpSecurity) throws Exception {
//         httpSecurity.csrf().disable()
//                .authorizeHttpRequests()
//                .requestMatchers("/api/auth/**")
//                .permitAll()
//                .anyRequest()
//                .authenticated();
//}
//    @Bean
//    PasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }