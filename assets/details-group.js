/**
 * Adds event listeners to details elements with data-details-group attribute.
 * When a details element is toggled open, it closes all other details elements with the same data-details-group value.
 */
(function () {
  // Select all details elements with data-details-group attribute
  const detailsElements = document.querySelectorAll('details[data-details-group]');

  // Add event listener to each details element
  detailsElements.forEach((detailsElement) => {
    detailsElement.addEventListener('toggle', () => {
      // Check if the details element is open
      if (detailsElement.open) {
        // Get the value of the data-details-group attribute
        const groupValue = detailsElement.dataset.detailsGroup;

        // Close all other details elements with the same data-details-group value
        detailsElements.forEach((otherDetailsElement) => {
          if (otherDetailsElement !== detailsElement && otherDetailsElement.dataset.detailsGroup === groupValue) {
            otherDetailsElement.open = false;
          }
        });
      }
    });
  });
})();
