(function(){
  'use strict';

  var current=0, TOTAL=24, started=false, locked=STORY.enableSecretUnlock;
  var transitioning=false, musicPlaying=false, audio=null;

  // ── Fill placeholders ────────────────────────────
  document.querySelectorAll('[data-name]').forEach(function(e){e.textContent=STORY.recipientName});
  document.querySelectorAll('[data-sender]').forEach(function(e){e.textContent=STORY.senderName});
  document.querySelectorAll('[data-bday]').forEach(function(e){e.textContent=STORY.birthday});

  // ── Scenes ───────────────────────────────────────
  var scenes=[];
  for(var i=0;i<TOTAL;i++) scenes.push(document.getElementById('s'+i));

  // ── Reveal on scene enter ────────────────────────
  function reveal(scene){
    var els=scene.querySelectorAll('.reveal,.reveal-scale,.reveal-left,.reveal-right,.reveal-line');
    els.forEach(function(el,i){
      setTimeout(function(){el.classList.add('vis')},60+i*70);
    });
  }
  reveal(scenes[0]);

  // ── Go to scene ──────────────────────────────────
  function goTo(n){
    if(transitioning||n===current||n<0||n>=TOTAL)return;
    transitioning=true;
    scenes[current].classList.remove('active');
    setTimeout(function(){
      current=n;
      scenes[current].classList.add('active');
      updateUI();
      setTimeout(function(){reveal(scenes[current])},80);
      setTimeout(function(){transitioning=false},500);
    },60);
  }

  function next(){if(started&&current<TOTAL-1)goTo(current+1)}
  function prev(){if(current>2)goTo(current-1)}

  // ── UI updates ───────────────────────────────────
  var bar=document.getElementById('progress-bar');
  var label=document.getElementById('progress-label');
  var musicBtn=document.getElementById('music-btn');
  var navHint=document.getElementById('nav-hint');
  var tL=document.getElementById('touch-l');
  var tR=document.getElementById('touch-r');

  function updateUI(){
    if(current>=2){
      var pct=((current-2)/(TOTAL-3))*100;
      bar.style.width=pct+'%';
      label.textContent=String(current-1).padStart(2,'0')+' / '+String(TOTAL-2).padStart(2,'0');
      bar.style.display='block';label.style.display='block';
    }else{bar.style.display='none';label.style.display='none'}
    musicBtn.style.display=started?'flex':'none';
    navHint.style.display=(started&&current>=2&&current<TOTAL-1)?'block':'none';
    tL.style.display=(started&&current>=2)?'block':'none';
    tR.style.display=(started&&current>=2)?'block':'none';
  }

  // ── Keypad ───────────────────────────────────────
  var padInput='';
  var padDots=document.querySelectorAll('.keypad-dot');
  var padGrid=document.getElementById('pad-grid');
  var keys=['1','2','3','4','5','6','7','8','9','?','0','←'];
  keys.forEach(function(k){
    var b=document.createElement('button');
    b.className='keypad-btn';
    b.textContent=k;
    b.addEventListener('click',function(){pressKey(k)});
    padGrid.appendChild(b);
  });

  function pressKey(k){
    if(k==='←'){padInput=padInput.slice(0,-1);updDots();return}
    if(k==='?'||padInput.length>=4)return;
    padInput+=k;updDots();
    if(padInput.length===4){
      if(padInput===STORY.unlockDate){locked=false;setTimeout(function(){goTo(2)},400)}
      else{
        document.getElementById('pad-dots').classList.add('shake');
        setTimeout(function(){document.getElementById('pad-dots').classList.remove('shake');padInput='';updDots()},600);
      }
    }
  }
  function updDots(){
    padDots.forEach(function(d,i){
      d.textContent=padInput[i]?'•':'';
      d.classList.toggle('filled',!!padInput[i]);
    });
  }

  // ── Open / Enter buttons ─────────────────────────
  document.getElementById('btn-open').addEventListener('click',function(){
    started=true;startMusic();
    if(!STORY.enableSecretUnlock){locked=false;goTo(2)}else{goTo(1)}
  });
  document.getElementById('btn-enter').addEventListener('click',function(){
    document.getElementById('unlock-intro').style.display='none';
    document.getElementById('unlock-pad').style.display='block';
  });

  // ── Love cards (scene 14) ────────────────────────
  var lcIdx=0;
  var lcTitle=document.getElementById('lc-title');
  var lcDetail=document.getElementById('lc-detail');
  function updLoveCard(){
    lcTitle.textContent=LOVE_CARDS[lcIdx].title;
    lcDetail.textContent=LOVE_CARDS[lcIdx].detail;
    var card=document.getElementById('love-card');
    card.classList.remove('flipped');
  }
  updLoveCard();
  document.getElementById('love-card').addEventListener('click',function(){this.classList.toggle('flipped')});
  document.getElementById('lc-next').addEventListener('click',function(){
    lcIdx=(lcIdx+1)%LOVE_CARDS.length;updLoveCard();
    // Update counter
    var counter=document.querySelector('#s13 .font-label');
    if(counter)counter.textContent=String(lcIdx+1).padStart(2,'0')+' / '+String(LOVE_CARDS.length).padStart(2,'0');
  });

  // ── Timeline (scene 9) ───────────────────────────
  (function(){
    var c=document.getElementById('timeline');
    var d=document.createElement('div');d.className='tl-line';c.appendChild(d);
    TIMELINE.forEach(function(g,gi){
      var y=document.createElement('div');
      y.className='reveal-left';
      y.style.cssText='position:relative;margin:'+(gi?'24px':'0')+' 0 16px';
      y.innerHTML='<div class="tl-dot" style="top:4px"></div><h3 class="font-label" style="font-size:12px;letter-spacing:.2em;color:var(--burgundy);text-transform:uppercase;padding-left:16px">'+g.year+'</h3>';
      c.appendChild(y);
      g.events.forEach(function(ev){
        var e=document.createElement('div');
        e.className='reveal-left';
        e.style.cssText='position:relative;margin-bottom:16px;padding-left:16px';
        e.innerHTML='<div class="tl-dot-sm" style="top:7px"></div><p class="font-serif" style="font-size:14px;color:var(--soft-brown);line-height:1.5">'+ev.text+'</p>';
        c.appendChild(e);
      });
    });
  })();

  // ── Collage (scene 10) ───────────────────────────
  (function(){
    var c=document.getElementById('collage');
    var pics=PHOTOS.slice(0,4);
    var rots=[-5,4,-2,6];
    var pos=[{t:'0%',l:'5%'},{t:'8%',l:'42%'},{t:'38%',l:'0%'},{t:'40%',l:'38%'}];
    pics.forEach(function(src,i){
      var d=document.createElement('div');
      d.className='polaroid reveal-scale';
      d.style.cssText='position:absolute;width:56%;padding:8px 8px 30px;transform:rotate('+rots[i]+'deg);z-index:'+i+';top:'+pos[i].t+';left:'+pos[i].l;
      d.innerHTML='<img src="'+src+'" alt="" style="width:100%;aspect-ratio:4/5;object-fit:cover;display:block" loading="lazy">';
      c.appendChild(d);
    });
  })();

  // ── Gallery (scene 16) ───────────────────────────
  (function(){
    var g=document.getElementById('gallery');
    PHOTOS.slice(0,4).forEach(function(src,i){
      var d=document.createElement('div');
      d.className='reveal';
      d.innerHTML='<img src="'+src+'" alt="" style="width:100%;aspect-ratio:1;object-fit:cover;display:block;border-radius:2px" loading="lazy">';
      g.appendChild(d);
    });
  })();

  // ── Letter 2 (scene 17) ──────────────────────────
  (function(){
    var c=document.getElementById('letter2-body');
    PERSONAL_LETTER_2.split('\n').forEach(function(line){
      var p=document.createElement('p');
      p.className='reveal';
      p.style.cssText='font-family:"Cormorant Garamond",serif;font-size:14px;line-height:1.7;color:rgba(61,43,31,.75);'+(line.trim()===''?'height:16px':'');
      p.textContent=line;
      c.appendChild(p);
    });
  })();

  // ── Differences (scene 19) ───────────────────────
  (function(){
    var c=document.getElementById('diff-list');
    DIFFERENCES.forEach(function(item,i){
      var d=document.createElement('div');
      d.className='reveal';
      d.style.cssText='display:flex;align-items:center;gap:16px;margin-bottom:20px;padding-left:'+(i%2?8:0)+'px';
      d.innerHTML='<p class="font-serif" style="font-size:16px;color:var(--soft-brown);font-style:italic">'+item+'</p>';
      c.appendChild(d);
    });
  })();

  // ── Future memories (scene 20) ───────────────────
  (function(){
    var c=document.getElementById('future-list');
    var icons={plane:'✈',home:'⌂',compass:'◎',heart:'♡'};
    FUTURE_MEMORIES.forEach(function(item,i){
      var d=document.createElement('div');
      d.className='reveal';
      d.style.cssText='display:flex;align-items:center;gap:12px;margin-bottom:20px';
      d.innerHTML='<span style="font-size:18px;color:var(--burgundy)">'+(icons[item.icon]||'•')+'</span><div><p class="font-serif" style="font-size:15px;color:var(--dark-brown)">'+item.text+'</p><p class="font-label" style="font-size:10px;letter-spacing:.15em;color:var(--soft-brown);opacity:.6">'+item.year+'</p></div>';
      c.appendChild(d);
    });
  })();

  // ── Touch / swipe ────────────────────────────────
  var tY=0,tX=0;
  document.addEventListener('touchstart',function(e){tY=e.touches[0].clientY;tX=e.touches[0].clientX},{passive:true});
  document.addEventListener('touchend',function(e){
    var dy=tY-e.changedTouches[0].clientY,dx=tX-e.changedTouches[0].clientX;
    if(Math.abs(dy)<50&&Math.abs(dx)<50)return;
    Math.abs(dy)>Math.abs(dx)?(dy>0?next():prev()):(dx>0?next():prev());
  },{passive:true});

  // ── Keyboard ─────────────────────────────────────
  document.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight'||e.key==='ArrowDown'||e.key===' '){e.preventDefault();next()}
    else if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();prev()}
  });

  // ── Touch areas ──────────────────────────────────
  tL.addEventListener('click',prev);
  tR.addEventListener('click',next);

  // ── Music ────────────────────────────────────────
  function startMusic(){
    if(audio)return;
    audio=new Audio(STORY.musicFile);
    audio.loop=true;audio.volume=0.3;
    audio.play().then(function(){musicPlaying=true;updMusic()}).catch(function(){});
  }
  document.getElementById('music-btn').addEventListener('click',function(){
    if(!audio){startMusic();return}
    if(musicPlaying){audio.pause();musicPlaying=false}else{audio.play().then(function(){musicPlaying=true}).catch(function(){})}
    updMusic();
  });
  function updMusic(){
    document.querySelectorAll('.music-bar').forEach(function(b){b.classList.toggle('on',musicPlaying)});
  }

})();
