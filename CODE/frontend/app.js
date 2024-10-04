// Utility function to show a specific section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
}

// Registration
document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('register');
});

document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('login');
});

document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault();
    logoutUser();
});

// Registration Form Handling
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const emergencyContactName = document.getElementById('emergencyContactName').value.trim();
    const emergencyContactNumber = document.getElementById('emergencyContactNumber').value.trim();

    if (fullName && email && address && phone && emergencyContactName && emergencyContactNumber) {
        if (localStorage.getItem(`user_${email}`)) {
            alert('User already exists. Please login.');
            return;
        }

        const user = {
            fullName,
            email,
            address,
            phone,
            emergencyContacts: [
                { name: emergencyContactName, number: emergencyContactNumber }
            ]
        };

        localStorage.setItem(`user_${email}`, JSON.stringify(user));

        alert('Registration successful. You can now log in.');
        showSection('login');
    } else {
        alert('Please fill in all the fields.');
    }
});

// Login Form Handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();

    const storedUser = localStorage.getItem(`user_${email}`);
    if (storedUser) {
        const user = JSON.parse(storedUser);

        // Display emergency contact information
        document.getElementById('displayFullName').textContent = user.fullName;
        document.getElementById('displayAddress').textContent = user.address;
        document.getElementById('displayPhone').textContent = user.phone;
        document.getElementById('displayEmergencyContactName').textContent = user.emergencyContacts[0].name;
        document.getElementById('displayEmergencyContactNumber').textContent = user.emergencyContacts[0].number;

        // Show relevant sections
        document.getElementById('emergencyContactSection').style.display = 'block';
        document.getElementById('logoutLink').style.display = 'inline-block';
        showSection('home');
    } else {
        alert('User not found. Please register.');
    }
});

// Logout User
function logoutUser() {
    alert('You have been logged out.');
    document.getElementById('emergencyContactSection').style.display = 'none';
    document.getElementById('logoutLink').style.display = 'none';
    showSection('home');
}

// Blog Section (Placeholder)
function openBlog(blogId) {
    alert(`Opening blog ${blogId}`);
}
