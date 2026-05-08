export type Article = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  category: string;
  publishedDate?: string;
  sections: {
    h2: string;
    paragraphs: string[];
    h3: string;
    h4: string;
    h5: string;
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
};

export const heavyEquipment = [
  'excavator',
  'mini excavator',
  'long arm excavator',
  'amphibious excavator',
  'bulldozer',
  'wheel loader',
  'backhoe loader',
  'motor grader',
  'vibro roller',
  'tandem roller',
  'pneumatic tire roller',
  'soil compactor',
  'stamper',
  'crane',
  'mobile crane',
  'crawler crane',
  'tower crane',
  'forklift',
  'telehandler',
  'dump truck',
  'tronton',
  'lowbed trailer',
  'water truck',
  'concrete mixer truck',
  'concrete pump',
  'asphalt finisher',
  'asphalt sprayer',
  'cold milling machine',
  'genset',
  'compressor',
  'skid steer loader',
  'dozer swamp',
  'pile driver',
  'bor pile machine',
  'scissor lift',
  'boom lift'
];

const baseArticles: Article[] = [
  {
    slug: 'panduan-sewa-alat-berat-pekanbaru',
    title: 'Panduan Sewa Alat Berat Pekanbaru untuk Proyek Efisien',
    description: 'Panduan memilih layanan sewa alat berat Pekanbaru untuk pekerjaan tanah, konstruksi, perkebunan, dan infrastruktur.',
    keyword: 'sewa alat berat Pekanbaru',
    category: 'Panduan',
    sections: [
      {
        h2: 'Mengapa Sewa Alat Berat Lebih Praktis',
        paragraphs: [
          'Sewa alat berat membantu proyek bergerak cepat tanpa beban investasi unit, operator, perawatan, dan penyimpanan. Di Pekanbaru, kebutuhan alat berat banyak datang dari pekerjaan cut and fill, pembukaan lahan, drainase, jalan lingkungan, gudang, perkebunan, hingga proyek komersial.',
          'Pilihan unit bisa disesuaikan dengan medan. Excavator cocok untuk galian dan loading, bulldozer untuk dorong material, motor grader untuk perataan, vibro roller untuk pemadatan, dan dump truck untuk angkut material.'
        ],
        h3: 'Cara Menentukan Unit yang Tepat',
        h4: 'Data Lokasi yang Perlu Disiapkan',
        h5: 'Catatan Sebelum Meminta Penawaran'
      },
      {
        h2: 'Komponen Harga Sewa yang Perlu Dipahami',
        paragraphs: [
          'Harga sewa umumnya dipengaruhi jenis unit, durasi kerja, jarak mobilisasi, kondisi medan, kebutuhan operator, dan bahan bakar. Proyek dengan akses sempit atau tanah lunak biasanya memerlukan survei agar rekomendasi unit lebih akurat.',
          'Sebelum mulai, pastikan jam kerja, area tanggung jawab, metode pembayaran, dan rencana mobilisasi sudah jelas. Kejelasan ini mengurangi jeda kerja di lapangan.'
        ],
        h3: 'Durasi Harian, Mingguan, dan Bulanan',
        h4: 'Mobilisasi dan Demobilisasi',
        h5: 'Checklist Kontrak Sederhana'
      }
    ]
  },
  {
    slug: 'sewa-excavator-pekanbaru',
    title: 'Sewa Excavator Pekanbaru untuk Galian dan Land Clearing',
    description: 'Artikel SEO tentang sewa excavator Pekanbaru, kegunaan, ukuran unit, dan tips memilih bucket sesuai pekerjaan.',
    keyword: 'sewa excavator Pekanbaru',
    category: 'Excavator',
    sections: [
      {
        h2: 'Fungsi Excavator dalam Proyek Pekanbaru',
        paragraphs: [
          'Excavator adalah unit utama untuk pekerjaan galian, pengerukan, loading material, bongkar struktur ringan, dan pembukaan lahan. Unit ini fleksibel karena attachment dapat disesuaikan dengan pekerjaan.',
          'Untuk area perumahan, mini excavator sering lebih efisien. Untuk lahan luas, excavator kelas 20 ton memberi produktivitas yang lebih tinggi.'
        ],
        h3: 'Pilihan Ukuran Excavator',
        h4: 'Bucket Standar, Rock, dan Mud',
        h5: 'Kapan Memakai Long Arm'
      },
      {
        h2: 'Tips Menekan Biaya Sewa Excavator',
        paragraphs: [
          'Siapkan batas area kerja, titik buang material, dan akses keluar masuk dump truck sebelum unit tiba. Operator dapat bekerja lebih cepat jika alur material sudah jelas.',
          'Jika pekerjaan dekat rawa atau tanah jenuh air, pertimbangkan amphibious excavator atau swamp excavator agar risiko amblas berkurang.'
        ],
        h3: 'Produktivitas Excavator per Jam',
        h4: 'Koordinasi dengan Dump Truck',
        h5: 'Evaluasi Medan Sebelum Mobilisasi'
      }
    ]
  },
  {
    slug: 'sewa-bulldozer-pekanbaru',
    title: 'Sewa Bulldozer Pekanbaru untuk Dorong Tanah dan Pembukaan Lahan',
    description: 'Kegunaan bulldozer untuk land clearing, spreading material, dan pekerjaan dorong tanah di Pekanbaru.',
    keyword: 'sewa bulldozer Pekanbaru',
    category: 'Bulldozer',
    sections: [
      {
        h2: 'Peran Bulldozer di Lapangan',
        paragraphs: [
          'Bulldozer dipakai untuk mendorong tanah, meratakan material kasar, membuka semak, membuat jalan kerja, dan membantu pekerjaan awal sebelum pemadatan. Unit ini kuat untuk medan berat dan volume material besar.',
          'Untuk lahan basah, dozer swamp dengan track lebih lebar dapat memberi tekanan tanah lebih rendah sehingga lebih stabil.'
        ],
        h3: 'Bulldozer untuk Land Clearing',
        h4: 'Dozer Standar dan Dozer Swamp',
        h5: 'Rencana Kerja Harian'
      },
      {
        h2: 'Kapan Bulldozer Lebih Baik daripada Excavator',
        paragraphs: [
          'Jika target pekerjaan adalah mendorong material dalam jarak pendek dan membentuk elevasi awal, bulldozer biasanya lebih cepat. Jika targetnya menggali dalam atau memuat dump truck, excavator lebih sesuai.',
          'Kombinasi bulldozer, excavator, dan vibro roller sering dipakai untuk pembukaan akses dan pemadatan dasar jalan.'
        ],
        h3: 'Kombinasi Unit yang Efektif',
        h4: 'Jarak Dorong Ekonomis',
        h5: 'Indikator Produktivitas'
      }
    ]
  },
  {
    slug: 'sewa-wheel-loader-pekanbaru',
    title: 'Sewa Wheel Loader Pekanbaru untuk Loading Material',
    description: 'Manfaat sewa wheel loader Pekanbaru untuk stockpile, loading pasir, batu, tanah, sawit, dan material curah.',
    keyword: 'sewa wheel loader Pekanbaru',
    category: 'Loader',
    sections: [
      {
        h2: 'Wheel Loader untuk Area Stockpile',
        paragraphs: [
          'Wheel loader unggul untuk memindahkan material curah di area stockpile, batching plant, gudang, pelabuhan, dan quarry. Bucket besar membuat proses loading ke dump truck lebih cepat.',
          'Unit ini cocok untuk permukaan kerja yang relatif padat. Pada tanah sangat lunak, perlu perbaikan akses atau pilihan unit ber-track.'
        ],
        h3: 'Material yang Cocok Ditangani',
        h4: 'Kapasitas Bucket',
        h5: 'Pengaturan Jalur Truck'
      },
      {
        h2: 'Efisiensi Operasi Wheel Loader',
        paragraphs: [
          'Produktivitas loader sangat dipengaruhi jarak angkut pendek, posisi tumpukan material, dan pola manuver. Area kerja yang rapi mengurangi waktu putar dan konsumsi bahan bakar.',
          'Koordinasi antara loader dan armada dump truck membuat loading lebih stabil dari awal sampai akhir shift.'
        ],
        h3: 'Layout Area Kerja',
        h4: 'Keamanan Manuver',
        h5: 'Checklist Operator'
      }
    ]
  },
  {
    slug: 'sewa-vibro-roller-pekanbaru',
    title: 'Sewa Vibro Roller Pekanbaru untuk Pemadatan Tanah',
    description: 'Panduan sewa vibro roller Pekanbaru untuk pemadatan jalan, halaman gudang, timbunan, dan proyek infrastruktur.',
    keyword: 'sewa vibro roller Pekanbaru',
    category: 'Compactor',
    sections: [
      {
        h2: 'Fungsi Vibro Roller',
        paragraphs: [
          'Vibro roller digunakan untuk memadatkan tanah, base course, dan material granular. Getaran drum membantu mengurangi rongga udara sehingga lapisan lebih stabil.',
          'Untuk area sempit, tandem roller atau stamper dapat melengkapi pekerjaan pada sisi tepi, parit, dan sudut bangunan.'
        ],
        h3: 'Jenis Material yang Dipadatkan',
        h4: 'Jumlah Lintasan Pemadatan',
        h5: 'Kontrol Kadar Air'
      },
      {
        h2: 'Pemadatan yang Rapi dan Merata',
        paragraphs: [
          'Hasil pemadatan ditentukan oleh ketebalan hamparan, kadar air, berat unit, amplitudo getaran, dan jumlah passing. Hamparan yang terlalu tebal membuat hasil kurang merata.',
          'Pada proyek jalan, vibro roller sering bekerja setelah motor grader meratakan material.'
        ],
        h3: 'Urutan Kerja Jalan',
        h4: 'Peran Motor Grader',
        h5: 'Dokumentasi Lapangan'
      }
    ]
  },
  {
    slug: 'sewa-motor-grader-pekanbaru',
    title: 'Sewa Motor Grader Pekanbaru untuk Perataan Jalan',
    description: 'Motor grader membantu membentuk kemiringan, elevasi, dan finishing permukaan jalan di Pekanbaru.',
    keyword: 'sewa motor grader Pekanbaru',
    category: 'Grader',
    sections: [
      {
        h2: 'Motor Grader untuk Finishing Permukaan',
        paragraphs: [
          'Motor grader dipakai untuk membentuk permukaan jalan, bahu jalan, kemiringan drainase, dan hamparan base course. Blade panjang memberi kontrol elevasi yang lebih presisi.',
          'Unit ini efektif setelah material dihamparkan oleh dump truck dan sebelum dipadatkan dengan vibro roller.'
        ],
        h3: 'Pekerjaan yang Membutuhkan Grader',
        h4: 'Kontrol Kemiringan Jalan',
        h5: 'Pemeriksaan Elevasi'
      },
      {
        h2: 'Meningkatkan Kualitas Jalan Kerja',
        paragraphs: [
          'Jalan kerja yang rata mempercepat lalu lintas truck dan mengurangi risiko kerusakan kendaraan. Pada proyek besar, grader menjadi kunci kelancaran logistik material.',
          'Rencana lintasan grader sebaiknya mengikuti arah drainase agar air tidak tertahan di badan jalan.'
        ],
        h3: 'Drainase Permukaan',
        h4: 'Kombinasi dengan Roller',
        h5: 'Standar Finishing'
      }
    ]
  },
  {
    slug: 'sewa-crane-pekanbaru',
    title: 'Sewa Crane Pekanbaru untuk Pengangkatan Material Berat',
    description: 'Panduan sewa mobile crane, crawler crane, dan tower crane untuk lifting material konstruksi di Pekanbaru.',
    keyword: 'sewa crane Pekanbaru',
    category: 'Crane',
    sections: [
      {
        h2: 'Jenis Crane untuk Proyek',
        paragraphs: [
          'Crane digunakan untuk mengangkat material berat seperti baja, precast, mesin, kontainer, dan komponen pabrik. Mobile crane cocok untuk pekerjaan yang berpindah, sedangkan crawler crane stabil untuk medan tertentu.',
          'Tower crane lebih umum pada gedung bertingkat dengan kebutuhan lifting berulang dalam radius tetap.'
        ],
        h3: 'Mobile, Crawler, dan Tower Crane',
        h4: 'Radius Kerja dan Load Chart',
        h5: 'Rigger dan Signalman'
      },
      {
        h2: 'Keamanan Lifting',
        paragraphs: [
          'Sebelum lifting, berat beban, titik angkat, radius, kondisi tanah, dan penghalang di sekitar area harus diperiksa. Kesalahan membaca kapasitas crane dapat berdampak serius.',
          'Gunakan operator berpengalaman dan pastikan area kerja steril saat pengangkatan berlangsung.'
        ],
        h3: 'Metode Kerja Lifting',
        h4: 'Pemeriksaan Sling dan Hook',
        h5: 'Dokumen Izin Kerja'
      }
    ]
  },
  {
    slug: 'sewa-forklift-pekanbaru',
    title: 'Sewa Forklift Pekanbaru untuk Gudang dan Industri',
    description: 'Sewa forklift Pekanbaru untuk bongkar muat pallet, gudang, pabrik, ruko, dan area logistik.',
    keyword: 'sewa forklift Pekanbaru',
    category: 'Forklift',
    sections: [
      {
        h2: 'Forklift untuk Handling Barang',
        paragraphs: [
          'Forklift mempercepat bongkar muat pallet, mesin, material kemasan, dan barang gudang. Unit tersedia dalam berbagai kapasitas angkat sesuai berat dan dimensi barang.',
          'Untuk area indoor, forklift electric lebih bersih. Untuk area outdoor, forklift diesel sering dipilih karena tenaga dan ketahanannya.'
        ],
        h3: 'Kapasitas dan Tinggi Angkat',
        h4: 'Indoor dan Outdoor',
        h5: 'Kondisi Lantai Kerja'
      },
      {
        h2: 'Tips Sewa Forklift yang Aman',
        paragraphs: [
          'Pastikan berat barang tidak melebihi kapasitas unit dan beban memiliki titik angkat yang stabil. Pallet rusak atau lantai miring bisa membuat pekerjaan berisiko.',
          'Jika membutuhkan jangkauan lebih tinggi atau maju, telehandler dapat menjadi alternatif untuk proyek konstruksi.'
        ],
        h3: 'Operator Bersertifikat',
        h4: 'Inspeksi Harian',
        h5: 'Manajemen Area Bongkar Muat'
      }
    ]
  },
  {
    slug: 'sewa-dump-truck-pekanbaru',
    title: 'Sewa Dump Truck Pekanbaru untuk Angkut Tanah dan Material',
    description: 'Sewa dump truck Pekanbaru untuk angkut tanah, pasir, batu, sirtu, base course, limbah proyek, dan material curah.',
    keyword: 'sewa dump truck Pekanbaru',
    category: 'Truck',
    sections: [
      {
        h2: 'Peran Dump Truck dalam Proyek',
        paragraphs: [
          'Dump truck digunakan untuk mengangkut material hasil galian, tanah timbunan, pasir, batu, sirtu, base course, dan limbah proyek. Armada truck menentukan kelancaran siklus kerja excavator atau loader.',
          'Untuk volume besar, tronton atau kombinasi lowbed trailer dapat dipakai sesuai jenis muatan dan akses jalan.'
        ],
        h3: 'Kapasitas Angkut',
        h4: 'Rute dan Akses Jalan',
        h5: 'Estimasi Ritase'
      },
      {
        h2: 'Mengatur Ritase agar Efisien',
        paragraphs: [
          'Jumlah dump truck harus seimbang dengan produktivitas excavator, jarak buang, waktu antre, dan kondisi lalu lintas. Kekurangan truck membuat alat gali menunggu, terlalu banyak truck membuat area padat.',
          'Perencanaan titik muat dan titik buang mempercepat pekerjaan serta mengurangi biaya operasional.'
        ],
        h3: 'Siklus Muat Angkut Buang',
        h4: 'Koordinasi di Lapangan',
        h5: 'Rekap Volume Harian'
      }
    ]
  },
  {
    slug: 'sewa-lowbed-trailer-pekanbaru',
    title: 'Sewa Lowbed Trailer Pekanbaru untuk Mobilisasi Alat Berat',
    description: 'Lowbed trailer dibutuhkan untuk mobilisasi excavator, bulldozer, crane, wheel loader, dan alat berat lain.',
    keyword: 'sewa lowbed trailer Pekanbaru',
    category: 'Mobilisasi',
    sections: [
      {
        h2: 'Fungsi Lowbed Trailer',
        paragraphs: [
          'Lowbed trailer dipakai untuk mengangkut alat berat dari pool ke lokasi proyek. Dek rendah membantu membawa unit tinggi seperti excavator, bulldozer, wheel loader, dan crane dengan lebih stabil.',
          'Mobilisasi harus mempertimbangkan lebar jalan, jembatan, kabel rendah, radius tikungan, serta izin lintasan bila diperlukan.'
        ],
        h3: 'Unit yang Bisa Diangkut',
        h4: 'Persiapan Rute',
        h5: 'Loading dan Unloading'
      },
      {
        h2: 'Mencegah Keterlambatan Mobilisasi',
        paragraphs: [
          'Jadwal lowbed sebaiknya dikunci sebelum tanggal kerja alat dimulai. Keterlambatan mobilisasi dapat membuat biaya sewa alat utama tidak produktif.',
          'Pastikan lokasi punya ruang cukup untuk menurunkan unit dan berputar dengan aman.'
        ],
        h3: 'Survei Akses Masuk',
        h4: 'Koordinasi Pengawalan',
        h5: 'Dokumentasi Serah Terima'
      }
    ]
  },
  {
    slug: 'sewa-concrete-pump-pekanbaru',
    title: 'Sewa Concrete Pump Pekanbaru untuk Pengecoran Cepat',
    description: 'Sewa concrete pump dan concrete mixer truck untuk pengecoran rumah, ruko, gudang, jalan, dan bangunan komersial.',
    keyword: 'sewa concrete pump Pekanbaru',
    category: 'Beton',
    sections: [
      {
        h2: 'Concrete Pump untuk Pengecoran',
        paragraphs: [
          'Concrete pump membantu menyalurkan beton ke area yang sulit dijangkau secara manual. Pekerjaan cor lantai, dak, kolom, jalan, dan gudang menjadi lebih cepat dan rapi.',
          'Unit ini sering bekerja bersama concrete mixer truck. Koordinasi kedatangan beton penting agar pengecoran tidak terputus.'
        ],
        h3: 'Line Pump dan Boom Pump',
        h4: 'Akses Unit ke Lokasi',
        h5: 'Persiapan Area Cor'
      },
      {
        h2: 'Menjaga Mutu Pengecoran',
        paragraphs: [
          'Mutu beton dipengaruhi komposisi, waktu tempuh, slump, metode pemompaan, dan pemadatan. Tim lapangan harus siap sebelum truck mixer tiba.',
          'Rencana alur pengecoran membantu mengurangi cold joint dan waktu tunggu.'
        ],
        h3: 'Koordinasi Truck Mixer',
        h4: 'Pembersihan Pipa',
        h5: 'Kontrol Setelah Cor'
      }
    ]
  },
  {
    slug: 'sewa-asphalt-finisher-pekanbaru',
    title: 'Sewa Asphalt Finisher Pekanbaru untuk Pengaspalan',
    description: 'Asphalt finisher, tandem roller, pneumatic tire roller, dan asphalt sprayer untuk pekerjaan jalan aspal.',
    keyword: 'sewa asphalt finisher Pekanbaru',
    category: 'Aspal',
    sections: [
      {
        h2: 'Alat Utama Pekerjaan Aspal',
        paragraphs: [
          'Asphalt finisher menghampar campuran aspal panas dengan ketebalan dan lebar yang lebih konsisten. Setelah hamparan, tandem roller dan pneumatic tire roller membantu mencapai kepadatan akhir.',
          'Asphalt sprayer digunakan untuk tack coat atau prime coat sesuai kebutuhan lapisan.'
        ],
        h3: 'Urutan Pengaspalan',
        h4: 'Suhu Campuran Aspal',
        h5: 'Kontrol Ketebalan'
      },
      {
        h2: 'Hasil Jalan yang Lebih Rata',
        paragraphs: [
          'Kualitas pengaspalan dipengaruhi persiapan base, temperatur material, kecepatan finisher, dan pola pemadatan. Gangguan pasokan aspal dapat membuat permukaan kurang seragam.',
          'Pastikan area bebas genangan dan debu sebelum proses tack coat dimulai.'
        ],
        h3: 'Persiapan Base Course',
        h4: 'Pemadatan Berlapis',
        h5: 'Pemeriksaan Visual'
      }
    ]
  },
  {
    slug: 'sewa-alat-berat-perkebunan-riau',
    title: 'Sewa Alat Berat untuk Perkebunan di Riau',
    description: 'Kebutuhan alat berat untuk perkebunan sawit, akses kebun, parit, kanal, land clearing, dan perawatan infrastruktur.',
    keyword: 'sewa alat berat perkebunan Riau',
    category: 'Perkebunan',
    sections: [
      {
        h2: 'Alat Berat untuk Area Perkebunan',
        paragraphs: [
          'Perkebunan membutuhkan alat berat untuk membuka lahan, membuat parit, memperbaiki jalan kebun, membersihkan kanal, dan menata area produksi. Excavator, dozer swamp, grader, roller, dan dump truck sering menjadi kombinasi utama.',
          'Kondisi tanah gambut atau lahan basah perlu perhatian khusus agar unit tidak mudah amblas.'
        ],
        h3: 'Pekerjaan Kanal dan Parit',
        h4: 'Jalan Produksi Kebun',
        h5: 'Unit untuk Tanah Lunak'
      },
      {
        h2: 'Produktivitas di Medan Kebun',
        paragraphs: [
          'Medan kebun sering memiliki akses jauh, permukaan licin, dan titik kerja berpindah. Perencanaan BBM, operator, dan titik istirahat unit membantu menjaga produktivitas.',
          'Survei awal memudahkan pemilihan unit antara excavator standar, long arm, amphibious, atau dozer swamp.'
        ],
        h3: 'Survei Lahan Basah',
        h4: 'Mobilisasi ke Area Dalam',
        h5: 'Target Harian'
      }
    ]
  },
  {
    slug: 'sewa-alat-berat-proyek-jalan-pekanbaru',
    title: 'Sewa Alat Berat Proyek Jalan Pekanbaru',
    description: 'Kombinasi alat berat untuk proyek jalan: excavator, dump truck, motor grader, vibro roller, asphalt finisher, dan water truck.',
    keyword: 'sewa alat berat proyek jalan Pekanbaru',
    category: 'Jalan',
    sections: [
      {
        h2: 'Kombinasi Unit untuk Proyek Jalan',
        paragraphs: [
          'Proyek jalan membutuhkan urutan kerja yang jelas, mulai dari galian, timbunan, perataan, pemadatan, penyiraman, sampai pengaspalan. Excavator, dump truck, motor grader, vibro roller, water truck, dan asphalt finisher sering digunakan bersama.',
          'Pemilihan unit yang seimbang membantu setiap tahap berjalan tanpa antre terlalu lama.'
        ],
        h3: 'Tahap Pekerjaan Jalan',
        h4: 'Perataan dan Pemadatan',
        h5: 'Pengaspalan Akhir'
      },
      {
        h2: 'Mengurangi Hambatan Lapangan',
        paragraphs: [
          'Hambatan utama proyek jalan biasanya akses material, cuaca, drainase, dan koordinasi alat. Rencana kerja harian membantu operator memahami target volume dan area prioritas.',
          'Jika base course belum padat, proses aspal sebaiknya ditunda sampai lapisan dasar memenuhi standar lapangan.'
        ],
        h3: 'Manajemen Material',
        h4: 'Pengaruh Cuaca',
        h5: 'Laporan Progress'
      }
    ]
  },
  {
    slug: 'harga-sewa-alat-berat-pekanbaru',
    title: 'Harga Sewa Alat Berat Pekanbaru dan Faktor Penentunya',
    description: 'Memahami faktor harga sewa alat berat Pekanbaru: jenis unit, durasi, operator, BBM, mobilisasi, dan medan.',
    keyword: 'harga sewa alat berat Pekanbaru',
    category: 'Harga',
    sections: [
      {
        h2: 'Faktor yang Mempengaruhi Harga',
        paragraphs: [
          'Harga sewa alat berat tidak hanya ditentukan oleh jenis unit. Durasi kerja, jarak mobilisasi, kebutuhan operator, BBM, kondisi lokasi, dan target volume ikut memengaruhi penawaran.',
          'Unit yang lebih besar tidak selalu lebih mahal secara total jika produktivitasnya jauh lebih tinggi untuk volume pekerjaan tertentu.'
        ],
        h3: 'Jenis Unit dan Kapasitas',
        h4: 'Harian, Mingguan, Bulanan',
        h5: 'Biaya Mobilisasi'
      },
      {
        h2: 'Cara Meminta Penawaran yang Akurat',
        paragraphs: [
          'Agar harga lebih tepat, siapkan alamat lokasi, foto area kerja, jenis pekerjaan, estimasi volume, durasi, dan kebutuhan tambahan seperti operator atau BBM. Informasi yang lengkap mempercepat proses estimasi.',
          'Untuk pekerjaan kompleks, survei lokasi dapat membantu menentukan unit paling efisien dan menghindari perubahan biaya di tengah proyek.'
        ],
        h3: 'Data Proyek yang Dibutuhkan',
        h4: 'Survei dan Rekomendasi Unit',
        h5: 'Kejelasan Lingkup Kerja'
      }
    ]
  }
];

