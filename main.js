    <script>
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Track link clicks (placeholder function)
        function trackClick(platform) {
            console.log(`Clicked on ${platform} link`);
            // In a real implementation, you would send this data to analytics
        }
        
        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            const profileCard = document.querySelector('.profile-card');
            const linkCards = document.querySelectorAll('.link-card');
            
            // Add subtle animation on page load
            setTimeout(() => {
                profileCard.style.opacity = '1';
                profileCard.style.transform = 'translateY(0)';
                
                linkCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100 * index);
                });
            }, 300);
            
            // Initialize elements with opacity 0 for animation
            profileCard.style.opacity = '0';
            profileCard.style.transform = 'translateY(20px)';
            profileCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            linkCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
        });
    </script>