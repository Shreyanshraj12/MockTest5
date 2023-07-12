function validateForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const genderInput = document.getElementById('gender');
    const dateInput = document.getElementById('date');
    const colorInput = document.getElementById('color');
    
    // Validate name (at least 2 characters)
    if (nameInput.value.trim().length < 2) {
      alert('Please enter a valid name (at least 2 characters)');
      nameInput.focus();
      return;
    }
    
    // Validate email
    if (!isValidEmail(emailInput.value.trim())) {
      alert('Please enter a valid email address');
      emailInput.focus();
      return;
    }
    
    // Validate phone number (10 digits)
    if (!isValidPhoneNumber(phoneInput.value.trim())) {
      alert('Please enter a valid phone number (10 digits)');
      phoneInput.focus();
      return;
    }
    
    // Validate password (at least 6 characters)
    if (passwordInput.value.length < 6) {
      alert('Please enter a password with at least 6 characters');
      passwordInput.focus();
      return;
    }
    
    // Validate age (at least 18 years)
    if (ageInput.value < 18) {
      alert('You must be at least 18 years old');
      ageInput.focus();
      return;
    }
    
    // Validate gender
    if (genderInput.value === '') {
      alert('Please select a gender');
      genderInput.focus();
      return;
    }
    
    // Validate date (not in the future)
    const currentDate = new Date().toISOString().split('T')[0];
    if (dateInput.value > currentDate) {
      alert('Please select a valid date');
      dateInput.focus();
      return;
    }
    
    // Validate color (optional validation)
    // You can add custom validation rules for color if required
    
    // If all validations pass, submit the form
    form.submit();
  }
  
  // Helper function to validate email address
  function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to validate phone number
  function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  