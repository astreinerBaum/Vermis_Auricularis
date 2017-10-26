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
    'popups/friend.html',
    '_blank',
    'width=500, height=300, left=400,top=400'
  );
  setTimeout(function() {
    window.open(
      'popups/friend2.html',
      '_blank',
      'width=500, height=300, left=500,top=300'
    )
  }, 2000);
  setTimeout(function() {
    window.open(
      'popups/friend3.html',
      '_blank',
      'width=500, height=300, left=600,top=200'
    )
  }, 4000);
  setTimeout(function() {
    window.open(
      'popups/friend4.html',
      '_blank',
      'width=500, height=300, left=700,top=100'
    )
  }, 7000);

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

function encounter() {
  window.open(
    'popups/encounter3.html',
    '_blank',
    'width=500, height=250, left=340,top=360'
  );
  setTimeout(function() {
    window.open(
      'popups/encounter2.html',
      '_blank',
      'width=500, height=250, left=350,top=370'
    )
  }, 100);
  setTimeout(function() {
    window.open(
      'popups/encounter.html',
      '_blank',
      'width=500, height=250, left=360,top=380'
    )
  }, 100);
  window.clearTimeout(encounter_time);
  return false;
}

function ellipsis() {
  setTimeout(function() {
    window.open(
      'popups/ellipsis.html',
      '_blank',
      'width=700, height=300, left=60,top=200'
    )
  }, 0);
  setTimeout(function() {
    window.open(
      'popups/ellipsis2.html',
      '_blank',
      'width=700, height=150, left=360,top=600'
    )
  }, 1000);
  window.clearTimeout(ellipsis_time);
  return false;
}

function help() {
  setTimeout(function() {
    window.open(
      'popups/help.html',
      '_blank',
      'width=500, height=250, left=300,top=200'
    )
  }, 0);
  setTimeout(function() {
    window.open(
      'popups/help2.html',
      '_blank',
      'width=150, height=150, left=300,top=600'
    )
  }, 1000);
  setTimeout(function() {
    window.open(
      'popups/help2.html',
      '_blank',
      'width=150, height=150, left=300,top=600'
    )
  }, 2000);
  setTimeout(function() {
    window.open(
      'popups/help2.html',
      '_blank',
      'width=150, height=150, left=300,top=600'
    )
  }, 3000);
  window.clearTimeout(help_time);
  return false;
}

function discharge() {
  setTimeout(function() {
    window.open(
      'popups/discharge.html',
      '_blank',
      'width=200, height=200, left=300,top=200'
    )
  }, 0);
  setTimeout(function() {
    window.open(
      'popups/discharge.html',
      '_blank',
      'width=200, height=200, left=350,top=210'
    )
  }, 400);
  setTimeout(function() {
    window.open(
      'popups/discharge.html',
      '_blank',
      'width=200, height=200, left=400,top=220'
    )
  }, 400*2);
  setTimeout(function() {
    window.open(
      'popups/discharge.html',
      '_blank',
      'width=200, height=200, left=450,top=230'
    )
  }, 400*3);
  setTimeout(function() {
    window.open(
      'popups/discharge.html',
      '_blank',
      'width=200, height=200, left=500,top=240'
    )
  }, 400*4);
  setTimeout(function() {
    window.open(
      'popups/discharge.html',
      '_blank',
      'width=200, height=200, left=550,top=250'
    )
  }, 400*5);

  setTimeout(function() {
    window.open(
      'popups/discharge2.html',
      '_blank',
      'width=650, height=300, left=360,top=100'
    )
  }, 400*5+1000);
  window.clearTimeout(discharge_time);
  return false;
}

function neolib() {
  setTimeout(function() {
    window.open(
      'popups/neolib.html',
      '_blank',
      'width=450, height=150, left=300,top=300'
    )
  }, 0);
  setTimeout(function() {
    window.open(
      'popups/neolib2.html',
      '_blank',
      'width=450, height=150, left=300,top=300'
    )
  }, 1000);
  setTimeout(function() {
    window.open(
      'popups/neolib3.html',
      '_blank',
      'width=450, height=150, left=300,top=300'
    )
  }, 2000);
  setTimeout(function() {
    window.open(
      'popups/neolib4.html',
      '_blank',
      'width=450, height=150, left=300,top=300'
    )
  }, 3000);
  window.clearTimeout(neolib_time);
  return false;
}

function work() {
  setTimeout(function() {
    window.open(
      'popups/work.html',
      '_blank',
      'width=250, height=250, left=40,top=500'
    )
  }, 0);
  setTimeout(function() {
    window.open(
      'popups/work.html',
      '_blank',
      'width=250, height=250, left=140,top=480'
    )
  }, 400);
  setTimeout(function() {
    window.open(
      'popups/work.html',
      '_blank',
      'width=250, height=250, left=240,top=460'
    )
  }, 400*2);
  setTimeout(function() {
    window.open(
      'popups/work.html',
      '_blank',
      'width=250, height=250, left=340,top=480'
    )
  }, 400*3);
  setTimeout(function() {
    window.open(
      'popups/work.html',
      '_blank',
      'width=250, height=250, left=440,top=500'
    )
  }, 400*4);
  window.clearTimeout(work_time);
  return false;
}

function interaction() {
  setTimeout(function() {
    window.open(
      'popups/interaction.html',
      '_blank',
      'width=600, height=250, left=540,top=200'
    )
  }, 0);
  setTimeout(function() {
    window.open(
      'popups/interaction2.html',
      '_blank',
      'width=600, height=200, left=230,top=580'
    )
  }, 1400);
  window.clearTimeout(interaction_time);
  return false;
}

function honor() {
  setTimeout(function() {
    window.open(
      'popups/honor.html',
      '_blank',
      'width=600, height=250, left=20,top=20'
    )
  }, 0);
  window.clearTimeout(honor_time);
  return false;
}

function embrace() {
  setTimeout(function() {
    window.open(
      'popups/embrace.html',
      '_blank',
      'width=600, height=150, left=200,top=200'
    )
  }, 0);
  window.clearTimeout(embrace_time);
  return false;
}

function give() {
  setTimeout(function() {
    window.open(
      'popups/give.html',
      '_blank',
      'width=600, height=250, left=100,top=110'
    )
  }, 0);
  setTimeout(function() {
    window.open(
      'popups/give2.html',
      '_blank',
      'width=600, height=250, left=100,top=210'
    )
  },1000);
  setTimeout(function() {
    window.open(
      'popups/give3.html',
      '_blank',
      'width=600, height=250, left=100,top=310'
    )
  },2000);
  window.clearTimeout(give_time);
  return false;
}
function many() {
  setTimeout(function() {
    window.open(
      'popups/many.html',
      '_blank',
      'width=500, height=150, left=400,top=10'
    )
  }, 0);
  setTimeout(function() {
    window.open(
      'popups/many.html',
      '_blank',
      'width=500, height=150, left=300,top=20'
    )
  },400);
  setTimeout(function() {
    window.open(
      'popups/many2.html',
      '_blank',
      'width=600, height=250, left=500,top=300'
    )
  },1400);
  window.clearTimeout(many_time);
  return false;
}