type Topic = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  category: string;
  focus: string;
  unit: string;
  job: string;
  terrain: string;
};

const longArticle: Article = {
  slug: 'cara-memilih-jasa-sewa-alat-berat-pekanbaru',
  title: 'Cara Memilih Jasa Sewa Alat Berat Pekanbaru yang Tepat',
  description: 'Panduan lengkap sekitar 1000 kata untuk memilih jasa sewa alat berat Pekanbaru berdasarkan kebutuhan unit, medan, biaya, operator, dan jadwal proyek.',
  keyword: 'cara memilih jasa sewa alat berat Pekanbaru',
  category: 'Panduan Lengkap',
  sections: [
    {
      h2: 'Memahami Kebutuhan Proyek Sebelum Menyewa',
      paragraphs: [
        'Memilih jasa sewa alat berat Pekanbaru sebaiknya dimulai dari pemahaman pekerjaan, bukan dari harga termurah. Setiap proyek memiliki kebutuhan yang berbeda. Pekerjaan galian pondasi, pembukaan lahan, normalisasi parit, pemadatan jalan, pengangkatan material, dan pengaspalan membutuhkan unit, operator, serta metode kerja yang tidak sama. Jika kebutuhan awal tidak jelas, alat yang datang ke lokasi bisa terlalu kecil, terlalu besar, atau tidak cocok dengan kondisi medan.',
        'Langkah pertama adalah mencatat jenis pekerjaan, luas area, perkiraan volume material, target durasi, akses masuk, titik buang, dan batasan kerja di sekitar lokasi. Informasi sederhana seperti lebar jalan, kondisi tanah, keberadaan kabel rendah, area putar truck, dan jarak dari jalan utama dapat memengaruhi pilihan alat. Excavator standar mungkin ideal untuk galian terbuka, tetapi mini excavator lebih aman untuk halaman sempit. Bulldozer kuat untuk dorong tanah, tetapi kurang efisien untuk memuat material ke dump truck.'
      ],
      h3: 'Data Lapangan yang Wajib Disiapkan',
      h4: 'Volume, Akses, dan Target Durasi',
      h5: 'Kesalahan Awal yang Sering Terjadi'
    },
    {
      h2: 'Menentukan Jenis Unit yang Paling Efisien',
      paragraphs: [
        'Setelah lingkup kerja jelas, tahap berikutnya adalah menentukan jenis unit. Untuk pekerjaan tanah, kombinasi excavator, bulldozer, wheel loader, dump truck, motor grader, vibro roller, dan water truck sering dipakai. Untuk proyek bangunan atau industri, crane, forklift, telehandler, concrete pump, concrete mixer truck, genset, compressor, dan scissor lift bisa lebih relevan. Semakin tepat kombinasi unit, semakin kecil waktu tunggu antar alat di lapangan.',
        'Efisiensi tidak selalu berarti memilih unit paling besar. Unit besar memang punya produktivitas tinggi, tetapi memerlukan akses yang cukup, biaya mobilisasi lebih besar, dan ruang kerja yang aman. Pada proyek perumahan atau ruko, unit kecil sering lebih lincah dan mengurangi risiko kerusakan area sekitar. Pada proyek jalan atau perkebunan, unit besar lebih masuk akal karena volume material lebih banyak dan area kerja lebih luas.'
      ],
      h3: 'Mencocokkan Unit dengan Pekerjaan',
      h4: 'Kapan Memakai Unit Kecil atau Besar',
      h5: 'Kombinasi Alat yang Umum Dipakai'
    },
    {
      h2: 'Mengecek Kondisi Medan dan Risiko Lapangan',
      paragraphs: [
        'Pekanbaru dan wilayah Riau memiliki variasi medan yang cukup luas, mulai dari tanah keras perkotaan, area timbunan, lahan basah, sampai tanah gambut di kawasan perkebunan. Kondisi ini berpengaruh langsung terhadap pilihan alat berat. Tanah lunak membutuhkan perhatian khusus karena risiko unit amblas, produktivitas turun, dan mobilisasi lebih rumit. Pada kondisi seperti itu, long arm excavator, amphibious excavator, dozer swamp, atau track dengan tekanan tanah lebih rendah bisa menjadi pilihan.',
        'Survei lokasi sangat membantu sebelum kontrak disepakati. Foto dan video memang berguna, tetapi beberapa proyek membutuhkan pengecekan langsung untuk melihat akses lowbed trailer, area parkir alat, jalur dump truck, dan titik kerja yang aman. Survei juga membantu memperkirakan kebutuhan material pendukung seperti plat besi, batu base, atau perbaikan akses sementara.'
      ],
      h3: 'Medan Kering, Basah, dan Gambut',
      h4: 'Survei Lokasi Sebelum Mobilisasi',
      h5: 'Mitigasi Risiko Alat Amblas'
    },
    {
      h2: 'Membandingkan Harga dengan Lingkup yang Sama',
      paragraphs: [
        'Harga sewa alat berat Pekanbaru dapat berbeda karena komponen penawarannya tidak selalu sama. Ada penawaran yang sudah termasuk operator, ada yang belum. Ada yang menghitung BBM terpisah, ada yang memasukkan mobilisasi dan demobilisasi, ada juga yang membatasi jam kerja harian. Karena itu, membandingkan harga harus dilakukan berdasarkan lingkup yang sama. Harga murah belum tentu lebih hemat jika ternyata banyak biaya tambahan muncul setelah unit bekerja.',
        'Mintalah rincian yang jelas: jenis unit, kapasitas, tahun atau kondisi unit bila tersedia, durasi sewa, jam kerja, operator, BBM, mobilisasi, demobilisasi, biaya lembur, mekanisme downtime, dan tanggung jawab bila cuaca menghambat pekerjaan. Rincian tersebut membuat keputusan lebih rasional dan mengurangi salah paham di lapangan.'
      ],
      h3: 'Komponen Biaya Sewa',
      h4: 'Operator, BBM, dan Mobilisasi',
      h5: 'Membaca Penawaran dengan Teliti'
    },
    {
      h2: 'Memastikan Operator dan Dukungan Teknis',
      paragraphs: [
        'Operator berpengalaman sering menjadi pembeda antara pekerjaan lancar dan pekerjaan tersendat. Alat yang bagus tetap membutuhkan operator yang memahami medan, ritme kerja, keselamatan, dan koordinasi dengan pekerja lain. Untuk pekerjaan galian dekat bangunan, operator harus presisi. Untuk loading material, operator perlu menjaga siklus agar dump truck tidak menunggu terlalu lama. Untuk lifting dengan crane, komunikasi rigger dan signalman wajib disiplin.',
        'Selain operator, perhatikan dukungan teknis penyedia sewa. Tanyakan bagaimana penanganan jika alat bermasalah, berapa lama respons mekanik, dan apakah tersedia unit pengganti untuk pekerjaan kritis. Downtime yang panjang dapat membuat biaya proyek membengkak karena pekerja, truck, atau material ikut menunggu.'
      ],
      h3: 'Peran Operator dalam Produktivitas',
      h4: 'Respons Mekanik dan Unit Pengganti',
      h5: 'Pentingnya Komunikasi Lapangan'
    },
    {
      h2: 'Menyusun Jadwal Kerja dan Mobilisasi',
      paragraphs: [
        'Jadwal mobilisasi harus disusun sebelum hari kerja pertama. Alat berat tidak selalu bisa dikirim mendadak karena membutuhkan lowbed trailer, akses jalan yang aman, dan koordinasi waktu masuk lokasi. Untuk proyek di area padat, pengiriman kadang perlu dilakukan pada jam tertentu agar tidak mengganggu lalu lintas. Untuk lokasi jauh, kebutuhan bahan bakar dan tempat istirahat operator juga perlu diperhitungkan.',
        'Buat target harian yang realistis. Misalnya volume galian per hari, ritase dump truck, panjang jalan yang dipadatkan, atau jumlah titik lifting. Target membantu penyedia alat dan pemilik proyek menilai apakah kombinasi unit sudah sesuai. Jika progress terlalu lambat, penyebabnya bisa dianalisis lebih cepat: akses kurang baik, jumlah truck kurang, cuaca buruk, atau unit yang kurang tepat.'
      ],
      h3: 'Rencana Harian yang Terukur',
      h4: 'Koordinasi Lowbed Trailer',
      h5: 'Mengurangi Waktu Tunggu'
    },
    {
      h2: 'Memperhatikan Keselamatan dan Administrasi',
      paragraphs: [
        'Keselamatan kerja tidak boleh dianggap formalitas. Area alat berat harus memiliki batas aman, pekerja tidak boleh berada di blind spot, dan komunikasi antar operator harus jelas. Untuk crane, forklift, concrete pump, atau pekerjaan dekat jaringan listrik, prosedur keselamatan harus lebih ketat. Kecelakaan kecil pun bisa menghentikan proyek dan menambah biaya yang jauh lebih besar dibanding persiapan keselamatan sejak awal.',
        'Administrasi sederhana juga penting. Buat kesepakatan tertulis mengenai unit, durasi, biaya, jam kerja, tanggung jawab BBM, mobilisasi, demobilisasi, dan cara pencatatan jam kerja. Catatan harian operator atau time sheet membantu kedua pihak memiliki data yang sama. Dokumentasi foto sebelum dan sesudah pekerjaan juga berguna untuk evaluasi progress.'
      ],
      h3: 'Area Aman dan Blind Spot',
      h4: 'Time Sheet dan Dokumentasi',
      h5: 'Kesepakatan Sebelum Unit Bekerja'
    },
    {
      h2: 'Kesimpulan Memilih Penyedia Sewa',
      paragraphs: [
        'Jasa sewa alat berat yang tepat adalah penyedia yang mampu memahami kebutuhan proyek, memberi rekomendasi unit yang masuk akal, menjelaskan biaya secara terbuka, menyediakan operator kompeten, dan siap mendukung pekerjaan saat terjadi kendala teknis. Untuk proyek di Pekanbaru, keputusan terbaik biasanya lahir dari kombinasi data lapangan yang jelas dan komunikasi yang rapi sebelum mobilisasi.',
        'Sebelum menyewa, siapkan foto lokasi, alamat lengkap, jenis pekerjaan, estimasi volume, target mulai, dan batasan akses. Dengan data tersebut, penyedia dapat membantu memilih apakah proyek membutuhkan excavator, bulldozer, wheel loader, motor grader, vibro roller, crane, forklift, dump truck, lowbed trailer, concrete pump, asphalt finisher, genset, atau kombinasi beberapa unit. Perencanaan yang matang membuat pekerjaan lebih cepat, biaya lebih terkendali, dan hasil akhir lebih sesuai target.'
      ],
      h3: 'Checklist Keputusan Akhir',
      h4: 'Konsultasi Sebelum Sewa',
      h5: 'Target Proyek yang Lebih Terkendali'
    }
  ]
};

