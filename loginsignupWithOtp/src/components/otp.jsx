import React from "react";
import "./otp.css"



function Otp()
{
    return(
        <>
        <div class="otp-container">
    <div class="otp-content">
      <h2>OTP Verification</h2>
      <p>Enter the OTP sent to your phone number.</p>
      
      <div class="otp-inputs">
        <input type="text" maxlength="1" class="otp-box" />
        <input type="text" maxlength="1" class="otp-box" />
        <input type="text" maxlength="1" class="otp-box" />
        <input type="text" maxlength="1" class="otp-box" />
        <input type="text" maxlength="1" class="otp-box" />
        <input type="text" maxlength="1" class="otp-box" />
      </div>

      <button type="submit" class="verify-btn">Verify OTP</button>

      <p class="resend">
        Didn’t receive the OTP? <span class="resend-link">Resend OTP</span>
      </p>

      <div class="social-login">
        <button class="social-btn">Google</button>
        <button class="social-btn">Facebook</button>
      </div>
    </div>
  </div>
        </>
    )
}



export default Otp