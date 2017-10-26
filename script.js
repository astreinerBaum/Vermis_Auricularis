function checkPageFocus() {
  var content = document.getElementsByClassName('content')[0];

  if (document.hasFocus()) {
    content.style.opacity = "1";
  } else {
    content.style.opacity = "0.2";
  }
}
setInterval(checkPageFocus, 200);

// console.log("x = " + screen.width);
// console.log("y = " + screen.height);

function humans() {
  window.open(
    'popups/human3.html',
    '_blank',
    'width=600, height=250,left=50,top=200'
  );
  window.open(
    'popups/human2.html',
    '_blank',
    'width=500, height=200, left=600,top=200'
  );
  window.open(
    'popups/human1.html',
    '_blank',
    'width=600, height=150, left=50,top=200'
  );
  window.clearTimeout(humans_time);
  return false;
}

function survive() {
  window.open(
    'popups/survive2.html',
    '_blank',
    'width=600, height=150, left=300,top=450'
  );
  window.open(
    'popups/survive.html',
    '_blank',
    'width=600, height=150, left=300,top=450'
  );
  window.clearTimeout(survive_time);
  return false;
}

function life() {
  window.open(
    'popups/life.html',
    '_blank',
    'width=500, height=150, left=200,top=500'
  );
  setTimeout(function() {
    window.open(
      'popups/life2.html',
      '_blank',
      'width=500, height=150, left=100,top=300'
    )
  }, 1000);
  window.clearTimeout(life_time);
  return false;
}

function brain() {
  window.open(
    'popups/brain.html',
    '_blank',
    'width=400, height=150, left=0,top=200'
  );
  setTimeout(function() {
    window.open(
      'popups/brain2.html',
      '_blank',
      'width=400, height=150, left=300,top=350'
    )
  }, 800);
  window.clearTimeout(brain_time);
  return false;
}

function reason() {
  window.open(
    'popups/reason.html',
    '_blank',
    'width=600, height=200, left=400,top=100'
  );
  setTimeout(function() {
    window.open(
      'popups/reason2.html',
      '_blank',
      'width=600, height=200, left=400,top=350'
    )
  }, 1400);
  window.clearTimeout(reason_time);
  return false;
}

function friend() {
  window.open(
    'popups/friend4.html',
    '_blank',
    'width=500, height=300, left=700,top=100'
  );
  window.open(
    'popups/friend3.html',
    '_blank',
    'width=500, height=300, left=600,top=200'
  );
  window.open(
    'popups/friend2.html',
    '_blank',
    'width=500, height=300, left=500,top=300'
  );
  window.open(
    'popups/friend.html',
    '_blank',
    'width=500, height=300, left=400,top=400'
  );

  window.clearTimeout(friend_time);
  return false;
}

function longtime() {
  window.open(
    'popups/longtime.html',
    '_blank',
    'width=600, height=120, left=40,top=400'
  );
  setTimeout(function() {
    window.open(
      'popups/longtime2.html',
      '_blank',
      'width=600, height=200, left=700,top=400'
    )
  }, 400);
  window.clearTimeout(longtime_time);
  return false;
}

function theEnd() {
  window.open(
    'popups/end.html',
    '_blank',
    'width=400, height=140, left=140,top=460'
  );
  setTimeout(function() {
    window.open(
      'popups/end2.html',
      '_blank',
      'width=400, height=140, left=550,top=600'
    )
  }, 1600);
  window.clearTimeout(theEnd_time);
  return false;
}
