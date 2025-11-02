const loadTemplate = async (id, path) => {
    const el = document.getElementById(id);
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`Gagal memuat ${path}`);
      el.innerHTML = await res.text();
    } catch (err) {
      el.innerHTML = `<p style="color:red">${err.message}</p>`;
    }
  };

  loadTemplate("header", "public/page/header.html");
  loadTemplate("footer", "public/page/footer.html");