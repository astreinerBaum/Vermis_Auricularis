
function humans() {
    window.open(
      'popups/human2.html',
      '_blank',
      'width=600, height=250, scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=50,top=200'
    );
    window.open(
      'popups/human1.html',
      '_blank',
      'width=600, height=150, scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=50,top=200'
    );
  window.clearTimeout(humans_time);
  return false;
}

function survive() {
    window.open(
      'popups/survive.html',
      '_blank',
      'width=600, height=150, scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=300,top=450'
    );
    window.clearTimeout(survive_time);
  return false;
}

function life() {
    window.open(
      'popups/life.html',
      '_blank',
      'width=500, height=150, scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=200,top=500'
    );
    window.clearTimeout(life_time);
  return false;
}