const extraTopics: Topic[] = [
  { slug: 'sewa-mini-excavator-pekanbaru', title: 'Sewa Mini Excavator Pekanbaru untuk Area Sempit', description: 'Panduan sewa mini excavator Pekanbaru untuk pekerjaan ruko, perumahan, parit kecil, taman, dan renovasi lahan sempit.', keyword: 'sewa mini excavator Pekanbaru', category: 'Excavator', focus: 'area sempit', unit: 'mini excavator', job: 'galian ringan dan perataan halaman', terrain: 'akses perumahan yang terbatas' },
  { slug: 'sewa-long-arm-excavator-pekanbaru', title: 'Sewa Long Arm Excavator Pekanbaru untuk Jangkauan Jauh', description: 'Long arm excavator cocok untuk normalisasi sungai, kanal, kolam, dan pekerjaan yang membutuhkan jangkauan lebih panjang.', keyword: 'sewa long arm excavator Pekanbaru', category: 'Excavator', focus: 'jangkauan jauh', unit: 'long arm excavator', job: 'normalisasi kanal dan pengerukan', terrain: 'tepi sungai atau area berlumpur' },
  { slug: 'sewa-amphibious-excavator-riau', title: 'Sewa Amphibious Excavator Riau untuk Lahan Basah', description: 'Amphibious excavator membantu pekerjaan rawa, gambut, kanal, dan area berair di Pekanbaru serta Riau.', keyword: 'sewa amphibious excavator Riau', category: 'Excavator', focus: 'lahan basah', unit: 'amphibious excavator', job: 'pengerukan rawa dan kanal', terrain: 'tanah lunak berair' },
  { slug: 'sewa-dozer-swamp-riau', title: 'Sewa Dozer Swamp Riau untuk Tanah Lunak', description: 'Dozer swamp digunakan pada area gambut, rawa, dan pekerjaan pembukaan lahan dengan daya dukung tanah rendah.', keyword: 'sewa dozer swamp Riau', category: 'Bulldozer', focus: 'tanah lunak', unit: 'dozer swamp', job: 'dorong tanah dan pembukaan akses', terrain: 'gambut atau rawa' },
  { slug: 'sewa-backhoe-loader-pekanbaru', title: 'Sewa Backhoe Loader Pekanbaru untuk Pekerjaan Serbaguna', description: 'Backhoe loader cocok untuk proyek kecil yang membutuhkan fungsi gali, angkut ringan, dan perapian area kerja.', keyword: 'sewa backhoe loader Pekanbaru', category: 'Loader', focus: 'pekerjaan serbaguna', unit: 'backhoe loader', job: 'galian kecil dan loading ringan', terrain: 'area perkotaan' },
  { slug: 'sewa-telehandler-pekanbaru', title: 'Sewa Telehandler Pekanbaru untuk Material Handling', description: 'Telehandler membantu mengangkat material ke area tinggi dengan jangkauan maju yang lebih fleksibel.', keyword: 'sewa telehandler Pekanbaru', category: 'Forklift', focus: 'jangkauan material', unit: 'telehandler', job: 'handling material konstruksi', terrain: 'proyek bangunan dan gudang' },
  { slug: 'sewa-tandem-roller-pekanbaru', title: 'Sewa Tandem Roller Pekanbaru untuk Aspal dan Area Sempit', description: 'Tandem roller digunakan untuk pemadatan aspal, jalan lingkungan, halaman, dan area dengan lebar terbatas.', keyword: 'sewa tandem roller Pekanbaru', category: 'Compactor', focus: 'pemadatan aspal', unit: 'tandem roller', job: 'pemadatan permukaan aspal', terrain: 'jalan lingkungan' },
  { slug: 'sewa-pneumatic-tire-roller-pekanbaru', title: 'Sewa Pneumatic Tire Roller Pekanbaru untuk Kepadatan Aspal', description: 'PTR membantu finishing pemadatan aspal agar permukaan lebih rapat dan stabil.', keyword: 'sewa pneumatic tire roller Pekanbaru', category: 'Aspal', focus: 'finishing aspal', unit: 'pneumatic tire roller', job: 'pemadatan lapisan aspal', terrain: 'jalan baru dan overlay' },
  { slug: 'sewa-soil-compactor-pekanbaru', title: 'Sewa Soil Compactor Pekanbaru untuk Timbunan Tanah', description: 'Soil compactor membantu pemadatan tanah timbunan, badan jalan, halaman gudang, dan area industri.', keyword: 'sewa soil compactor Pekanbaru', category: 'Compactor', focus: 'timbunan tanah', unit: 'soil compactor', job: 'pemadatan material tanah', terrain: 'area timbunan luas' },
  { slug: 'sewa-stamper-pekanbaru', title: 'Sewa Stamper Pekanbaru untuk Pemadatan Titik Sempit', description: 'Stamper cocok untuk pemadatan parit, tepi pondasi, halaman kecil, dan area yang tidak bisa dijangkau roller.', keyword: 'sewa stamper Pekanbaru', category: 'Compactor', focus: 'titik sempit', unit: 'stamper', job: 'pemadatan area kecil', terrain: 'parit dan tepi bangunan' },
  { slug: 'sewa-mobile-crane-pekanbaru', title: 'Sewa Mobile Crane Pekanbaru untuk Lifting Cepat', description: 'Mobile crane digunakan untuk pengangkatan baja, mesin, precast, dan material berat dengan mobilisasi fleksibel.', keyword: 'sewa mobile crane Pekanbaru', category: 'Crane', focus: 'lifting fleksibel', unit: 'mobile crane', job: 'pengangkatan material berat', terrain: 'area proyek dengan akses truck' },
  { slug: 'sewa-crawler-crane-pekanbaru', title: 'Sewa Crawler Crane Pekanbaru untuk Lifting Stabil', description: 'Crawler crane cocok untuk lifting berat yang membutuhkan kestabilan dan kapasitas tinggi pada proyek tertentu.', keyword: 'sewa crawler crane Pekanbaru', category: 'Crane', focus: 'lifting stabil', unit: 'crawler crane', job: 'pengangkatan struktur berat', terrain: 'area kerja luas' },
  { slug: 'sewa-tower-crane-pekanbaru', title: 'Sewa Tower Crane Pekanbaru untuk Gedung Bertingkat', description: 'Tower crane membantu lifting berulang pada proyek gedung, apartemen, hotel, dan struktur bertingkat.', keyword: 'sewa tower crane Pekanbaru', category: 'Crane', focus: 'gedung bertingkat', unit: 'tower crane', job: 'lifting material vertikal', terrain: 'proyek bangunan tinggi' },
  { slug: 'sewa-forklift-diesel-pekanbaru', title: 'Sewa Forklift Diesel Pekanbaru untuk Outdoor', description: 'Forklift diesel cocok untuk bongkar muat outdoor, material berat, gudang terbuka, dan area industri.', keyword: 'sewa forklift diesel Pekanbaru', category: 'Forklift', focus: 'outdoor', unit: 'forklift diesel', job: 'bongkar muat pallet dan mesin', terrain: 'lapangan gudang terbuka' },
  { slug: 'sewa-forklift-electric-pekanbaru', title: 'Sewa Forklift Electric Pekanbaru untuk Indoor', description: 'Forklift electric lebih bersih untuk gudang indoor, pabrik makanan, retail, dan area tertutup.', keyword: 'sewa forklift electric Pekanbaru', category: 'Forklift', focus: 'indoor', unit: 'forklift electric', job: 'handling pallet di gudang', terrain: 'lantai beton indoor' },
  { slug: 'sewa-tronton-pekanbaru', title: 'Sewa Tronton Pekanbaru untuk Angkutan Volume Besar', description: 'Tronton digunakan untuk angkut material, barang proyek, logistik industri, dan kebutuhan ritase jarak menengah.', keyword: 'sewa tronton Pekanbaru', category: 'Truck', focus: 'volume besar', unit: 'tronton', job: 'angkut material proyek', terrain: 'jalan utama dan area industri' },
  { slug: 'sewa-water-truck-pekanbaru', title: 'Sewa Water Truck Pekanbaru untuk Penyiraman Proyek', description: 'Water truck membantu penyiraman jalan, kontrol debu, pemadatan tanah, dan suplai air proyek.', keyword: 'sewa water truck Pekanbaru', category: 'Truck', focus: 'penyiraman', unit: 'water truck', job: 'kontrol debu dan kadar air', terrain: 'jalan proyek kering' },
  { slug: 'sewa-concrete-mixer-truck-pekanbaru', title: 'Sewa Concrete Mixer Truck Pekanbaru untuk Beton Ready Mix', description: 'Concrete mixer truck mendukung distribusi beton ready mix ke proyek rumah, ruko, gudang, dan infrastruktur.', keyword: 'sewa concrete mixer truck Pekanbaru', category: 'Beton', focus: 'ready mix', unit: 'concrete mixer truck', job: 'pengiriman beton segar', terrain: 'akses proyek pengecoran' },
  { slug: 'sewa-asphalt-sprayer-pekanbaru', title: 'Sewa Asphalt Sprayer Pekanbaru untuk Prime Coat dan Tack Coat', description: 'Asphalt sprayer digunakan untuk penyemprotan aspal cair sebelum hamparan aspal atau lapisan lanjutan.', keyword: 'sewa asphalt sprayer Pekanbaru', category: 'Aspal', focus: 'tack coat', unit: 'asphalt sprayer', job: 'penyemprotan aspal cair', terrain: 'permukaan jalan siap lapis' },
  { slug: 'sewa-cold-milling-machine-pekanbaru', title: 'Sewa Cold Milling Machine Pekanbaru untuk Kupas Aspal', description: 'Cold milling machine membantu pengupasan aspal lama sebelum overlay dan perbaikan jalan.', keyword: 'sewa cold milling machine Pekanbaru', category: 'Aspal', focus: 'kupas aspal', unit: 'cold milling machine', job: 'milling permukaan aspal', terrain: 'jalan rusak atau overlay' },
  { slug: 'sewa-genset-pekanbaru', title: 'Sewa Genset Pekanbaru untuk Proyek dan Event', description: 'Sewa genset Pekanbaru untuk proyek konstruksi, pabrik, event, kantor sementara, dan kebutuhan listrik cadangan.', keyword: 'sewa genset Pekanbaru', category: 'Power', focus: 'daya listrik', unit: 'genset', job: 'suplai listrik lapangan', terrain: 'proyek dan event' },
  { slug: 'sewa-compressor-pekanbaru', title: 'Sewa Compressor Pekanbaru untuk Pekerjaan Lapangan', description: 'Compressor mendukung jack hammer, pembersihan, pengecatan, dan kebutuhan udara tekan di proyek.', keyword: 'sewa compressor Pekanbaru', category: 'Power', focus: 'udara tekan', unit: 'compressor', job: 'dukungan alat pneumatic', terrain: 'area konstruksi' },
  { slug: 'sewa-skid-steer-loader-pekanbaru', title: 'Sewa Skid Steer Loader Pekanbaru untuk Area Terbatas', description: 'Skid steer loader lincah untuk pembersihan area, loading ringan, perataan, dan pekerjaan dalam ruang terbatas.', keyword: 'sewa skid steer loader Pekanbaru', category: 'Loader', focus: 'manuver lincah', unit: 'skid steer loader', job: 'loading ringan dan clearing', terrain: 'area sempit' },
  { slug: 'sewa-pile-driver-pekanbaru', title: 'Sewa Pile Driver Pekanbaru untuk Pemancangan', description: 'Pile driver digunakan untuk pekerjaan pondasi tiang pada proyek gedung, jembatan, dermaga, dan struktur berat.', keyword: 'sewa pile driver Pekanbaru', category: 'Pondasi', focus: 'pemancangan', unit: 'pile driver', job: 'pondasi tiang pancang', terrain: 'area pondasi struktur' },
  { slug: 'sewa-bor-pile-machine-pekanbaru', title: 'Sewa Bor Pile Machine Pekanbaru untuk Pondasi Dalam', description: 'Bor pile machine membantu pengeboran pondasi dalam untuk bangunan, ruko, gedung, dan struktur sipil.', keyword: 'sewa bor pile machine Pekanbaru', category: 'Pondasi', focus: 'pondasi dalam', unit: 'bor pile machine', job: 'pengeboran tiang bor', terrain: 'lahan konstruksi' },
  { slug: 'sewa-scissor-lift-pekanbaru', title: 'Sewa Scissor Lift Pekanbaru untuk Pekerjaan Ketinggian', description: 'Scissor lift digunakan untuk instalasi, maintenance, pengecatan, dan pekerjaan tinggi di area indoor atau outdoor.', keyword: 'sewa scissor lift Pekanbaru', category: 'Akses Tinggi', focus: 'akses vertikal', unit: 'scissor lift', job: 'pekerjaan instalasi tinggi', terrain: 'lantai datar' },
  { slug: 'sewa-boom-lift-pekanbaru', title: 'Sewa Boom Lift Pekanbaru untuk Jangkauan Tinggi', description: 'Boom lift memberi akses tinggi dengan jangkauan horizontal untuk facade, lampu, gudang, dan perawatan bangunan.', keyword: 'sewa boom lift Pekanbaru', category: 'Akses Tinggi', focus: 'jangkauan tinggi', unit: 'boom lift', job: 'maintenance di ketinggian', terrain: 'area gedung dan industri' },
  { slug: 'sewa-alat-berat-land-clearing-pekanbaru', title: 'Sewa Alat Berat Land Clearing Pekanbaru', description: 'Pilihan alat berat untuk land clearing: excavator, bulldozer, dozer swamp, dump truck, dan chainsaw support.', keyword: 'sewa alat berat land clearing Pekanbaru', category: 'Land Clearing', focus: 'pembukaan lahan', unit: 'excavator dan bulldozer', job: 'land clearing', terrain: 'lahan semak dan kebun' },
  { slug: 'sewa-alat-berat-drainase-pekanbaru', title: 'Sewa Alat Berat Drainase Pekanbaru', description: 'Alat berat untuk pekerjaan drainase, parit, box culvert, normalisasi saluran, dan pengangkutan lumpur.', keyword: 'sewa alat berat drainase Pekanbaru', category: 'Drainase', focus: 'saluran air', unit: 'excavator dan dump truck', job: 'galian drainase', terrain: 'tepi jalan dan permukiman' },
  { slug: 'sewa-alat-berat-timbunan-pekanbaru', title: 'Sewa Alat Berat Timbunan Pekanbaru', description: 'Kombinasi alat untuk timbunan tanah: dump truck, wheel loader, motor grader, water truck, dan vibro roller.', keyword: 'sewa alat berat timbunan Pekanbaru', category: 'Timbunan', focus: 'timbunan tanah', unit: 'dump truck dan vibro roller', job: 'hampar dan padatkan timbunan', terrain: 'lahan kosong' },
  { slug: 'sewa-alat-berat-gudang-pekanbaru', title: 'Sewa Alat Berat untuk Gudang Pekanbaru', description: 'Forklift, telehandler, crane, scissor lift, dan genset untuk kebutuhan gudang serta kawasan industri.', keyword: 'sewa alat berat gudang Pekanbaru', category: 'Industri', focus: 'gudang', unit: 'forklift dan telehandler', job: 'handling material gudang', terrain: 'lantai beton dan loading dock' },
  { slug: 'sewa-alat-berat-pabrik-pekanbaru', title: 'Sewa Alat Berat untuk Pabrik Pekanbaru', description: 'Solusi alat berat untuk pabrik: forklift, crane, genset, compressor, boom lift, dan angkutan material.', keyword: 'sewa alat berat pabrik Pekanbaru', category: 'Industri', focus: 'pabrik', unit: 'forklift, crane, dan genset', job: 'maintenance dan instalasi mesin', terrain: 'area industri' },
  { slug: 'sewa-alat-berat-tambang-material-riau', title: 'Sewa Alat Berat Tambang Material Riau', description: 'Excavator, wheel loader, dump truck, bulldozer, dan crusher support untuk quarry atau tambang material.', keyword: 'sewa alat berat tambang material Riau', category: 'Quarry', focus: 'material quarry', unit: 'excavator dan wheel loader', job: 'loading batu dan sirtu', terrain: 'quarry atau stockpile' },
  { slug: 'sewa-alat-berat-normalisasi-sungai-riau', title: 'Sewa Alat Berat Normalisasi Sungai Riau', description: 'Long arm excavator, amphibious excavator, dump truck, dan alat pendukung untuk normalisasi sungai dan kanal.', keyword: 'sewa alat berat normalisasi sungai Riau', category: 'Drainase', focus: 'normalisasi sungai', unit: 'long arm excavator', job: 'pengerukan sedimen', terrain: 'tepi sungai' },
  { slug: 'sewa-alat-berat-perumahan-pekanbaru', title: 'Sewa Alat Berat Perumahan Pekanbaru', description: 'Mini excavator, stamper, dump truck kecil, dan alat pendukung untuk proyek perumahan atau renovasi lahan.', keyword: 'sewa alat berat perumahan Pekanbaru', category: 'Perumahan', focus: 'proyek perumahan', unit: 'mini excavator dan stamper', job: 'galian dan pemadatan ringan', terrain: 'akses lingkungan' },
  { slug: 'sewa-alat-berat-ruko-pekanbaru', title: 'Sewa Alat Berat Ruko Pekanbaru', description: 'Alat berat untuk pembangunan ruko: mini excavator, concrete pump, forklift, genset, dan dump truck.', keyword: 'sewa alat berat ruko Pekanbaru', category: 'Komersial', focus: 'pembangunan ruko', unit: 'mini excavator dan concrete pump', job: 'pondasi dan pengecoran', terrain: 'lahan komersial' },
  { slug: 'sewa-alat-berat-harian-pekanbaru', title: 'Sewa Alat Berat Harian Pekanbaru', description: 'Sewa harian cocok untuk pekerjaan cepat, volume kecil, bongkar muat, galian singkat, dan perbaikan akses.', keyword: 'sewa alat berat harian Pekanbaru', category: 'Harga', focus: 'sewa harian', unit: 'alat berat sesuai kebutuhan', job: 'pekerjaan singkat', terrain: 'lokasi siap kerja' },
  { slug: 'sewa-alat-berat-bulanan-pekanbaru', title: 'Sewa Alat Berat Bulanan Pekanbaru', description: 'Sewa bulanan lebih efisien untuk proyek berkelanjutan seperti jalan, perkebunan, industri, dan infrastruktur.', keyword: 'sewa alat berat bulanan Pekanbaru', category: 'Harga', focus: 'sewa bulanan', unit: 'alat berat proyek', job: 'pekerjaan jangka panjang', terrain: 'proyek berkelanjutan' },
  { slug: 'kontrak-sewa-alat-berat-pekanbaru', title: 'Kontrak Sewa Alat Berat Pekanbaru yang Perlu Dipahami', description: 'Poin penting dalam kontrak sewa alat berat: durasi, jam kerja, BBM, operator, mobilisasi, downtime, dan pembayaran.', keyword: 'kontrak sewa alat berat Pekanbaru', category: 'Kontrak', focus: 'kontrak sewa', unit: 'semua alat berat', job: 'pengaturan kerja dan biaya', terrain: 'semua proyek' }
];

