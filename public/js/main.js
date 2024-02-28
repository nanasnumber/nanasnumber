(() => {

  const body = document.body;
  const menu = document.getElementById('menu');

  const navAction = () => {
    body.classList.toggle('nav-open');
    menu.classList.toggle('menu--open');
  };

  const navClose = () => {
    body.classList.remove('nav-open');
    menu.classList.remove('menu--open');
  };

  if (window.innerWidth <= 768) {

    if (!body.classList.contains('nav-open')) {
      return;
    }

    navClose();
  }

  menu.addEventListener('click', function () {
    navAction();
  }, false);

  window.addEventListener('resize', function () {

    if (window.innerWidth <= 768) {

      if (!body.classList.contains('nav-open')) {
        return;
      }

      navClose();
      return
    }

    if (body.classList.contains('nav-open')) {
      return;
    }

    navAction();
    return;
  }, false);

})();
