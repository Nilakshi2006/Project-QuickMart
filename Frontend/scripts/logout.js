 // Check if user is logged in and display user info
    window.addEventListener('DOMContentLoaded', () => {
      const token = localStorage.getItem('quickmart_token');
      const userDataString = localStorage.getItem('quickmart_user');

      if (!token || !userDataString) {
        // User not logged in, redirect to login page
        window.location.href = 'login.html';
        return;
      }

      try {
        const userData = JSON.parse(userDataString);
        document.getElementById('userName').textContent = userData.name || 'User';
        document.getElementById('userEmail').textContent = userData.email || '';
      } catch (error) {
        console.error('Error parsing user data:', error);
        document.getElementById('userName').textContent = 'User';
        document.getElementById('userEmail').textContent = '';
      }
    });

    // Confirm logout function
    function confirmLogout() {
      // Clear all authentication data
      localStorage.removeItem('quickmart_token');
      localStorage.removeItem('quickmart_user');
      localStorage.removeItem('remembered_email');

      // Hide logout form and show success message
      document.getElementById('beforeLogout').style.display = 'none';
      document.getElementById('afterLogout').classList.add('show');

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    }