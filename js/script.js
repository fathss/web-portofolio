function navigateTo(targetSectionId) {
  const element = document.getElementById(targetSectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

function toggleMobileMenu() {
  const isHidden = mobileMenu.classList.contains('hidden');
  if (isHidden) {
    mobileMenu.classList.remove('hidden');
    menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  }
}
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

function assets() {
  const modal = document.getElementById('diagnosticsModal');
  modal.classList.toggle('hidden');
}

function copyEmailToClipboard() {
  const emailText = "alwifathu@gmail.com";
  const textarea = document.createElement('textarea');
  textarea.value = emailText;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    alert('Alamat email "alwifathu@gmail.com" berhasil disalin ke papan klip.');
  } catch (err) {
    console.error('Gagal menyalin email: ', err);
  }
  document.body.removeChild(textarea);
}

const projectData = {
  'room-reservation': {
    title: 'Room Reservation System',
    images: [
      'assets/peminjaman-ruangan/user_dashboard.png',
      'assets/peminjaman-ruangan/user_booking.png',
      'assets/peminjaman-ruangan/user_create_booking.png',
      'assets/peminjaman-ruangan/admin_dashboard.png',
      'assets/peminjaman-ruangan/admin_room_management.png',
      'assets/peminjaman-ruangan/admin_user_booking.png',
    ],
    description: 'Proyek pertama yang saya bangun dengan integrasi penuh antara frontend dan backend melalui REST API. Sistem ini mengelola alur peminjaman ruangan mulai dari pengajuan booking, proses approval, hingga pencatatan status ruangan secara real-time.',
    challenge: 'Sebagai proyek integrasi API pertama, tantangan utamanya adalah memahami bagaimana data mengalir antara frontend dan backend — input apa yang dikirim, output apa yang diharapkan, dan bagaimana struktur API yang benar seharusnya dibuat.',
    solution: 'Pendekatan yang saya pakai adalah bereksperimen secara iteratif — mencoba, melihat hasilnya, lalu memperbaiki. Proses trial and error ini justru menjadi cara belajar yang paling efektif untuk memahami kontrak antara client dan server.',
    highlight: 'Proyek ini sekaligus menjadi pengalaman pertama saya menggunakan Docker untuk hosting web app — memperkenalkan saya pada konsep containerization sejak awal masa kuliah.',
    stack: ['React', 'ASP.NET Core', 'PostgreSQL', 'Docker']
  },
  'md-converter': {
    title: 'Markdown to DOCX Converter',
    images: [
      'assets/md-converter/main_1.png',
      'assets/md-converter/main_2.png', 
    ],
    description: 'Proyek personal yang lahir dari kebutuhan sendiri — ingin punya converter Markdown yang bisa diekspor sesuai preferensi. Dilengkapi live editor & preview, serta opsi kustomisasi dokumen seperti penomoran halaman, Table of Contents, dan pilihan template DOCX.',
    challenge: 'Tantangan utama ada di conversion engine-nya. Banyak pilihan library yang tersedia, tapi masing-masing punya keterbatasan dalam hal fleksibilitas opsi konversi.',
    solution: 'Memilih pypandoc sebagai conversion engine utama karena memungkinkan penambahan opsi konversi secara dinamis — sehingga setiap kombinasi pengaturan dari pengguna bisa ditangani dengan lebih elegan tanpa perlu hard-code setiap skenario.',
    highlight: 'Ini adalah proyek yang benar-benar saya bangun untuk kebutuhan sendiri, bukan sekadar tugas. Proses memilih dan mengevaluasi berbagai conversion engine sebelum memutuskan pypandoc mengajarkan saya cara menimbang trade-off teknologi secara lebih matang.',
    stack: ['FastAPI', 'React', 'pypandoc'],
    attachments: [
      { name: 'file_original.md', url: 'assets/md-converter/original_file.md' },
      { name: 'hasil_konversi.docx', url: 'assets/md-converter/converted_result.docx' },
    ],
  },
  'masbro-project': {
    title: 'Masbro Project - 2D Platformer Game',
    images: [
      'assets/masbro-project/masbro_2.jpeg',
      'assets/masbro-project/masbro_3.jpeg',
    ],
    description: 'Proyek kolaboratif pertama sekaligus pengalaman pertama di dunia game development. Game 2D platformer yang dikembangkan bersama tim UKM Gamespace, dengan kontribusi pada sistem movement karakter dan desain level menggunakan pendekatan canvas-based level editor.',
    challenge: 'Awalnya terlihat sederhana — baca input WASD dan space untuk movement. Tapi seiring berjalannya proyek, kompleksitasnya meningkat. Memory management, optimasi frame rate, dan debugging di lingkungan game jauh lebih tricky dibanding development web biasa.',
    solution: 'Bekerja sebagai tim menjadi kunci. Setiap anggota saling melengkapi, dan dengan pembagian tanggung jawab yang jelas, kami berhasil menyelesaikan game hingga playable.',
    highlight: 'Pelajaran terbesar dari proyek ini bukan soal Unity atau C# — tapi soal mindset. Saya mulai sadar bahwa kode yang kita tulis hari ini belum tentu aman untuk masa depan. Baris kode yang tampak tidak berbahaya sekarang bisa menjadi bencana di kemudian hari. Sejak saat itu saya selalu berusaha menulis kode yang bisa hidup lama dan tidak merusak sistem lain.',
    stack: ['Unity', 'C#']
  },
  'tb-check': {
    title: 'TBCheck App',
    images: [
      'assets/tb-check/super_admin1.jpeg',
      'assets/tb-check/super_admin2.jpeg',
      'assets/tb-check/admin1.jpeg',
      'assets/tb-check/admin2.jpeg',
      'assets/tb-check/admin3.jpeg',
      'assets/tb-check/user1.jpeg',
      'assets/tb-check/user2.jpeg',
      'assets/tb-check/user3.jpeg',
      'assets/tb-check/user4.jpeg',
    ],
    description: 'Aplikasi mobile kolaboratif yang dibangun menggunakan Flutter, untuk mendukung penanganan TBC. Fitur utamanya mencakup tracking konsumsi obat, pemantauan pasien terdaftar di fasilitas kesehatan, dan pencarian faskes terdekat berbasis lokasi.',
    challenge: 'Dua tantangan utama — pertama, belajar Flutter dari nol sambil langsung menerapkan clean architecture. Kedua, integrasi Google Maps API yang sempat terhenti karena trial API habis di tengah pengembangan.',
    solution: 'Untuk arsitektur, kita menerapkan clean architecture yang disederhanakan — tanpa layer domain, langsung layer data dan presentation — dengan Riverpod sebagai state management. Untuk masalah Google API, kita membuat API demo sementara agar pengembangan tetap bisa berjalan.',
    highlight: 'Proyek ini mengajarkan saya betapa pentingnya Separation of Concern secara nyata. Dengan struktur yang modular dan terpisah dengan jelas, kode jadi jauh lebih mudah di-maintain dan di-scale. Pelajaran ini yang sampai sekarang selalu saya bawa ke proyek berikutnya.',
    stack: ['Flutter', 'ASP.NET Core', 'PostgreSQL', 'Google Maps API', 'Riverpod']
  },
  'quake-alert': {
    title: 'QuakeAlert - Earthquake Mitigation Dashboard',
    images: [
      'assets/quake-alert/screenshot1.png',
      'assets/quake-alert/screenshot2.png',
      'assets/quake-alert/screenshot3.png',
      'assets/quake-alert/screenshot4.png',
    ],
    description: 'Proyek kolaboratif dashboard web pemantauan gempa bumi real-time menggunakan data resmi dari API BMKG. Dilengkapi peta titik kejadian, push notifikasi otomatis via OneSignal, fitur analitik historis, dan sistem login berbasis OTP.',
    challenge: 'Tantangan utama ada di konfigurasi SMTP untuk pengiriman OTP — beberapa port SMTP diblokir oleh Railway sebagai platform hosting, sehingga email OTP tidak bisa terkirim melalui SMTP Google.',
    solution: 'Solusi permanennya belum terimplementasi, tapi rencananya akan beralih ke third party email service seperti Resend agar pengiriman OTP tidak bergantung pada SMTP Google yang portnya diblokir. Ini jadi pelajaran nyata tentang keterbatasan environment hosting yang harus diperhitungkan sejak awal.',
    highlight: 'Dua hal menarik dari proyek ini — pertama, penggunaan background worker di ASP.NET untuk fetch data BMKG secara berkala tanpa mengganggu performa utama. Kedua, implementasi cron job untuk membangunkan service backend pada interval tertentu, sehingga tidak terus-menerus berjalan dan memakan resource server.',
    stack: ['React', 'ASP.NET Core', 'PostgreSQL', 'GeoJSON', 'OneSignal', 'Docker', 'Railway']
  },
  'tixdesk': {
    title: 'TixDesk - Aplikasi Ticketing Web & Mobile',
    images: ['assets/tixdesk/thumbnail_tix.jpeg'],
    description: 'Proyek terbesar yang pernah saya kerjakan — produk aplikasi ticketing berbasis web dan mobile, serupa Zendesk, bersama tim 7 orang. Berkontribusi sebagai backend developer sekaligus part-time mobile developer, mulai dari maintain API, optimasi performa, hingga deployment ke Google Play Store.',
    challenge: 'Bekerja dalam tim besar dengan scope proyek yang luas mengharuskan koordinasi yang ketat. Di sisi teknis, tantangannya mencakup maintain server di dua provider berbeda (Railway dan VPS kampus), serta memastikan fitur real-time chat dan sistem attachment berjalan stabil.',
    solution: 'Tim menerapkan prinsip Agile dan sebagian Scrum — dengan siklus retrospective dan refleksi rutin yang membuat tim selalu bisa memperbaiki proses kerja. Di sisi teknis, mengimplementasikan SignalR untuk real-time chat, object storage untuk attachment terpusat, dan sistem caching di sisi mobile untuk pengalaman yang terasa instan.',
    highlight: 'Banyak hal baru yang pertama kali saya lakukan di proyek ini — deploy ke Google Play Console, optimasi cached network image agar preview gambar tidak terus-menerus request ke backend, dan belajar bagaimana keputusan arsitektur kecil bisa berdampak besar pada performa di skala produksi nyata.',
    stack: ['Flutter', 'ASP.NET Core', 'PostgreSQL', 'SignalR', 'Docker', 'Railway', 'VPS']
  },
};

let currentProjectImages = [];
let currentImageIndex = 0;

function openProjectModal(id) {
  const data = projectData[id];
  if (!data) return;

  document.getElementById('modalTitle').innerText = data.title;
  document.getElementById('modalDesc').innerText = data.description;
  document.getElementById('modalChallenge').innerText = data.challenge;
  document.getElementById('modalSolution').innerText = data.solution;
  document.getElementById('modalHighlight').innerText = data.highlight;

  const stackEl = document.getElementById('modalStack');
  stackEl.innerHTML = data.stack.map(s =>
    `<span class="tech-tag">${s}</span>`
  ).join('');

  currentProjectImages = data.images;
  currentImageIndex = 0;
  document.getElementById('modalTrack').innerHTML = '';
  updateCarousel();

  const attEl = document.getElementById('modalAttachments');
  const attList = document.getElementById('modalAttachmentsList');
  if (data.attachments && data.attachments.length) {
    attList.innerHTML = data.attachments.map(a =>
      `<a href="${a.url}" download onclick="event.stopPropagation()" class="flex items-center space-x-3 group w-fit">
        <svg class="w-4 h-4 text-stone-muted group-hover:text-emerald-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        <span class="font-sans text-sm text-stone-muted group-hover:text-charcoal transition-colors border-b border-transparent group-hover:border-emerald pb-0.5">${a.name}</span>
      </a>`
    ).join('');
    attEl.classList.remove('hidden');
  } else {
    attEl.classList.add('hidden');
  }

  const modal = document.getElementById('projectModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function updateCarousel() {
  const single = currentProjectImages.length <= 1;
  const track = document.getElementById('modalTrack');

  if (!track.hasChildNodes()) {
    track.innerHTML = currentProjectImages.map(src =>
      `<div class="w-full flex-shrink-0 flex items-center justify-center max-h-[75vh]"><img src="${src}" alt="" class="w-full object-contain max-h-[75vh]"/></div>`
    ).join('');
  }

  track.style.transform = `translateX(-${currentImageIndex * 100}%)`;

  const dots = document.getElementById('modalDots');
  dots.innerHTML = single ? '' : currentProjectImages.map((_, i) =>
    `<button onclick="goToImage(${i})" class="w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/70'}" aria-label="Go to image ${i + 1}"></button>`
  ).join('');

  document.querySelectorAll('#projectModal .group button').forEach(btn => {
    if (btn.closest('#modalDots')) return;
    btn.classList.toggle('hidden', single);
  });
}

function prevImage() {
  if (currentProjectImages.length === 0) return;
  currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
  updateCarousel();
}

function nextImage() {
  if (currentProjectImages.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
  updateCarousel();
}

function goToImage(index) {
  currentImageIndex = index;
  updateCarousel();
}

document.getElementById('projectModal').addEventListener('click', function(e) {
  if (e.target === this) closeProjectModal();
});

window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main > section');
  const navLinks = {
    home: document.getElementById('nav-home'),
    work: document.getElementById('nav-work'),
    about: document.getElementById('nav-about'),
    contact: document.getElementById('nav-contact')
  };

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        Object.values(navLinks).forEach(link => {
          if (link) {
            link.classList.remove('text-charcoal', 'border-b-2', 'border-emerald', 'pb-1');
            link.classList.add('text-stone-muted');
          }
        });

        if (navLinks[id]) {
          navLinks[id].classList.add('text-charcoal', 'border-b-2', 'border-emerald', 'pb-1');
          navLinks[id].classList.remove('text-stone-muted');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0 });

    fadeEls.forEach(el => fadeObserver.observe(el));
  }
});
