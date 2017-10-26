
function humans() {
  let winPop = [
    window.open(
      'popups/human2.html',
      'human2',
      'width=600, height=250, scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=50,top=200'
    ),
    window.open(
      'popups/human1.html',
      'human1',
      'width=600, height=150, scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=50,top=200'
    )
  ]
  return false;
}

function survive() {
    window.open(
      'popups/survive.html',
      'survive',
      'width=600, height=150, scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=300,top=450'
    );
  return false;
}

function life() {
    window.open(
      'popups/life.html',
      'life',
      'width=600, height=150, scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=200,top=500'
    );
  return false;
}
