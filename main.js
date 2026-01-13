function showSection(id) {
  document.querySelectorAll('.content').forEach(section => {
    section.classList.remove('active');
  });

  const section = document.getElementById(id);
  section.classList.add('active');

  // Lazy-load iframe để tránh timeout
  section.querySelectorAll('[data-embed]').forEach(div => {
    if (!div.dataset.loaded) {
      const iframe = document.createElement('iframe');
      iframe.src = div.dataset.embed;
      iframe.allowFullscreen = true;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      div.innerHTML = "";
      div.appendChild(iframe);
      div.dataset.loaded = "true";
    }
  });

  // Luôn cuộn về đầu trang
  window.scrollTo({ top: 0, behavior: "smooth" });
}
