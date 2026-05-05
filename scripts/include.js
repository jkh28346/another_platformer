//NOT CURRENTLY IN USE

async function loadIncludes() {
  try {
    const headerResponse = await fetch('../common/header.html');
    const footerResponse = await fetch('../common/footer.html');
    
    if (headerResponse.ok) {
        document.getElementById('header').innerHTML = await headerResponse.text();
    }
    
    if (footerResponse.ok) {
        document.getElementById('footer').innerHTML = await footerResponse.text();
    }
  } catch (error) {
      console.error('Error loading includes:', error);
  }
}

// Load includes when page is ready
document.addEventListener('DOMContentLoaded', loadIncludes);

// copy/pasted from: https://www.tutorialspoint.com/article/how-do-i-include-a-header-and-footer-file-on-every-html-page