


      // Adding Scroll Animation via IntersectionObserver
      const sections = document.querySelectorAll('.section');
      const observerOptions = {
          threshold: 0.2  // Triggers when 20% of the element is in view
      };
  
      const observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate__fadeInUp');  // Add fade in animation
                  entry.target.classList.add('active'); // Make it visible
              }
          });
      }, observerOptions);
  
      sections.forEach(section => {
          observer.observe(section);
      });
 