const createArticle = (topic: Topic): Article => ({
  slug: topic.slug,
  title: topic.title,
  description: topic.description,
  keyword: topic.keyword,
  category: topic.category,
  sections: [
    {
      h2: `Kegunaan ${topic.unit} untuk ${topic.focus}`,
      paragraphs: [
        `${topic.title.replace('Sewa ', '')} banyak dicari karena kebutuhan proyek di Pekanbaru semakin beragam, mulai dari pekerjaan perumahan, gudang, jalan, perkebunan, sampai area industri. Unit ${topic.unit} membantu pekerjaan ${topic.job} berjalan lebih cepat dibanding metode manual, terutama ketika volume material cukup besar atau target waktu proyek terbatas.`,
        `Sebelum menyewa, pastikan pekerjaan benar-benar cocok dengan karakter unit. Untuk medan ${topic.terrain}, penyedia alat perlu mengetahui akses masuk, kondisi tanah, area putar, dan lokasi parkir alat. Data tersebut membantu menentukan kapasitas unit, kebutuhan operator, serta alat pendukung yang mungkin diperlukan.`
      ],
      h3: `Kapan ${topic.unit} Paling Dibutuhkan`,
      h4: 'Data Lapangan untuk Estimasi',
      h5: 'Catatan Sebelum Mobilisasi'
    },
    {
      h2: `Tips Memilih Layanan ${topic.keyword}`,
      paragraphs: [
        `Pilih layanan ${topic.keyword} yang menjelaskan lingkup biaya secara terbuka. Komponen seperti operator, bahan bakar, mobilisasi, demobilisasi, jam kerja, dan kemungkinan lembur perlu dipahami sebelum unit masuk lokasi. Kejelasan ini membantu pemilik proyek mengontrol biaya dari awal sampai pekerjaan selesai.`,
        `Untuk hasil yang lebih efisien, siapkan foto lokasi, alamat lengkap, estimasi volume, tanggal mulai, serta target pekerjaan harian. Jika proyek membutuhkan beberapa unit, buat alur kerja agar ${topic.unit} tidak menunggu alat lain terlalu lama. Koordinasi sederhana seperti ini sering berdampak besar pada produktivitas.`
      ],
      h3: 'Membandingkan Penawaran Sewa',
      h4: 'Operator dan Dukungan Teknis',
      h5: 'Target Kerja Harian'
    },
    {
      h2: `Perencanaan Biaya dan Produktivitas ${topic.unit}`,
      paragraphs: [
        `Biaya sewa tidak hanya dilihat dari tarif harian. Produktivitas unit, jarak mobilisasi, kondisi medan, jumlah ritase, dan kesiapan lokasi bisa membuat total biaya berubah. Unit yang lebih tepat sering lebih hemat karena waktu kerja lebih pendek dan risiko downtime lebih rendah.`,
        `Catat progress harian menggunakan time sheet, foto pekerjaan, dan laporan sederhana. Dokumentasi membantu mengevaluasi apakah target ${topic.job} sudah tercapai, apakah perlu tambahan unit, atau apakah metode kerja perlu disesuaikan. Dengan perencanaan yang rapi, sewa alat berat di Pekanbaru menjadi lebih terukur dan minim hambatan.`
      ],
      h3: 'Faktor yang Mempengaruhi Tarif',
      h4: 'Mengurangi Waktu Tunggu',
      h5: 'Evaluasi Setelah Pekerjaan'
    }
  ]
});

