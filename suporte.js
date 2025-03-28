
        document.getElementById('supportForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Remove any existing error classes
            document.querySelectorAll('input, textarea').forEach(element => {
                element.classList.remove('error');
            });

            // Basic validation
            let isValid = true;
            const fields = ['name', 'email', 'subject', 'message'];
            
            fields.forEach(field => {
                const element = document.getElementById(field);
                if (!element.value.trim()) {
                    element.classList.add('error');
                    isValid = false;
                }
            });

            // Email validation
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.classList.add('error');
                isValid = false;
            }

            if (isValid) {
                // Show success message
                const successMessage = document.getElementById('successMessage');
                successMessage.style.display = 'block';
                
                // Reset form
                this.reset();
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
            }
        });

        // Remove error class on input
        document.querySelectorAll('input, textarea').forEach(element => {
            element.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });