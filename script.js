const header=document.querySelector('.topbar');
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>30));
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const heroActions=document.querySelector('.hero-actions');
if(heroActions && !document.querySelector('.hero-socials')){
  const socials=document.createElement('div');
  socials.className='hero-socials';
  socials.setAttribute('aria-label','Redes sociais de Rafael Rodrigues');
  socials.innerHTML=`
    <a href="https://www.instagram.com/cantor_rafael_rodrigues?stkn=dnU4ZmlrcWg4YXht" target="_blank" rel="noopener" aria-label="Instagram">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r="1" class="fill"/></svg>
    </a>
    <a href="https://www.youtube.com/@cantorrafaelrodrigues" target="_blank" rel="noopener" aria-label="YouTube">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.2a3 3 0 0 0-2.1-2.1C17.1 5.6 12 5.6 12 5.6s-5.1 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12c0 1.3.1 2.6.4 3.8a3 3 0 0 0 2.1 2.1c1.8.5 6.9.5 6.9.5s5.1 0 6.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8Z"/><path class="fill-dark" d="m10 9 5 3-5 3Z"/></svg>
    </a>
    <a href="https://www.facebook.com/share/1Q7PsmYpb5/" target="_blank" rel="noopener" aria-label="Facebook">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.6v8h3.1Z"/></svg>
    </a>
    <a href="https://www.tiktok.com/@cantor.rafael_rodrigues?_r=1&_t=ZS-99fs9hiyLSv" target="_blank" rel="noopener" aria-label="TikTok">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 3c.3 2 1.5 3.4 3.8 3.8V10a8.3 8.3 0 0 1-3.8-1.1v5.6a5.5 5.5 0 1 1-4.7-5.4v3.2a2.3 2.3 0 1 0 1.5 2.2V3h3.2Z"/></svg>
    </a>`;
  heroActions.insertAdjacentElement('afterend',socials);
}

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>io.observe(el));