const projectToolsTopics = [
  { slug: 'jual-bor-listrik-proyek', title: 'Bor Listrik Proyek: Panduan Lengkap Pemilihan dan Penggunaan', description: 'Bor listrik merupakan alat penting dalam proyek konstruksi untuk pengeboran metal, kayu, dan beton. Artikel ini membahas jenis, spesifikasi, dan tips pemilihan.', keyword: 'bor listrik proyek', category: 'Power Tools', tool: 'bor listrik', material: 'kayu, metal, beton', capacity: '10-20mm' },
  { slug: 'jual-gergaji-circular-proyek', title: 'Gergaji Circular Proyek: Potong Kayu dan Multipleks Secara Presisi', description: 'Gergaji circular proyek untuk pemotongan kayu, multipleks, dan panel dengan presisi tinggi. Panduan pemilihan blade dan teknik pemotongan.', keyword: 'gergaji circular proyek', category: 'Power Tools', tool: 'gergaji circular', material: 'kayu dan multipleks', capacity: '185-235mm' },
  { slug: 'jual-angle-grinder-proyek', title: 'Angle Grinder Proyek: Gerinda Potong dan Poles untuk Konstruksi', description: 'Angle grinder atau gerinda tangan untuk pemotongan dan penghalusan metal, batu, dan beton. Panduan pemilihan disc dan keselamatan kerja.', keyword: 'angle grinder proyek', category: 'Power Tools', tool: 'angle grinder', material: 'metal, batu, beton', capacity: '100-230mm' },
  { slug: 'jual-jack-hammer-proyek', title: 'Jack Hammer Proyek: Breaker untuk Pemecahan Beton dan Asphalt', description: 'Jack hammer atau breaker untuk memecah beton, asphalt, dan material keras lainnya. Panduan penggunaan dan pemilihan titik impact.', keyword: 'jack hammer proyek', category: 'Power Tools', tool: 'jack hammer', material: 'beton dan asphalt', capacity: '15-60 joule' },
  { slug: 'jual-impact-driver-proyek', title: 'Impact Driver Proyek: Pengencang Sekrup dengan Daya Tinggi', description: 'Impact driver proyek untuk pengencangan sekrup pada kayu, metal, dan drywall. Perbedaan dengan drill dan kapan menggunakannya.', keyword: 'impact driver proyek', category: 'Power Tools', tool: 'impact driver', material: 'kayu dan metal', capacity: '180-280 Nm' },
  { slug: 'jual-sander-proyek', title: 'Sander Proyek: Pengamplasan Permukaan Kayu dan Metal', description: 'Sander proyek untuk pengamplasan halus pada permukaan kayu, metal, dan drywall. Jenis orbital, belt, dan finishing sander.', keyword: 'sander proyek', category: 'Power Tools', tool: 'sander', material: 'kayu dan metal', capacity: '110-450 watt' },
  { slug: 'jual-oscillating-multi-tool-proyek', title: 'Oscillating Multi-Tool Proyek: Alat Serbaguna untuk Potong dan Grinda', description: 'Oscillating multi-tool proyek untuk pemotongan, penggrindaan, dan pengamplasan di area sempit. Aksesori interchangeable yang tersedia.', keyword: 'oscillating multi-tool proyek', category: 'Power Tools', tool: 'oscillating multi-tool', material: 'kayu, metal, PVC', capacity: '300-600 watt' },
  { slug: 'jual-heat-gun-proyek', title: 'Heat Gun Proyek: Pengering Cat dan Pelunakan Material', description: 'Heat gun proyek untuk pengeringan cat, pelunakan vinyl, dan proses pelepasan lem. Pengaturan suhu dan aliran udara.', keyword: 'heat gun proyek', category: 'Power Tools', tool: 'heat gun', material: 'cat, vinyl, Lem', capacity: '300-2000 watt' },
  { slug: 'jual-planer-proyek', title: 'Planer Proyek: Peratakan Permukaan Kayu Secara Presisi', description: 'Planer proyek untuk perataan dan pengurangan ketebalan kayu. Panduan pengaturan kedalaman dan teknik penggunaan.', keyword: 'planer proyek', category: 'Power Tools', tool: 'planer', material: 'kayu', capacity: '600-850 watt' },
  { slug: 'jual-router-proyek', title: 'Router Proyek: Pembuat Profil dan ukiran pada Kayu', description: 'Router proyek untuk membuat profil, chamfer, dan ukiran pada permukaan kayu. Pemilihan bit dan teknik routing.', keyword: 'router proyek', category: 'Power Tools', tool: 'router', material: 'kayu', capacity: '1200-2200 watt' },
  { slug: 'jual-compressor-1-phase-proyek', title: 'Compressor 1 Phase Proyek: Sumber Udara Tekan untuk Pneumatic', description: 'Compressor 1 phase proyek untuksupply udara tekan untuk jack hammer, spray gun, dan alat pneumatic lainnya. Pemilihan kapasitas.', keyword: 'compressor 1 phase proyek', category: 'Power Tools', tool: 'compressor', material: 'udara tekan', capacity: '50-300 liter' },
  { slug: 'jual-generator-silent-proyek', title: 'Generator Silent Proyek: Sumber Listrik Cadangan di Lokasi', description: 'Generator silent proyek untuk supply listrik di lokasi tanpa jaringan PLN. Pemilihan kapasitas watt dan konsumsi BBM.', keyword: 'generator silent proyek', category: 'Power Tools', tool: 'generator', material: 'listrik', capacity: '2-10 kVA' },
  { slug: 'jual-welding-machine-proyek', title: 'Welding Machine Proyek: Las Listrik untuk Konstruksi Metal', description: 'Welding machine proyek untuk pengelasan metal pada struktur, ducting, dan fabrikasi. Jenis MMA, MIG, dan TIG.', keyword: 'welding machine proyek', category: 'Power Tools', tool: 'welding machine', material: 'metal', capacity: '160-400 ampere' },
  { slug: 'jual-circular-saw-proyek', title: 'Circular Saw Proyek: Pemotong Kayu dengan Presisi Maksimum', description: 'Circular saw proyek untuk pemotongan lurus dan sudut pada kayu. Panduan pemilihan blade dan teknis pemotongan.', keyword: 'circular saw proyek', category: 'Power Tools', tool: 'circular saw', material: 'kayu', capacity: '1200-1800 watt' },
  { slug: 'jual-reciprocating-saw-proyek', title: 'Reciprocating Saw Proyek: Gergaji Kayu dan Metal Terbang', description: 'Reciprocating saw proyek untuk pemotongan kayu, metal, dan PVC pada posisi sulit. Teknik penggunaan dan pemilihan blade.', keyword: 'reciprocating saw proyek', category: 'Power Tools', tool: 'reciprocating saw', material: 'kayu dan metal', capacity: '1000-1400 watt' },
  { slug: 'jual-band-saw-proyek', title: 'Band Saw Proyek: Potongan Lengkung dan Lurus pada Kayu', description: 'Band saw proyek untuk pemotongan lengkung dan lurus yang presisi. Pemilihan kecepatan dan ukuran blade.', keyword: 'band saw proyek', category: 'Power Tools', tool: 'band saw', material: 'kayu', capacity: '750-1500 watt' },
  { slug: 'jual-miter-saw-proyek', title: 'Miter Saw Proyek: Potong Sudut Presisi untuk Frame dan Trim', description: 'Miter saw proyek untuk pemotongan sudut presisi pada frame, trim, dan molding. Panduan pengaturan sudut dan teknik.', keyword: 'miter saw proyek', category: 'Power Tools', tool: 'miter saw', material: 'kayu dan aluminium', capacity: '1400-2000 watt' },
  { slug: 'jual-table-saw-proyek', title: 'Table Saw Proyek: Pemotongan Kayu Presisi di Workshop', description: 'Table saw proyek untuk pemotongan presisi dengan panduan paralelo. Penggunaan fence dan teknik pemotongan aman.', keyword: 'table saw proyek', category: 'Power Tools', tool: 'table saw', material: 'kayu', capacity: '1500-3000 watt' },
  { slug: 'jual-drill-press-proyek', title: 'Drill Press Proyek: Pengeboran Presisi pada Metal dan Kayu', description: 'Drill press proyek untuk pengeboran presisi dengan depth stop. Pemilihan kecepatan RPM dan chuck size.', keyword: 'drill press proyek', category: 'Power Tools', tool: 'drill press', material: 'metal dan kayu', capacity: '500-1500 watt' },
  { slug: 'jual-die-grinder-proyek', title: 'Die Grinder Proyek: Grinda Halus untuk Detail Metal', description: 'Die grinder proyek untuk penghalusan dan finishing metal detail. Penggunaan pada mold dan componentes.', keyword: 'die grinder proyek', category: 'Power Tools', tool: 'die grinder', material: 'metal', capacity: '200-800 watt' },
  { slug: 'jual-obeng-set-proyek', title: 'Obeng Set Proyek: Kumpulan Tip untuk Berbagai Jenis Sekrup', description: 'Obeng set proyek dengan berbagai tipe: Phillips, Flat, Torx, Hex. Pemilihan kualitas dan penggunaan.', keyword: 'obeng set proyek', category: 'Hand Tools', tool: 'obeng set', material: 'sekrup', capacity: '100-300mm' },
  { slug: 'jual-kunci-pas-proyek', title: 'Kunci Pas Proyek: Kunci untuk Pengencangan dan Pembukaan', description: 'Kunci pas proyek dalam berbagai ukuran metrik dan inchi. Pemilihan chrome vanadium untuk daya tahan.', keyword: 'kunci pas proyek', category: 'Hand Tools', tool: 'kunci pas', material: 'baut dan mur', capacity: '6-50mm' },
  { slug: 'jual-kunci-inggris-proyek', title: 'Kunci Inggris Proyek: Kunci Adjustable untuk Berbagai Ukuran', description: 'Kunci Inggris proyek dengan jaw yang dapat diatur. Penggunaan untuk nut dan bolt berbagai ukuran.', keyword: 'kunci inggris proyek', category: 'Hand Tools', tool: 'kunci inggris', material: 'baut dan mur', capacity: '150-600mm' },
  { slug: 'jual-tang-proyek', title: 'Tang Proyek: Jenis dan Fungsi untuk Pekerjaan Listrik dan Mekanik', description: 'Tang proyek: kombinasi, potongan, lancip, dan untuk keperluan listrik. Pemilihan berdasarkan kebutuhan.', keyword: 'tang proyek', category: 'Hand Tools', tool: 'tang', material: 'kabel dan kawat', capacity: '150-300mm' },
  { slug: 'jual-martil-proyek', title: 'Martil Proyek: untuk Pukulan dan Pembongkaran', description: 'Martil proyek dengan berbagai berat kepala: 300g, 500g, 1000g. Pemilihan untuk pekerjaan kayu atau metal.', keyword: 'martil proyek', category: 'Hand Tools', tool: 'martil', material: 'kayu dan metal', capacity: '300-1500g' },
  { slug: 'jual-pahat-kayu-proyek', title: 'Pahat Kayu Proyek:Ukiran dan Pembentukan Kayu', description: 'Pahat kayu proyek untuk ukiran dan pembentukan. Jenis chisels dan teknik penggunaan yang benar.', keyword: 'pahat kayu proyek', category: 'Hand Tools', tool: 'pahat kayu', material: 'kayu', capacity: '6-50mm' },
  { slug: 'jual-gergaji-tangan-proyek', title: 'Gergaji Tangan Proyek: Pemotongan Kayu Manual', description: 'Gergaji tangan proyek untuk pemotongan kayu manual. Jenis crosscut, rip cut, dan dovetail saw.', keyword: 'gergaji tangan proyek', category: 'Hand Tools', tool: 'gergaji tangan', material: 'kayu', capacity: '400-700mm' },
  { slug: 'jual-files-proyek', title: 'Files Proyek: Penghalusan Permukaan Metal dan Kayu', description: 'Files proyek untuk penghalusan permukaan metal dan kayu. Jenis mill bastard, half round, dan rasps.', keyword: 'files proyek', category: 'Hand Tools', tool: 'files', material: 'metal dan kayu', capacity: '100-400mm' },
  { slug: 'jual-scratch-awl-proyek', title: 'Scratch Awl Proyek: Penanda dan Pembuat Lubang pada Kayu', description: 'Scratch awl proyek untuk menandai dan membuat lubang panduan pada kayu. Penggunaan untuk joinery.', keyword: 'scratch awl proyek', category: 'Hand Tools', tool: 'scratch awl', material: 'kayu', capacity: '100-250mm' },
  { slug: 'jual-rasps-proyek', title: 'Rasps Proyek: Pengikis Kasar untuk Kayu dan Foam', description: 'Rasps proyek untuk pengikisan kasar pada kayu, foam, dan material lunak. Jenis coarse, medium, fine.', keyword: 'rasps proyek', category: 'Hand Tools', tool: 'rasps', material: 'kayu dan foam', capacity: '250-400mm' },
  { slug: 'jual-meteran-proyek', title: 'Meteran Proyek: Pengukuran Panjang Akurat', description: 'Meteran proyek untuk pengukuran panjang dengan akurasi. Pemilihan kapasitas 5m, 10m, 25m dan fitur tape lock.', keyword: 'meteran proyek', category: 'Measuring Tools', tool: 'meteran', material: 'pengukuran', capacity: '5-25 meter' },
  { slug: 'jual-waterpass-proyek', title: 'Waterpass Proyek: Penentuan Ketinggian dan Level', description: 'Waterpass proyek untuk menentukan level horizontal dan vertikal. Jenis tubular dan torpedo dengan magnet.', keyword: 'waterpass proyek', category: 'Measuring Tools', tool: 'waterpass', material: 'pengukuran', capacity: '200-600mm' },
  { slug: 'jual-theodolite-proyek', title: 'Theodolite Proyek: Alat Ukur Sudut untuk Survey', description: 'Theodolite proyek untuk pengukuran sudut horizontal dan vertikal dalam survey. Penggunaan dan kalibrasi.', keyword: 'theodolite proyek', category: 'Measuring Tools', tool: 'theodolite', material: 'survey', capacity: '1-5 detik' },
  { slug: 'jual-total-station-proyek', title: 'Total Station Proyek: Surveyor Digital untuk Pemetaan', description: 'Total station proyek untuk survey digital dan pemetaan. Fitur EDM dan data logging.', keyword: 'total station proyek', category: 'Measuring Tools', tool: 'total station', material: 'survey', capacity: '500-5000m' },
  { slug: 'jual-auto-level-proyek', title: 'Auto Level Proyek: Level Otomatis untuk Pengukuran Ketinggian', description: 'Auto level proyek untuk pengukuran ketinggian dengan automatic compensation. Penggunaan pada proyek sipil.', keyword: 'auto level proyek', category: 'Measuring Tools', tool: 'auto level', material: 'survey', capacity: '100-300m' },
  { slug: 'jual-caliper-proyek', title: 'Caliper Proyek: Pengukuran Presisi Dimensi', description: 'Caliper proyek untuk pengukuran presisi: inside, outside, depth. Jenis analog dan digital.', keyword: 'caliper proyek', category: 'Measuring Tools', tool: 'caliper', material: 'pengukuran', capacity: '0-300mm' },
  { slug: 'jual-micrometer-proyek', title: 'Micrometer Proyek: Pengukuran Ketebalan Presisi', description: 'Micrometer proyek untuk pengukuran ketebalan dengan akurasi tinggi. Jenis outside, inside, depth.', keyword: 'micrometer proyek', category: 'Measuring Tools', tool: 'micrometer', material: 'pengukuran', capacity: '0-25mm' },
  { slug: 'jual-dial-indicator-proyek', title: 'Dial Indicator Proyek: Pengukuran Detail dan Runout', description: 'Dial indicator proyek untuk pengukuran runout, clearance, dan vibrations. Penggunaan dengan magnetic base.', keyword: 'dial indicator proyek', category: 'Measuring Tools', tool: 'dial indicator', material: 'pengukuran', capacity: '0-10mm' },
  { slug: 'jual-thermometer-proyek', title: 'Thermometer Proyek: Pengukuran Suhu di Lokasi Proyek', description: 'Thermometer proyek untuk pengukuran suhu: IR, probe, dan kombinasi. Penggunaan pada konstruksi dan inspeksi.', keyword: 'thermometer proyek', category: 'Measuring Tools', tool: 'thermometer', material: 'suhu', capacity: '-50-1000C' },
  { slug: 'jual-hygrometer-proyek', title: 'Hygrometer Proyek: Pengukuran Kelembaban Material', description: 'Hygrometer proyek untuk pengukuran kelembaban kayu, beton, dan gypsum. Penggunaan untuk aklimatisasi material.', keyword: 'hygrometer proyek', category: 'Measuring Tools', tool: 'hygrometer', material: 'kelembaban', capacity: '0-100%' },
  { slug: 'jual-pH-meter-proyek', title: 'pH Meter Proyek: Pengukuran Keasaman Beton dan Tanah', description: 'pH meter proyek untuk pengukuran keasaman pada beton, tanah, dan air. Kalibrasi dan penggunaan lapangan.', keyword: 'pH meter proyek', category: 'Measuring Tools', tool: 'pH meter', material: 'pH', capacity: '0-14 pH' },
  { slug: 'jual-tachometer-proyek', title: 'Tachometer Proyek: Pengukuran Kecepatan Putar', description: 'Tachometer proyek untuk pengukuran RPM motor, shaft, dan mesin. Jenis contact dan contactless.', keyword: 'tachometer proyek', category: 'Measuring Tools', tool: 'tachometer', material: 'RPM', capacity: '0-99999 RPM' },
  { slug: 'jual-german-fancy-proyek', title: 'German Fancy Proyek: Pensil Ukur untuk Tukang Kayu', description: 'German fancy proyek untuk menandai ukuran pada kayu. Penggunaan dan perawatan pensil tukang.', keyword: 'german fancy proyek', category: 'Measuring Tools', tool: 'german fancy', material: 'kayu', capacity: '120-180mm' },
  { slug: 'jual-helm-safety-proyek', title: 'Helm Safety Proyek: Perlindungan Kepala di Lokasi Proyek', description: 'Helm safety proyek untuk perlindungan kepala. Standar SNI, ANSI, dan pilihan warna untuk differentiate.', keyword: 'helm safety proyek', category: 'Safety Equipment', tool: 'helm safety', material: 'perlindungan', capacity: 'One size' },
  { slug: 'jual-sarung-tangan-proyek', title: 'Sarung Tangan Proyek: Perlindungan Tangan untuk Berbagai Pekerjaan', description: 'Sarung tangan proyek: leather, nitrile, latex, dan cut resistant. Pemilihan sesuai risiko pekerjaan.', keyword: 'sarung tangan proyek', category: 'Safety Equipment', tool: 'sarung tangan', material: 'perlindungan', capacity: 'S-XXL' },
  { slug: 'jual-safety-shoes-proyek', title: 'Safety Shoes Proyek: Sepatu Safety dengan Proteksi Komplit', description: 'Safety shoes proyek dengan toe cap steel, anti-slip, dan anti-static. Pemilihan untuk berbagai kondisi.', keyword: 'safety shoes proyek', category: 'Safety Equipment', tool: 'safety shoes', material: 'perlindungan', capacity: '36-48' },
  { slug: 'jual-kacamata-safety-proyek', title: 'Kacamata Safety Proyek: Perlindungan Mata dari Debu dan Debris', description: 'Kacamata safety proyek untuk perlindungan mata. Jenis clear, smoke, anti-fog, dan UV protection.', keyword: 'kacamata safety proyek', category: 'Safety Equipment', tool: 'kacamata safety', material: 'perlindungan', capacity: 'One size' },
  { slug: 'jual-ear-protection-proyek', title: 'Ear Protection Proyek: Pelindung Telinga dari Kebisingan', description: 'Ear protection proyek: ear plug dan ear muff untuk perlindungan kebisingan. NR rating dan penggunaannya.', keyword: 'ear protection proyek', category: 'Safety Equipment', tool: 'ear protection', material: 'perlindungan', capacity: 'NR 20-35' },
  { slug: 'jual-body-harness-proyek', title: 'Body Harness Proyek: Safety Harness untuk Pekerjaan Ketinggian', description: 'Body harness proyek untuk pekerjaan di ketinggian. Standar ANSI dan CE dengan full body harness.', keyword: 'body harness proyek', category: 'Safety Equipment', tool: 'body harness', material: 'perlindungan', capacity: 'One size' },
  { slug: 'jual-masker-proyek', title: 'Masker Proyek: Respirator untuk Perlindungan Pernapasan', description: 'Masker proyek: disposable, half face, dan full face respirator. Filtrasi N95, P100, dan chemical cartridge.', keyword: 'masker proyek', category: 'Safety Equipment', tool: 'masker', material: 'perlindungan', capacity: 'One size' },
  { slug: 'jual-face-shield-proyek', title: 'Face Shield Proyek: Pelindung Wajah untuk Pekerjaan Berbahaya', description: 'Face shield proyek untuk perlindungan wajah penuh. Penggunaan dengan grinder dan pekerjaan impact.', keyword: 'face shield proyek', category: 'Safety Equipment', tool: 'face shield', material: 'perlindungan', capacity: 'One size' },
  { slug: 'jual-fire-extinguisher-proyek', title: 'Fire Extinguisher Proyek: Pemadam Api untuk Pencegahan Kebakaran', description: 'Fire extinguisher proyek: ABC, CO2, dan foam. Pemilihan berdasarkan kelas api dan ukuran.', keyword: 'fire extinguisher proyek', category: 'Safety Equipment', tool: 'fire extinguisher', material: 'perlindungan', capacity: '1-25kg' },
  { slug: 'jual-first-aid-kit-proyek', title: 'First Aid Kit Proyek: Kotak P3K untuk Lokasi Proyek', description: 'First aid kit proyek untuk pertolongan pertama. Isi standar dan pengecekan berkala.', keyword: 'first aid kit proyek', category: 'Safety Equipment', tool: 'first aid kit', material: 'perlindungan', capacity: 'Standard' },
  { slug: 'jual-reflective-vest-proyek', title: 'Reflective Vest Proyek: Rompi Safety untuk Visibilitas', description: 'Reflective vest proyek untuk visibilitas tinggi. Standar EN 471 dan kelas 2 atau 3.', keyword: 'reflective vest proyek', category: 'Safety Equipment', tool: 'reflective vest', material: 'perlindungan', capacity: 'S-XXL' },
  { slug: 'jual-knee-pads-proyek', title: 'Knee Pads Proyek: Pelindung Lutut untuk Pekerjaan Lantai', description: 'Knee pads proyek untuk perlindungan lutut pada pekerjaan lantai. Jenis foam, gel, dan hard cap.', keyword: 'knee pads proyek', category: 'Safety Equipment', tool: 'knee pads', material: 'perlindungan', capacity: 'One size' },
  { slug: 'jual-back-support-proyek', title: 'Back Support Proyek: Penguat Punggung untuk Angkat Berat', description: 'Back support proyek untuk dukungan punggung saat mengangkat beban. Penggunaan dan pemilihan size.', keyword: 'back support proyek', category: 'Safety Equipment', tool: 'back support', material: 'perlindungan', capacity: 'S-XXL' },
  { slug: 'jual-scaffolding-frame-proyek', title: 'Scaffolding Frame Proyek: Steger Ringan untuk Pekerjaan Ketinggian', description: 'Scaffolding frame proyek untuk akses sementara. Types dan kapasitas beban yang aman.', keyword: 'scaffolding frame proyek', category: 'Scaffolding', tool: 'scaffolding frame', material: 'akses', capacity: '200-500 kg/m2' },
  { slug: 'jual-scaffolding-cuplock-proyek', title: 'Scaffolding Cuplock Proyek: Sistem Scaffolding Cepat', description: 'Scaffolding cuplock proyek untuk struktur gedung tinggi. Pemasangan cepat dan stabil.', keyword: 'scaffolding cuplock proyek', category: 'Scaffolding', tool: 'scaffolding cuplock', material: 'akses', capacity: '200-500 kg/m2' },
  { slug: 'jual-scaffolding-kwikstage-proyek', title: 'Scaffolding Kwikstage Proyek: Scaffolding Modular untuk Gedung', description: 'Scaffolding kwikstage proyek untuk akses gedung komersial. Sistem modular dan fleksibel.', keyword: 'scaffolding kwikstage proyek', category: 'Scaffolding', tool: 'scaffolding kwikstage', material: 'akses', capacity: '200-500 kg/m2' },
  { slug: 'jual-formwork-proyek', title: 'Formwork Proyek: Bekisting untuk Pengecoran Beton', description: 'Formwork proyek untuk pengecoran kolom, balok, dan plat. Jenis plywood, steel, dan aluminium.', keyword: 'formwork proyek', category: 'Scaffolding', tool: 'formwork', material: 'bekisting', capacity: 'Standard' },
  { slug: 'jual-shore-post-proyek', title: 'Shore Post Proyek: Penyangga Beton временно', description: 'Shore post proyek untuk penyangga sementara pengecoran. Adjustable dan kapasitas beban.', keyword: 'shore post proyek', category: 'Scaffolding', tool: 'shore post', material: 'penyangga', capacity: '1-5 ton' },
  { slug: 'jual-uasboard-proyek', title: 'UAS Board Proyek: Plywood Bekisting untuk Beton', description: 'UAS board proyek untuk bekisting beton. Ketebalan dan jumlah penggunaan ulang.', keyword: 'uasboard proyek', category: 'Scaffolding', tool: 'UAS board', material: 'bekisting', capacity: '12-21mm' },
  { slug: 'jual-pipa-pvc-proyek', title: 'Pipa PVC Proyek: Saluran Air dan Drainase', description: 'Pipa PVC proyek untuk saluran air bersih dan kotor. Ukuran dan kelas tekanan.', keyword: 'pipa PVC proyek', category: 'Plumbing', tool: 'pipa PVC', material: 'saluran', capacity: '0.5-6 inch' },
  { slug: 'jual-pipa-ppr-proyek', title: 'Pipa PPR Proyek: Pipa Air Panas dan Dingin', description: 'Pipa PPR proyek untuk distribusi air panas dan dingin. Sistem penyambungan heat fusion.', keyword: 'pipa PPR proyek', category: 'Plumbing', tool: 'pipa PPR', material: 'saluran', capacity: '0.5-4 inch' },
  { slug: 'jual-pipa-hdpe-proyek', title: 'Pipa HDPE Proyek: Pipa untuk Irigasi dan Drainase', description: 'Pipa HDPE proyek untuk irigasi, drainase, dan perlindungan kabel. Jointing methods.', keyword: 'pipa HDPE proyek', category: 'Plumbing', tool: 'pipa HDPE', material: 'saluran', capacity: '0.5-24 inch' },
  { slug: 'jual-pipa-galvanis-proyek', title: 'Pipa Galvanis Proyek: Pipa untuk Struktur dan Saluran', description: 'Pipa galvanis proyek untuk struktur dan saluran air. Ketahanan korosi dan ukuran.', keyword: 'pipa galvanis proyek', category: 'Plumbing', tool: 'pipa galvanis', material: 'saluran', capacity: '0.5-6 inch' },
  { slug: 'jual-pipa-besi-cor-proyek', title: 'Pipa Besi Cor Proyek: Pipa Drainase Berat', description: 'Pipa besi cor proyek untuk drainase dan sanitaria. Ketahanan dan berat.', keyword: 'pipa besi cor proyek', category: 'Plumbing', tool: 'pipa besi cor', material: 'saluran', capacity: '2-24 inch' },
  { slug: 'jual-fitting-pipa-proyek', title: 'Fitting Pipa Proyek: Knee, Tee, Elbow, dan Socket', description: 'Fitting pipa proyek untuk penyambungan dan belokan. Material PVC, PPR, galvanis.', keyword: 'fitting pipa proyek', category: 'Plumbing', tool: 'fitting pipa', material: 'sambungan', capacity: 'Standard' },
  { slug: 'jual-valve-proyek', title: 'Valve Proyek: Katup untuk Kontrol Aliran', description: 'Valve proyek: ball valve, gate valve, globe valve, check valve. Pemilihan untuk aplikasi.', keyword: 'valve proyek', category: 'Plumbing', tool: 'valve', material: 'kontrol', capacity: '0.5-12 inch' },
  { slug: 'jual-pipe-wrench-proyek', title: 'Pipe Wrench Proyek: Kunci untuk Memegang dan Memutar Pipa', description: 'Pipe wrench proyek untuk pekerjaan pipa. Adjustable dan heavy duty.', keyword: 'pipe wrench proyek', category: 'Plumbing', tool: 'pipe wrench', material: 'pipa', capacity: '14-36 inch' },
  { slug: 'jual-pipe-cutter-proyek', title: 'Pipe Cutter Proyek: Pemotong Pipa Presisi', description: 'Pipe cutter proyek untuk pemotongan presisi pipa. Jenis rotary dan automatic.', keyword: 'pipe cutter proyek', category: 'Plumbing', tool: 'pipe cutter', material: 'pipa', capacity: '12-100mm' },
  { slug: 'jual-pipe-threader-proyek', title: 'Pipe Threader Proyek: Pembuat Ulir Pipa', description: 'Pipe threader proyek untuk pembuatan ulir pada pipa. Manual dan motorized.', keyword: 'pipe threader proyek', category: 'Plumbing', tool: 'pipe threader', material: 'pipa', capacity: '0.5-4 inch' },
  { slug: 'jual-flaring-tool-proyek', title: 'Flaring Tool Proyek: Pembuat Flare pada Pipa Tembaga', description: 'Flaring tool proyek untuk membuat flare pada pipa tembaga AC dan hydraulik.', keyword: 'flaring tool proyek', category: 'Plumbing', tool: 'flaring tool', material: 'pipa tembaga', capacity: '3/16-1 inch' },
  { slug: 'jual-kabel-listrik-proyek', title: 'Kabel Listrik Proyek: NYY, NYM, dan NYRG', description: 'Kabel listrik proyek untuk instalasi dalam dan luar. Ukuran dan kapasitas arus.', keyword: 'kabel listrik proyek', category: 'Electrical', tool: 'kabel listrik', material: 'listrik', capacity: '1.5-300 mm2' },
  { slug: 'jual-kabel-nyy-proyek', title: 'Kabel NYY Proyek: Kabel Tanah untuk Instalasi Outdoor', description: 'Kabel NYY proyek untuk instalasi tanah dan outdoor. Perlindungan mekanis dan kimia.', keyword: 'kabel NYY proyek', category: 'Electrical', tool: 'kabel NYY', material: 'listrik', capacity: '1.5-300 mm2' },
  { slug: 'jual-kabel-nym-proyek', title: 'Kabel NYM Proyek: Kabel Indoor dengan Isolasi PVC', description: 'Kabel NYM proyek untuk instalasi indoor. Isolasi PVC dan warna fase.', keyword: 'kabel NYM proyek', category: 'Electrical', tool: 'kabel NYM', material: 'listrik', capacity: '1.5-4 mm2' },
  { slug: 'jual-kabel-skydu-proyek', title: 'Kabel Skydu Proyek: Kabel fiber untuk Komunikasi', description: 'Kabel skydu proyek untuk instalasi fiber optic indoor dan outdoor. Jenis single mode dan multi mode.', keyword: 'kabel skydu proyek', category: 'Electrical', tool: 'kabel skydu', material: 'komunikasi', capacity: '4-144 core' },
  { slug: 'jual-multimeter-proyek', title: 'Multimeter Proyek: Alat Ukur Listrik Digital', description: 'Multimeter proyek untuk pengukuran tegangan, arus, dan resistansi. Fitur tambahan.', keyword: 'multimeter proyek', category: 'Electrical', tool: 'multimeter', material: 'listrik', capacity: 'AC/DC 600V' },
  { slug: 'jual-earth-tester-proyek', title: 'Earth Tester Proyek: Pengukuran Grounding Sistem', description: 'Earth tester proyek untuk pengukuran tahanan grounding. Metode 3 titik dan simplified.', keyword: 'earth tester proyek', category: 'Electrical', tool: 'earth tester', material: 'grounding', capacity: '0-2000 ohm' },
  { slug: 'jual-insulation-tester-proyek', title: 'Insulation Tester Proyek: Megohmmeter untuk Isolasi', description: 'Insulation tester proyek untuk pengukuran tahanan isolasi kabel dan motor. Test voltage.', keyword: 'insulation tester proyek', category: 'Electrical', tool: 'insulation tester', material: 'isolasi', capacity: '500-5000V' },
  { slug: 'jual-cable-tracker-proyek', title: 'Cable Tracker Proyek: Pelacak Kabel dan Identifikasi', description: 'Cable tracker proyek untuk menelusuri jalur kabel dan identifikasi phase. Tone dan probe.', keyword: 'cable tracker proyek', category: 'Electrical', tool: 'cable tracker', material: 'kabel', capacity: 'Standard' },
  { slug: 'jual-crimping-tool-proyek', title: 'Crimping Tool Proyek: Penjepit Kabel untuk Terminal', description: 'Crimping tool proyek untuk pemasangan terminal pada kabel. Jenis untuk RJ45, lug, dan bootlace.', keyword: 'crimping tool proyek', category: 'Electrical', tool: 'crimping tool', material: 'kabel', capacity: '0.5-240 mm2' },
  { slug: 'jual-stripping-tool-proyek', title: 'Stripping Tool Proyek: Pengupas Kulit Kabel', description: 'Stripping tool proyek untuk pengupasan isolasi kabel. Adjustable dan otomatis.', keyword: 'stripping tool proyek', category: 'Electrical', tool: 'stripping tool', material: 'kabel', capacity: '0.05-16 mm2' },
  { slug: 'jual-kuas-cat-proyek', title: 'Kuas Cat Proyek:various Size untuk Pengecatan', description: 'Kuas cat proyek dalam berbagai ukuran: 1, 2, 3, 4 inci. Bulu sintetis dan natural.', keyword: 'kuas cat proyek', category: 'Painting', tool: 'kuas cat', material: 'cat', capacity: '1-4 inch' },
  { slug: 'jual-roll-cat-proyek', title: 'Roll Cat Proyek: Rol untuk Pengecatan Dinding', description: 'Roll cat proyek untuk pengecatan dinding dan ceiling. various nap dan ukuran.', keyword: 'roll cat proyek', category: 'Painting', tool: 'roll cat', material: 'cat', capacity: '9-18 inch' },
  { slug: 'jual-spray-gun-proyek', title: 'Spray Gun Proyek: Cat Semprot untuk Permukaan Besar', description: 'Spray gun proyek untuk pengecatan efisien pada dinding, fence, dan furniture. Jenis HVLP dan conventional.', keyword: 'spray gun proyek', category: 'Painting', tool: 'spray gun', material: 'cat', capacity: '1.3-2.5mm' },
  { slug: 'jual-paint-mixer-proyek', title: 'Paint Mixer Proyek: Pengaduk Cat dan Mortar', description: 'Paint mixer proyek untuk pengadukan cat, varnish, dan mortar. Attachment untuk drill.', keyword: 'paint mixer proyek', category: 'Painting', tool: 'paint mixer', material: 'cat', capacity: '400-1200 rpm' },
  { slug: 'jual-spatula-proyek', title: 'Spatula Proyek: Aplikasi Dempul dan Plitur', description: 'Spatula proyek untuk aplikasi dempul, plitur, dan sealant. various size dan flexibility.', keyword: 'spatula proyek', category: 'Painting', tool: 'spatula', material: 'dempul', capacity: '2-6 inch' },
  { slug: 'jual-sandpaper-proyek', title: 'Sandpaper Proyek: Amplas berbagai Grain untuk Finishing', description: 'Sandpaper proyek untuk pengamplasan: wood, metal, drywall. various grit dan backing.', keyword: 'sandpaper proyek', category: 'Painting', tool: 'sandpaper', material: 'amplas', capacity: '40-3000 grit' },
  { slug: 'jual-pu-foam-proyek', title: 'PU Foam Proyek: Foam Ekspansi untuk Seal dan Insulasi', description: 'PU foam proyek untuk sealing, insulasi, dan mounting. Various aplikasi dan cure time.', keyword: 'PU foam proyek', category: 'Construction', tool: 'PU foam', material: 'seal', capacity: '300-750ml' },
  { slug: 'jual-silicon-sealant-proyek', title: 'Silicon Sealant Proyek: Sealant untuk Kedap Air dan Panas', description: 'Silicon sealant proyek untuk sealing kaca, keramik, dan metal. Various color dan type.', keyword: 'silicon sealant proyek', category: 'Construction', tool: 'silicon sealant', material: 'seal', capacity: '280-600ml' },
  { slug: 'jual-anchor-bolt-proyek', title: 'Anchor Bolt Proyek: Pengikat untuk Beton dan Brick', description: 'Anchor bolt proyek untuk mounting pada beton dan masonry. Various types dan kapasitas.', keyword: 'anchor bolt proyek', category: 'Construction', tool: 'anchor bolt', material: 'mounting', capacity: 'M6-M20' },
  { slug: 'jual-wall-anchor-proyek', title: 'Wall Anchor Proyek: Pengikat untuk Drywall dan Plaster', description: 'Wall anchor proyek untuk gantungan pada drywall dan plaster. Various load capacity.', keyword: 'wall anchor proyek', category: 'Construction', tool: 'wall anchor', material: 'mounting', capacity: '5-100 kg' },
  { slug: 'jual-frame-anchor-proyek', title: 'Frame Anchor Proyek: Pengikat Frame Kayu dan Metal', description: 'Frame anchor proyek untuk mounting frame pada beton. Quick install dan high load.', keyword: 'frame anchor proyek', category: 'Construction', tool: 'frame anchor', material: 'mounting', capacity: 'M6-M12' },
  { slug: 'jual-drop-in-anchor-proyek', title: 'Drop in Anchor Proyek: Anchor untuk Cetakan Beton', description: 'Drop in anchor proyek untuk penyanggah pada beton yang dicor. Setting tool required.', keyword: 'drop in anchor proyek', category: 'Construction', tool: 'drop in anchor', material: 'mounting', capacity: 'M6-M20' },
  { slug: 'jual-concrete-nail-proyek', title: 'Concrete Nail Proyek: Paku untuk Beton dan Brick', description: 'Concrete nail proyek untuk fastening pada beton dan masonry. Various lengths.', keyword: 'concrete nail proyek', category: 'Construction', tool: 'concrete nail', material: 'mounting', capacity: '25-100mm' },
  { slug: 'jual-steel-wool-proyek', title: 'Steel Wool Proyek: Pembersih dan Polisher Logam', description: 'Steel wool proyek untuk cleaning dan polishing metal. Various grades dari coarse ke fine.', keyword: 'steel wool proyek', category: 'Construction', tool: 'steel wool', material: 'cleaning', capacity: '000-4' },
  { slug: 'jual-wip-cloth-proyek', title: 'Wip Cloth Proyek: Kain Pembersih untuk Finishing', description: 'Wip cloth proyek untuk pembersihan dan aplikasi polish. Various materials.', keyword: 'wip cloth proyek', category: 'Construction', tool: 'wip cloth', material: 'cleaning', capacity: 'Standard' }
];

