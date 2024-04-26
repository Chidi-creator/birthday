// $(document).ready(function() {
//     // Function to check if an element is in viewport
//     function isInViewport(element) {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }



//     // Function to add animation class when element is in viewport
//     function addAnimationOnScroll() {
//         const paragraphContainer = document.querySelector('.paragraph-container');
//         if (isInViewport(paragraphContainer) && !paragraphContainer.classList.contains('paragraph-animation')) {
//             paragraphContainer.classList.add('paragraph-animation');
//         }
//     }

//     // Call the function on page load and scroll
//     addAnimationOnScroll();
//     window.addEventListener('scroll', addAnimationOnScroll);
// });


// lightbox.option({
//     'resizeDuration': 200,
//     'wrapAround': true,
//     disableScrolling: true
//   })


