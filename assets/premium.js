/* premium motion — progressive enhancement; SEO content always in DOM */
document.documentElement.classList.add('js');
(function(){
 // mark animated elements
 var sel='.reveal, section .wrap>*, .svc article, .step, .gal figure, .pgal figure, .svcblock, .catttl, .trust div';
 document.querySelectorAll(sel).forEach(function(e){e.classList.add('reveal')});
 document.querySelectorAll('h1, .lead, .subhero h1, .band q, .svc-head h2').forEach(function(e){e.classList.add('mask')});
 function reveal(){
  var io=new IntersectionObserver(function(es){es.forEach(function(x){
    if(x.isIntersecting){var t=x.target;var d=(+ (t.dataset.d||0));setTimeout(function(){t.classList.add('in')},d);io.unobserve(t)}})},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  // stagger siblings
  document.querySelectorAll('.svc article,.gal figure,.pgal figure,.trust div,.step').forEach(function(e,i){e.dataset.d=(i%6)*70});
  document.querySelectorAll('.reveal,.mask').forEach(function(e){io.observe(e)});
 }
 reveal();
 setTimeout(function(){document.querySelectorAll('.reveal,.mask').forEach(function(e){e.classList.add('in')})},2600);/*FAILSAFE*/
 // Lenis smooth scroll
 function startLenis(){
  if(!window.Lenis)return;
  var l=new Lenis({duration:1.15,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t))},smoothWheel:true});
  function raf(t){l.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf);
  document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){
    var id=a.getAttribute('href');if(id.length>1){var el=document.querySelector(id);if(el){e.preventDefault();l.scrollTo(el,{offset:-70})}}})});
 }
 // hero parallax (cheap, transform only)
 var hero=document.querySelector('.hero');
 if(hero){addEventListener('scroll',function(){var y=scrollY;if(y<900)hero.style.setProperty('--py',(y*0.18)+'px')},{passive:true});
  var st=document.createElement('style');st.textContent='.hero::before{transform:translateY(var(--py,0)) scale(1.06)}';document.head.appendChild(st);}
 if(window.Lenis)startLenis();else addEventListener('load',startLenis);
})();
