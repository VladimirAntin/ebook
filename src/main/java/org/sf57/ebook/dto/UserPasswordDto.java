package org.sf57.ebook.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 24.12.17.
  Time: 11.42
*/
public class UserPasswordDto {
    @NotNull
    @Size(min = 1, max = 30)
    private String oldPassword;
    @NotNull
    @Size(min = 1, max = 30)
    private String newPassword;
    @NotNull
    @Size(min = 1, max = 30)
    private String newPasswordRepeat;

    public UserPasswordDto() { }

    public String getOldPassword() {
        return oldPassword;
    }

    public UserPasswordDto setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public UserPasswordDto setNewPassword(String newPassword) {
        this.newPassword = newPassword;
        return this;
    }

    public String getNewPasswordRepeat() {
        return newPasswordRepeat;
    }

    public UserPasswordDto setNewPasswordRepeat(String newPasswordRepeat) {
        this.newPasswordRepeat = newPasswordRepeat;
        return this;
    }
}
