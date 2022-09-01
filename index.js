const Header = () => {
  const header = document.createElement("header");
  header.innerHTML = `
  <header class="header">
    <img src="/assets/logo-uppersoft.png" alt="uppersoft" title="UpperSoft" class="logo">
  </header>
  `;
  return header;
};

document.body.appendChild(Header());
