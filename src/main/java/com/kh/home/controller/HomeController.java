package com.kh.home.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
  @RequestMapping("/")
  public String home() {
    return "index";
  }

  @RequestMapping("/failure")
  public String loginFailure() {
    return "common/failure";
  }

  @RequestMapping("/login/oauth/google")
  public String googleLoginReslut(@RequestParam(value = "code" ,defaultValue = "") String code,
      @RequestParam(value="error", defaultValue="") String error, Model model, HttpSession session) {
    if(code.isEmpty())  {   // 인증 실패
      session.setAttribute("errorMsg", error);
      return "redirect:/failure";
    } else{               // 인증 성공
      session.setAttribute("user", code);
      return "redirect:/";
    }
  }
}