const createProjectToolArticle = (topic: typeof projectToolsTopics[number]): Article => {
  const toolName = topic.tool.replace(/[-]/g, ' ');
  return {
    slug: topic.slug,
    title: topic.title,
    description: topic.description,
    keyword: topic.keyword,
    category: topic.category,
    sections: [
      {
        h2: `Fungsi dan Kegunaan ${topic.tool} dalam Proyek Konstruksi`,
        paragraphs: [
          `${topic.title.replace('Jual ', '')} merupakan alat yang sangat penting dalam pelaksanaan proyek konstruksi di Indonesia. Alat ini digunakan secara luas dalam berbagai jenis pekerjaan, mulai dari pembangunan rumah tinggal, gedung perkantoran, proyek infrastruktur, hingga pekerjaan renovasi dan perbaikan. Penggunaan ${topic.tool} yang tepat dapat meningkatkan produktivitas kerja secara signifikan dibandingkan dengan metode manual tradisional.`,
          `Dalam konteks proyek konstruksi modern, ${topic.tool} dengan spesifikasi yang sesuai menjadi kebutuhan utama untuk memastikan kualitas pekerjaan dan efisiensi waktu. Pemilihan alat yang tepat juga berpengaruh terhadap keselamatan pekerja dan hasil akhir proyek. Untuk proyek di area perkotaan seperti Pekanbaru dan sekitarnya, penggunaan alat proyek yang berkualitas menjadi semakin penting mengingat ketatnya jadwal pelaksanaan dan standar mutu yang harus dipenuhi.`
        ],
        h3: `Keuntungan Menggunakan ${topic.tool}`,
        h4: 'Efisiensi Waktu dan Biaya',
        h5: 'Kualitas Hasil Pekerjaan',
        table: {
          headers: ['Aspek', 'Tanpa Alat', 'Dengan Alat'],
          rows: [
            ['Waktu Pengerjaan', 'Lama', ' Lebih Cepat'],
            ['Kualitas Hasil', 'Tidak Konsisten', ' Lebih Konsisten'],
            ['Biaya Produksi', 'Tinggi', ' Lebih Rendah'],
            ['Kebutuhan Tenaga', 'Banyak', ' Lebih Sedikit']
          ]
        }
      },
      {
        h2: `Spesifikasi Teknis ${topic.tool} untuk Kebutuhan Proyek`,
        paragraphs: [
          `Spesifikasi teknis ${topic.tool} menjadi faktor penting dalam pemilihan alat untuk proyek. Kapasitas dan kemampuan alat harus sesuai dengan kebutuhan spesifik pekerjaan agar dapat bekerja secara optimal. Untuk proyek konstruksi di Indonesia, alat dengan spesifikasi yang sesuai standar nasional maupun internasional lebih direkomendasikan karena menjamin kualitas dan keamanan dalam penggunaan jangka panjang.`,
          `Beberapa parameter penting yang perlu dipertimbangkan meliputi daya motor, kapasitas material yang dapat ditangani, dimensi fisik alat, serta fitur keselamatan yang tersedia. Konsultasi dengan supplier atau teknisi berpengalaman dapat membantu menentukan spesifikasi yang tepat untuk jenis pekerjaan tertentu. Hal ini penting untuk menghindari over-specification yang akan menambah biaya tidak perlu atau under-specification yang dapat menghambat pekerjaan.`
        ],
        h3: 'Kriteria Pemilihan Alat yang Tepat',
        h4: 'Kesesuaian dengan Jenis Pekerjaan',
        h5: 'Kualitas dan Daya Tahan Alat',
        table: {
          headers: ['Parameter', 'Spesifikasi', 'Rekomendasi'],
          rows: [
            ['Material yang Digunakan', topic.material, 'Sesuai dengan kapasitas'],
            ['Kapasitas', topic.capacity, 'Sesuai kebutuhan proyek'],
            ['Daya Listrik', 'Sesuai spesifikasi', '380V atau 220V'],
            ['Standar Keselamatan', 'SNI/ANSI', 'Sesuai regulasi']
          ]
        }
      },
      {
        h2: `Tips Perawatan dan Penggunaan Aman ${topic.tool}`,
        paragraphs: [
          `Perawatan rutin ${topic.tool} sangat penting untuk menjaga kinerja dan memperpanjang umur pakai alat. Pemeriksaan berkala meliputi kebersihan alat, kondisi cable atau hose, serta fungsi mekanisme pengaman. Pengguna juga harus memperhatikan kondisi lingkungan kerja, kelembaban, dan temperatur yang dapat mempengaruhi kinerja alat.`,
          `Keselamatan kerja dalam penggunaan ${topic.tool} tidak boleh diabaikan. Penggunaan alat pelindung diri seperti helm, kacamata safety, sarung tangan, dan sepatu safety menjadi keharusan. Operator juga harus memahami cara penggunaan yang benar dan prosedur darurat jika terjadi masalah pada saat penggunaan alat.`
        ],
        h3: 'Pemeriksaan Sebelum Penggunaan',
        h4: 'Prosedur Keselamatan Kerja',
        h5: 'Penyimpanan yang Tepat',
        table: {
          headers: ['Jenis Perawatan', 'Frekuensi', 'Titik Periksa'],
          rows: [
            ['Pemeriksaan Visual', 'Setiap hari', 'Body, cable, switch'],
            ['Pembersihan', 'Setiap selesai kerja', 'Ventilasi, mata potong'],
            ['Pelumasan', 'Mingguan', 'Bagian bergerak'],
            ['Servis Teknis', 'Bulanan', 'Motor, bearing, switch']
          ]
        }
      },
      {
        h2: `Panduan Pembelian ${topic.keyword} untuk Proyek`,
        paragraphs: [
          `Dalam membeli ${topic.keyword}, ada beberapa hal yang perlu dipertimbangkan untuk mendapatkan produk yang sesuai kebutuhan. Pertama, tentukan spesifikasi yang diperlukan berdasarkan jenis dan skala proyek. Kedua, pertimbangkan reputasi dan layanan purna jual dari supplier atau distributor. Ketiga, bandingkan harga dari beberapa sumber untuk mendapatkan harga yang kompetitif.`,
          `Untuk proyek skala besar, membeli dalam jumlah banyak biasanya memberikan harga yang lebih terjangkau. Namun untuk proyek skala kecil hingga menengah, menyewa bisa menjadi pilihan yang lebih ekonomis. Pertimbangkan juga ketersediaan spare parts dan aksesoris pendukung di pasar lokal untuk memudahkan perawatan dan perbaikan jika diperlukan.`
        ],
        h3: 'Memilih Supplier Terpercaya',
        h4: 'Perbandingan Harga dan Kualitas',
        h5: 'Garansi dan Layanan Purna Jual',
        table: {
          headers: ['Kriteria', 'Poin Penting', 'Catatan'],
          rows: [
            ['Kualitas Produk', 'Sertifikasi, material', 'Pilih yang berstandar'],
            ['Harga', 'Kompetitif, transparan', 'Bandingkan beberapa supplier'],
            ['Garansi', 'Minimal 12 bulan', 'Baca syarat dan ketentuan'],
            ['Layanan Purna Jual', 'Responsif, spare part tersedia', 'Pastikan support lokal']
          ]
        }
      },
      {
        h2: `Kesimpulan: Pentingnya Memilih ${topic.tool} yang Tepat`,
        paragraphs: [
          `Pemilihan ${topic.tool} yang tepat merupakan investasi penting dalam keberhasilan proyek konstruksi. Alat dengan spesifikasi sesuai kebutuhan akan meningkatkan produktivitas, menghasilkan kualitas pekerjaan yang lebih baik, dan mendukung keselamatan pekerja. Dalam jangka panjang, keputusan ini juga berpengaruh pada efisiensi biaya operasional proyek.`,
          `Untuk mendapatkan ${topic.keyword} yang berkualitas, pastikan untuk membeli dari distributor atau supplier resmi yang dapat memberikan jaminan produk, layanan purna jual, dan dukungan teknis yang memadai. Dengan demikian, proyek konstruksi dapat berjalan lancer dengan hasil yang memuaskan dan sesuai standar yang ditetapkan.`
        ],
        h3: 'Rekomendasi Akhir',
        h4: 'Langkah Selanjutnya',
        h5: 'Konsultasi dengan Ahlinya',
        table: {
          headers: ['Langkah', 'Aksi', 'Tujuan'],
          rows: [
            ['1. Identifikasi Kebutuhan', 'Tentukan spesifikasi alat', 'Pilih alat yang tepat'],
            ['2. Riset Supplier', 'Cari informasi vendor', 'Dapatkan harga terbaik'],
            ['3. Bandingkan Penawaran', 'Evaluasi harga dan layanan', 'Buat keputusan tepat'],
            ['4. Pembelian', 'Beli dari supplier terpercaya', 'Dapatkan produk berkualitas']
          ]
        }
      }
    ]
  };
};

const publicationStart = new Date('2024-01-01T00:00:00.000Z').getTime();
const publicationEnd = new Date('2026-05-08T00:00:00.000Z').getTime();
const dayInMs = 24 * 60 * 60 * 1000;
const publicationRangeDays = Math.floor((publicationEnd - publicationStart) / dayInMs);

const getStablePublicationDate = (slug: string, index: number) => {
  let hash = (index + 1) * 2654435761;

  for (const character of slug) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }

  const date = new Date(publicationStart + (hash % (publicationRangeDays + 1)) * dayInMs);
  return date.toISOString().slice(0, 10);
};

const allArticles = [
  longArticle,
  ...baseArticles,
  ...extraTopics.map(createArticle),
  ...projectToolsTopics.map(createProjectToolArticle)
];

export const articles: Article[] = allArticles.map((article, index) => ({
  ...article,
  publishedDate: getStablePublicationDate(article.slug, index)
}));

export const featuredArticles = articles.slice(0, 6);
